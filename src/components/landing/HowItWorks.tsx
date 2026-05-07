"use client";

import React from "react";
import { Search, Cpu, BarChart, Zap } from "lucide-react";

const steps = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Input Context",
    description: "Paste your content, keywords, or URL. Our engine identifies industry intent instantly."
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI Processing",
    description: "Our deterministic engine maps semantic entities and simulates LLM citation patterns."
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Gap Analysis",
    description: "Identify exactly where your content fails to meet 2026 search credibility standards."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Deploy Assets",
    description: "Export optimized metadata, schema, and content structures ready for deployment."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The 2026 SEO Workflow</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Traditional SEO is dead. We've built the first platform designed for the era of AI-synthesized search results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-indigo-500/50 to-transparent -translate-x-8 z-0" />
              )}
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:shadow-2xl group-hover:shadow-indigo-500/10 transition-all duration-500">
                  <div className="text-indigo-600 dark:text-indigo-400">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;