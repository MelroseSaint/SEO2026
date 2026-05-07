"use client";

import React, { useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Info, ShoppingCart, ArrowRightLeft, MapPin, CheckCircle2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface IntentMappingProps {
  input: string;
}

const IntentMapping = ({ input }: IntentMappingProps) => {
  const topic = input.trim().split('\n')[0].slice(0, 30) || "Topic";
  
  const scores = useMemo(() => {
    const text = input.toLowerCase();
    const isTransactional = text.match(/buy|price|cost|order|purchase|hire|service|pricing/);
    const isInformational = text.match(/how|what|why|guide|tutorial|learn|definition|meaning/);
    const isComparative = text.match(/vs|versus|better|best|alternative|review|comparison/);
    
    return {
      info: isInformational ? 85 : 40,
      trans: isTransactional ? 90 : 20,
      comp: isComparative ? 80 : 35,
      nav: text.length > 0 ? 15 : 5
    };
  }, [input]);

  const intents = [
    { type: "Informational", icon: <Info className="h-4 w-4" />, score: scores.info, strategy: "How-to guides, definitions, and deep-dives." },
    { type: "Transactional", icon: <ShoppingCart className="h-4 w-4" />, score: scores.trans, strategy: "Product pages, pricing tables, and CTAs." },
    { type: "Comparative", icon: <ArrowRightLeft className="h-4 w-4" />, score: scores.comp, strategy: "Vs articles, top 10 lists, and feature grids." },
    { type: "Navigational", icon: <MapPin className="h-4 w-4" />, score: scores.nav, strategy: "Brand keywords and login/portal access." }
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {intents.map((intent, i) => (
          <Card key={i} className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
            <CardContent className="pt-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400">
                  {intent.icon}
                </div>
                <span className="text-2xl font-bold">{intent.score}%</span>
              </div>
              <div>
                <h4 className="font-bold text-sm">{intent.type}</h4>
                <Progress value={intent.score} className="h-1.5 mt-2" />
              </div>
              <p className="text-xs text-slate-500 dark:text-gray-400">{intent.strategy}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Card className="bg-indigo-500/5 border-indigo-500/20">
        <CardContent className="pt-6">
          <h4 className="font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-indigo-500" />
            Recommended Content Structure for "{topic}"
          </h4>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <p className="text-sm font-semibold">Primary Focus</p>
              <ul className="text-xs space-y-1 text-slate-600 dark:text-gray-400">
                <li>• Comprehensive "What is {topic}" section</li>
                <li>• Comparison with 3 major competitors</li>
                <li>• Interactive ROI or Value calculator</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-semibold">AI Extraction Points</p>
              <ul className="text-xs space-y-1 text-slate-600 dark:text-gray-400">
                <li>• Bulleted summary at the top (TL;DR)</li>
                <li>• Schema-marked FAQ section</li>
                <li>• High-contrast data visualizations</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntentMapping;