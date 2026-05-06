"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { showSuccess } from "@/utils/toast";

const SchemaBuilder = () => {
  const [copied, setCopied] = useState(false);

  const schemas = {
    article: {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": "The Future of AI Search 2026",
      "author": { "@type": "Organization", "name": "SEO2026" },
      "datePublished": "2025-01-01"
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [{
        "@type": "Question",
        "name": "How does AI search work?",
        "acceptedAnswer": { "@type": "Answer", "text": "AI search uses LLMs to synthesize information..." }
      }]
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    showSuccess("Schema copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="bg-slate-900 border-slate-800 overflow-hidden">
      <CardHeader className="border-b border-slate-800">
        <div className="flex justify-between items-center">
          <CardTitle className="text-white text-lg flex items-center gap-2">
            <Code2 className="h-5 w-5 text-indigo-400" />
            Structured Data Generator
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="article" className="w-full">
          <TabsList className="w-full justify-start rounded-none bg-slate-950 border-b border-slate-800 h-12 px-4">
            <TabsTrigger value="article" className="data-[state=active]:bg-slate-800">Article</TabsTrigger>
            <TabsTrigger value="faq" className="data-[state=active]:bg-slate-800">FAQ</TabsTrigger>
            <TabsTrigger value="product" className="data-[state=active]:bg-slate-800">Product</TabsTrigger>
          </TabsList>
          {Object.entries(schemas).map(([key, val]) => (
            <TabsContent key={key} value={key} className="p-4 m-0">
              <div className="relative group">
                <pre className="p-4 rounded-lg bg-slate-950 text-indigo-300 text-xs overflow-x-auto font-mono leading-relaxed">
                  {JSON.stringify(val, null, 2)}
                </pre>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleCopy(JSON.stringify(val, null, 2))}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default SchemaBuilder;