"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Wifi, WifiOff, Loader2 } from "lucide-react";

const BackendStatus = () => {
  const health = useQuery(api.health.ping);
  const isConnected = health?.status === "connected";
  const isLoading = health === undefined;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center cursor-help">
            <Badge 
              variant="outline" 
              className={cn(
                "h-6 gap-1.5 px-2 text-[10px] font-bold uppercase tracking-wider transition-all duration-500",
                isLoading ? "border-slate-200 text-slate-400" : 
                isConnected ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400" : 
                "border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400"
              )}
            >
              {isLoading ? (
                <Loader2 className="h-3 w-3 animate-spin" />
              ) : isConnected ? (
                <Wifi className="h-3 w-3" />
              ) : (
                <WifiOff className="h-3 w-3" />
              )}
              <span className="hidden lg:inline">
                {isLoading ? "Checking..." : isConnected ? "Convex Online" : "Convex Offline"}
              </span>
              <span className="lg:hidden">
                {isLoading ? "..." : isConnected ? "Online" : "Offline"}
              </span>
              <div className={cn(
                "h-1.5 w-1.5 rounded-full",
                isLoading ? "bg-slate-300 animate-pulse" : 
                isConnected ? "bg-emerald-500 animate-pulse" : 
                "bg-red-500"
              )} />
            </Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent className="text-[10px] font-bold uppercase p-2">
          {isLoading ? "Verifying backend connection..." : 
           isConnected ? `Connected to Convex Cloud (Last Ping: ${new Date(health.timestamp).toLocaleTimeString()})` : 
           "Unable to reach Convex Cloud. Local analysis only."}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BackendStatus;
