"use client";

import { Switch } from "@/components/ui/switch";

export default function ThemeToggle() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };
  
  return (
    <Switch
      checked={document.documentElement.classList.contains("dark")}
      onCheckedChange={toggleDarkMode}
      labelOn="Dark"
      labelOff="Light"
    />
  );
}