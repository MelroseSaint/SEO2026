"use client";

import React from "react";
import { useSearchParams } from "react-router-dom";
import SEOTool from "@/components/seo-tool";

const ContentAnalyzer = () => {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("project");

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white">
      <header className="h-16 border-b border-slate-200 dark:border-white/5 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-xl flex items-center px-8 sticky top-0 z-30">
        <div>
          <h1 className="text-lg font-bold">Content Analyzer</h1>
          <p className="text-[10px] text-slate-500 font-medium">
            Paste content, keywords, or a URL to get an AI search optimization breakdown.
            {projectId && <span className="text-[#1877F2] ml-1">Analyzing for project.</span>}
          </p>
        </div>
      </header>
      <main className="p-8 max-w-7xl mx-auto">
        <SEOTool />
      </main>
    </div>
  );
};

export default ContentAnalyzer;
