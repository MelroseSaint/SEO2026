"use client";

import React, { useState } from "react";
import { Search, Sparkles, Globe, Hash, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import CopyButton from "./seo-copy-button";
import { CopyAllSEOButton } from "./ui/copy-all-seo-button";
import { showSuccess, showError } from "@/utils/toast";

interface SEOResult {
  title: string;
  description: string;
  keywords: string[];
  suggestions: string[];
}

const SEOTool = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SEOResult | null>(null);

  const generateSEO = () => {
    if (!input.trim()) {
      showError("Please enter a description of your site or app.");
      return;
    }

    setLoading(true);
    
    // Simulating AI generation logic for 2026 SEO trends
    setTimeout(() => {
      const mockResult: SEOResult = {
        title: `${input.split(' ').slice(0, 3).join(' ')} | Next-Gen SEO Solutions 2026`,
        description: `Discover the future of ${input.toLowerCase()}. Our platform leverages AI-driven insights to boost your visibility and engagement in the 2026 digital landscape.`,
        keywords: [
          input.split(' ')[0],
          "AI SEO",
          "2026 Trends",
          "Digital Growth",
          "Search Optimization",
          "User Intent"
        ],
        suggestions: [
          "Focus on voice search optimization for long-tail queries.",
          "Implement structured data for AI-powered search engines.",
          "Optimize for 'Zero-Click' search results with concise summaries.",
          "Prioritize mobile-first indexing and core web vitals."
        ]
      };
      
      setResult(mockResult);
      setLoading(false);
      showSuccess("SEO Strategy Generated!");
    }, 1500);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <Card className="border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10 pointer-events-none" />
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-indigo-400" />
            SEO Discovery Engine
          </CardTitle>
          <CardDescription className="text-gray-400">
            Describe your project to generate a 2026-ready SEO strategy.
          </CardDescription>
        </CardHeader>
        <CardContent className="relative space-y-4">
          <Textarea
            placeholder="e.g., A sustainable fashion marketplace for Gen Z using blockchain for transparency..."
            className="min-h-[120px] bg-white/5 border-white/10 focus:border-indigo-500/50 transition-all text-lg"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button 
            onClick={generateSEO} 
            disabled={loading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-lg font-semibold group"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Analyzing Trends...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                Generate Strategy
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {result && (
        <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Globe className="h-5 w-5 text-indigo-400" />
              Generated Metadata
            </h3>
            <CopyAllSEOButton data={result} />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="bg-white/5 border-white/10">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    SEO Title
                  </CardTitle>
                  <CopyButton text={result.title}>Copy</CopyButton>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-white">{result.title}</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <Hash className="h-4 w-4" />
                    Keywords
                  </CardTitle>
                  <CopyButton text={result.keywords.join(", ")}>Copy</CopyButton>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {result.keywords.map((kw, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/20">
                      {kw}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 md:col-span-2">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <Search className="h-4 w-4" />
                    Meta Description
                  </CardTitle>
                  <CopyButton text={result.description}>Copy</CopyButton>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{result.description}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-indigo-950/20 border-indigo-500/20">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-indigo-300 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                2026 Content Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {result.suggestions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SEOTool;