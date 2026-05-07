"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Calendar, ArrowRight, Loader2, Activity, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { toast } from "sonner";

interface AnalysisHistoryProps {
  onSelect: (analysis: any) => void;
}

const AnalysisHistory = ({ onSelect }: AnalysisHistoryProps) => {
  const history = useQuery(api.analyses.getAnalyses);
  const health = useQuery(api.health.ping);

  const handleVerifyConnection = () => {
    if (health?.status === "connected") {
      toast.success("System Healthy", {
        description: `Backend responded in ${Date.now() - health.timestamp}ms`
      });
    } else {
      toast.error("System Unreachable", {
        description: "Could not establish a connection to Convex Cloud."
      });
    }
  };

  if (history === undefined) {
    return (
      <div className="h-48 flex items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="h-48 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl text-slate-400">
        <History className="h-8 w-8 mb-2 opacity-20" />
        <p className="text-sm font-bold">No history found</p>
        <p className="text-[10px] uppercase">Run an analysis to see it here</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="bg-slate-50/50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 overflow-hidden">
        <CardHeader className="py-3 px-4 border-b border-slate-200 dark:border-white/5 flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-[10px] font-bold uppercase text-slate-500 flex items-center gap-2">
            <Activity className="h-3 w-3 text-blue-600" /> System Health
          </CardTitle>
          <div className="flex items-center gap-2">
            {health?.status === "connected" ? (
              <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-600 uppercase">
                <CheckCircle2 className="h-3 w-3" /> Operational
              </span>
            ) : (
              <span className="flex items-center gap-1 text-[9px] font-bold text-red-600 uppercase">
                <XCircle className="h-3 w-3" /> Disconnected
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent className="p-4 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400">
              Cloud synchronization is {health?.status === "connected" ? "active" : "inactive"}.
            </p>
            <p className="text-[9px] text-slate-400 uppercase font-bold">
              Endpoint: {import.meta.env.VITE_CONVEX_URL?.split("//")[1]?.split(".")[0] || "Production"}
            </p>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 text-[10px] font-bold gap-2 border-blue-500/20 hover:bg-blue-500/5"
            onClick={handleVerifyConnection}
          >
            Verify Connection
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {history.map((item) => (
          <Card 
            key={item._id} 
            className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer group"
            onClick={() => onSelect(item)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <History className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-bold line-clamp-1 max-w-[200px] md:max-w-md">
                    {item.input}
                  </p>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase">
                    <Calendar className="h-3 w-3" />
                    {format(item.timestamp, "MMM d, yyyy • HH:mm")}
                    <span className="text-blue-600">• {item.plan}</span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                Load <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AnalysisHistory;
