"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Terminal, ShieldAlert, ShieldCheck, BrainCircuit, Map, ListTree, Fingerprint, ArrowRightLeft, RefreshCw, Wand2, Share2, Code2, Users, Activity, FileText, Gauge, Target, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
import DeterministicOutput from "./deterministic-output";
import ComplianceAuditor from "./compliance-auditor";
import ContentScore from "./content-score";
import SERPPreview from "./serp-preview";
import ExportButton from "./export-button";

const SEOTool = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // INSTANT METRICS
  const liveMetrics = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    const entities = (input.match(/[A-Z][a-z]+/g) || []).length;
    const score = Math.min(100, Math.max(0, (words / 10) + (entities * 5)));
    
    return { words, entities, score };
  }, [input]);

  const executeEngine = (val: string) => {
    const trimmedInput = val.trim();
    if (!trimmedInput || trimmedInput.length < 3) return;

    setLoading(true);
    
    setTimeout(() => {
      const cleanInput = trimmedInput.slice(0, 30).replace(/[^\w\s]/gi, '');
      const output = {
        identification: {
          industry: "SAAS_ENTERPRISE",
          siteType: "TOPICAL_PILLAR",
          confidenceScore: 94
        },
        queryAnalysis: {
          primaryIntent: "TOPICAL_AUTHORITY",
          secondaryIntents: ["LLM_CONTEXT_INJECTION", "SGE_VISIBILITY"],
          targetAudience: "DECISION_MAKERS",
          contentType: "EDITORIAL"
        },
        aiStrategy: {
          coreEntities: [cleanInput.toUpperCase(), "SEMANTIC_SEARCH", "KNOWLEDGE_GRAPH", "AI_OPTIMIZATION"],
          supportingEntities: ["CONTEXTUAL_RELEVANCE", "ENTITY_MAPPING"],
          gaps: ["FIRST_PERSON_VERIFICATION"],
          positioning: "ESTABLISH_AUTHORITY"
        },
        keywordClusters: {
          primary: cleanInput,
          secondary: [`${cleanInput} solutions`, `Future of ${cleanInput}`],
          longTail: [`How to implement ${cleanInput}`],
          questions: [`What is ${cleanInput}?`]
        },
        contentStructure: {
          h1: `The Definitive 2026 Guide to ${cleanInput}`,
          h2: ["Why it Matters Now", "Core Foundations", "Implementation"],
          h3: ["Contextual Recall", "Relationship Mapping"],
          faq: { enabled: true, items: ["ROI Benchmarks", "Technical Setup"] }
        },
        metadata: {
          title: `${cleanInput} | Strategy 2026`,
          description: `Advanced optimization for ${cleanInput}. Targeted for AI search and high-intent user capture.`,
          slug: cleanInput.toLowerCase().replace(/\s+/g, "-"),
          ogTitle: `Dominate Search with ${cleanInput}`,
          ogDescription: `Surgical SEO strategy for modern applications.`
        },
        aiCitation: {
          statements: [`${cleanInput} is the primary catalyst for growth in 2026.`],
          facts: ["94% of users prefer AI-synthesized summaries", "Entity-linked content sees 3.5x higher citation"],
          targets: ["Google AI Overviews", "Perplexity", "Gemini"]
        },
        schema: {
          types: ["TechArticle", "FAQPage"],
          requiredFields: ["headline", "author", "datePublished"]
        },
        competitive: {
          strategy: "Reverse Engineering Leaders",
          differentiation: "Proprietary Data Integration",
          gapExploit: "Targeting Underserved AI Queries"
        }
      };
      
      setResult(output);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    if (input.trim().length >= 3) {
      debounceTimer.current = setTimeout(() => executeEngine(input), 500);
    }
    return () => { if (debounceTimer.current) clearTimeout(debounceTimer.current); };
  }, [input]);

  return (
    <div className="space-y-8 max-w-6xl mx-auto font-mono">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 text-[10px] text-slate-500">
          <Activity className="h-3 w-3 text-emerald-500" />
          SYSTEM_STATUS: <span className="text-emerald-500 font-bold">OPERATIONAL</span>
        </div>
        {result && <ExportButton data={result} />}
      </div>

      {/* Real-time Input & Live Metrics */}
      <div className="grid gap-6 lg:grid-cols-4">
        <Card className="lg:col-span-3 border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
                <CardTitle className="text-sm font-bold text-indigo-400 uppercase tracking-widest">
                  Semantic_Input_Buffer
                </CardTitle>
              </div>
              {loading && <RefreshCw className="h-3 w-3 text-indigo-500 animate-spin" />}
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Textarea
              placeholder="PASTE_CONTENT | ENTER_KEYWORD | ENTER_URL..."
              className="min-h-[200px] bg-black border-none text-indigo-300 focus:ring-0 transition-all placeholder:text-slate-800 p-6 text-sm leading-relaxed resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </CardContent>
        </Card>

        <div className="space-y-4">
          <ContentScore score={liveMetrics.score} label="SEMANTIC" />
          
          {result && (
            <Card className="border-indigo-500/30 bg-indigo-500/10 animate-in fade-in slide-in-from-right-4">
              <CardHeader className="py-2 border-b border-indigo-500/20">
                <CardTitle className="text-[10px] uppercase text-indigo-400 flex items-center gap-2">
                  <Target className="h-3 w-3" /> Context_Lock
                </CardTitle>
              </CardHeader>
              <CardContent className="py-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-slate-500">INDUSTRY</span>
                  <span className="text-[10px] font-bold text-white">{result.identification.industry}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-slate-500">CONFIDENCE</span>
                  <span className="text-[10px] font-bold text-emerald-500">{result.identification.confidenceScore}%</span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {result && (
        <Tabs defaultValue="deterministic" className="w-full animate-in fade-in duration-500">
          <TabsList className="w-full flex flex-wrap h-auto bg-slate-950 border border-slate-800 p-1 rounded-none mb-8">
            <TabsTrigger value="deterministic" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Terminal className="h-3 w-3" /> ENGINE</TabsTrigger>
            <TabsTrigger value="preview" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Search className="h-3 w-3" /> PREVIEW</TabsTrigger>
            <TabsTrigger value="audit" className="flex-1 gap-2 py-3 text-[10px] uppercase"><ShieldAlert className="h-3 w-3" /> AUDIT</TabsTrigger>
            <TabsTrigger value="credibility" className="flex-1 gap-2 py-3 text-[10px] uppercase"><ShieldCheck className="h-3 w-3" /> E-E-A-T</TabsTrigger>
            <TabsTrigger value="simulation" className="flex-1 gap-2 py-3 text-[10px] uppercase"><BrainCircuit className="h-3 w-3" /> AI_SIM</TabsTrigger>
            <TabsTrigger value="intent" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Map className="h-3 w-3" /> INTENT</TabsTrigger>
            <TabsTrigger value="structure" className="flex-1 gap-2 py-3 text-[10px] uppercase"><ListTree className="h-3 w-3" /> STRUCTURE</TabsTrigger>
            <TabsTrigger value="entities" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Fingerprint className="h-3 w-3" /> ENTITIES</TabsTrigger>
            <TabsTrigger value="gap" className="flex-1 gap-2 py-3 text-[10px] uppercase"><ArrowRightLeft className="h-3 w-3" /> GAP</TabsTrigger>
            <TabsTrigger value="refresh" className="flex-1 gap-2 py-3 text-[10px] uppercase"><RefreshCw className="h-3 w-3" /> REFRESH</TabsTrigger>
            <TabsTrigger value="generator" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Wand2 className="h-3 w-3" /> ASSETS</TabsTrigger>
            <TabsTrigger value="schema" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Code2 className="h-3 w-3" /> SCHEMA</TabsTrigger>
            <TabsTrigger value="graph" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Share2 className="h-3 w-3" /> GRAPH</TabsTrigger>
            <TabsTrigger value="competitors" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Users className="h-3 w-3" /> COMP</TabsTrigger>
          </TabsList>

          <TabsContent value="deterministic">
            <DeterministicOutput data={result} />
          </TabsContent>

          <TabsContent value="preview">
            <SERPPreview data={result} />
          </TabsContent>

          <TabsContent value="audit">
            <ComplianceAuditor data={result} />
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