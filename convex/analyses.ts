import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const saveAnalysis = mutation({
  args: {
    input: v.string(),
    result: v.any(),
    plan: v.string(),
  },
  handler: async (ctx, args) => {
    const id = await ctx.db.insert("analyses", {
      input: args.input,
      result: args.result,
      plan: args.plan,
      timestamp: Date.now(),
    });
    return id;
  },
});

export const getAnalyses = query({
  handler: async (ctx) => {
    return await ctx.db
      .query("analyses")
      .withIndex("by_timestamp")
      .order("desc")
      .take(20);
  },
});