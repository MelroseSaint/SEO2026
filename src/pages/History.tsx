"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from "framer-motion";
import {
  History,
  Calendar,
  ArrowRight,
  Loader2,
  BrainCircuit,
  ChevronRight,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import EmptyState from "@/components/dashboard/EmptyState";
import type { Id } from "../../convex/_generated/dataModel";

const OptimizationHistory = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const userId = user?.id as Id<"users"> | undefined;
  const analyses = useQuery(api.analyses.getAnalyses, { userId });
  const [hoveredId, setHoveredId] = React.useState<string | null>(null);

  const history = analyses ?? [];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white">
      <header className="h-16 border-b border-slate-200 dark:border-white/5 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-30">
        <div>
          <h1 className="text-lg font-bold">History</h1>
          <p className="text-[10px] text-slate-500 font-medium">All your past content analyses.</p>
        </div>
        <Button onClick={() => navigate("/analyze")} className="bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg shadow-blue-500/20 rounded-xl gap-2">
          <BrainCircuit className="h-4 w-4" />
          New Analysis
        </Button>
      </header>

      <main className="p-8 max-w-5xl mx-auto">
        {analyses === undefined ? (
          <div className="h-48 flex items-center justify-center">
            <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
          </div>
        ) : history.length === 0 ? (
          <EmptyState
            icon={History}
            title="No history yet"
            description="Every analysis you run is saved here so you can track improvements, compare versions, and revisit past recommendations."
            actionLabel="Run Your First Analysis"
            onAction={() => navigate("/analyze")}
          />
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {history.map((item) => (
              <Card
                key={item._id}
                className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] hover:border-[#1877F2]/50 transition-colors cursor-pointer group"
                onClick={() => navigate(`/report/${item._id}`)}
                onMouseEnter={() => setHoveredId(item._id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <BrainCircuit className="h-5 w-5 text-[#1877F2]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold line-clamp-1 max-w-md">{item.input}</p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase">
                        <Calendar className="h-3 w-3" />
                        {new Date(item.timestamp).toLocaleString()}
                        <span className="text-[#1877F2] capitalize">{item.plan}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`opacity-0 group-hover:opacity-100 transition-opacity ${hoveredId === item._id ? "opacity-100" : ""}`}
                  >
                    View <ChevronRight className="ml-1 h-3 w-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default OptimizationHistory;
