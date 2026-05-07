"use client";

import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  Search,
  BrainCircuit,
  Target,
  FileCode2,
  CheckCircle2,
  Zap,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useOnboarding } from "@/context/OnboardingContext";

const steps = [
  {
    title: "Welcome to SEO2026",
    subtitle: "The future of search is AI-powered. Your optimization strategy should be too.",
    icon: Sparkles,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          SEO2026 is a next-generation discovery engine optimization platform. Unlike traditional SEO tools
          that focus only on keywords and backlinks, we optimize your content for <strong>AI-powered search engines</strong>
          like Google AI Overviews, Bing Copilot, and Perplexity.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: Globe, label: "AI Search Ready", desc: "Optimized for LLM citations" },
            { icon: Zap, label: "Deterministic", desc: "Same input = same results" },
            { icon: BrainCircuit, label: "Entity-Driven", desc: "Semantic optimization" },
            { icon: Target, label: "Intent-Mapped", desc: "Aligned with user goals" },
          ].map((item) => (
            <div key={item.label} className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <item.icon className="h-5 w-5 text-[#1877F2] mb-2" />
              <div className="text-sm font-bold">{item.label}</div>
              <div className="text-[10px] text-slate-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "What is AI Search Optimization?",
    subtitle: "Understanding how AI finds and cites your content",
    icon: BrainCircuit,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          AI search engines do not just match keywords. They <strong>read, understand, and synthesize</strong> content
          to generate answers. To get cited, your content needs to be:
        </p>
        <ul className="space-y-3">
          {[
            { title: "Semantically Rich", desc: "Cover related entities, not just keywords" },
            { title: "Structurally Clear", desc: "Use proper headings, schema, and metadata" },
            { title: "Authority-Backed", desc: "Demonstrate expertise and credibility" },
            { title: "Intent-Aligned", desc: "Answer what the user is actually asking" },
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5">
              <div className="h-6 w-6 rounded-full bg-[#1877F2]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-xs font-bold text-[#1877F2]">{i + 1}</span>
              </div>
              <div>
                <div className="text-sm font-bold">{item.title}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    title: "Semantic Entities",
    subtitle: "The building blocks of AI comprehension",
    icon: Target,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          <strong>Entities</strong> are the people, places, concepts, and things that AI systems recognize and connect.
          When you mention &quot;digital marketing,&quot; AI understands it as an entity connected to &quot;SEO,&quot; &quot;content strategy,&quot;
          and &quot;social media.&quot;
        </p>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <div className="text-xs text-slate-400 mb-3 font-mono">Example: Article about Coffee</div>
          <div className="flex flex-wrap gap-2">
            {["Coffee", "Arabica", "Espresso", "Caffeine", "Roasting", "Barista", "Fair Trade", "Brewing Methods"].map((e) => (
              <span key={e} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
                {e}
              </span>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-3">
            AI systems use these entities to understand your content&apos;s context and relevance.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Search Intent Mapping",
    subtitle: "Understand what your audience really wants",
    icon: Search,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          Every search query has an <strong>intent</strong>. AI search engines categorize intents into types
          and match them to content that best satisfies them.
        </p>
        <div className="grid grid-cols-3 gap-3">
          {[
            { type: "Informational", color: "bg-blue-500", example: "How does AI search work?" },
            { type: "Transactional", color: "bg-emerald-500", example: "Buy SEO2026 subscription" },
            { type: "Comparative", color: "bg-amber-500", example: "SEO2026 vs traditional SEO" },
          ].map((item) => (
            <div key={item.type} className="p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center">
              <div className={`h-1.5 w-full rounded-full ${item.color} mb-3`} />
              <div className="text-xs font-bold mb-1">{item.type}</div>
              <div className="text-[10px] text-slate-500">{item.example}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Metadata & Schema",
    subtitle: "Help AI systems understand your content structure",
    icon: FileCode2,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          <strong>Schema markup</strong> (structured data) tells AI systems exactly what your content is about,
          who wrote it, when it was published, and how it relates to other content.
        </p>
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs overflow-x-auto">
          <pre className="text-blue-300">
{`{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "AI Search Optimization Guide",
  "author": { "@type": "Person", "name": "..." },
  "datePublished": "2026-01-15"
}`}
          </pre>
        </div>
      </div>
    ),
  },
  {
    title: "You are Ready",
    subtitle: "Let us optimize your first piece of content",
    icon: CheckCircle2,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          You now understand the basics of AI search optimization. Here is how to get started:
        </p>
        <div className="space-y-3">
          {[
            { step: "1", action: "Create a Project", desc: "Organize your content into campaigns or site sections" },
            { step: "2", action: "Paste Your Content", desc: "Drop in a blog post, landing page, or keyword list" },
            { step: "3", action: "Review the Analysis", desc: "See entity coverage, intent mapping, and optimization gaps" },
            { step: "4", action: "Export & Deploy", desc: "Copy schema markup, metadata, and LLM prompts" },
          ].map((item) => (
            <div key={item.step} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5">
              <div className="h-8 w-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold text-sm shrink-0">
                {item.step}
              </div>
              <div>
                <div className="text-sm font-bold">{item.action}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

const Onboarding = () => {
  const { currentStep, totalSteps, nextStep, prevStep, skipOnboarding, isOpen } = useOnboarding();

  if (!isOpen) return null;

  const step = steps[currentStep];
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-xl bg-white dark:bg-[#1a1a1a] rounded-3xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10"
      >
        <div className="px-8 pt-8 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-[#1877F2] rounded-lg flex items-center justify-center">
                <step.icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Step {currentStep + 1} of {totalSteps}
              </span>
            </div>
            <button onClick={skipOnboarding} className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
              Skip
            </button>
          </div>
          <Progress value={progress} className="h-1" />
        </div>

        <div className="px-8 py-4">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <h2 className="text-2xl font-black mb-1">{step.title}</h2>
            <p className="text-sm text-slate-500 mb-6">{step.subtitle}</p>
            {step.content}
          </motion.div>
        </div>

        <div className="px-8 pb-8 pt-4 flex items-center justify-between">
          <Button variant="ghost" onClick={prevStep} disabled={currentStep === 0} className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Button onClick={nextStep} className="bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg shadow-blue-500/20 rounded-xl gap-2">
            {currentStep === totalSteps - 1 ? "Get Started" : "Next"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Onboarding;
