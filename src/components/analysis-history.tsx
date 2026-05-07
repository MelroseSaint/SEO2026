"use client";

import React from "react";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Card, CardContent } from "@/components/ui/card";
import { History, Calendar, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

interface AnalysisHistoryProps {
  onSelect: (analysis: any) => void;
}

const AnalysisHistory = ({ onSelect }: AnalysisHistoryProps) => {
  const history = useQuery(api.analyses.getAnalyses);

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
  );
};

export default AnalysisHistory;