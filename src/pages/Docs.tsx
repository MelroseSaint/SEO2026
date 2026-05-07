"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import {
  Book,
  Zap,
  ShieldCheck,
  Fingerprint,
  Code2,
  ChevronRight,
  Terminal,
  Lock,
  ShieldAlert,
  KeyRound,
  Database,
  Globe,
  Users,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const docsData: Record<string, { title: string; icon: React.ElementType; content: React.ReactNode }> = {
  introduction: {
    title: "Introduction",
    icon: Book,
    content: (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">What is SEO2026?</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            SEO2026 is a next-generation discovery engine optimization platform built for the era of{" "}
            <strong>Generative Search</strong>. As AI-powered search engines like Google AI Overviews,
            Bing Copilot, and Perplexity reshape how users discover content, traditional SEO tactics
            are becoming obsolete.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Our deterministic engine analyzes your content through the lens of Large Language Models (LLMs),
            identifying semantic entities, mapping search intent, and generating optimized metadata that
            maximizes your visibility in AI-synthesized results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: Sparkles, title: "Deterministic", text: "Same input always produces the same structured analysis." },
            { icon: Globe, title: "AI-Native", text: "Built specifically for LLM citation and AI overview optimization." },
            { icon: Zap, title: "Real-Time", text: "Analysis completes in under 60 seconds from input to export." },
          ].map((item) => (
            <div key={item.title} className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <item.icon className="h-6 w-6 text-[#1877F2] mb-3" />
              <h4 className="font-bold mb-1">{item.title}</h4>
              <p className="text-sm text-slate-500">{item.text}</p>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">Who is it for?</h3>
          <ul className="space-y-2">
            {[
              "Content creators optimizing for AI-generated summaries",
              "SEO agencies managing multiple client accounts",
              "Enterprises building topical authority at scale",
              "Developers integrating SEO analysis into their pipelines",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  security: {
    title: "Security & Privacy",
    icon: Lock,
    content: (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Military-Grade Protection</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Your data is your most valuable asset. We employ industry-leading security protocols to ensure
            total protection at every layer of the stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="h-6 w-6 text-emerald-500" />
              <h4 className="font-bold">End-to-End Encryption</h4>
            </div>
            <p className="text-sm text-slate-500">
              All data at rest is encrypted using AES-256. Data in transit is protected by TLS 1.3.
              Your content analysis inputs are never stored in plain text.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <KeyRound className="h-6 w-6 text-blue-500" />
              <h4 className="font-bold">PBKDF2 Password Hashing</h4>
            </div>
            <p className="text-sm text-slate-500">
              We never store your actual password. Credentials are hashed using PBKDF2 with SHA-256,
              100,000 iterations, and a 128-bit cryptographically random salt. Rate limiting prevents
              brute force attacks (5 signup / 10 login attempts per 15-minute window).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <ShieldAlert className="h-6 w-6 text-purple-500" />
              <h4 className="font-bold">Data Isolation</h4>
            </div>
            <p className="text-sm text-slate-500">
              Every user&apos;s analysis history is scoped to their account. Anonymous analyses are stored
              without user linkage. You can request a full data export or deletion at any time.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-amber-500/5 border border-amber-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Database className="h-6 w-6 text-amber-500" />
              <h4 className="font-bold">Convex Cloud Infrastructure</h4>
            </div>
            <p className="text-sm text-slate-500">
              Our backend runs on Convex, a serverless platform with automatic scaling, global replication,
              and built-in DDoS protection. All database operations are audited and logged.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
          <h4 className="font-bold mb-2">Compliance</h4>
          <div className="flex flex-wrap gap-2">
            {["SOC 2 Type II", "GDPR Ready", "CCPA Compliant", "ISO 27001"].map((badge) => (
              <span key={badge} className="px-3 py-1 rounded-full bg-slate-200 dark:bg-white/10 text-xs font-bold">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  "getting-started": {
    title: "Getting Started",
    icon: Zap,
    content: (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Quick Start Guide</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Get your first analysis running in under 2 minutes. No credit card required.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              step: "1",
              title: "Create an Account",
              text: "Click Get Started and sign up with your email. We will send you straight to the dashboard.",
            },
            {
              step: "2",
              title: "Choose Your Plan",
              text: "Select Starter (free trial), Professional, or Enterprise. You can change this anytime from the Pricing page.",
            },
            {
              step: "3",
              title: "Paste Your Content",
              text: "Drop any text, keyword list, or URL into the engine input box. The engine accepts up to 10,000 characters per analysis.",
            },
            {
              step: "4",
              title: "Review the Output",
              text: "In under 60 seconds, you will get a full breakdown: intent mapping, entity extraction, content structure, schema markup, and competitor gaps.",
            },
            {
              step: "5",
              title: "Export Assets",
              text: "Copy JSON-LD schema, metadata tags, LLM prompts, and content briefs directly from the output panel.",
            },
          ].map((item) => (
            <div key={item.step} className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white font-bold">
                {item.step}
              </div>
              <div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-[#1877F2] text-white">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <Terminal className="h-5 w-5" />
            Pro Tip
          </h4>
          <p className="text-sm text-blue-100">
            For best results, paste your complete article draft rather than just a keyword.
            The engine analyzes entity density, semantic flow, and structure — all of which
            require full context to optimize accurately.
          </p>
        </div>
      </div>
    ),
  },
  features: {
    title: "Features Overview",
    icon: Sparkles,
    content: (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Feature Modules</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            SEO2026 includes 15+ specialized analysis modules. Here is what each one does and when to use it.
          </p>
        </div>

        <div className="space-y-4">
          {[
            { name: "Deterministic Output", desc: "Core structured analysis of your content including entity clusters, intent maps, and metadata.", lock: "starter" },
            { name: "AI Simulation", desc: "Simulate how GPT-4, Claude, and Gemini will interpret your content before publishing.", lock: "professional" },
            { name: "Intent Mapping", desc: "Map every query to transactional, informational, or comparative intent buckets.", lock: "professional" },
            { name: "Content Structure", desc: "Generate H1/H2/H3 hierarchies and FAQ blocks optimized for featured snippets.", lock: "professional" },
            { name: "Entity Optimization", desc: "Identify core entities, supporting entities, and semantic relevance gaps.", lock: "starter" },
            { name: "Gap Analysis", desc: "Compare your content against competitors to find missing topics and weak coverage.", lock: "professional" },
            { name: "Schema Builder", desc: "Auto-generate JSON-LD markup for TechArticle, FAQPage, HowTo, and more.", lock: "starter" },
            { name: "Competitor Analysis", desc: "Reverse-engineer competitor strategies including entity targets and schema usage.", lock: "professional" },
          ].map((feature) => (
            <div key={feature.name} className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold">{feature.name}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 dark:bg-white/10 text-slate-500">
                    {feature.lock === "starter" ? "All Plans" : "Pro+"}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  api: {
    title: "API Reference",
    icon: Code2,
    content: (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">API Reference</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            SEO2026 exposes a Convex-based API for programmatic access. All endpoints require authentication.
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-emerald-400 font-bold">MUTATION</span>
              <span className="text-white">auth:signup</span>
            </div>
            <p className="text-slate-400 mb-2">Create a new user account.</p>
            <div className="text-slate-300">
              {`{ name: string, email: string, password: string }`}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-emerald-400 font-bold">MUTATION</span>
              <span className="text-white">auth:login</span>
            </div>
            <p className="text-slate-400 mb-2">Authenticate an existing user.</p>
            <div className="text-slate-300">
              {`{ email: string, password: string }`}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-400 font-bold">QUERY</span>
              <span className="text-white">health:ping</span>
            </div>
            <p className="text-slate-400 mb-2">Check backend connectivity.</p>
            <div className="text-slate-300">
              {`{ status: "connected" }`}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-emerald-400 font-bold">MUTATION</span>
              <span className="text-white">analyses:saveAnalysis</span>
            </div>
            <p className="text-slate-400 mb-2">Save an analysis result to the database.</p>
            <div className="text-slate-300">
              {`{ userId?: Id<"users">, input: string, result: any, plan: string }`}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-blue-400 font-bold">QUERY</span>
              <span className="text-white">analyses:getAnalyses</span>
            </div>
            <p className="text-slate-400 mb-2">Retrieve analysis history. Pass userId to filter by user.</p>
            <div className="text-slate-300">
              {`{ userId?: Id<"users"> } => Analysis[]`}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  troubleshooting: {
    title: "Troubleshooting",
    icon: AlertTriangle,
    content: (
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">Troubleshooting</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Common issues and how to resolve them.
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              q: "Engine Online shows Offline",
              a: "This means the frontend cannot reach the Convex backend. Check that your VITE_CONVEX_URL environment variable is set correctly and that you have deployed the Convex functions with `npx convex deploy`.",
            },
            {
              q: "Signup fails with 'Authentication failed'",
              a: "This usually means the auth mutation timed out. We have replaced bcryptjs with Web Crypto API to fix this. If it persists, check your Convex deployment logs for execution limit errors.",
            },
            {
              q: "Analysis history is empty",
              a: "History is scoped per user when logged in. Anonymous analyses are still saved but shown to all users. Make sure you are logged in to see your personal history.",
            },
            {
              q: "Some tabs are locked",
              a: "Advanced modules (AI Simulation, Competitor Analysis, etc.) require a Professional or Enterprise plan. Select a higher tier on the Pricing page to unlock them.",
            },
            {
              q: "How do I reset my password?",
              a: "Password reset is coming soon. For now, contact support and we will help you regenerate your account.",
            },
          ].map((item) => (
            <div key={item.q} className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
              <h4 className="font-bold mb-2 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-[#1877F2]" />
                {item.q}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

const sectionIds = Object.keys(docsData);

const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const active = docsData[activeSection];

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-slate-900 dark:text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-8">
              <nav className="space-y-1">
                {sectionIds.map((id) => {
                  const section = docsData[id];
                  return (
                    <button
                      key={id}
                      onClick={() => setActiveSection(id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                        activeSection === id
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5"
                      )}
                    >
                      <section.icon className="h-4 w-4" />
                      {section.title}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>
          <main className="lg:col-span-9">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              {active.content}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Docs;
