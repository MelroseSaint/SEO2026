"use client";

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
  ArrowRight,
  FolderKanban,
  ScanSearch,
  Target,
  BrainCircuit,
  Plus,
  Clock,
  BarChart3,
  Zap,
  ChevronRight,
  History,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { usePlan } from "@/context/PlanContext";
import EmptyState from "@/components/dashboard/EmptyState";
import type { Id } from "../../convex/_generated/dataModel";

const QuickAction = ({
  icon: Icon,
  title,
  description,
  onClick,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-[#1877F2]/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all text-left group"
  >
    <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 group-hover:bg-[#1877F2] transition-colors">
      <Icon className="h-5 w-5 text-[#1877F2] group-hover:text-white transition-colors" />
    </div>
    <div>
      <h4 className="text-sm font-bold mb-1">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{description}</p>
    </div>
  </button>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { plan } = usePlan();
  const userId = user?.id as Id<"users"> | undefined;

  const analyses = useQuery(api.analyses.getAnalyses, { userId });
  const projects = useQuery(api.projects.getProjects, { userId: userId! });

  const analysisCount = analyses?.length ?? 0;
  const projectCount = projects?.length ?? 0;
  const recentAnalyses = analyses?.slice(0, 5) ?? [];
  const recentProjects = projects?.slice(0, 3) ?? [];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white">
      <header className="h-16 border-b border-slate-200 dark:border-white/5 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-30">
        <div>
          <h1 className="text-lg font-bold">Dashboard</h1>
          <p className="text-[10px] text-slate-500 font-medium">
            Welcome back{user?.name ? `, ${user.name.split(" ")[0]}` : ""}.
          </p>
        </div>
        <Button
          onClick={() => navigate("/projects/new")}
          className="bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg shadow-blue-500/20 rounded-xl gap-2"
        >
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </header>

      <main className="p-8 max-w-7xl mx-auto space-y-8">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a]">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <ScanSearch className="h-5 w-5 text-[#1877F2]" />
                </div>
                <div>
                  <div className="text-2xl font-black">{analysisCount}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Analyses</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a]">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <FolderKanban className="h-5 w-5 text-emerald-500" />
                </div>
                <div>
                  <div className="text-2xl font-black">{projectCount}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Projects</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a]">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-purple-500" />
                </div>
                <div>
                  <div className="text-2xl font-black capitalize">{plan}</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Current Plan</div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a]">
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-amber-500" />
                </div>
                <div>
                  <div className="text-2xl font-black">
                    {recentAnalyses.length > 0
                      ? new Date(recentAnalyses[0].timestamp).toLocaleDateString()
                      : "—"}
                  </div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Last Analysis</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Actions */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickAction icon={ScanSearch} title="Analyze Content" description="Paste text or a URL to get a full optimization breakdown." onClick={() => navigate("/analyze")} />
            <QuickAction icon={FolderKanban} title="Create Project" description="Organize your content into projects for tracking." onClick={() => navigate("/projects/new")} />
            <QuickAction icon={Target} title="View History" description="Review past analyses and track changes over time." onClick={() => navigate("/history")} />
            <QuickAction icon={Settings} title="Settings" description="Manage your account, plan, and preferences." onClick={() => navigate("/settings")} />
          </div>
        </motion.div>

        {/* Recent Projects */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Recent Projects</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate("/projects")} className="text-[10px] font-bold text-[#1877F2]">
              View All <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </div>

          {projectCount === 0 ? (
            <EmptyState
              icon={FolderKanban}
              title="No projects yet"
              description="Projects help you organize content analyses by campaign, site section, or client. Create your first project to get started."
              actionLabel="Create Your First Project"
              onAction={() => navigate("/projects/new")}
              secondaryAction={{ label: "Learn more", onClick: () => navigate("/docs") }}
            />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {recentProjects.map((project) => (
                <Card key={project._id} className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] hover:border-[#1877F2]/50 transition-colors cursor-pointer" onClick={() => navigate(`/projects/${project._id}`)}>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <FolderKanban className="h-4 w-4 text-[#1877F2]" />
                      </div>
                      <h4 className="font-bold text-sm">{project.name}</h4>
                    </div>
                    {project.description && <p className="text-xs text-slate-500 line-clamp-2 mb-2">{project.description}</p>}
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${project.status === "active" ? "bg-emerald-500/10 text-emerald-600" : "bg-slate-500/10 text-slate-500"}`}>
                        {project.status}
                      </span>
                      <span className="text-[10px] text-slate-400">{new Date(project.updatedAt).toLocaleDateString()}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </motion.div>

        {/* Recent Analyses */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Recent Analyses</h3>
            <Button variant="ghost" size="sm" onClick={() => navigate("/history")} className="text-[10px] font-bold text-[#1877F2]">
              View All <ChevronRight className="ml-1 h-3 w-3" />
            </Button>
          </div>

          {analysisCount === 0 ? (
            <EmptyState
              icon={BarChart3}
              title="No analyses yet"
              description="Run your first content analysis to see entity coverage, intent mapping, and optimization recommendations."
              actionLabel="Analyze Content"
              onAction={() => navigate("/analyze")}
            />
          ) : (
            <div className="space-y-2">
              {recentAnalyses.map((analysis) => (
                <Card key={analysis._id} className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] hover:border-[#1877F2]/50 transition-colors">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                        <BrainCircuit className="h-4 w-4 text-[#1877F2]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium line-clamp-1 max-w-md">{analysis.input}</p>
                        <div className="flex items-center gap-2 text-[10px] text-slate-500">
                          <Clock className="h-3 w-3" />
                          {new Date(analysis.timestamp).toLocaleString()}
                          <span className="text-[#1877F2] capitalize">{analysis.plan}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/report/${analysis._id}`)} className="text-[10px] font-bold text-[#1877F2]">
                      View <ChevronRight className="ml-1 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
