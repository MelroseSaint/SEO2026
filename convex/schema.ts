import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    passwordHash: v.string(),
    token: v.optional(v.string()),
  }).index("by_email", ["email"]),

  analyses: defineTable({
    userId: v.optional(v.id("users")),
    input: v.string(),
    result: v.any(),
    timestamp: v.number(),
    plan: v.string(),
  }).index("by_timestamp", ["timestamp"])
    .index("by_user", ["userId"]),

  authAttempts: defineTable({
    email: v.string(),
    attemptType: v.string(),
    timestamp: v.number(),
  }).index("by_email_type", ["email", "attemptType"]),
});
