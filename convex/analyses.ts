import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveAnalysis = mutation({
  args: {
    userId: v.optional(v.id("users")),
    projectId: v.optional(v.id("projects")),
    input: v.string(),
    result: v.any(),
    plan: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("analyses", {
      userId: args.userId,
      projectId: args.projectId,
      input: args.input,
      result: args.result,
      plan: args.plan,
      timestamp: Date.now(),
    });
    return id;
  },
});

export const getAnalyses = query({
  args: {
    userId: v.optional(v.id("users")),
  },
  handler: async (ctx, args) => {
    if (args.userId) {
      return await ctx.db
        .query("analyses")
        .withIndex("by_user", (q) => q.eq("userId", args.userId))
        .order("desc")
        .take(50);
    }
    return await ctx.db
      .query("analyses")
      .withIndex("by_timestamp")
      .order("desc")
      .take(50);
  },
});

export const getAnalysisById = query({
  args: { id: v.id("analyses") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});
