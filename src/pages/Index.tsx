"use client";

import React from "react";
import SEOTool from "@/components/seo-tool";
import Navbar from "@/components/layout/Navbar";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import { Zap, Sparkles, Shield, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const scrollToTool = () => {
    const toolSection = document.getElementById('tool');
    if (toolSection) {
      toolSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDocsClick = () => {
    toast.info("Documentation is being updated for the 2026 engine. Check back soon!");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#030303] text-slate-900 dark:text-white selection:bg-indigo-500/30 transition-colors duration-500">
      <Navbar />

      {/* Hero Section */}
      <main className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-400/10 dark:bg-indigo-600/10 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-purple-400/5 dark:bg-purple-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="text-center space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-sm font-semibold animate-in fade-in slide-in-from-top-4 duration-700">
              <Zap className="h-4 w-4" />
              The Future of Search is Here
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-white/40 leading-[1.1]">
              Dominate AI Search <br className="hidden md:block" /> in 2026
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Stop optimizing for crawlers. Start optimizing for LLMs. SEO2026 is the first 
              deterministic engine for semantic authority and AI citation dominance.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToTool}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 h-14 rounded-2xl text-lg shadow-2xl shadow-indigo-500/20 group"
              >
                Start Analyzing Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={handleDocsClick}
                className="px-8 h-14 rounded-2xl text-lg border-slate-200 dark:border-white/10"
              >
                View Documentation
              </Button>
            </div>
          </div>

          {/* Main Tool Interface */}
          <div id="tool" className="relative z-10 scroll-mt-24">
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl opacity-20 rounded-[4rem]" />
            <SEOTool />
          </div>
        </div>

        {/* Features Grid */}
        <section id="features" className="py-24 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-2xl transition-all group">
                <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-7 w-7 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">AI-Proof Strategy</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Optimized for LLM-based search engines like Perplexity, ChatGPT Search, and Google AI Overviews.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-2xl transition-all group">
                <div className="h-14 w-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Trend Forecasting</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Leverage predictive analytics to stay ahead of shifting user intent and semantic relationship changes.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-2xl transition-all group">
                <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Instant Export</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  One-click copy for all metadata, schema, and content structures to streamline your entire workflow.
                </p>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Pricing />

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="relative p-12 md:p-20 rounded-[3rem] bg-indigo-600 overflow-hidden text-center text-white">
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-black">Ready to lead the <br /> AI search era?</h2>
                <p className="text-indigo-100 text-lg md:text-xl">
                  Join 2,000+ forward-thinking SEOs who are already using SEO2026 to secure their future visibility.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToTool}
                  className="bg-white text-indigo-600 hover:bg-indigo-50 px-10 h-16 rounded-2xl text-xl font-bold shadow-2xl"
                >
                  Get Started for Free
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 dark:border-white/5 py-20 bg-slate-50 dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1 space-y-6">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                <div className="h-8 w-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span>SEO2026</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                The first deterministic engine for the next era of search intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#features" className="hover:text-indigo-600 transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                <li><button onClick={() => toast.info("API access is currently in private beta.")} className="hover:text-indigo-600 transition-colors">API</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><button onClick={() => toast.info("About page coming soon.")} className="hover:text-indigo-600 transition-colors">About</button></li>
                <li><button onClick={() => toast.info("Blog is launching next month.")} className="hover:text-indigo-600 transition-colors">Blog</button></li>
                <li><button onClick={() => toast.info("We are currently hiring! Send your CV to careers@seo2026.ai")} className="hover:text-indigo-600 transition-colors">Careers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><button onClick={() => toast.info("Privacy Policy updated Jan 2025.")} className="hover:text-indigo-600 transition-colors">Privacy</button></li>
                <li><button onClick={() => toast.info("Terms of Service updated Jan 2025.")} className="hover:text-indigo-600 transition-colors">Terms</button></li>
                <li><button onClick={() => toast.info("Security audit completed Dec 2024.")} className="hover:text-indigo-600 transition-colors">Security</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 dark:border-white/5 text-center text-slate-500 text-sm">
            <p>© 2025 SEO2026 Discovery Engine. Built for the future of search.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;