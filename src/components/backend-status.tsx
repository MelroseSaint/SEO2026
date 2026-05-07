"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Database, CheckCircle2, XCircle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const BackendStatus = () => {
  const [status, setStatus] = useState<"connecting" | "connected" | "error">("connecting");
  // We use a simple query to check connectivity
  const data = useQuery(api.analyses.getAnalyses);

  useEffect(() => {
    if (data !== undefined) {
      setStatus("connected");
    } else {
      // If it stays undefined for too long, it might be an issue, 
      // but usually Convex handles reconnection.
      const timer = setTimeout(() => {
        if (data === undefined) setStatus("connecting");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [data]);

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 transition-all">
      <div className="relative">
        <Database className={cn(
          "h-3.5 w-3.5",
          status === "connected" ? "text-emerald-500" : status === "error" ? "text-red-500" : "text-amber-500"
        )} />
        {status === "connecting" && (
          <div className="absolute inset-0 animate-ping rounded-full bg-amber-500/20" />
        )}
      </div>
      
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-tighter leading-none">
          Backend Status
        </span>
        <div className="flex items-center gap-1 mt-0.5">
          {status === "connected" ? (
            <>
              <span className="text-[9px] text-emerald-600 dark:text-emerald-400 font-medium">Verified</span>
              <CheckCircle2 className="h-2.5 w-2.5 text-emerald-500" />
            </>
          ) : status === "error" ? (
            <>
              <span className="text-[9px] text-red-600 dark:text-red-400 font-medium">Offline</span>
              <XCircle className="h-2.5 w-2.5 text-red-500" />
            </>
          ) : (
            <>
              <span className="text-[9px] text-amber-600 dark:text-amber-400 font-medium">Syncing</span>
              <Loader2 className="h-2.5 w-2.5 text-amber-500 animate-spin" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackendStatus;