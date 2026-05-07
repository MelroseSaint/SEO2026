import { query } from "./_generated/server";

export const ping = query({
  handler: async (ctx) => {
    return { status: "connected", timestamp: Date.now() };
  },
});
