"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
  Terminal, ShieldAlert, ShieldCheck, BrainCircuit, Map, ListTree, 
  Fingerprint, ArrowRightLeft, RefreshCw, Wand2, Share2, Code2, 
  Users, Activity, Target, ChevronRight, LayoutDashboard, Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

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
  const [currentPlan, setCurrentPlan] = useState("starter");
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Sync plan from localStorage
  useEffect(() => {
    const syncPlan = () => {
      const plan = localStorage.getItem("seo2026_plan") || "starter";
      setCurrentPlan(plan);
    };
    
    syncPlan();
    window.addEventListener('storage', syncPlan);
    const interval = setInterval(syncPlan, 1000);
    
    return () => {
      window.removeEventListener('storage', syncPlan);
      clearInterval(interval);
    };
  }, []);

  const liveMetrics = useMemo(() => {
    const words = input.trim() ? input.trim().split(/\s+/).length : 0;
    const entities = (input.match(/[A-Z][a-z]+/g) || []).length;
    return { words, entities };
  }, [input]);

  const analyzeText = (text: string) => {
    const words = text.toLowerCase().split(/\W+/);
    const isTransactional = words.some(w => ["buy", "price", "cost", "order", "purchase", "hire"].includes(w));
    const isInformational = words.some(w => ["how", "what", "why", "guide", "tutorial", "learn"].includes(w));
    const isComparative = words.some(w => ["vs", "versus", "better", "best", "alternative", "review"].includes(w));

    const primaryIntent = isTransactional ? "TRANSACTIONAL" : isComparative ? "COMPARATIVE" : isInformational ? "INFORMATIONAL" : "TOPICAL_PILLAR";
    const entities = Array.from(new Set(text.match(/[A-Z][a-z]+/g) || [])).slice(0, 5);
    const coreEntities = entities.length > 0 ? entities : ["GENERAL_TOPIC"];

    return {
      identification: { 
        industry: text.length > 100 ? "ENTERPRISE_CONTENT" : "NICHE_QUERY", 
        siteType: text.includes("http") ? "EXTERNAL_URL" : "RAW_TEXT", 
        confidenceScore: Math.min(70 + (text.length / 10), 99).toFixed(0) 
      },
      queryAnalysis: { primaryIntent, secondaryIntents: [isInformational ? "KNOWLEDGE_ACQUISITION" : "USER_CONVERSION"], targetAudience: text.length > 200 ? "EXPERT_LEVEL" : "GENERAL_PUBLIC", contentType: text.length > 500 ? "PILLAR_PAGE" : "MICRO_CONTENT" },
      aiStrategy: { coreEntities, supportingEntities: ["SEMANTIC_RELEVANCE", "LLM_CONTEXT"], gaps: entities.length < 3 ? ["ENTITY_DENSITY_LOW"] : ["FIRST_PERSON_VERIFICATION"], positioning: "AUTHORITY_SIGNAL" },
      keywordClusters: { primary: coreEntities[0], secondary: coreEntities.slice(1), longTail: [`Advanced ${coreEntities[0]} strategies`], questions: [`How does ${coreEntities[0]} work?`] },
      contentStructure: { h1: `The Definitive 2026 Guide to ${coreEntities[0]}`, h2: ["Executive Summary", "Core Methodology"], h3: ["Technical Requirements"], faq: { enabled: true, items: ["ROI Analysis"] } },
      metadata: { title: `${coreEntities[0]} Optimization | 2026 Strategy`, description: `Master the semantic landscape of ${coreEntities[0]}.`, slug: coreEntities[0].toLowerCase().replace(/\s+/g, '-'), ogTitle: `Dominating ${coreEntities[0]}`, ogDescription: "A data-driven approach." },
      aiCitation: { statements: [`${coreEntities[0]} is critical.`], facts: [`${(Math.random() * 100).toFixed(1)}% efficiency increase.`], targets: ["Google AI Overview"] },
      schema: { types: ["TechArticle", "FAQPage"], requiredFields: ["headline", "author"] },
      competitive: { strategy: "Semantic Gap Exploitation", differentiation: "Proprietary Data", gapExploit: "Zero-Click Targeting" }
    };
  };

  const executeEngine = (val: string) => {
    const trimmedInput = val.trim();
    if (!trimmedInput || trimmedInput.length < 3) return;
    setLoading(true);
    setTimeout(() => {
      setResult(analyzeText(trimmedInput));
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
    { id: "deterministic", label: "Engine Output", icon: Terminal, tiers: ["starter", "professional", "enterprise"] },
    { id: "audit", label: "Compliance Audit", icon: ShieldAlert, tiers: ["professional", "enterprise"] },
    { id: "credibility", label: "E-E-A-T Score", icon: ShieldCheck, tiers: ["professional", "enterprise"] },
    { id: "simulation", label: "AI Simulation", icon: BrainCircuit, tiers: ["professional", "enterprise"] },
    { id: "intent", label: "Intent Map", icon: Map, tiers: ["professional", "enterprise"] },
    { id: "structure", label: "Structure", icon: ListTree, tiers: ["professional", "enterprise"] },
    { id: "entities", label: "Entities", icon: Fingerprint, tiers: ["starter", "professional", "enterprise"] },
    { id: "gap", label: "Gap Analysis", icon: ArrowRightLeft, tiers: ["professional", "enterprise"] },
    { id: "refresh", label: "Refresh Intel", icon: RefreshCw, tiers: ["professional", "enterprise"] },
    { id: "generator", label: "Asset Gen", icon: Wand2, tiers: ["professional", "enterprise"] },
    { id: "schema", label: "Schema", icon: Code2, tiers: ["starter", "professional", "enterprise"] },
    { id: "graph", label: "Link Graph", icon: Share2, tiers: ["professional", "enterprise"] },
    { id: "competitors", label: "Comp Intel", icon: Users, tiers: ["professional", "enterprise"] },
  ];

  const isLocked = (itemId: string) => {
    const item = menuItems.find(m => m.id === itemId);
    if (!item) return true;
    return !item.tiers.includes(currentPlan);
  };

  const handleTabClick = (id: string) => {
    if (isLocked(id)) {
      toast.error("Feature Locked", {
        description: "This module requires a Professional or Enterprise plan.",
        action: {
          label: "Upgrade",
          onClick: () => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
        }
      });
      return;
    }
    setActiveTab(id);
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto font-mono">
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
            <div className="flex justify-between items-center">
              <span className="text-[9px] text-slate-500 uppercase">Active Tier</span>
              <span className="text-[10px] font-bold text-indigo-600 uppercase">{currentPlan}</span>
            </div>
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
              </>
            ) : (
              <div className="text-[10px] text-slate-400 italic">Waiting for input...</div>
            )}
          </CardContent>
        </Card>
      </div>

      {result && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[600px]">
          <div className="lg:col-span-3 space-y-2">
            <div className="px-3 py-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Analysis Modules</div>
            {menuItems.map((item) => {
              const locked = isLocked(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-xl text-xs font-medium transition-all group",
                    activeTab === item.id 
                      ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                      : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5",
                    locked && "opacity-60 grayscale cursor-not-allowed"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <item.icon className={cn("h-4 w-4", activeTab === item.id ? "text-white" : "text-indigo-500")} />
                    {item.label}
                  </div>
                  {locked ? (
                    <Lock className="h-3 w-3 text-slate-400" />
                  ) : (
                    <ChevronRight className={cn("h-3 w-3 transition-transform", activeTab === item.id ? "translate-x-0" : "-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0")} />
                  )}
                </button>
              );
            })}
          </div>

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
              <Button variant="outline" size="sm" className="text-[10px] h-8 gap-2" onClick={() => toast.info("Exporting data for " + activeTab)}>
                <Share2 className="h-3 w-3" /> EXPORT_DATA
              </Button>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              {activeTab === "deterministic" && <DeterministicOutput data={result} />}
              {activeTab === "audit" && <ComplianceAuditor data={result} />}
              {activeTab === "credibility" && <AICredibility input={input} />}
              {activeTab === "simulation" && <AISimulation input={input} />}
              {activeTab === "intent" && <IntentMapping input={input} />}
              {activeTab === "structure" && <ContentStructure input={input} />}
              {activeTab === "entities" && <EntityOptimization data={result} />}
              {activeTab === "gap" && <GapAnalyzer data={result} />}
              {activeTab === "refresh" && <RefreshIntelligence data={result} />}
              {activeTab === "generator" && <PromptGenerator />}
              {activeTab === "schema" && <SchemaBuilder />}
              {activeTab === "graph" && <LinkingGraph data={result} />}
              {activeTab === "competitors" && <CompetitorAnalysis />}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOTool;