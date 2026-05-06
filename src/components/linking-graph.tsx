"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Share2, ArrowUpRight, Anchor, AlertCircle, Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const LinkingGraph = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const suggestions = [
    { from: "/blog/ai-basics", to: "/products/ai-tool", type: "Transactional Boost" },
    { from: "/home", to: "/case-studies/fashion", type: "Authority Flow" },
    { from: "/services", to: "/contact", type: "Conversion Path" }
  ];

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

      <div className="relative h-80 bg-slate-50 dark:bg-black/20 rounded-2xl border border-slate-200 dark:border-white/10 overflow-hidden flex items-center justify-center">
        {loading ? (
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
            <p className="text-xs font-bold text-slate-500">Mapping Site Architecture...</p>
          </div>
        ) : (
          <>
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-2 border-indigo-500/30 rounded-full animate-pulse" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-purple-500/30 rounded-full" />
            </div>
            <div className="relative z-10 grid grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center shadow-xl shadow-indigo-500/40 animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}>
                  <Link2 className="h-4 w-4 text-white" />
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <Card className="bg-indigo-500/5 border-indigo-500/20">
        <CardHeader>
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <Anchor className="h-4 w-4" />
            Strategic Recommendations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {suggestions.map((s, i) => (
            <div key={i} className="p-3 rounded-lg bg-white dark:bg-black/20 text-xs border border-slate-200 dark:border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-indigo-500">{s.from}</span>
                <ArrowUpRight className="h-3 w-3 text-slate-400" />
                <span className="font-bold text-indigo-500">{s.to}</span>
              </div>
              <Badge variant="secondary" className="text-[10px]">{s.type}</Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkingGraph;