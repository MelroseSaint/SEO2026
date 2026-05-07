import { ConvexReactClient } from "convex/react";

// Using the provided URL as a fallback, but preferring the environment variable
const convexUrl = import.meta.env.VITE_CONVEX_URL || "https://compassionate-bass-55.convex.cloud/";
export const convex = new ConvexReactClient(convexUrl);