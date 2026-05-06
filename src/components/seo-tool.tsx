"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Terminal, ShieldAlert, ShieldCheck, BrainCircuit, Map, ListTree, Fingerprint, ArrowRightLeft, RefreshCw, Wand2, Share2, Code2, Users, Activity, FileText, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { showSuccess } from "@/utils/toast";

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

const SEOTool = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // INSTANT METRICS (0ms Latency)
  const liveMetrics = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    const chars = input.length;
    const entities = (input.match(/[A-Z][a-z]+/g) || []).length;
    const sentiment = words > 10 ? "ANALYTICAL" : "NEUTRAL";
    const readability = words > 50 ? "COMPLEX" : "OPTIMAL";
    
    return { words, chars, entities, sentiment, readability };
  }, [input]);

  const executeEngine = (val: string) => {
    setError(null);
    const trimmedInput = val.trim();

    if (!trimmedInput || trimmedInput.length < 3) return;

    setLoading(true);
    
    // BEHAVIOR RULES: Input Categorization
    const isURL = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(trimmedInput);
    const isKeyword = trimmedInput.split(/\s+/).length <= 3 && !isURL;
    const isContent = trimmedInput.split(/\s+/).length > 50;
    const isTopic = !isURL && !isKeyword && !isContent;

    // SIMULATING DETERMINISTIC GENERATION WITH 2026-SPECIFIC DATA
    setTimeout(() => {
      const cleanInput = trimmedInput.slice(0, 30).replace(/[^\w\s]/gi, '');
      const output = {
        queryAnalysis: {
          primaryIntent: isContent ? "SEMANTIC_REINFORCEMENT" : isURL ? "REVERSE_ENTITY_MAPPING" : isKeyword ? "ZERO_CLICK_CAPTURE" : "TOPICAL_AUTHORITY_ESTABLISHMENT",
          secondaryIntents: ["LLM_CONTEXT_INJECTION", "SGE_VISIBILITY_OPTIMIZATION"],
          targetAudience: "AI_AGENT_PARSERS & HIGH_VALUE_HUMAN_USERS",
          contentType: isContent ? "SEMANTIC_PILLAR_REFINEMENT" : isURL ? "COMPETITIVE_GAP_EXPLOIT" : isKeyword ? "DIRECT_ANSWER_BLOCK" : "TECHNICAL_AUTHORITY_GUIDE"
        },
        aiStrategy: {
          coreEntities: [cleanInput.toUpperCase(), "SEMANTIC_SEARCH", "LLM_OPTIMIZATION", "KNOWLEDGE_GRAPH"],
          supportingEntities: ["CONTEXTUAL_RELEVANCE", "ENTITY_RELATIONSHIP_MAPPING", "RAG_SYSTEM_COMPATIBILITY"],
          gaps: ["FIRST_PERSON_VERIFICATION", "REAL_TIME_DATA_CITATIONS", "PROPRIETARY_INSIGHT_DENSITY"],
          positioning: `ESTABLISH_${cleanInput.toUpperCase().replace(/\s+/g, '_')}_AS_PRIMARY_KNOWLEDGE_NODE`
        },
        keywordClusters: {
          primary: cleanInput,
          secondary: [`${cleanInput} AI Search Trends`, `Semantic Optimization for ${cleanInput}`, `Future of ${cleanInput} 2026`],
          longTail: [`How to optimize ${cleanInput} for LLM citations`, `Impact of SGE on ${cleanInput} visibility`, `Best practices for ${cleanInput} entity mapping`],
          questions: [`What is the future of ${cleanInput}?`, `How does AI impact ${cleanInput} strategy?`, `Why is ${cleanInput} critical for 2026 search?`]
        },
        contentStructure: {
          h1: isContent ? "EXISTING_H1_DETECTED" : `The Definitive 2026 Guide to ${cleanInput}`,
          h2: ["Executive Summary: The AI Search Shift", "Core Semantic Foundations", "Implementation Framework for LLM Visibility"],
          h3: ["Optimizing for Contextual Recall", "Entity-Based Relationship Mapping", "Zero-Click Result Capture Strategies"],
          faq: { enabled: true, items: ["ROI Benchmarks for 2026", "Technical Implementation Timeline"] }
        },
        metadata: {
          title: `${cleanInput} | 2026 AI Search & Semantic Strategy`,
          description: `Master ${cleanInput} in the era of AI search. Optimized for LLM citations, SGE visibility, and high-intent user capture.`,
          slug: cleanInput.toLowerCase().replace(/\s+/g, "-"),
          ogTitle: `Dominate ${cleanInput} Search in 2026`,
          ogDescription: `Advanced semantic strategy for ${cleanInput} optimized for the next generation of search engines.`
        },
        aiCitation: {
          statements: [`${cleanInput} is the primary catalyst for semantic growth in 2026.`, `High entity density in ${cleanInput} content improves LLM recall by 40%.`],
          facts: ["94% of users prefer AI-synthesized summaries for complex queries", "Entity-linked content sees 3.5x higher citation rates in Perplexity"],
          targets: ["Google AI Overviews", "Perplexity Citation Blocks", "Gemini Search Index", "ChatGPT Search"]
        },
        schema: {
          types: ["TechArticle", "FAQPage", "Dataset", "Service"],
          requiredFields: ["headline", "author", "datePublished", "mainEntity", "citation"]
        },
        competitive: {
          strategy: isContent ? "Refining Semantic Signals" : "Aggressive Entity Expansion",
          differentiation: "Proprietary Data Integration & First-Person Experience Signals",
          gapExploit: "Targeting Underserved Long-Tail AI Queries"
        }
      };
      
      setResult(output);
      setLoading(false);
    }, 600);
  };

  // Auto-trigger logic (Real-time Debounce)
  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    if (input.trim().length >= 3) {
      debounceTimer.current = setTimeout(() => {
        executeEngine(input);
      }, 500);
    }

    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [input]);

  return (
    <div className="space-y-8 max-w-6xl mx-auto font-mono">
      {/* Real-time Input & Live Metrics */}
      <div className="grid gap-6 lg:grid-cols-4">
        <Card className="lg:col-span-3 border-slate-800 bg-slate-950 shadow-2xl overflow-hidden">
          <CardHeader className="border-b border-slate-800 bg-slate-900/50 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <CardTitle className="text-sm font-bold text-indigo-400 uppercase tracking-widest">
                  Real-Time_Semantic_Processor
                </CardTitle>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-500">
                <Activity className="h-3 w-3 text-emerald-500" />
                LIVE_STREAM_ACTIVE
              </div>
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
          <Card className="border-slate-800 bg-slate-950">
            <CardHeader className="py-3 border-b border-slate-800">
              <CardTitle className="text-[10px] uppercase text-slate-500 flex items-center gap-2">
                <Gauge className="h-3 w-3" /> Instant_Metrics
              </CardTitle>
            </CardHeader>
            <CardContent className="py-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500">WORDS</span>
                <span className="text-xs font-bold text-white">{liveMetrics.words}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500">ENTITIES</span>
                <span className="text-xs font-bold text-indigo-400">{liveMetrics.entities}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500">TONE</span>
                <span className="text-[10px] font-bold text-emerald-500">{liveMetrics.sentiment}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] text-slate-500">READABILITY</span>
                <span className="text-[10px] font-bold text-amber-500">{liveMetrics.readability}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-slate-800 bg-indigo-600/10">
            <CardContent className="py-4">
              <div className="flex items-center gap-3">
                {loading ? (
                  <RefreshCw className="h-4 w-4 text-indigo-400 animate-spin" />
                ) : (
                  <ShieldCheck className="h-4 w-4 text-emerald-500" />
                )}
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-white uppercase">Engine_Status</p>
                  <p className="text-[9px] text-slate-400">
                    {loading ? "RECALCULATING_STRATEGY..." : "STRATEGY_SYNCHRONIZED"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {result && (
        <Tabs defaultValue="deterministic" className="w-full animate-in fade-in duration-500">
          <TabsList className="w-full flex flex-wrap h-auto bg-slate-950 border border-slate-800 p-1 rounded-none mb-8">
            <TabsTrigger value="deterministic" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Terminal className="h-3 w-3" /> ENGINE_OUTPUT</TabsTrigger>
            <TabsTrigger value="audit" className="flex-1 gap-2 py-3 text-[10px] uppercase"><ShieldAlert className="h-3 w-3" /> AUDIT</TabsTrigger>
            <TabsTrigger value="credibility" className="flex-1 gap-2 py-3 text-[10px] uppercase"><ShieldCheck className="h-3 w-3" /> E-E-A-T</TabsTrigger>
            <TabsTrigger value="simulation" className="flex-1 gap-2 py-3 text-[10px] uppercase"><BrainCircuit className="h-3 w-3" /> AI_SIM</TabsTrigger>
            <TabsTrigger value="intent" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Map className="h-3 w-3" /> INTENT</TabsTrigger>
            <TabsTrigger value="structure" className="flex-1 gap-2 py-3 text-[10px] uppercase"><ListTree className="h-3 w-3" /> STRUCTURE</TabsTrigger>
            <TabsTrigger value="entities" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Fingerprint className="h-3 w-3" /> ENTITIES</TabsTrigger>
            <TabsTrigger value="gap" className="flex-1 gap-2 py-3 text-[10px] uppercase"><ArrowRightLeft className="h-3 w-3" /> GAP_ANALYSIS</TabsTrigger>
            <TabsTrigger value="refresh" className="flex-1 gap-2 py-3 text-[10px] uppercase"><RefreshCw className="h-3 w-3" /> REFRESH</TabsTrigger>
            <TabsTrigger value="generator" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Wand2 className="h-3 w-3" /> ASSETS</TabsTrigger>
            <TabsTrigger value="schema" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Code2 className="h-3 w-3" /> SCHEMA</TabsTrigger>
            <TabsTrigger value="graph" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Share2 className="h-3 w-3" /> GRAPH</TabsTrigger>
            <TabsTrigger value="competitors" className="flex-1 gap-2 py-3 text-[10px] uppercase"><Users className="h-3 w-3" /> COMP_INTEL</TabsTrigger>
          </TabsList>

          <TabsContent value="deterministic">
            <DeterministicOutput data={result} />
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