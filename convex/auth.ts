import { mutation } from "./_generated/server";
import { v } from "convex/values";
import * as bcrypt from "bcryptjs";

export const signup = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    password: v.string(),
  },
  handler: async (ctx, args) => {
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (existingUser) {
      throw new Error("User already exists with this email.");
    }

    // Using 8 rounds instead of 10 to ensure we stay within Convex execution limits
    const salt = await bcrypt.genSalt(8);
    const passwordHash = await bcrypt.hash(args.password, salt);

    const userId = await ctx.db.insert("users", {
      name: args.name,
      email: args.email,
      passwordHash,
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
    const user = await ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();

    if (!user) {
      throw new Error("Invalid credentials.");
    }

    const isValid = await bcrypt.compare(args.password, user.passwordHash);
    if (!isValid) {
      throw new Error("Invalid credentials.");
    }

    return {
      userId: user._id,
      name: user.name,
      email: user.email,
    };
  },
});