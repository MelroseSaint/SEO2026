"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wand2, FileText, Layout, Link as LinkIcon, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PromptGenerator = () => {
  const [prompt, setPrompt] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input 
          placeholder="I want to rank for 'sustainable blockchain fashion'..." 
          className="bg-white dark:bg-white/5"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button className="bg-indigo-600 hover:bg-indigo-700 gap-2">
          <Wand2 className="h-4 w-4" />
          Generate Assets
        </Button>
      </div>

      <Tabs defaultValue="blog" className="w-full">
        <TabsList className="grid grid-cols-4 bg-slate-100 dark:bg-white/5">
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="landing">Landing</TabsTrigger>
          <TabsTrigger value="schema">Schema</TabsTrigger>
          <TabsTrigger value="linking">Linking</TabsTrigger>
        </TabsList>
        
        <TabsContent value="blog" className="mt-4">
          <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
            <CardHeader>
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <FileText className="h-4 w-4 text-indigo-500" />
                AI-Optimized Blog Post
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-4 w-3/4 bg-slate-100 dark:bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-full bg-slate-100 dark:bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-slate-100 dark:bg-white/5 rounded animate-pulse" />
              <p className="text-xs text-slate-500 italic">Enter a prompt above to generate full content assets...</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="landing" className="mt-4">
          <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
            <CardHeader>
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                <Layout className="h-4 w-4 text-purple-500" />
                Conversion-Focused Landing Page
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-20 bg-slate-100 dark:bg-white/5 rounded animate-pulse" />
                <div className="h-20 bg-slate-100 dark:bg-white/5 rounded animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PromptGenerator;