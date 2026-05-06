"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Bot, ArrowRightLeft, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const GapAnalyzer = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Search className="h-4 w-4 text-blue-500" />
              Traditional SERP Leaders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span>Wikipedia.org</span>
                <span className="text-slate-400">Pos #1</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span>HubSpot.com</span>
                <span className="text-slate-400">Pos #2</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span>SearchEngineLand.com</span>
                <span className="text-slate-400">Pos #3</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Bot className="h-4 w-4 text-emerald-500" />
              AI Citation Leaders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span>Substack.com (Expert Blogs)</span>
                <span className="text-emerald-500 font-bold">High Citation</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span>GitHub.com (Documentation)</span>
                <span className="text-emerald-500 font-bold">High Citation</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span>Arxiv.org (Research)</span>
                <span className="text-emerald-500 font-bold">Medium Citation</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-amber-500/5 border-amber-500/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400">The "Citation Gap" Opportunity</h4>
              <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">
                Traditional leaders like Wikipedia are losing ground in AI Overviews to niche expert content. By focusing on proprietary data and unique insights, you can out-cite the giants even if you don't out-rank them on Page 1.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GapAnalyzer;