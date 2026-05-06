"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ListTree, FileText, HelpCircle, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ContentStructureProps {
  input: string;
}

const ContentStructure = ({ input }: ContentStructureProps) => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <ListTree className="h-4 w-4 text-indigo-500" />
              AI-Optimized Outline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="outline">H1</Badge>
                <span className="text-sm font-bold">The Definitive Guide to {input} in 2026</span>
              </div>
              <div className="ml-4 space-y-2 border-l-2 border-slate-100 dark:border-white/5 pl-4">
                <div className="flex items-center gap-2">
                  <Badge variant="outline">H2</Badge>
                  <span className="text-xs">Executive Summary: Why {input} Matters Now</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">H2</Badge>
                  <span className="text-xs">Core Concepts and Semantic Foundations</span>
                </div>
                <div className="ml-4 flex items-center gap-2">
                  <Badge variant="outline">H3</Badge>
                  <span className="text-xs">The Role of AI in {input} Evolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">H2</Badge>
                  <span className="text-xs">Implementation Framework & Best Practices</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <HelpCircle className="h-4 w-4 text-purple-500" />
              AI Citation FAQ Blocks
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
              <p className="text-[10px] font-bold text-indigo-500 uppercase mb-1">Question</p>
              <p className="text-xs font-semibold">What are the primary benefits of {input}?</p>
              <p className="text-[10px] text-slate-500 mt-2">Optimized for: Google AI Overview & Perplexity</p>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
              <p className="text-[10px] font-bold text-indigo-500 uppercase mb-1">Question</p>
              <p className="text-xs font-semibold">How does {input} impact traditional SEO workflows?</p>
              <p className="text-[10px] text-slate-500 mt-2">Optimized for: ChatGPT Citation Engine</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-indigo-500/5 border-indigo-500/20">
        <CardHeader>
          <CardTitle className="text-sm font-bold flex items-center gap-2">
            <Layers className="h-4 w-4" />
            Extractability Score: 92/100
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-xs text-slate-600 dark:text-gray-400">
            Your section hierarchy is highly optimized for LLM parsing. The use of clear H2/H3 tags combined with bulleted summaries ensures that AI agents can easily extract and cite your content.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentStructure;