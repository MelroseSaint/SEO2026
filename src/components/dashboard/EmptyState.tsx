"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon, ArrowRight, Sparkles } from "lucide-react";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel: string;
  onAction: () => void;
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
  illustration?: React.ReactNode;
}

const EmptyState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
  secondaryAction,
  className,
  illustration,
}: EmptyStateProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl border border-dashed border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/[0.02]",
        className
      )}
    >
      {illustration || (
        <div className="relative mb-6">
          <div className="h-20 w-20 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center">
            <Icon className="h-10 w-10 text-[#1877F2]/60" />
          </div>
          <div className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-[#1877F2] flex items-center justify-center">
            <Sparkles className="h-3 w-3 text-white" />
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3">
        <Button
          onClick={onAction}
          className="bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg shadow-blue-500/20 rounded-xl px-6"
        >
          {actionLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        {secondaryAction && (
          <Button
            variant="ghost"
            onClick={secondaryAction.onClick}
            className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
          >
            {secondaryAction.label}
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
