"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import {
  Search,
  Cpu,
  BarChart,
  Zap,
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield,
  Globe,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Input Context",
    description:
      "Paste your content, keywords, or URL into the engine. Our system instantly identifies industry intent, content type, and target audience.",
    details: [
      "Supports raw text, URLs, and keyword lists",
      "Auto-detects content language and region",
      "Identifies primary and secondary search intents",
    ],
  },
  {
    number: "02",
    icon: Cpu,
    title: "AI Processing",
    description:
      "The deterministic engine maps semantic entities, simulates LLM citation patterns, and builds a complete optimization profile.",
    details: [
      "Entity extraction and density analysis",
      "LLM behavior simulation (GPT-4, Claude, Gemini)",
      "Semantic cluster identification",
    ],
  },
  {
    number: "03",
    icon: BarChart,
    title: "Gap Analysis",
    description:
      "Compare your content against 2026 search credibility standards. Identify missing entities, weak intent coverage, and structural gaps.",
    details: [
      "Competitor content benchmarking",
      "E-E-A-T score calculation",
      "Content freshness and relevance metrics",
    ],
  },
  {
    number: "04",
    icon: Zap,
    title: "Deploy Assets",
    description:
      "Export optimized metadata, schema markup, content structures, and LLM prompts ready for immediate deployment across all platforms.",
    details: [
      "JSON-LD schema generation",
      "Open Graph and Twitter Card metadata",
      "Production-ready LLM prompts",
    ],
  },
];

const Workflow = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/10 border border-emerald-600/20 text-emerald-600 text-sm font-bold mb-6">
            <Clock className="h-4 w-4" />
            4-STEP PROCESS
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            The 2026 <span className="text-[#1877F2]">SEO Workflow</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
            Traditional SEO is dead. We have built the first platform designed for the era of
            AI-synthesized social discovery. Follow our proven 4-step workflow.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-px h-16 bg-gradient-to-b from-[#1877F2]/50 to-transparent hidden md:block" />
              )}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-2xl bg-[#1877F2] flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <step.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-black text-slate-200 dark:text-slate-800">
                      {step.number}
                    </span>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Deterministic Results",
              text: "Same input always produces the same structured output. No guesswork, no randomness.",
            },
            {
              icon: Globe,
              title: "Multi-Platform Ready",
              text: "Exports work for Google, Bing, social platforms, and private LLM deployments.",
            },
            {
              icon: Clock,
              title: "Under 60 Seconds",
              text: "Complete analysis and asset generation in less than a minute from input to export.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-center"
            >
              <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-6 w-6 text-[#1877F2]" />
              </div>
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 h-14 rounded-xl text-lg font-bold shadow-lg shadow-blue-500/20 transition-colors"
          >
            Try It Now
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Workflow;
