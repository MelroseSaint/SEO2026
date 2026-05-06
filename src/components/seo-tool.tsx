"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { Terminal, ShieldAlert, ShieldCheck, BrainCircuit, Map, ListTree, Fingerprint, ArrowRightLeft, RefreshCw, Wand2, Share2, Code2, Users, Activity, FileText, Gauge, Target } from "lucide-react";
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
    
    // CONTEXT IDENTIFICATION LOGIC
    const lowerInput = trimmedInput.toLowerCase();
    
    // 1. Detect Industry
    let industry = "GENERAL_TECH";
    if (lowerInput.match(/buy|price|shop|cart|store|product/)) industry = "E-COMMERCE";
    else if (lowerInput.match(/api|software|saas|platform|dashboard|user/)) industry = "SAAS_ENTERPRISE";
    else if (lowerInput.match(/health|medical|doctor|patient|wellness/)) industry = "HEALTHCARE_TECH";
    else if (lowerInput.match(/bank|crypto|finance|money|trading|wallet/)) industry = "FINTECH";
    else if (lowerInput.match(/learn|course|education|student|school/)) industry = "EDTECH";

    // 2. Detect Site/Content Type
    let siteType = "TOPICAL_PILLAR";
    if (lowerInput.match(/http/)) siteType = "EXTERNAL_DOMAIN_ANALYSIS";
    else if (lowerInput.match(/how to|guide|tutorial|steps/)) siteType = "EDUCATIONAL_GUIDE";
    else if (lowerInput.match(/vs|compare|alternative/)) siteType = "COMPARISON_ENGINE";
    else if (trimmedInput.split(/\s+/).length > 100) siteType = "LONG_FORM_EDITORIAL";

    // 3. Detect Core Purpose
    const corePurpose = lowerInput.split(/\s+/).slice(0, 5).join("_").toUpperCase().replace(/[^\w]/g, '');

    // SIMULATING DETERMINISTIC GENERATION WITH TARGETED CONTEXT
    setTimeout(() => {
      const cleanInput = trimmedInput.slice(0, 30).replace(/[^\w\s]/gi, '');
      const output = {
        identification: {
          industry,
          siteType,
          detectedPurpose: corePurpose,
          confidenceScore: 94
        },
        queryAnalysis: {
          primaryIntent: industry === "E-COMMERCE" ? "TRANSACTIONAL_CONVERSION" : "TOPICAL_AUTHORITY",
          secondaryIntents: ["LLM_CONTEXT_INJECTION", "SGE_VISIBILITY_OPTIMIZATION"],
          targetAudience: `${industry}_DECISION_MAKERS`,
          contentType: siteType
        },
        aiStrategy: {
          coreEntities: [cleanInput.toUpperCase(), industry, "SEMANTIC_SEARCH", "KNOWLEDGE_GRAPH"],
          supportingEntities: ["CONTEXTUAL_RELEVANCE", "ENTITY_RELATIONSHIP_MAPPING", "RAG_COMPATIBILITY"],
          gaps: ["FIRST_PERSON_VERIFICATION", "PROPRIETARY_INSIGHT_DENSITY"],
          positioning: `ESTABLISH_AUTHORITY_IN_${industry}_VERTICAL`
        },
        keywordClusters: {
          primary: cleanInput,
          secondary: [`${cleanInput} for ${industry}`, `Best ${industry} solutions 2026`, `Future of ${cleanInput}`],
          longTail: [`How to implement ${cleanInput} in ${industry}`, `Impact of AI on ${industry} ${cleanInput}`],
          questions: [`What is the best ${cleanInput} for ${industry}?`, `Why use ${cleanInput} in 2026?`]
        },
        contentStructure: {
          h1: `The Definitive 2026 ${industry} Guide to ${cleanInput}`,
          h2: [`Why ${industry} Needs ${cleanInput} Now`, "Core Semantic Foundations", "Implementation Framework"],
          h3: ["Optimizing for Contextual Recall", "Entity-Based Relationship Mapping"],
          faq: { enabled: true, items: [`${industry} ROI Benchmarks`, "Technical Implementation"] }
        },
        metadata: {
          title: `${cleanInput} | Leading ${industry} Strategy 2026`,
          description: `Advanced ${industry} optimization for ${cleanInput}. Targeted for AI search and high-intent user capture.`,
          slug: cleanInput.toLowerCase().replace(/\s+/g, "-"),
          ogTitle: `Dominate ${industry} Search with ${cleanInput}`,
          ogDescription: `Surgical SEO strategy for ${industry} applications.`
        },
        aiCitation: {
          statements: [`${cleanInput} is the primary catalyst for ${industry} growth in 2026.`],
          facts: [`94% of ${industry} users prefer AI-synthesized summaries`, "Entity-linked content sees 3.5x higher citation rates"],
          targets: ["Google AI Overviews", "Perplexity Citation Blocks", "Gemini Search Index"]
        },
        schema: {
          types: [industry === "E-COMMERCE" ? "Product" : "Service", "TechArticle", "FAQPage"],
          requiredFields: ["headline", "author", "datePublished", "mainEntity"]
        },
        competitive: {
          strategy: `Reverse Engineering ${industry} Leaders`,
          differentiation: `Proprietary ${industry} Data Integration`,
          gapExploit: `Targeting Underserved ${industry} AI Queries`
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

          {result && (
            <Card className="border-indigo-500/30 bg-indigo-500/10 animate-in fade-in slide-in-from-right-4">
              <CardHeader className="py-2 border-b border-indigo-500/20">
                <CardTitle className="text-[10px] uppercase text-indigo-400 flex items-center gap-2">
                  <Target className="h-3 w-3" /> Context_Identified
                </CardTitle>
              </CardHeader>
              <CardContent className="py-3 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-slate-500">INDUSTRY</span>
                  <span className="text-[10px] font-bold text-white">{result.identification.industry}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-slate-500">TYPE</span>
                  <span className="text-[10px] font-bold text-white">{result.identification.siteType}</span>
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