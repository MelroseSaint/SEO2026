"use client";

import { ConvexReactClient } from "convex/react";

// Hardcoding the URL to bypass any environment variable issues
const convexUrl = "https://compassionate-bass-55.convex.cloud";
export const convex = new ConvexReactClient(convexUrl);