"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Zap, Search, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface AISimulationProps {
  input: string;
}

const AISimulation = ({ input }: AISimulationProps) => {
  const simulations = [
    {
      name: "ChatGPT-5 Style",
      icon: <MessageSquare className="h-4 w-4 text-emerald-500" />,
      summary: `The user is looking for ${input}. I would prioritize explaining the "why" behind the concept and providing a step-by-step implementation guide.`,
      sentiment: "Educational / Analytical",
      citationLikelihood: "High"
    },
    {
      name: "Perplexity Style",
      icon: <Zap className="h-4 w-4 text-blue-500" />,
      summary: `Direct answer: ${input} is a trending topic. Key sources would include industry reports and real-time data. I would cite 4-5 authoritative domains.`,
      sentiment: "Factual / Concise",
      citationLikelihood: "Very High"
    },
    {
      name: "Google AI Overview",
      icon: <Search className="h-4 w-4 text-red-500" />,
      summary: `I would generate a "Zero-Click" summary highlighting the core definition of ${input} and provide a "People Also Ask" section immediately below.`,
      sentiment: "Direct / Utility",
      citationLikelihood: "Medium"
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {simulations.map((sim, i) => (
        <Card key={i} className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm font-bold flex items-center gap-2">
                {sim.icon}
                {sim.name}
              </CardTitle>
              <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                {sim.citationLikelihood} Citation
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-slate-600 dark:text-gray-400 leading-relaxed italic">
              "{sim.summary}"
            </p>
            <div className="pt-2 border-t border-slate-100 dark:border-white/5">
              <span className="text-[10px] text-slate-400 uppercase font-bold">Tone Profile</span>
              <p className="text-xs font-medium text-indigo-600 dark:text-indigo-400">{sim.sentiment}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AISimulation;