"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { 
  Book, Zap, Cpu, ShieldCheck, Fingerprint, Code2, 
  ChevronRight, Terminal, FileText, MessageSquare, 
  Network, CheckCircle2, Database, Lock, ShieldAlert
} from "lucide-react";
import { cn } from "@/lib/utils";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Book,
    content: (
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">What is SEO2026?</h2>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          SEO2026 is a next-generation discovery engine optimization platform built for the era of <strong>Generative Search</strong>.
        </p>
      </div>
    )
  },
  {
    id: "security",
    title: "Security & Privacy",
    icon: Lock,
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold">Military-Grade Protection</h2>
        <p className="text-slate-600 dark:text-slate-400">
          Your data is your most valuable asset. We employ industry-leading security protocols to ensure total protection.
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="p-6 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="h-6 w-6 text-emerald-500" />
              <h4 className="font-bold">AES-256 Encryption</h4>
            </div>
            <p className="text-sm text-slate-500">All data at rest is encrypted using the Advanced Encryption Standard with 256-bit keys, the same standard used by banks and military organizations.</p>
          </div>
          
          <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/20">
            <div className="flex items-center gap-3 mb-3">
              <Zap className="h-6 w-6 text-blue-500" />
              <h4 className="font-bold">TLS 1.3 in Transit</h4>
            </div>
            <p className="text-sm text-slate-500">Every byte of data moving between your browser and our servers is protected by high-grade Transport Layer Security (TLS) 1.3.</p>
          </div>

          <div className="p-6 rounded-2xl bg-purple-500/5 border border-purple-500/20">
            <div className="flex items-center gap-3 mb-3">
              <ShieldAlert className="h-6 w-6 text-purple-500" />
              <h4 className="font-bold">Salted Password Hashing</h4>
            </div>
            <p className="text-sm text-slate-500">We never store your actual password. We use cryptographically secure salted hashes (Bcrypt) to ensure your credentials remain private even in the event of a breach.</p>
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
        <p className="text-slate-600 dark:text-slate-400">Follow these steps to analyze your first piece of content.</p>
      </div>
    )
  }
];

const Docs = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-slate-900 dark:text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside className="lg:col-span-3">
            <div className="sticky top-28 space-y-8">
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
          </aside>
          <main className="lg:col-span-9">
            <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
              {sections.find(s => s.id === activeSection)?.content}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Docs;