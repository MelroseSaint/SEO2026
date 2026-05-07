"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileJson, FileText } from "lucide-react";
import { showSuccess } from "@/utils/toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ExportButtonProps {
  data: any;
}

const ExportButton = ({ data }: ExportButtonProps) => {
  const exportAsJSON = () => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `seo-strategy-${data.metadata.slug}.json`;
    a.click();
    showSuccess("JSON Strategy Exported");
  };

  const exportAsMarkdown = () => {
    const content = `
# SEO 2026 Strategy Report: ${data.metadata.title}

## Metadata
- Title: ${data.metadata.title}
- Description: ${data.metadata.description}
- Slug: ${data.metadata.slug}

## AI Strategy
- Core Entities: ${data.aiStrategy.coreEntities.join(", ")}
- Positioning: ${data.aiStrategy.positioning}

## Content Structure
- H1: ${data.contentStructure.h1}
${data.contentStructure.h2.map((h: string) => `### ${h}`).join("\n")}

## AI Citations
${data.aiCitation.facts.map((f: string) => `- ${f}`).join("\n")}
    `.trim();

    const blob = new Blob([content], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `seo-report-${data.metadata.slug}.md`;
    a.click();
    showSuccess("Markdown Report Exported");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2 border-slate-800 bg-slate-950 text-slate-400 hover:text-white">
          <Download className="h-4 w-4" />
          EXPORT_REPORT
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-slate-950 border-slate-800 text-slate-300">
        <DropdownMenuItem onClick={exportAsJSON} className="gap-2 cursor-pointer focus:bg-slate-900 focus:text-white">
          <FileJson className="h-4 w-4" /> Export as JSON
        </DropdownMenuItem>
        <DropdownMenuItem onClick={exportAsMarkdown} className="gap-2 cursor-pointer focus:bg-slate-900 focus:text-white">
          <FileText className="h-4 w-4" /> Export as Markdown
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ExportButton;