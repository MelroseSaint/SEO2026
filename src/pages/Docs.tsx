"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { 
  Book, 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Fingerprint, 
  Code2, 
  Search, 
  ChevronRight,
  Terminal,
  FileText,
  MessageSquare
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">What is SEO2026?</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          SEO2026 is a next-generation discovery engine optimization platform. Unlike traditional SEO tools that focus on keyword density and backlink counts, SEO2026 is built for the era of <strong>Generative Search</strong>.
        </p>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Our platform helps you optimize content for Large Language Models (LLMs) like GPT-4, Claude, and Gemini, ensuring your brand is cited as a primary source in AI-generated summaries.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Zap className="h-4 w-4 text-indigo-500" /> Semantic Authority
            </h4>
            <p className="text-xs text-slate-500">Move beyond keywords to topical clusters that AI models recognize as authoritative.</p>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Cpu className="h-4 w-4 text-purple-500" /> Citation Dominance
            </h4>
            <p className="text-xs text-slate-500">Structure your data so LLMs can easily extract and attribute facts to your domain.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "getting-started",
    title: "Getting Started",
    icon: Zap,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Quick Start Guide</h2>
        <p className="text-slate-600 dark:text-slate-400">Follow these steps to analyze your first piece of content:</p>
        <ol className="space-y-6 mt-4">
          <li className="flex gap-4">
            <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 font-bold">1</div>
            <div>
              <h4 className="font-bold">Input Context</h4>
              <p className="text-sm text-slate-500">Paste your draft content, a target keyword, or a competitor's URL into the main engine input.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 font-bold">2</div>
            <div>
              <h4 className="font-bold">Analyze Modules</h4>
              <p className="text-sm text-slate-500">Navigate through the sidebar modules (Intent Map, Entity Optimization, etc.) to see specific AI-readiness scores.</p>
            </div>
          </li>
          <li className="flex gap-4">
            <div className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center shrink-0 font-bold">3</div>
            <div>
              <h4 className="font-bold">Export Assets</h4>
              <p className="text-sm text-slate-500">Use the "Asset Gen" and "Schema" modules to generate the technical code needed for deployment.</p>
            </div>
          </li>
        </ol>
      </div>
    )
  },
  {
    id: "ai-simulation",
    title: "AI Simulation",
    icon: MessageSquare,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Simulating AI Responses</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Our simulation engine predicts how different AI agents will interpret and summarize your content.
        </p>
        <div className="space-y-4 mt-6">
          <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
            <h4 className="font-bold text-emerald-500">ChatGPT Style</h4>
            <p className="text-sm text-slate-500 mt-1">Focuses on conversational flow and educational depth. Prioritizes "How-to" structures.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
            <h4 className="font-bold text-blue-500">Perplexity Style</h4>
            <p className="text-sm text-slate-500 mt-1">Focuses on real-time data and factual citations. Requires high-density semantic links.</p>
          </div>
          <div className="p-4 rounded-xl border border-slate-200 dark:border-white/10">
            <h4 className="font-bold text-red-500">Google AI Overview</h4>
            <p className="text-sm text-slate-500 mt-1">Focuses on "Zero-Click" utility. Prioritizes bulleted lists and direct answers.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "entities",
    title: "Entity Optimization",
    icon: Fingerprint,
    content: (SectionContent("Entity Optimization", "Entities are the building blocks of the semantic web. Our engine identifies 'Missing' and 'Weak' entities that are critical for establishing topical authority in your niche."))
  },
  {
    id: "eeat",
    title: "2026 E-E-A-T",
    icon: ShieldCheck,
    content: (SectionContent("E-E-A-T Standards", "Experience, Expertise, Authoritativeness, and Trustworthiness have evolved. In 2026, AI models look for 'Human-in-the-loop' signals, proprietary data points, and verifiable first-person experience."))
  },
  {
    id: "schema",
    title: "Structured Data",
    icon: Code2,
    content: (SectionContent("Advanced Schema", "Standard JSON-LD is no longer enough. We generate TechArticle, FAQPage, and Person schema optimized for LLM context windows and RAG (Retrieval-Augmented Generation) systems."))
  }
];

function SectionContent(title: string, text: string) {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{text}</p>
      <div className="h-48 w-full bg-slate-100 dark:bg-white/5 rounded-2xl border border-dashed border-slate-300 dark:border-white/10 flex items-center justify-center">
        <p className="text-xs text-slate-400 italic">Visual guide for {title} coming soon...</p>
      </div>
    </div>
  );
}

const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-slate-900 dark:text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Documentation</h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                        activeSection === section.id 
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20" 
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                      )}
                    >
                      <section.icon className="h-4 w-4" />
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-600 text-white space-y-4">
                <Terminal className="h-6 w-6" />
                <h4 className="font-bold text-sm">Need API Access?</h4>
                <p className="text-xs text-indigo-100">Our developer portal is currently in private beta for Enterprise customers.</p>
                <button className="text-xs font-bold underline">Request Access</button>
              </div>
            </div>
          </aside>

          {/* Content */}
          <main className="lg:col-span-9">
            <div className="max-w-3xl">
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                {sections.find(s => s.id === activeSection)?.content}
              </div>

              <div className="mt-20 pt-8 border-t border-slate-100 dark:border-white/5 flex justify-between items-center">
                <div className="text-sm text-slate-500">
                  Last updated: January 2025
                </div>
                <div className="flex gap-4">
                  <button className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">Edit this page</button>
                  <button className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline">Join Discord</button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Docs;