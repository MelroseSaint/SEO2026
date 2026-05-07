"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RefreshCw, TrendingDown, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface RefreshIntelligenceProps {
  data: any;
}

const RefreshIntelligence = ({ data }: RefreshIntelligenceProps) => {
  const topic = data.aiStrategy.coreEntities[0] || "your topic";
  
  const pages = [
    { url: `/blog/${topic.toLowerCase().replace(/\s+/g, '-')}-trends`, status: "Critical", loss: "45%", reason: "Outdated entity signals" },
    { url: `/services/${topic.toLowerCase().replace(/\s+/g, '-')}-audit`, status: "Warning", loss: "12%", reason: "Missing 2025 benchmarks" },
    { url: "/guide/structured-data", status: "Healthy", loss: "2%", reason: "Up to date" }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {pages.map((page, i) => (
          <Card key={i} className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
            <CardContent className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${page.status === 'Critical' ? 'bg-red-500/10 text-red-500' : page.status === 'Warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                  {page.status === 'Healthy' ? <RefreshCw className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                </div>
                <div>
                  <p className="text-sm font-bold">{page.url}</p>
                  <p className="text-[10px] text-slate-500">{page.reason}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className={`text-sm font-bold ${page.status === 'Critical' ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>-{page.loss}</p>
                  <p className="text-[10px] text-slate-500 uppercase">Visibility Loss</p>
                </div>
                <Badge variant={page.status === 'Critical' ? 'destructive' : page.status === 'Warning' ? 'outline' : 'default'}>
                  {page.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-indigo-500/5 border-indigo-500/20">
        <CardContent className="pt-6 flex items-center gap-4">
          <Calendar className="h-8 w-8 text-indigo-500 shrink-0" />
          <div>
            <h4 className="font-bold text-sm">Next Refresh Cycle: 4 Days</h4>
            <p className="text-xs text-slate-600 dark:text-gray-400">
              Based on shifting LLM training data patterns, we recommend updating your "{topic}" pillar page by Friday to maintain citation authority.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RefreshIntelligence;