import { ConvexReactClient } from "convex/react";

// Prioritize the provided URL to ensure connection to the correct backend
const convexUrl = import.meta.env.VITE_CONVEX_URL || "https://compassionate-bass-55.convex.cloud/";
export const convex = new ConvexReactClient(convexUrl);
