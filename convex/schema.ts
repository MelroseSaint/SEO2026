import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  analyses: defineTable({
    input: v.string(),
    result: v.any(),
    timestamp: v.number(),
    plan: v.string(),
  }).index("by_timestamp", ["timestamp"]),
});