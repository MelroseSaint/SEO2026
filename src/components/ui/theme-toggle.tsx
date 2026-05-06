"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center space-x-2 bg-slate-100 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-full transition-colors">
      <Sun className={`h-4 w-4 transition-colors ${theme === 'light' ? 'text-yellow-500' : 'text-slate-400'}`} />
      <Switch
        id="theme-mode"
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Moon className={`h-4 w-4 transition-colors ${theme === 'dark' ? 'text-indigo-400' : 'text-slate-400'}`} />
      <Label htmlFor="theme-mode" className="sr-only">Toggle theme</Label>
    </div>
  );
}