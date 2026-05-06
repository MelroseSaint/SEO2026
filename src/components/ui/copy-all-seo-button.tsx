"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { showSuccess } from "@/utils/toast";

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}

export const CopyAllSEOButton = ({ data }: { data: SEOData }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAll = () => {
    const text = `
SEO Title: ${data.title}
Meta Description: ${data.description}
Keywords: ${data.keywords.join(", ")}
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      showSuccess("All SEO data copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <Button 
      onClick={handleCopyAll}
      variant="outline"
      className="w-full sm:w-auto gap-2 border-indigo-500/30 hover:bg-indigo-500/10 text-indigo-400"
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      {copied ? "Copied All!" : "Copy All Metadata"}
    </Button>
  );
};