"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, AlertTriangle, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CompetitorAnalysis = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input placeholder="Enter competitor URL (e.g., competitor.com)" className="bg-white dark:bg-white/5" />
        <Button className="bg-indigo-600 hover:bg-indigo-700">Analyze</Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Target className="h-4 w-4 text-indigo-500" />
              Keyword Clusters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span>AI Implementation</span>
                <span className="font-bold text-indigo-500">High Authority</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[85%]" />
              </div>
              <div className="flex justify-between items-center text-xs">
                <span>Enterprise Solutions</span>
                <span className="font-bold text-indigo-500">Medium Authority</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[45%]" />
              </div>
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
            <div className="p-2 rounded bg-emerald-500/5 border border-emerald-500/10 text-[10px]">
              <span className="font-bold">Trigger:</span> Proprietary data tables
            </div>
            <div className="p-2 rounded bg-emerald-500/5 border border-emerald-500/10 text-[10px]">
              <span className="font-bold">Trigger:</span> Expert quotes with schema
            </div>
            <div className="p-2 rounded bg-emerald-500/5 border border-emerald-500/10 text-[10px]">
              <span className="font-bold">Trigger:</span> High-density semantic clusters
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-red-500/5 border-red-500/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-red-700 dark:text-red-400">Exploitable Gaps</h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">
                Competitor is missing "Real-time API integration" and "Sustainability metrics" in their AI summaries. Target these entities to steal their citation spot.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitorAnalysis;