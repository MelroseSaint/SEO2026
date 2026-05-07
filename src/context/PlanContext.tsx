"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type PlanTier = 'starter' | 'professional' | 'enterprise';

interface PlanContextType {
  plan: PlanTier;
  setPlan: (plan: PlanTier) => void;
}

const PlanContext = createContext<PlanContextType | undefined>(undefined);

export const PlanProvider = ({ children }: { children: React.ReactNode }) => {
  const [plan, setPlanState] = useState<PlanTier>('starter');

  useEffect(() => {
    const savedPlan = localStorage.getItem('seo2026_plan') as PlanTier;
    if (savedPlan) {
      setPlanState(savedPlan);
    }
  }, []);

  const setPlan = (newPlan: PlanTier) => {
    setPlanState(newPlan);
    localStorage.setItem('seo2026_plan', newPlan);
  };

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => {
  const context = useContext(PlanContext);
  if (context === undefined) {
    throw new Error('usePlan must be used within a PlanProvider');
  }
  return context;
};