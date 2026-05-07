"use client";

import { ConvexReactClient } from "convex/react";

// Use environment variable from integration if available, otherwise fallback to default
const convexUrl = import.meta.env.VITE_CONVEX_URL || "https://compassionate-bass-55.convex.cloud";
export const convex = new ConvexReactClient(convexUrl);