"use client";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { motion } from "framer-motion";
import {
  FolderKanban,
  Plus,
  ArrowRight,
  Trash2,
  MoreHorizontal,
  ExternalLink,
  Clock,
  CheckCircle2,
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/AuthContext";
import EmptyState from "@/components/dashboard/EmptyState";
import type { Id } from "../../convex/_generated/dataModel";

const Projects = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const userId = user?.id as Id<"users"> | undefined;
  const [showCreate, setShowCreate] = useState(false);
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [deleteId, setDeleteId] = useState<Id<"projects"> | null>(null);

  const projects = useQuery(api.projects.getProjects, userId ? { userId } : undefined);
  const createProject = useMutation(api.projects.createProject);
  const deleteProject = useMutation(api.projects.deleteProject);

  const handleCreate = async () => {
    if (!userId || !newName.trim()) return;
    await createProject({
      userId,
      name: newName.trim(),
      description: newDesc.trim() || undefined,
      url: newUrl.trim() || undefined,
    });
    setNewName("");
    setNewDesc("");
    setNewUrl("");
    setShowCreate(false);
  };

  const handleDelete = async (id: Id<"projects">) => {
    await deleteProject({ id });
    setDeleteId(null);
  };

  const projectList = projects ?? [];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white">
      <header className="h-16 border-b border-slate-200 dark:border-white/5 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-30">
        <div>
          <h1 className="text-lg font-bold">Projects</h1>
          <p className="text-[10px] text-slate-500 font-medium">Organize your content by campaign, site, or client.</p>
        </div>
        <Button onClick={() => setShowCreate(true)} className="bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg shadow-blue-500/20 rounded-xl gap-2">
          <Plus className="h-4 w-4" />
          New Project
        </Button>
      </header>

      <main className="p-8 max-w-5xl mx-auto">
        {projectList.length === 0 ? (
          <EmptyState
            icon={FolderKanban}
            title="No projects yet"
            description="Projects group related content analyses together. Create a project for each website, campaign, or client you manage."
            actionLabel="Create First Project"
            onAction={() => setShowCreate(true)}
          />
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-3">
            {projectList.map((project) => (
              <Card key={project._id} className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] hover:border-[#1877F2]/50 transition-colors group">
                <CardContent className="p-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <FolderKanban className="h-5 w-5 text-[#1877F2]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm">{project.name}</h3>
                      {project.description && <p className="text-xs text-slate-500 line-clamp-1">{project.description}</p>}
                      <div className="flex items-center gap-3 mt-1">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${project.status === "active" ? "bg-emerald-500/10 text-emerald-600" : "bg-slate-500/10 text-slate-500"}`}>
                          {project.status}
                        </span>
                        <span className="text-[10px] text-slate-400 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {new Date(project.updatedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => navigate(`/analyze?project=${project._id}`)} className="text-[10px] font-bold text-[#1877F2]">
                      Analyze <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => navigate(`/analyze?project=${project._id}`)}>
                          <ExternalLink className="mr-2 h-4 w-4" /> Analyze Content
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDeleteId(project._id)} className="text-red-600 focus:text-red-600">
                          <Trash2 className="mr-2 h-4 w-4" /> Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        )}
      </main>

      {/* Create Dialog */}
      <Dialog open={showCreate} onOpenChange={setShowCreate}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Create New Project</DialogTitle>
            <DialogDescription>Give your project a name and optional details.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 block">Project Name *</label>
              <Input value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="e.g. Blog Q3 Optimization" className="rounded-xl h-12" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 block">Description</label>
              <Input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} placeholder="Optional description" className="rounded-xl h-12" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 block">Website URL</label>
              <Input value={newUrl} onChange={(e) => setNewUrl(e.target.value)} placeholder="https://example.com" className="rounded-xl h-12" />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <Button variant="ghost" onClick={() => setShowCreate(false)}>Cancel</Button>
            <Button onClick={handleCreate} disabled={!newName.trim() || !userId} className="bg-[#1877F2] hover:bg-[#166fe5] text-white rounded-xl">
              Create Project
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Delete Confirm */}
      <Dialog open={!!deleteId} onOpenChange={() => setDeleteId(null)}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Delete Project?</DialogTitle>
            <DialogDescription>This will permanently delete the project. Analyses linked to this project will remain in your history.</DialogDescription>
          </DialogHeader>
          <div className="flex justify-end gap-3 mt-4">
            <Button variant="ghost" onClick={() => setDeleteId(null)}>Cancel</Button>
            <Button variant="destructive" onClick={() => deleteId && handleDelete(deleteId)}>Delete</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Projects;
