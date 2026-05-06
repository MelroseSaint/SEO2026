"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Fingerprint, Plus, AlertCircle, Link2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EntityOptimization = () => {
  const entities = [
    { name: "Artificial Intelligence", type: "Concept", status: "Covered" },
    { name: "Search Engine Optimization", type: "Industry", status: "Covered" },
    { name: "User Intent", type: "Metric", status: "Missing" },
    { name: "Semantic Web", type: "Technology", status: "Missing" },
    { name: "LLM Training Data", type: "Concept", status: "Weak" }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Fingerprint className="h-5 w-5 text-indigo-500" />
            Entity Graph Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {entities.map((entity, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                <div>
                  <p className="text-sm font-bold">{entity.name}</p>
                  <p className="text-[10px] text-slate-500 uppercase">{entity.type}</p>
                </div>
                <Badge 
                  variant={entity.status === "Covered" ? "default" : entity.status === "Missing" ? "destructive" : "outline"}
                  className="text-[10px]"
                >
                  {entity.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <Card className="bg-amber-500/5 border-amber-500/20">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400">Critical Entity Gaps</h4>
                <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">
                  Your content lacks "Semantic Web" and "User Intent" entities. AI search engines use these to establish topical authority.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-indigo-500/5 border-indigo-500/20">
          <CardContent className="pt-6">
            <h4 className="font-bold text-sm mb-3 flex items-center gap-2">
              <Link2 className="h-4 w-4" />
              Relationship Suggestions
            </h4>
            <div className="space-y-2">
              <div className="p-2 rounded bg-white dark:bg-black/20 text-xs border border-slate-200 dark:border-white/10">
                Link <span className="font-bold text-indigo-500">SEO</span> to <span className="font-bold text-indigo-500">LLM Context Windows</span>
              </div>
              <div className="p-2 rounded bg-white dark:bg-black/20 text-xs border border-slate-200 dark:border-white/10">
                Connect <span className="font-bold text-indigo-500">User Intent</span> with <span className="font-bold text-indigo-500">Zero-Click Results</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EntityOptimization;