"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, FileText, Layout, Link as LinkIcon, Code, Check, Copy, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { showSuccess } from "@/utils/toast";

const PromptGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generatedData, setGeneratedData] = useState<any>(null);

  const handleGenerate = () => {
    if (!prompt) return;
    setGenerating(true);
    
    // Simulate AI Generation
    setTimeout(() => {
      setGeneratedData({
        blog: {
          title: `The Ultimate Guide to ${prompt}`,
          content: `In the rapidly evolving landscape of 2026, ${prompt} has emerged as a cornerstone of digital strategy. This guide explores the semantic foundations and AI-driven implications of implementing ${prompt} at scale...`,
          sections: ["Introduction to Semantic Context", "The LLM Impact", "Future-Proofing your Strategy"]
        },
        landing: {
          headline: `Master ${prompt} Today`,
          subheadline: "The only platform built for the next era of search intelligence.",
          cta: "Get Started for Free"
        },
        schema: {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": prompt,
          "description": `Advanced solutions for ${prompt} optimization.`
        },
        linking: [
          { from: "/home", to: "/services", anchor: `Best ${prompt} tools` },
          { from: "/blog", to: "/case-studies", anchor: `${prompt} success stories` }
        ]
      });
      setGenerating(false);
      showSuccess("Assets generated successfully!");
    }, 2000);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    showSuccess("Copied to clipboard!");
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input 
          placeholder="e.g., sustainable blockchain fashion..." 
          className="bg-white dark:bg-white/5 h-12"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button 
          onClick={handleGenerate}
          disabled={generating || !prompt}
          className="bg-indigo-600 hover:bg-indigo-700 gap-2 h-12 px-6"
        >
          {generating ? <RefreshCw className="h-4 w-4 animate-spin" /> : <Wand2 className="h-4 w-4" />}
          Generate Assets
        </Button>
      </div>

      {generatedData ? (
        <Tabs defaultValue="blog" className="w-full animate-in fade-in slide-in-from-bottom-2">
          <TabsList className="grid grid-cols-4 bg-slate-100 dark:bg-white/5 p-1 rounded-xl">
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="landing">Landing</TabsTrigger>
            <TabsTrigger value="schema">Schema</TabsTrigger>
            <TabsTrigger value="linking">Linking</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blog" className="mt-4">
            <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <FileText className="h-4 w-4 text-indigo-500" />
                  {generatedData.blog.title}
                </CardTitle>
                <Button variant="ghost" size="sm" onClick={() => copyToClipboard(generatedData.blog.content)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  {generatedData.blog.content}
                </p>
                <div className="pt-4 border-t border-slate-100 dark:border-white/5">
                  <p className="text-xs font-bold uppercase text-slate-400 mb-2">Key Sections</p>
                  <ul className="space-y-1">
                    {generatedData.blog.sections.map((s: string, i: number) => (
                      <li key={i} className="text-xs flex items-center gap-2">
                        <div className="h-1 w-1 rounded-full bg-indigo-500" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="landing" className="mt-4">
            <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
              <CardContent className="pt-6 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-bold">{generatedData.landing.headline}</h3>
                  <p className="text-slate-500">{generatedData.landing.subheadline}</p>
                </div>
                <div className="flex justify-center">
                  <Button className="bg-indigo-600">{generatedData.landing.cta}</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schema" className="mt-4">
            <Card className="bg-slate-950 border-slate-800">
              <CardContent className="pt-6">
                <pre className="text-xs text-indigo-300 font-mono overflow-x-auto">
                  {JSON.stringify(generatedData.schema, null, 2)}
                </pre>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="linking" className="mt-4">
            <div className="grid gap-4">
              {generatedData.linking.map((link: any, i: number) => (
                <Card key={i} className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
                  <CardContent className="py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <LinkIcon className="h-4 w-4 text-indigo-500" />
                      <span className="text-xs font-mono">{link.from} → {link.to}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px]">{link.anchor}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      ) : (
        <div className="h-48 flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl text-slate-400">
          <Wand2 className="h-8 w-8 mb-2 opacity-20" />
          <p className="text-sm">Enter a topic above to generate full SEO assets</p>
        </div>
      )}
    </div>
  );
};

export default PromptGenerator;