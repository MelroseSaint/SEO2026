"use client";

import React, { useState } from "react";
import { 
  Sparkles, ArrowRight, LayoutDashboard, BrainCircuit, Map, 
  Fingerprint, Code2, Users, ListTree, ArrowRightLeft, 
  RefreshCw, Wand2, Share2, ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { showSuccess, showError } from "@/utils/toast";

// Feature Components
import AISimulation from "./ai-simulation";
import IntentMapping from "./intent-mapping";
import EntityOptimization from "./entity-optimization";
import SchemaBuilder from "./schema-builder";
import CompetitorAnalysis from "./competitor-analysis";
import ContentStructure from "./content-structure";
import GapAnalyzer from "./gap-analyzer";
import RefreshIntelligence from "./refresh-intelligence";
import PromptGenerator from "./prompt-generator";
import LinkingGraph from "./linking-graph";
import AICredibility from "./ai-credibility";
import CopyButton from "./seo-copy-button";
import { CopyAllSEOButton } from "./ui/copy-all-seo-button";

interface SEOResult {
  title: string;
  description: string;
  keywords: string[];
  suggestions: string[];
}

const SEOTool = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SEOResult | null>(null);

  const generateSEO = () => {
    if (!input.trim()) {
      showError("Please enter a description of your site or app.");
      return;
    }

    setLoading(true);
    
    setTimeout(() => {
      const mockResult: SEOResult = {
        title: `${input.split(' ').slice(0, 3).join(' ')} | Next-Gen SEO Solutions 2026`,
        description: `Discover the future of ${input.toLowerCase()}. Our platform leverages AI-driven insights to boost your visibility and engagement in the 2026 digital landscape.`,
        keywords: [
          input.split(' ')[0],
          "AI SEO",
          "2026 Trends",
          "Digital Growth",
          "Search Optimization",
          "User Intent"
        ],
        suggestions: [
          "Focus on voice search optimization for long-tail queries.",
          "Implement structured data for AI-powered search engines.",
          "Optimize for 'Zero-Click' search results with concise summaries.",
          "Prioritize mobile-first indexing and core web vitals."
        ]
      };
      
      setResult(mockResult);
      setLoading(false);
      showSuccess("SEO Strategy Generated!");
    }, 1500);
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 pointer-events-none" />
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-bold flex items-center gap-2 text-slate-900 dark:text-white">
            <Sparkles className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            SEO Discovery Engine
          </CardTitle>
          <CardDescription className="text-slate-500 dark:text-gray-400">
            Describe your project to generate a 2026-ready SEO strategy.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative space-y-4">
          <Textarea
            placeholder="e.g., A sustainable fashion marketplace for Gen Z using blockchain for transparency..."
            className="min-h-[120px] bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 focus:border-indigo-500/50 transition-all text-lg text-slate-900 dark:text-white"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button 
            onClick={generateSEO} 
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-lg font-semibold group shadow-lg shadow-indigo-500/20"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing Trends...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                Generate Strategy
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <Tabs defaultValue="overview" className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          <TabsList className="w-full flex flex-wrap h-auto bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 p-1 rounded-xl mb-8">
            <TabsTrigger value="overview" className="flex-1 gap-2 py-3"><LayoutDashboard className="h-4 w-4" /> Overview</TabsTrigger>
            <TabsTrigger value="credibility" className="flex-1 gap-2 py-3"><ShieldCheck className="h-4 w-4" /> Credibility</TabsTrigger>
            <TabsTrigger value="simulation" className="flex-1 gap-2 py-3"><BrainCircuit className="h-4 w-4" /> AI Simulation</TabsTrigger>
            <TabsTrigger value="intent" className="flex-1 gap-2 py-3"><Map className="h-4 w-4" /> Intent</TabsTrigger>
            <TabsTrigger value="structure" className="flex-1 gap-2 py-3"><ListTree className="h-4 w-4" /> Structure</TabsTrigger>
            <TabsTrigger value="entities" className="flex-1 gap-2 py-3"><Fingerprint className="h-4 w-4" /> Entities</TabsTrigger>
            <TabsTrigger value="gap" className="flex-1 gap-2 py-3"><ArrowRightLeft className="h-4 w-4" /> Gap Analysis</TabsTrigger>
            <TabsTrigger value="refresh" className="flex-1 gap-2 py-3"><RefreshCw className="h-4 w-4" /> Refresh</TabsTrigger>
            <TabsTrigger value="generator" className="flex-1 gap-2 py-3"><Wand2 className="h-4 w-4" /> Generator</TabsTrigger>
            <TabsTrigger value="schema" className="flex-1 gap-2 py-3"><Code2 className="h-4 w-4" /> Schema</TabsTrigger>
            <TabsTrigger value="graph" className="flex-1 gap-2 py-3"><Share2 className="h-4 w-4" /> Graph</TabsTrigger>
            <TabsTrigger value="competitors" className="flex-1 gap-2 py-3"><Users className="h-4 w-4" /> Competitors</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Metadata Strategy</h3>
              <CopyAllSEOButton data={result} />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-500 dark:text-gray-400">SEO Title</CardTitle>
                  <CopyButton text={result.title}>Copy</CopyButton>
                </CardHeader>
                <CardContent><p className="text-lg font-semibold">{result.title}</p></CardContent>
              </Card>
              <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-500 dark:text-gray-400">Keywords</CardTitle>
                  <CopyButton text={result.keywords.join(", ")}>Copy</CopyButton>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {result.keywords.map((kw, i) => (
                      <span key={i} className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-xs border border-indigo-500/20">{kw}</span>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 md:col-span-2">
                <CardHeader className="pb-2 flex flex-row items-center justify-between">
                  <CardTitle className="text-sm font-medium text-slate-500 dark:text-gray-400">Meta Description</CardTitle>
                  <CopyButton text={result.description}>Copy</CopyButton>
                </CardHeader>
                <CardContent><p className="text-slate-700 dark:text-gray-300 leading-relaxed">{result.description}</p></CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="credibility">
            <AICredibility />
          </TabsContent>

          <TabsContent value="simulation">
            <AISimulation input={input} />
          </TabsContent>

          <TabsContent value="intent">
            <IntentMapping input={input} />
          </TabsContent>

          <TabsContent value="structure">
            <ContentStructure input={input} />
          </TabsContent>

          <TabsContent value="entities">
            <EntityOptimization />
          </TabsContent>

          <TabsContent value="gap">
            <GapAnalyzer />
          </TabsContent>

          <TabsContent value="refresh">
            <RefreshIntelligence />
          </TabsContent>

          <TabsContent value="generator">
            <PromptGenerator />
          </TabsContent>

          <TabsContent value="schema">
            <SchemaBuilder />
          </TabsContent>

          <TabsContent value="graph">
            <LinkingGraph />
          </TabsContent>

          <TabsContent value="competitors">
            <CompetitorAnalysis />
          </TabsContent>
        </Tabs>
      )}
    </div>
  );
};

export default SEOTool;