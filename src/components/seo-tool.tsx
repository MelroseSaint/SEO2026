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

    // SIMULATING DETERMINISTIC GENERATION
    setTimeout(() => {
      const output = {
        queryAnalysis: {
          primaryIntent: isContent ? "CONTENT_OPTIMIZATION" : isURL ? "COMPETITOR_REVERSE_ENGINEERING" : isKeyword ? "TRANSACTIONAL_EXPANSION" : "TOPICAL_AUTHORITY_ESTABLISHMENT",
          secondaryIntents: ["SEMANTIC_CLUSTERING", "AI_CITATION_CAPTURE"],
          targetAudience: "HIGH_INTENT_DECISION_MAKERS",
          contentType: isContent ? "EDITORIAL_REFINEMENT" : isURL ? "COMPETITIVE_GAP_REPORT" : isKeyword ? "PILLAR_PAGE" : "TECHNICAL_CASE_STUDY"
        },
        aiStrategy: {
          coreEntities: [trimmedInput.split(" ")[0].toUpperCase(), "ARTIFICIAL_INTELLIGENCE", "SEARCH_OPTIMIZATION"],
          supportingEntities: ["LLM_CONTEXT_WINDOW", "SEMANTIC_ENTITIES", "ZERO_CLICK_RESULTS"],
          gaps: ["REAL_TIME_VERIFICATION", "FIRST_PERSON_EXPERIENCE_SIGNALS"],
          positioning: `ESTABLISH_${trimmedInput.slice(0, 20).toUpperCase().replace(/\s+/g, '_')}_AS_PRIMARY_SEMANTIC_HUB`
        },
        keywordClusters: {
          primary: isContent ? "EXTRACTED_FROM_BODY" : trimmedInput,
          secondary: [`FUTURE_OF_TOPIC`, `AI_TRENDS_2026`, `BEST_PRACTICES`],
          longTail: [`HOW_TO_OPTIMIZE_FOR_LLMS`, `IMPACT_OF_AI_ON_STRATEGY`],
          questions: [`WHAT_IS_THE_CORE_VALUE?`, `WHY_DOES_THIS_MATTER_IN_2026?`]
        },
        contentStructure: {
          h1: isContent ? "EXISTING_H1_DETECTED" : `THE_DEFINITIVE_GUIDE_TO_${trimmedInput.slice(0, 30).toUpperCase()}_IN_2026`,
          h2: ["EXECUTIVE_SUMMARY", "SEMANTIC_FOUNDATIONS", "IMPLEMENTATION_FRAMEWORK"],
          h3: ["LLM_PARSING_OPTIMIZATION", "ENTITY_RELATIONSHIP_MAPPING"],
          faq: { enabled: true, items: ["ROI_METRICS", "IMPLEMENTATION_TIMELINE"] }
        },
        metadata: {
          title: `${trimmedInput.slice(0, 40).toUpperCase()} | 2026_AI_SEARCH`,
          description: `DETERMINISTIC_STRATEGY_FOR_${trimmedInput.slice(0, 20).toUpperCase()}. OPTIMIZED_FOR_LLM_CITATION.`,
          slug: trimmedInput.slice(0, 20).toLowerCase().replace(/\s+/g, "-"),
          ogTitle: `DOMINATE_SEARCH_2026`,
          ogDescription: `FUTURE_PROOF_STRATEGY_GENERATED_IN_REAL_TIME`
        },
        aiCitation: {
          statements: [`CONTENT_IS_PRIMARY_DRIVER_OF_2026_GROWTH.`, `SEMANTIC_DENSITY_IMPROVES_LLM_RECALL.`],
          facts: ["92%_USER_PREFERENCE_FOR_AI_SUMMARIES", "4X_CITATION_RATE_INCREASE_VIA_ENTITIES"],
          targets: ["GOOGLE_AI_OVERVIEW", "PERPLEXITY_CITATION_BLOCK", "CHATGPT_SEARCH_INDEX"]
        },
        schema: {
          types: ["TechArticle", "FAQPage", "Service"],
          requiredFields: ["headline", "author", "datePublished", "mainEntity"]
        },
        competitive: {
          strategy: isContent ? "REFINING_EXISTING_SEMANTIC_SIGNALS" : "AGGRESSIVE_ENTITY_EXPANSION",
          differentiation: "PROPRIETARY_DATA_INTEGRATION",
          gapExploit: "TARGETING_ZERO_CLICK_SUMMARIES"
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
      }, 500); // 500ms for snappy real-time feel
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