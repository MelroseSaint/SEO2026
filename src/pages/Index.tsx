"use client";

import React from "react";
import SEOTool from "@/components/seo-tool";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Sparkles, Zap, Shield, BarChart3 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030303] text-slate-900 dark:text-white selection:bg-indigo-500/30 transition-colors duration-500">
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-400/20 dark:bg-indigo-600/20 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-purple-400/10 dark:bg-purple-600/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30%] bg-gradient-to-t from-indigo-500/5 dark:from-indigo-900/10 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-slate-200 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <span>SEO<span className="text-indigo-600 dark:text-indigo-400">2026</span></span>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-700">
            <Zap className="h-4 w-4" />
            Next-Gen SEO Analysis
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-700 dark:from-white dark:to-white/50">
            Dominate Search in 2026
          </h1>
          <p className="text-slate-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Generate high-performance metadata, keywords, and content strategies 
            tailored for the next era of AI-driven search engines.
          </p>
        </div>

        {/* Main Tool */}
        <SEOTool />

        {/* Features Grid */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-xl dark:hover:bg-white/[0.07] transition-all group">
            <div className="h-12 w-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI-Proof Strategy</h3>
            <p className="text-slate-600 dark:text-gray-400">Optimized for LLM-based search engines and traditional crawlers alike.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-xl dark:hover:bg-white/[0.07] transition-all group">
            <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Trend Forecasting</h3>
            <p className="text-slate-600 dark:text-gray-400">Leverage predictive analytics to stay ahead of shifting user intent.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-xl dark:hover:bg-white/[0.07] transition-all group">
            <div className="h-12 w-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Export</h3>
            <p className="text-slate-600 dark:text-gray-400">One-click copy for all metadata to streamline your workflow.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-200 dark:border-white/5 py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-slate-500 dark:text-gray-500 text-sm">
          <p>© 2024 SEO2026 Discovery Engine. Built for the future of search.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;