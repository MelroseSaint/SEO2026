"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
  Terminal, ShieldAlert, ShieldCheck, BrainCircuit, Map, ListTree, 
  Fingerprint, ArrowRightLeft, RefreshCw, Wand2, Share2, Code2, 
  Users, Activity, Gauge, Target, ChevronRight, Search, LayoutDashboard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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
  const [activeTab, setActiveTab] = useState("deterministic");
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  const liveMetrics = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    const entities = (input.match(/[A-Z][a-z]+/g) || []).length;
    return { words, entities };
  }, [input]);

  const executeEngine = (val: string) => {
    const trimmedInput = val.trim();
    if (!trimmedInput || trimmedInput.length < 3) return;

    setLoading(true);
    setTimeout(() => {
      const cleanInput = trimmedInput.slice(0, 30).replace(/[^\w\s]/gi, '');
      setResult({
        identification: { industry: "SAAS_ENTERPRISE", siteType: "TOPICAL_PILLAR", confidenceScore: 94 },
        queryAnalysis: { primaryIntent: "TOPICAL_AUTHORITY", secondaryIntents: ["LLM_CONTEXT_INJECTION"], targetAudience: "DECISION_MAKERS", contentType: "PILLAR" },
        aiStrategy: { coreEntities: [cleanInput.toUpperCase(), "SEMANTIC_SEARCH"], supportingEntities: ["RAG_COMPATIBILITY"], gaps: ["FIRST_PERSON_VERIFICATION"], positioning: "AUTHORITY" },
        keywordClusters: { primary: cleanInput, secondary: [`${cleanInput} trends`], longTail: [`How to use ${cleanInput}`], questions: [`What is ${cleanInput}?`] },
        contentStructure: { h1: `The 2026 Guide to ${cleanInput}`, h2: ["Why it matters"], h3: ["Implementation"], faq: { enabled: true, items: ["ROI"] } },
        metadata: { title: `${cleanInput} | 2026`, description: `Advanced optimization for ${cleanInput}.`, slug: "slug", ogTitle: "OG", ogDescription: "OG Desc" },
        aiCitation: { statements: ["Fact 1"], facts: ["94% accuracy"], targets: ["Google AI"] },
        schema: { types: ["TechArticle"], requiredFields: ["headline"] },
        competitive: { strategy: "Reverse Engineering", differentiation: "Data", gapExploit: "AI Queries" }
      });
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

  const menuItems = [
    { id: "deterministic", label: "Engine Output", icon: Terminal },
    { id: "audit", label: "Compliance Audit", icon: ShieldAlert },
    { id: "credibility", label: "E-E-A-T Score", icon: ShieldCheck },
    { id: "simulation", label: "AI Simulation", icon: BrainCircuit },
    { id: "intent", label: "Intent Map", icon: Map },
    { id: "structure", label: "Structure", icon: ListTree },
    { id: "entities", label: "Entities", icon: Fingerprint },
    { id: "gap", label: "Gap Analysis", icon: ArrowRightLeft },
    { id: "refresh", label: "Refresh Intel", icon: RefreshCw },
    { id: "generator", label: "Asset Gen", icon: Wand2 },
    { id: "schema", label: "Schema", icon: Code2 },
    { id: "graph", label: "Link Graph", icon: Share2 },
    { id: "competitors", label: "Comp Intel", icon: Users },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-mono">
      {/* Input Section */}
      <div className="grid gap-6 lg:grid-cols-4">
        <Card className="lg:col-span-3 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl overflow-hidden">
          <CardHeader className="border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={cn("h-2 w-2 rounded-full", loading ? "bg-indigo-500 animate-pulse" : "bg-emerald-500")} />
                <CardTitle className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                  {loading ? "PROCESSING_CONTEXT..." : "ENGINE_READY"}
                </CardTitle>
              </div>
              <div className="flex items-center gap-4 text-[10px] text-slate-500">
                <div className="flex items-center gap-1"><Activity className="h-3 w-3" /> {liveMetrics.words} WORDS</div>
                <div className="flex items-center gap-1"><Fingerprint className="h-3 w-3" /> {liveMetrics.entities} ENTITIES</div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <Textarea
              placeholder="PASTE_CONTENT | ENTER_KEYWORD | ENTER_URL..."
              className="min-h-[160px] bg-transparent border-none text-slate-900 dark:text-indigo-300 focus:ring-0 p-6 text-sm leading-relaxed resize-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <CardHeader className="py-3 border-b border-slate-100 dark:border-slate-800">
            <CardTitle className="text-[10px] uppercase text-slate-500 flex items-center gap-2">
              <Target className="h-3 w-3" /> Context
            </CardTitle>
          </CardHeader>
          <CardContent className="py-4 space-y-3">
            {result ? (
              <>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-slate-500">INDUSTRY</span>
                  <span className="text-[10px] font-bold">{result.identification.industry}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] text-slate-500">CONFIDENCE</span>
                  <span className="text-[10px] font-bold text-emerald-500">{result.identification.confidenceScore}%</span>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: `${result.identification.confidenceScore}%` }} />
                  </div>
                </div>
              </>
            ) : (
              <div className="text-[10px] text-slate-400 italic">Waiting for input...</div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Dashboard Section */}
      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-3 space-y-2">
            <div className="px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Analysis Modules</div>
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium transition-all group",
                  activeTab === item.id 
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn("h-4 w-4", activeTab === item.id ? "text-white" : "text-indigo-500")} />
                  {item.label}
                </div>
                <ChevronRight className={cn("h-3 w-3 transition-transform", activeTab === item.id ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0")} />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-9 bg-white dark:bg-slate-950 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-xl">
            <div className="mb-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                  {React.createElement(menuItems.find(m => m.id === activeTab)?.icon || LayoutDashboard, { className: "h-5 w-5 text-indigo-600 dark:text-indigo-400" })}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{menuItems.find(m => m.id === activeTab)?.label}</h3>
                  <p className="text-[10px] text-slate-500 uppercase">Module_Active_v2.6</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="text-[10px] h-8 gap-2">
                <Share2 className="h-3 w-3" /> EXPORT_DATA
              </Button>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {activeTab === "deterministic" && <DeterministicOutput data={result} />}
              {activeTab === "audit" && <ComplianceAuditor data={result} />}
              {activeTab === "credibility" && <AICredibility />}
              {activeTab === "simulation" && <AISimulation input={input} />}
              {activeTab === "intent" && <IntentMapping input={input} />}
              {activeTab === "structure" && <ContentStructure input={input} />}
              {activeTab === "entities" && <EntityOptimization />}
              {activeTab === "gap" && <GapAnalyzer />}
              {activeTab === "refresh" && <RefreshIntelligence />}
              {activeTab === "generator" && <PromptGenerator />}
              {activeTab === "schema" && <SchemaBuilder />}
              {activeTab === "graph" && <LinkingGraph />}
              {activeTab === "competitors" && <CompetitorAnalysis />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOTool;