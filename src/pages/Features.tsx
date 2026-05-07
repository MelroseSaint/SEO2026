"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import {
  Terminal,
  Shield,
  BarChart3,
  Sparkles,
  BrainCircuit,
  Map,
  ListTree,
  Fingerprint,
  ArrowRightLeft,
  RefreshCw,
  Wand2,
  Code2,
  Share2,
  Users,
  Activity,
  Target,
  Lock,
  Zap,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Terminal,
    title: "Deterministic Engine Output",
    description:
      "Get structured, predictable SEO analysis based on your input. The engine breaks down content into semantic clusters, intent mapping, and actionable metadata.",
    highlight: "Core Feature",
  },
  {
    icon: Shield,
    title: "Brand Integrity",
    description:
      "Ensure your brand identity remains consistent across AI-generated social summaries and discovery feeds. Monitor how LLMs perceive and cite your brand.",
    highlight: "Trust",
  },
  {
    icon: BarChart3,
    title: "Viral Forensics",
    description:
      "Analyze the semantic triggers that cause content to be cited as a primary source in trending AI overviews. Understand what makes content spread.",
    highlight: "Analytics",
  },
  {
    icon: Sparkles,
    title: "Asset Deployment",
    description:
      "Generate metadata and schema optimized for the social graph and LLM context windows. Export ready-to-deploy JSON-LD, Open Graph tags, and more.",
    highlight: "Export",
  },
  {
    icon: BrainCircuit,
    title: "AI Simulation",
    description:
      "Simulate how major LLMs will interpret, summarize, and cite your content before you publish. Predict AI-generated snippet behavior.",
    highlight: "Simulation",
  },
  {
    icon: Map,
    title: "Intent Mapping",
    description:
      "Map user queries to transactional, informational, and comparative intents. Align your content strategy with actual search behavior patterns.",
    highlight: "Strategy",
  },
  {
    icon: ListTree,
    title: "Content Structure",
    description:
      "Generate optimal H1/H2/H3 hierarchies, FAQ sections, and content briefs designed for AI-first indexing and featured snippet capture.",
    highlight: "Structure",
  },
  {
    icon: Fingerprint,
    title: "Entity Optimization",
    description:
      "Identify and optimize core entities, supporting entities, and semantic relevance signals. Build topical authority through entity density.",
    highlight: "Semantic",
  },
  {
    icon: ArrowRightLeft,
    title: "Gap Analysis",
    description:
      "Compare your content against competitor strategies. Identify missing topics, weak entity coverage, and underoptimized intent targets.",
    highlight: "Competitive",
  },
  {
    icon: RefreshCw,
    title: "Refresh Intelligence",
    description:
      "Track when your content needs updates based on shifting search landscapes. Get alerts for algorithm changes affecting your rankings.",
    highlight: "Maintenance",
  },
  {
    icon: Wand2,
    title: "Prompt Generator",
    description:
      "Generate production-ready prompts for ChatGPT, Claude, Gemini, and other LLMs tailored to your specific content and SEO goals.",
    highlight: "AI Tools",
  },
  {
    icon: Code2,
    title: "Schema Builder",
    description:
      "Auto-generate structured data markup (JSON-LD) for TechArticle, FAQPage, HowTo, and more. Validate against Google's rich result requirements.",
    highlight: "Technical",
  },
  {
    icon: Share2,
    title: "Linking Graph",
    description:
      "Visualize internal and external link opportunities. Build topic clusters and pillar pages with data-driven interlinking strategies.",
    highlight: "Linking",
  },
  {
    icon: Users,
    title: "Competitor Analysis",
    description:
      "Reverse-engineer competitor content strategies. Discover their entity targets, schema usage, and content structure patterns.",
    highlight: "Intel",
  },
  {
    icon: Shield,
    title: "Compliance Auditor",
    description:
      "Audit your content against E-E-A-T guidelines, accessibility standards, and platform-specific content policies. Stay compliant, stay ranked.",
    highlight: "Audit",
  },
];

const Features = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-600 text-sm font-bold mb-6">
            <Zap className="h-4 w-4" />
            PLATFORM CAPABILITIES
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Everything You Need for <br className="hidden md:block" />
            <span className="text-[#1877F2]">2026 Search</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
            A complete toolkit for the era of AI-synthesized social discovery.
            From entity optimization to schema deployment, every module is built for deterministic results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group p-8 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#1877F2]/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-[#1877F2]" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-white/5 px-2 py-1 rounded">
                  {feature.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 md:p-16 rounded-[2rem] bg-[#1877F2] text-center text-white">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Ready to see it in action?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Start analyzing your content with the full SEO2026 engine right now. No credit card required.
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 bg-white text-[#1877F2] hover:bg-blue-50 px-8 h-14 rounded-xl text-lg font-bold shadow-2xl transition-colors"
          >
            Launch Engine
            <Zap className="h-5 w-5" />
          </a>
        </div>
      </main>
    </div>
  );
};

export default Features;
