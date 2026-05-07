"use client";

import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$49",
    description: "Perfect for individual creators and niche sites.",
    features: ["50 Analysis Credits/mo", "Basic Entity Mapping", "Standard Schema Export", "Email Support"],
    cta: "Start Free Trial",
    popular: false
  },
  {
    name: "Professional",
    price: "$149",
    description: "For growing teams and content agencies.",
    features: ["Unlimited Analysis", "Advanced AI Simulation", "Competitor Reverse Engineering", "Priority Support", "API Access"],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solutions for large-scale operations.",
    features: ["Custom LLM Training", "White-label Reports", "Dedicated Strategist", "SLA Guarantees"],
    cta: "Contact Sales",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600 dark:text-slate-400">
            Choose the plan that fits your scale. All plans include our core 2026 engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-3xl border transition-all duration-500 ${
                plan.popular 
                  ? "bg-white dark:bg-slate-900 border-indigo-500 shadow-2xl shadow-indigo-500/10 scale-105 z-10" 
                  : "bg-white dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-slate-500">/mo</span>}
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{plan.description}</p>
              </div>

              <div className="space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-center gap-3 text-sm">
                    <div className="h-5 w-5 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full py-6 rounded-xl font-bold transition-all ${
                  plan.popular 
                    ? "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/20" 
                    : "bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;