"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "@/../convex/_generated/api";
import { Loader2, Wifi, WifiOff } from "lucide-react";

const BackendStatus = () => {
  const health = useQuery(api.health.ping);

  if (health === undefined) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
        <Loader2 className="h-3 w-3 text-blue-500 animate-spin" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Syncing...</span>
      </div>
    );
  }

  if (health.status === "connected") {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
        <Wifi className="h-3 w-3 text-emerald-500" />
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Engine Online</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
      <WifiOff className="h-3 w-3 text-red-500" />
      <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">Offline</span>
    </div>
  );
};

export default BackendStatus;
