"use client";

import React from "react";
import SEOTool from "@/components/seo-tool";
import Navbar from "@/components/layout/Navbar";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import { Zap, Sparkles, Shield, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const navigate = useNavigate();

  const scrollToTool = () => {
    const toolSection = document.getElementById('tool');
    if (toolSection) {
      toolSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-500">
      <Navbar />

      {/* Hero Section */}
      <main className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/5 dark:bg-blue-600/5 blur-[120px] rounded-full" />
          <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-red-500/5 dark:bg-red-600/5 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 pt-20 pb-32">
          <div className="text-center space-y-8 mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 dark:text-red-500 text-sm font-bold animate-in fade-in slide-in-from-top-4 duration-700">
              <div className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              LIVE: 2026 SEARCH INTELLIGENCE
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1]">
              The Social <br className="hidden md:block" /> Authority Engine
            </h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Optimizing for the era of AI-synthesized social discovery. 
              Deterministic frameworks for brand citation and viral authority.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={scrollToTool}
                className="bg-[#1877F2] hover:bg-[#166fe5] text-white px-8 h-14 rounded-xl text-lg shadow-xl shadow-blue-500/20 group"
              >
                Start Analyzing Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => navigate("/docs")}
                className="px-8 h-14 rounded-xl text-lg border-slate-200 dark:border-white/10"
              >
                View Documentation
              </Button>
            </div>
          </div>

          {/* Main Tool Interface */}
          <div id="tool" className="relative z-10 scroll-mt-24">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-red-500/5 blur-3xl opacity-20 rounded-[2rem]" />
            <SEOTool />
          </div>
        </div>

        {/* Features Grid */}
        <section id="features" className="py-24 border-y border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-white/[0.01]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-xl transition-all group">
                <div className="h-14 w-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="h-7 w-7 text-[#1877F2]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Brand Integrity</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Ensure your brand identity remains consistent across AI-generated social summaries and discovery feeds.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-xl transition-all group">
                <div className="h-14 w-14 rounded-xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <BarChart3 className="h-7 w-7 text-[#FF0000]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Viral Forensics</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Analyze the semantic triggers that cause content to be cited as a primary source in trending AI overviews.
                </p>
              </div>
              <div className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:shadow-xl transition-all group">
                <div className="h-14 w-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Sparkles className="h-7 w-7 text-[#1877F2]" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Asset Deployment</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Generate metadata and schema optimized for the social graph and LLM context windows.
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
            <div className="relative p-12 md:p-20 rounded-[2rem] bg-[#1877F2] overflow-hidden text-center text-white">
              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-black">Ready to lead the <br /> social search era?</h2>
                <p className="text-blue-100 text-lg md:text-xl">
                  Join 2,000+ forward-thinking SEOs who are already using SEO2026 to secure their future visibility.
                </p>
                <Button 
                  size="lg" 
                  onClick={scrollToTool}
                  className="bg-white text-[#1877F2] hover:bg-blue-50 px-10 h-16 rounded-xl text-xl font-bold shadow-2xl"
                >
                  Get Started for Free
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-100 dark:border-white/5 py-20 bg-slate-50 dark:bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1 space-y-6">
              <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                <div className="h-8 w-8 bg-[#1877F2] rounded-lg flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <span>SEO2026</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                The first deterministic engine for the next era of social search intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><a href="#features" className="hover:text-[#1877F2] transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#1877F2] transition-colors">Pricing</a></li>
                <li><button onClick={() => toast.info("API access is currently in private beta.")} className="hover:text-[#1877F2] transition-colors">API</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><button onClick={() => navigate("/docs")} className="hover:text-[#1877F2] transition-colors">About</button></li>
                <li><button onClick={() => toast.info("Blog is launching next month.")} className="hover:text-[#1877F2] transition-colors">Blog</button></li>
                <li><button onClick={() => toast.info("We are currently hiring!")} className="hover:text-[#1877F2] transition-colors">Careers</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><button onClick={() => toast.info("Privacy Policy updated Jan 2025.")} className="hover:text-[#1877F2] transition-colors">Privacy</button></li>
                <li><button onClick={() => toast.info("Terms of Service updated Jan 2025.")} className="hover:text-[#1877F2] transition-colors">Terms</button></li>
                <li><button onClick={() => toast.info("Security audit completed Dec 2024.")} className="hover:text-[#1877F2] transition-colors">Security</button></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-200 dark:border-white/5 text-center text-slate-500 text-sm">
            <p>© 2025 SEO2026 Discovery Engine. Built for the future of social search.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;