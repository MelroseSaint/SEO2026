"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { useOnboarding } from "@/context/OnboardingContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  User,
  Mail,
  Zap,
  LogOut,
  BookOpen,
  RotateCcw,
  Shield,
  KeyRound,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const { user, logout } = useAuth();
  const { resetOnboarding } = useOnboarding();
  const navigate = useNavigate();
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white">
      <header className="h-16 border-b border-slate-200 dark:border-white/5 bg-white/90 dark:bg-[#0f0f0f]/90 backdrop-blur-xl flex items-center px-8 sticky top-0 z-30">
        <div>
          <h1 className="text-lg font-bold">Settings</h1>
          <p className="text-[10px] text-slate-500 font-medium">Manage your account and preferences.</p>
        </div>
      </header>

      <main className="p-8 max-w-2xl mx-auto space-y-6">
        {/* Profile */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 block">Name</label>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] font-bold">
                    {user?.name?.charAt(0).toUpperCase() || "U"}
                  </div>
                  <Input value={user?.name || ""} disabled className="rounded-xl h-12 bg-slate-50 dark:bg-white/5 opacity-70" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 block">Email</label>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-slate-400" />
                  <Input value={user?.email || ""} disabled className="rounded-xl h-12 bg-slate-50 dark:bg-white/5 opacity-70" />
                </div>
              </div>
              <p className="text-xs text-slate-400">Profile editing coming soon. Contact support to update your information.</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Security */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <Shield className="h-4 w-4" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <KeyRound className="h-5 w-5 text-emerald-500" />
                  <div>
                    <div className="text-sm font-bold">Password</div>
                    <div className="text-xs text-slate-500">Secured with PBKDF2/SHA-256</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-emerald-500">
                  <CheckCircle2 className="h-4 w-4" />
                  Active
                </div>
              </div>
              <p className="text-xs text-slate-400">Password reset is coming soon. Contact support if you need to change your password.</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Preferences */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card className="border-slate-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a]">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button
                variant="outline"
                onClick={() => {
                  resetOnboarding();
                  toast.success("Onboarding restarted");
                }}
                className="w-full justify-start gap-3 rounded-xl h-12 border-slate-200 dark:border-white/10"
              >
                <RotateCcw className="h-4 w-4 text-[#1877F2]" />
                <span className="text-sm">Restart Onboarding</span>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/docs")}
                className="w-full justify-start gap-3 rounded-xl h-12 border-slate-200 dark:border-white/10"
              >
                <BookOpen className="h-4 w-4 text-[#1877F2]" />
                <span className="text-sm">View Documentation</span>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Logout */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card className="border-red-200 dark:border-red-900/30 bg-white dark:bg-[#1a1a1a]">
            <CardContent className="p-5">
              {!showLogoutConfirm ? (
                <Button
                  variant="ghost"
                  onClick={() => setShowLogoutConfirm(true)}
                  className="w-full justify-start gap-3 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl h-12"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm font-bold">Log Out</span>
                </Button>
              ) : (
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-red-600">Are you sure?</span>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" onClick={() => setShowLogoutConfirm(false)}>Cancel</Button>
                    <Button variant="destructive" size="sm" onClick={logout}>Log Out</Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Settings;
