"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Globe, MessageSquare, Sparkles, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SERPPreviewProps {
  data: any;
}

const SERPPreview = ({ data }: SERPPreviewProps) => {
  if (!data) return null;

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Traditional Search Result */}
        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-500" />
              Traditional_SERP_v2026
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] text-slate-500">
                <span>https://yoursite.com</span>
                <span>›</span>
                <span>{data.metadata.slug}</span>
              </div>
              <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">
                {data.metadata.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-gray-400 line-clamp-2">
                {data.metadata.description}
              </p>
              <div className="flex gap-4 pt-2">
                {data.contentStructure.h2.slice(0, 2).map((h: string, i: number) => (
                  <span key={i} className="text-[10px] text-blue-500 font-medium hover:underline cursor-pointer">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Answer Engine Result */}
        <Card className="bg-indigo-600/5 border-indigo-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2">
            <Sparkles className="h-4 w-4 text-indigo-500 animate-pulse" />
          </div>
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-indigo-500" />
              AI_Answer_Engine_Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-xl bg-white dark:bg-black/40 border border-indigo-500/10 shadow-inner">
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 italic">
                "{data.aiCitation.statements[0]} According to recent data, {data.aiCitation.facts[0].toLowerCase()}."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-500 uppercase">Sources:</span>
                <Badge variant="outline" className="text-[9px] bg-indigo-500/10 border-indigo-500/20 text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                  1. YourSite.com <ExternalLink className="h-2 w-2" />
                </Badge>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-[10px] font-bold text-slate-500 uppercase">Key Takeaways</p>
              <ul className="grid grid-cols-2 gap-2">
                {data.aiStrategy.coreEntities.slice(0, 4).map((e: string, i: number) => (
                  <li key={i} className="text-[10px] flex items-center gap-1 text-slate-600 dark:text-slate-400">
                    <div className="h-1 w-1 rounded-full bg-indigo-500" /> {e}
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SERPPreview;