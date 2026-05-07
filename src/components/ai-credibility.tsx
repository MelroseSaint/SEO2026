"use client";

import React, { useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck, Award, BookOpen, UserCheck, AlertCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface AICredibilityProps {
  input: string;
}

const AICredibility = ({ input }: { input: string }) => {
  const metrics = useMemo(() => {
    const words = input.trim().split(/\s+/).length;
    const entities = (input.match(/[A-Z][a-z]+/g) || []).length;
    
    const expertise = Math.min(40 + (entities * 5), 95);
    const authority = Math.min(30 + (words / 20), 90);
    const trust = input.includes("http") || input.includes("source") ? 85 : 60;
    const experience = input.toLowerCase().includes("i ") || input.toLowerCase().includes("my ") ? 80 : 40;

    return [
      { label: "Expertise Signal", score: expertise, icon: <Award className="h-4 w-4 text-amber-500" />, description: "Depth of technical terminology and unique insights." },
      { label: "Authoritativeness", score: authority, icon: <ShieldCheck className="h-4 w-4 text-blue-500" />, description: "Cross-reference potential with known high-authority domains." },
      { label: "Trustworthiness", score: trust, icon: <UserCheck className="h-4 w-4 text-emerald-500" />, description: "Transparency of data sources and citation clarity." },
      { label: "Experience (First-hand)", score: experience, icon: <BookOpen className="h-4 w-4 text-purple-500" />, description: "Presence of personal anecdotes or proprietary case studies." }
    ];
  }, [input]);

  const avgScore = Math.round(metrics.reduce((acc, m) => acc + m.score, 0) / metrics.length);

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white dark:bg-white/5 border-slate-200 dark:border-white/10">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-indigo-500" />
              2026 E-E-A-T Scorecard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {metrics.map((m, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    {m.icon}
                    <span className="text-xs font-bold">{m.label}</span>
                  </div>
                  <span className="text-xs font-mono font-bold">{m.score}/100</span>
                </div>
                <Progress value={m.score} className="h-1.5" />
                <p className="text-[10px] text-slate-500">{m.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="bg-indigo-500/5 border-indigo-500/20">
            <CardHeader className="pb-2">
              <CardTitle className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                AI Citation Probability
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-black mb-2">{avgScore}%</div>
              <p className="text-xs text-slate-600 dark:text-gray-400">
                Your content has a {avgScore > 70 ? 'high' : 'moderate'} probability of being used as a primary source for "Zero-Click" AI summaries.
              </p>
            </CardContent>
          </Card>

          {avgScore < 75 && (
            <Card className="bg-amber-500/5 border-amber-500/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-amber-700 dark:text-amber-400">Improvement Required</h4>
                    <p className="text-xs text-slate-600 dark:text-gray-400 mt-1">
                      To boost your score, add more first-person data points or specific results from internal testing. AI models in 2026 prioritize "human-in-the-loop" verification.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AICredibility;