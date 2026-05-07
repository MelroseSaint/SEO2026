"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface OnboardingContextType {
  hasCompletedOnboarding: boolean;
  currentStep: number;
  totalSteps: number;
  completeOnboarding: () => void;
  nextStep: () => void;
  prevStep: () => void;
  skipOnboarding: () => void;
  resetOnboarding: () => void;
  isOpen: boolean;
}

const OnboardingContext = createContext<OnboardingContextType | undefined>(undefined);

const ONBOARDING_KEY = "seo2026_onboarding_completed";
const ONBOARDING_STEP_KEY = "seo2026_onboarding_step";

export const OnboardingProvider = ({ children }: { children: React.ReactNode }) => {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const totalSteps = 6;

  useEffect(() => {
    const saved = localStorage.getItem(ONBOARDING_KEY);
    const savedStep = localStorage.getItem(ONBOARDING_STEP_KEY);
    if (!saved) {
      setHasCompletedOnboarding(false);
      setIsOpen(true);
      if (savedStep) {
        setCurrentStep(parseInt(savedStep, 10));
      }
    }
  }, []);

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
    setIsOpen(false);
    localStorage.setItem(ONBOARDING_KEY, "true");
  };

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      const next = currentStep + 1;
      setCurrentStep(next);
      localStorage.setItem(ONBOARDING_STEP_KEY, String(next));
    } else {
      completeOnboarding();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      const prev = currentStep - 1;
      setCurrentStep(prev);
      localStorage.setItem(ONBOARDING_STEP_KEY, String(prev));
    }
  };

  const skipOnboarding = () => {
    completeOnboarding();
  };

  const resetOnboarding = () => {
    localStorage.removeItem(ONBOARDING_KEY);
    localStorage.removeItem(ONBOARDING_STEP_KEY);
    setHasCompletedOnboarding(false);
    setCurrentStep(0);
    setIsOpen(true);
  };

  return (
    <OnboardingContext.Provider
      value={{
        hasCompletedOnboarding,
        currentStep,
        totalSteps,
        completeOnboarding,
        nextStep,
        prevStep,
        skipOnboarding,
        resetOnboarding,
        isOpen,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
};
