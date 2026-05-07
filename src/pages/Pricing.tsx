"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Check, Zap, ArrowRight, Sparkles, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { usePlan } from "@/context/PlanContext";

const plans = [
  {
    id: "starter" as const,
    name: "Starter",
    price: "$49",
    period: "/mo",
    description: "Perfect for individual creators and niche sites.",
    features: [
      "50 Analysis Credits/mo",
      "Basic Entity Mapping",
      "Standard Schema Export",
      "Email Support",
      "1 User Seat",
      "Community Access",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "professional" as const,
    name: "Professional",
    price: "$149",
    period: "/mo",
    description: "For growing teams and content agencies.",
    features: [
      "Unlimited Analysis",
      "Advanced AI Simulation",
      "Competitor Reverse Engineering",
      "Priority Support",
      "API Access",
      "5 User Seats",
      "Custom Reports",
      "Webhook Integrations",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "enterprise" as const,
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Custom solutions for large-scale operations.",
    features: [
      "Custom LLM Training",
      "White-label Reports",
      "Dedicated Strategist",
      "SLA Guarantees",
      "Unlimited Users",
      "SSO & SAML",
      "On-premise Option",
      "24/7 Phone Support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingPage = () => {
  const { plan: currentPlanId, setPlan } = usePlan();

  const handlePlanSelect = (planId: "starter" | "professional" | "enterprise") => {
    setPlan(planId);
    if (planId === "enterprise") {
      toast.success("Enterprise Mode Activated", {
        description: "All advanced modules are now unlocked for your session.",
      });
    } else {
      toast.success("Plan updated!", {
        description: "The SEO Engine is now configured for your tier.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0f0f0f] text-slate-900 dark:text-white">
      <Navbar />
      <main className="container mx-auto px-4 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-600 text-sm font-bold mb-6">
            <Sparkles className="h-4 w-4" />
            TRANSPARENT PRICING
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6">
            Simple, <span className="text-[#1877F2]">Predictable</span> Pricing
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed">
            Choose the plan that fits your scale. All plans include our core 2026 engine.
            No hidden fees, no surprise charges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative p-8 rounded-[2rem] border transition-all duration-500 ${
                plan.popular
                  ? "bg-white dark:bg-slate-900 border-[#1877F2] shadow-2xl shadow-[#1877F2]/10 scale-105 z-10"
                  : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
              } ${currentPlanId === plan.id ? "ring-2 ring-[#1877F2] ring-offset-4 dark:ring-offset-slate-950" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#1877F2] text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  {currentPlanId === plan.id && (
                    <span className="text-[10px] font-bold text-[#1877F2] bg-blue-50 dark:bg-blue-500/10 px-2 py-0.5 rounded">
                      CURRENT
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-slate-500">{plan.period}</span>}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm">
                    <div className="h-5 w-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-[#1877F2]" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                onClick={() => handlePlanSelect(plan.id)}
                disabled={currentPlanId === plan.id}
                className={`w-full py-6 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? "bg-[#1877F2] hover:bg-[#166fe5] text-white shadow-lg shadow-blue-500/20"
                    : "bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white"
                }`}
              >
                {currentPlanId === plan.id ? "Active Plan" : plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 text-center max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-emerald-500" />
            <span className="font-bold">Enterprise Security Included</span>
          </div>
          <p className="text-sm text-slate-500">
            All plans include TLS 1.3 encryption, PBKDF2 password hashing, SOC 2 Type II compliance,
            and automatic data backups. Your content is always protected.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default PricingPage;
