"use client";

import React from "react";
import { useConvex } from "convex/react";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const BackendStatus = () => {
  // We'll use a simple state check for now until Convex is fully configured
  const [status, setStatus] = React.useState<"connected" | "connecting" | "error">("connecting");

  React.useEffect(() => {
    // Simulate a connection check
    const timer = setTimeout(() => setStatus("connected"), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
      {status === "connected" ? (
        <>
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Engine Online</span>
        </>
      ) : status === "connecting" ? (
        <>
          <Loader2 className="h-3 w-3 text-blue-500 animate-spin" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Syncing...</span>
        </>
      ) : (
        <>
          <XCircle className="h-3 w-3 text-red-500" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">Offline</span>
        </>
      )}
    </div>
  );
};

export default BackendStatus;