"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, AlertTriangle, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from "@/utils/toast";

const CompetitorAnalysis = () => {
  const [url, setUrl] = useState("");
  const [analyzing, setAnalyzing] = useState(false);
  const [data, setData] = useState<any>(null);

  const handleAnalyze = () => {
    if (!url) return;
    setAnalyzing(true);
    
    setTimeout(() => {
      setData({
        clusters: [
          { name: "AI Integration", authority: 85, trend: "up" },
          { name: "Enterprise Scale", authority: 42, trend: "down" },
          { name: "Real-time Data", authority: 68, trend: "stable" }
        ],
        triggers: [
          "Proprietary data tables in H3 sections",
          "Expert quotes with Person schema",
          "High-density semantic clusters in intro"
        ],
        gaps: [
          "Missing sustainability metrics in AI summaries",
          "Weak coverage of local implementation costs",
          "No interactive ROI calculators"
        ]
      });
      setAnalyzing(false);
      showSuccess("Competitor reverse engineered!");
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input 
          placeholder="Enter competitor URL (e.g., competitor.com)" 
          className="bg-white dark:bg-white/5 h-12"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button 
          onClick={handleAnalyze}
          disabled={analyzing || !url}
          className="bg-indigo-600 hover:bg-indigo-700 h-12 px-6"
        >
          {analyzing ? <Loader2 className="h-4 w-4 animate-spin" /> : "Analyze"}
        </Button>
      </div>

      {data ? (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Target className="h-4 w-4 text-indigo-500" />
                  Keyword Clusters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.clusters.map((c: any, i: number) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium">{c.name}</span>
                        <span className="font-bold text-indigo-500">{c.authority}% Authority</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-indigo-500 h-full transition-all duration-1000" 
                          style={{ width: `${c.authority}%` }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
              <CardHeader>
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-500" />
                  AI Citation Triggers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {data.triggers.map((t: string, i: number) => (
                  <div key={i} className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-xs flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    {t}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="bg-red-500/5 border-red-500/20">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-red-700 dark:text-red-400">Exploitable Gaps</h4>
                  <ul className="mt-2 space-y-1">
                    {data.gaps.map((g: string, i: number) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-gray-400 flex items-center gap-2">
                        <span className="text-red-500">•</span> {g}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="h-48 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl text-slate-400">
          <Search className="h-8 w-8 mb-2 opacity-20" />
          <p className="text-sm">Enter a competitor URL to see their AI strategy</p>
        </div>
      )}
    </div>
  );
};

export default CompetitorAnalysis;