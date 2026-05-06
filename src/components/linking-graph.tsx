"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, ArrowUpRight, Anchor, AlertCircle } from "lucide-react";

const LinkingGraph = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] uppercase text-slate-500">Authority Hubs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-[10px] text-emerald-500 flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" /> +2 this month
            </p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] uppercase text-slate-500">Orphan Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold text-red-500">4</p>
            <p className="text-[10px] text-slate-500">Needs immediate linking</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] uppercase text-slate-500">Link Density</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">4.2</p>
            <p className="text-[10px] text-slate-500">Links per 1k words</p>
          </CardContent>
        </Card>
      </div>

      <div className="relative h-64 bg-slate-50 dark:bg-black/20 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-2 border-indigo-500 rounded-full animate-ping" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-purple-500 rounded-full" />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-2">
          <Share2 className="h-12 w-12 text-indigo-500 animate-pulse" />
          <p className="text-xs font-bold text-slate-500">Visualizing Authority Flow...</p>
        </div>
      </div>

      <Card className="bg-indigo-500/5 border-indigo-500/20">
        <CardHeader>
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <Anchor className="h-4 w-4" />
            Strategic Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="p-2 rounded bg-white dark:bg-black/20 text-xs border border-slate-200 dark:border-white/10">
            Link <span className="font-bold text-indigo-500">/blog/ai-basics</span> to <span className="font-bold text-indigo-500">/products/ai-tool</span> to boost transactional authority.
          </div>
          <div className="p-2 rounded bg-white dark:bg-black/20 text-xs border border-slate-200 dark:border-white/10">
            Add 3 internal links to <span className="font-bold text-red-500">/case-studies/fashion</span> to remove orphan status.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkingGraph;