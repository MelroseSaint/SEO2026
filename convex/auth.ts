import { mutation } from "./_generated/server";
import { v } from "convex/values";

const encoder = new TextEncoder();

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const hash = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    256
  );
  return bytesToHex(salt) + ":" + bytesToHex(new Uint8Array(hash));
}

async function verifyPassword(password: string, stored: string): Promise<boolean> {
  const [saltHex, hashHex] = stored.split(":");
  const salt = hexToBytes(saltHex);
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveBits"]
  );
  const hash = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 100000, hash: "SHA-256" },
    keyMaterial,
    256
  );
  return hashHex === bytesToHex(new Uint8Array(hash));
}

const RATE_LIMIT_WINDOW = 15 * 60 * 1000;

export const signup = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const cutoff = Date.now() - RATE_LIMIT_WINDOW;
    const recentAttempts = await ctx.db
      .query("authAttempts")
      .withIndex("by_email_type", (q) =>
        q.eq("email", args.email).eq("attemptType", "signup")
      )
      .filter((q) => q.gte(q.field("timestamp"), cutoff))
      .collect();

    if (recentAttempts.length >= 5) {
      throw new Error("Too many signup attempts. Please try again later.");
    }

    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existingUser) {
      throw new Error("User already exists with this email.");
    }

    const passwordHash = await hashPassword(args.password);

    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      passwordHash,
    });

    await ctx.db.insert("authAttempts", {
      email: args.email,
      attemptType: "signup",
      timestamp: Date.now(),
    });

    return userId;
  },
});

export const login = mutation({
  args: {
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const cutoff = Date.now() - RATE_LIMIT_WINDOW;
    const recentAttempts = await ctx.db
      .query("authAttempts")
      .withIndex("by_email_type", (q) =>
        q.eq("email", args.email).eq("attemptType", "login")
      )
      .filter((q) => q.gte(q.field("timestamp"), cutoff))
      .collect();

    if (recentAttempts.length >= 10) {
      throw new Error("Too many login attempts. Please try again later.");
    }

    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (!user) {
      throw new Error("Invalid credentials.");
    }

    const isValid = await verifyPassword(args.password, user.passwordHash);
    if (!isValid) {
      throw new Error("Invalid credentials.");
    }

    await ctx.db.insert("authAttempts", {
      email: args.email,
      attemptType: "login",
      timestamp: Date.now(),
    });

    return {
      userId: user._id,
      name: user.name,
      email: user.email,
    };
  },
});
