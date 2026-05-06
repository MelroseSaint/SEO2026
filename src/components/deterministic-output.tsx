"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Code, FileText } from "lucide-react";
import CopyButton from "./seo-copy-button";

interface DeterministicData {
  queryAnalysis: {
    primaryIntent: string;
    secondaryIntents: string[];
    targetAudience: string;
    contentType: string;
  };
  aiStrategy: {
    coreEntities: string[];
    supportingEntities: string[];
    gaps: string[];
    positioning: string;
  };
  keywordClusters: {
    primary: string;
    secondary: string[];
    longTail: string[];
    questions: string[];
  };
  contentStructure: {
    h1: string;
    h2: string[];
    h3: string[];
    faq: { enabled: boolean; items: string[] };
  };
  metadata: {
    title: string;
    description: string;
    slug: string;
    ogTitle: string;
    ogDescription: string;
  };
  aiCitation: {
    statements: string[];
    facts: string[];
    targets: string[];
  };
  schema: {
    types: string[];
    requiredFields: string[];
  };
  competitive: {
    strategy: string;
    differentiation: string;
    gapExploit: string;
  };
}

const DeterministicOutput = ({ data }: { data: DeterministicData }) => {
  const [view, setView] = useState<"formatted" | "json">("formatted");

  const rawMarkdown = `
### 1. QUERY ANALYSIS
* Primary Intent: ${data.queryAnalysis.primaryIntent}
* Secondary Intent(s): ${data.queryAnalysis.secondaryIntents.join(", ")}
* Target Audience: ${data.queryAnalysis.targetAudience}
* Content Type Recommendation: ${data.queryAnalysis.contentType}

---

### 2. AI SEARCH OPTIMIZATION STRATEGY
* Core Topic Entities: ${data.aiStrategy.coreEntities.join(", ")}
* Supporting Entities: ${data.aiStrategy.supportingEntities.join(", ")}
* Entity Coverage Gaps: ${data.aiStrategy.gaps.join(", ")}
* Semantic Positioning Strategy: ${data.aiStrategy.positioning}

---

### 3. KEYWORD CLUSTERS
* Primary Cluster: ${data.keywordClusters.primary}
* Secondary Clusters: ${data.keywordClusters.secondary.join(", ")}
* Long-tail Queries: ${data.keywordClusters.longTail.join(", ")}
* Question-based Queries: ${data.keywordClusters.questions.join(", ")}

---

### 4. CONTENT STRUCTURE
* H1: ${data.contentStructure.h1}
* H2 Sections: ${data.contentStructure.h2.join(" | ")}
* H3 Subsections: ${data.contentStructure.h3.join(" | ")}
* FAQ Section: ${data.contentStructure.faq.enabled ? "Yes" : "No"} (${data.contentStructure.faq.items.length} items)

---

### 5. METADATA GENERATION
* Title Tag: ${data.metadata.title}
* Meta Description: ${data.metadata.description}
* Slug: ${data.metadata.slug}
* OG Title: ${data.metadata.ogTitle}
* OG Description: ${data.metadata.ogDescription}

---

### 6. AI CITATION OPTIMIZATION
* Extractable Statements: ${data.aiCitation.statements.join(" | ")}
* Citation-Worthy Facts: ${data.aiCitation.facts.join(" | ")}
* Structured Snippet Targets: ${data.aiCitation.targets.join(" | ")}

---

### 7. SCHEMA RECOMMENDATION
* Schema Types: ${data.schema.types.join(", ")}
* Required Fields: ${data.schema.requiredFields.join(", ")}

---

### 8. COMPETITIVE ANGLE
* Likely Competitor Strategy: ${data.competitive.strategy}
* Differentiation Opportunity: ${data.competitive.differentiation}
* Ranking Gap Exploit: ${data.competitive.gapExploit}
  `.trim();

  return (
    <Card className="bg-slate-950 border-slate-800 font-mono text-xs leading-relaxed">
      <div className="p-2 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
        <div className="flex items-center gap-2 px-2">
          <span className="text-indigo-400 font-bold uppercase tracking-widest">Deterministic Engine Output</span>
          <div className="h-4 w-px bg-slate-800 mx-2" />
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-6 px-2 text-[10px] ${view === 'formatted' ? 'text-white bg-slate-800' : 'text-slate-500'}`}
            onClick={() => setView("formatted")}
          >
            <FileText className="h-3 w-3 mr-1" /> FORMATTED
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className={`h-6 px-2 text-[10px] ${view === 'json' ? 'text-white bg-slate-800' : 'text-slate-500'}`}
            onClick={() => setView("json")}
          >
            <Code className="h-3 w-3 mr-1" /> RAW_JSON
          </Button>
        </div>
        <CopyButton text={view === 'formatted' ? rawMarkdown : JSON.stringify(data, null, 2)}>
          {view === 'formatted' ? 'Copy Raw Output' : 'Copy JSON'}
        </CopyButton>
      </div>
      <CardContent className="p-0">
        <ScrollArea className="h-[600px] p-6">
          {view === "formatted" ? (
            <div className="space-y-8 text-slate-300">
              <section>
                <h3 className="text-indigo-400 font-bold mb-2">1. QUERY ANALYSIS</h3>
                <ul className="space-y-1 list-none">
                  <li><span className="text-slate-500">* Primary Intent:</span> {data.queryAnalysis.primaryIntent}</li>
                  <li><span className="text-slate-500">* Secondary Intent(s):</span> {data.queryAnalysis.secondaryIntents.join(", ")}</li>
                  <li><span className="text-slate-500">* Target Audience:</span> {data.queryAnalysis.targetAudience}</li>
                  <li><span className="text-slate-500">* Content Type Recommendation:</span> {data.queryAnalysis.contentType}</li>
                </ul>
              </section>

              <div className="h-px bg-slate-800" />

              <section>
                <h3 className="text-indigo-400 font-bold mb-2">2. AI SEARCH OPTIMIZATION STRATEGY</h3>
                <ul className="space-y-1 list-none">
                  <li><span className="text-slate-500">* Core Topic Entities:</span> {data.aiStrategy.coreEntities.join(", ")}</li>
                  <li><span className="text-slate-500">* Supporting Entities:</span> {data.aiStrategy.supportingEntities.join(", ")}</li>
                  <li><span className="text-slate-500">* Entity Coverage Gaps:</span> {data.aiStrategy.gaps.join(", ")}</li>
                  <li><span className="text-slate-500">* Semantic Positioning Strategy:</span> {data.aiStrategy.positioning}</li>
                </ul>
              </section>

              <div className="h-px bg-slate-800" />

              <section>
                <h3 className="text-indigo-400 font-bold mb-2">3. KEYWORD CLUSTERS</h3>
                <ul className="space-y-1 list-none">
                  <li><span className="text-slate-500">* Primary Cluster:</span> {data.keywordClusters.primary}</li>
                  <li><span className="text-slate-500">* Secondary Clusters:</span> {data.keywordClusters.secondary.join(", ")}</li>
                  <li><span className="text-slate-500">* Long-tail Queries:</span> {data.keywordClusters.longTail.join(", ")}</li>
                  <li><span className="text-slate-500">* Question-based Queries:</span> {data.keywordClusters.questions.join(", ")}</li>
                </ul>
              </section>

              <div className="h-px bg-slate-800" />

              <section>
                <h3 className="text-indigo-400 font-bold mb-2">4. CONTENT STRUCTURE</h3>
                <ul className="space-y-1 list-none">
                  <li><span className="text-slate-500">* H1:</span> {data.contentStructure.h1}</li>
                  <li><span className="text-slate-500">* H2 Sections:</span> {data.contentStructure.h2.join(" | ")}</li>
                  <li><span className="text-slate-500">* H3 Subsections:</span> {data.contentStructure.h3.join(" | ")}</li>
                  <li><span className="text-slate-500">* FAQ Section:</span> {data.contentStructure.faq.enabled ? "Yes" : "No"}</li>
                </ul>
              </section>

              <div className="h-px bg-slate-800" />

              <section>
                <h3 className="text-indigo-400 font-bold mb-2">5. METADATA GENERATION</h3>
                <ul className="space-y-1 list-none">
                  <li><span className="text-slate-500">* Title Tag:</span> {data.metadata.title}</li>
                  <li><span className="text-slate-500">* Meta Description:</span> {data.metadata.description}</li>
                  <li><span className="text-slate-500">* Slug:</span> {data.metadata.slug}</li>
                  <li><span className="text-slate-500">* OG Title:</span> {data.metadata.ogTitle}</li>
                  <li><span className="text-slate-500">* OG Description:</span> {data.metadata.ogDescription}</li>
                </ul>
              </section>

              <div className="h-px bg-slate-800" />

              <section>
                <h3 className="text-indigo-400 font-bold mb-2">6. AI CITATION OPTIMIZATION</h3>
                <ul className="space-y-1 list-none">
                  <li><span className="text-slate-500">* Extractable Statements:</span> {data.aiCitation.statements.join(" | ")}</li>
                  <li><span className="text-slate-500">* Citation-Worthy Facts:</span> {data.aiCitation.facts.join(" | ")}</li>
                  <li><span className="text-slate-500">* Structured Snippet Targets:</span> {data.aiCitation.targets.join(" | ")}</li>
                </ul>
              </section>

              <div className="h-px bg-slate-800" />

              <section>
                <h3 className="text-indigo-400 font-bold mb-2">7. SCHEMA RECOMMENDATION</h3>
                <ul className="space-y-1 list-none">
                  <li><span className="text-slate-500">* Schema Types:</span> {data.schema.types.join(", ")}</li>
                  <li><span className="text-slate-500">* Required Fields:</span> {data.schema.requiredFields.join(", ")}</li>
                </ul>
              </section>

              <div className="h-px bg-slate-800" />

              <section>
                <h3 className="text-indigo-400 font-bold mb-2">8. COMPETITIVE ANGLE</h3>
                <ul className="space-y-1 list-none">
                  <li><span className="text-slate-500">* Likely Competitor Strategy:</span> {data.competitive.strategy}</li>
                  <li><span className="text-slate-500">* Differentiation Opportunity:</span> {data.competitive.differentiation}</li>
                  <li><span className="text-slate-500">* Ranking Gap Exploit:</span> {data.competitive.gapExploit}</li>
                </ul>
              </section>
            </div>
          ) : (
            <pre className="text-indigo-300 text-[10px] leading-tight">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default DeterministicOutput;