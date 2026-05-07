import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    email: v.string(),
    passwordHash: v.string(),
    token: v.optional(v.string()),
    role: v.optional(v.string()),
    stripeCustomerId: v.optional(v.string()),
    stripeSubscriptionId: v.optional(v.string()),
    subscriptionStatus: v.optional(v.string()),
    subscriptionPlan: v.optional(v.string()),
  }).index("by_email", ["email"]),

  projects: defineTable({
    userId: v.id("users"),
    name: v.string(),
    description: v.optional(v.string()),
    url: v.optional(v.string()),
    status: v.string(),
    createdAt: v.number(),
    updatedAt: v.number(),
  }).index("by_user", ["userId"])
    .index("by_user_status", ["userId", "status"]),

  analyses: defineTable({
    userId: v.optional(v.id("users")),
    projectId: v.optional(v.id("projects")),
    input: v.string(),
    result: v.any(),
    timestamp: v.number(),
    plan: v.string(),
  }).index("by_timestamp", ["timestamp"])
    .index("by_user", ["userId"])
    .index("by_project", ["projectId"]),

  authAttempts: defineTable({
    email: v.string(),
    attemptType: v.string(),
    timestamp: v.number(),
  }).index("by_email_type", ["email", "attemptType"]),
});
