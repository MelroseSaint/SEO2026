"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Gauge, Zap } from "lucide-react";

interface ContentScoreProps {
  score: number;
  label: string;
}

const ContentScore = ({ score, label }: ContentScoreProps) => {
  const data = [
    { value: score },
    { value: 100 - score },
  ];

  const COLORS = ["#6366f1", "#1e293b"];

  return (
    <Card className="bg-slate-950 border-slate-800 overflow-hidden">
      <CardHeader className="py-3 border-b border-slate-800">
        <CardTitle className="text-[10px] uppercase text-slate-500 flex items-center gap-2">
          <Gauge className="h-3 w-3" /> {label}_INDEX
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="h-32 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-end pb-2">
            <span className="text-3xl font-black text-white">{score}</span>
            <span className="text-[8px] text-indigo-400 font-bold uppercase tracking-widest">OPTIMIZED</span>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 p-2 rounded bg-indigo-500/5 border border-indigo-500/10">
          <Zap className="h-3 w-3 text-indigo-500" />
          <p className="text-[9px] text-slate-400 leading-tight">
            Score based on semantic density and LLM extractability.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentScore;