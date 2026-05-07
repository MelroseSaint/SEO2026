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
    userId: v.optional(v.id("users")), // Linked to user for data isolation
    input: v.string(),
    result: v.any(),
    timestamp: v.number(),
    plan: v.string(),
  }).index("by_timestamp", ["timestamp"])
    .index("by_user", ["userId"]),
});