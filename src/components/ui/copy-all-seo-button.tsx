"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { showSuccess } from "@/utils/toast";

interface CopyAllSEOButtonProps {
  data: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export const CopyAllSEOButton = ({ data }: CopyAllSEOButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = () => {
    const text = `
Title: ${data.title}
Description: ${data.description}
Keywords: ${data.keywords.join(", ")}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    showSuccess("All metadata copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleCopyAll}
      className="gap-2 border-indigo-500/20 hover:bg-indigo-500/10"
    >
      {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
      Copy All Metadata
    </Button>
  );
};