"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldAlert, CheckCircle2, XCircle, AlertTriangle, Gauge } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface ComplianceAuditorProps {
  data: any;
}

const ComplianceAuditor = ({ data }: ComplianceAuditorProps) => {
  const checks = [
    { 
      id: "ENT_01", 
      name: "Entity Density", 
      status: data.aiStrategy.coreEntities.length >= 3 ? "PASS" : "FAIL",
      desc: "Minimum 3 core entities required for semantic clustering."
    },
    { 
      id: "SCH_01", 
      name: "Schema Completeness", 
      status: data.schema.types.includes("TechArticle") ? "PASS" : "WARN",
      desc: "TechArticle schema recommended for high-authority citation."
    },
    { 
      id: "CIT_01", 
      name: "Citation Readiness", 
      status: data.aiCitation.facts.length >= 2 ? "PASS" : "FAIL",
      desc: "Minimum 2 verifiable facts required for LLM extraction."
    },
    { 
      id: "INT_01", 
      name: "Intent Alignment", 
      status: "PASS",
      desc: "Primary intent matches content type recommendation."
    }
  ];

  const score = Math.round((checks.filter(c => c.status === "PASS").length / checks.length) * 100);

  return (
    <div className="space-y-6 font-mono">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-slate-950 border-slate-800 md:col-span-2">
          <CardHeader className="border-b border-slate-800">
            <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-400">
              <ShieldAlert className="h-4 w-4" />
              COMPLIANCE_CHECKLIST_v1.0
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-800">
              {checks.map((check) => (
                <div key={check.id} className="p-4 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500">[{check.id}]</span>
                      <span className="text-xs font-bold text-slate-300">{check.name}</span>
                    </div>
                    <p className="text-[10px] text-slate-500">{check.desc}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold ${
                      check.status === 'PASS' ? 'text-emerald-500' : 
                      check.status === 'FAIL' ? 'text-red-500' : 'text-amber-500'
                    }`}>
                      {check.status}
                    </span>
                    {check.status === 'PASS' ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : 
                     check.status === 'FAIL' ? <XCircle className="h-4 w-4 text-red-500" /> : 
                     <AlertTriangle className="h-4 w-4 text-amber-500" />}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-950 border-slate-800">
          <CardHeader>
            <CardTitle className="text-sm font-bold flex items-center gap-2 text-indigo-400">
              <Gauge className="h-4 w-4" />
              AUDIT_SCORE
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-5xl font-black text-white mb-2">{score}%</div>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Compliance Rating</p>
            </div>
            <Progress value={score} className="h-2 bg-slate-800" />
            <div className="p-3 rounded bg-indigo-500/5 border border-indigo-500/20">
              <p className="text-[10px] text-indigo-300 leading-relaxed">
                {score === 100 ? "STRATEGY_OPTIMAL: Ready for deployment." : "REFINEMENT_REQUIRED: Address FAIL/WARN status codes."}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComplianceAuditor;