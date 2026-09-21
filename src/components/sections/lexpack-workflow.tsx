'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Lock,
  Clock,
  Eye,
  Scale,
  MessageSquare,
  Wallet,
  Users,
  Check,
  FileCheck2,
  ShieldAlert,
  Send,
  Zap,
  ChevronRight,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TrademarkBadge } from '@/components/ui/trademark-badge';

export function LexPackWorkflowSection() {
  const [activeTab, setActiveTab] = useState<'steps' | 'safeguards'>('steps');
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const workflowSteps = [
    {
      step: '01',
      phase: 'Intake & Scoping',
      title: 'Submit Work with Automated ClamAV Antivirus Scan',
      route: '#new-matter',
      badge: 'Client Portal Console',
      badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      icon: FileText,
      description:
        'Log in to your secure Client Workspace Cockpit and initiate a new request in under two minutes. Couple strategic context (Matter) with a scoped production task (Job).',
      keyFeatures: [
        'Automatic ClamAV antivirus quarantine scanning on every uploaded brief/file',
        'Direct SLA tier selection: Express (12–24h), Priority (24h), or Standard (48h)',
        'Full multi-jurisdictional tagging: US Federal/State, Canada (Common Law & Quebec), UK & Wales',
        'Complete mutual NDA protection and encrypted storage isolation',
      ],
      output: 'Quarantined & verified brief ready for legal lead scoping',
    },
    {
      step: '02',
      phase: 'Estimation & Lock',
      title: 'Lextimator™ Analysis & Confirmed Fixed Price',
      route: 'Lextimator™ Engine',
      badge: 'Zero Hourly Drift',
      badgeColor: 'bg-[#E5A91E]/15 text-[#E5A91E] border-[#E5A91E]/30',
      icon: Scale,
      description:
        'Lextimator™ conducts preliminary AI analysis of assignment scope, density, and turnaround. For complex requirements, a Senior Legal Lead validates the scope to provide an upfront Confirmed Fixed Price before work begins.',
      keyFeatures: [
        'Locked Confirmed Fixed Price — zero billable hour drift or hidden administrative fees',
        'Transparent preliminary scope & turnaround estimate produced via Lextimator™',
        'One-click digital quote confirmation inside your Client Workspace',
        'Immediate conflict-of-interest check executed across institutional records',
      ],
      output: 'Confirmed Fixed Price locked; legal capacity or assignment payment confirmed',
    },
    {
      step: '03',
      phase: 'Production & Security',
      title: 'Supervised Legal Execution & Secure Forensic Watermarking',
      route: '#matters / #documents',
      badge: 'Senior Advocate QA',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: ShieldCheck,
      description:
        'Specialized paralegals and legal researchers execute your research, contract review, or pleading drafting under strict Senior Advocate supervision and multi-tier quality control.',
      keyFeatures: [
        'Complete segregation of client-uploaded raw files from finalized work product',
        'On-the-fly Secure Forensic Watermarking stamped on all preview & download documents',
        'Every document carries a secure forensic watermark, uniquely identifiable and traceable through Lexocrates’ internal systems.',
        'Rigorous two-tier internal QA review before draft reaches your desk',
      ],
      output: 'High-fidelity deliverable submitted to Approvals Room',
    },
    {
      step: '04',
      phase: 'Review & Governance',
      title: 'Two-Button Approvals Room & Contextual Messaging',
      route: '#approvals / #messages',
      badge: 'You Retain 100% Control',
      badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      icon: FileCheck2,
      description:
        'Institutional clients retain complete quality control. Review completed drafts in the Approvals Room and make instant decisions using our streamlined two-button decision gate.',
      keyFeatures: [
        'Simple Two-Button Decision Gate: [Approve Deliverable] or [Request Revision]',
        'Free iterative revisions within standard scope until fully satisfied',
        'Contextual real-time encrypted messaging directly connected to the matter',
        'Live timestamped communication log eliminating lost email threads',
      ],
      output: 'Client sign-off achieved or rapid revision cycle initiated',
    },
    {
      step: '05',
      phase: 'Settlement & Audit',
      title: 'Prepaid Legal Capacity Deduction & Cryptographic WORM Audit',
      route: '#lexpack / #billing',
      badge: 'Capacity Never Expires',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      icon: Wallet,
      description:
        'Upon your final approval, legal capacity is seamlessly deducted from your prepaid balance (or settled individually). Receive automated tax-compliant invoices and immutable WORM audit trails.',
      keyFeatures: [
        'Deduction occurs ONLY when you approve the final deliverable',
        'Prepaid Legal Capacity carries over indefinitely — zero monthly expiration or retainer traps',
        'Write-Once-Read-Many (WORM) audit trail logs every file upload, access, and sign-off',
        'Instant download of itemized, exportable GST/tax invoices for corporate accounting',
      ],
      output: 'Final production deliverable released + immutable audit receipt',
    },
  ];

  const safeguards = [
    {
      icon: ShieldCheck,
      title: 'Secure Forensic Watermarking',
      tag: 'Data Leak Prevention',
      desc: 'Every document carries a secure forensic watermark, uniquely identifiable and traceable through Lexocrates’ internal systems.',
    },
    {
      icon: ShieldAlert,
      title: 'ClamAV Antivirus Quarantine',
      tag: 'Zero Malware Hygiene',
      desc: 'All source briefs and exhibits undergo automated heuristic virus scanning before entering associate queues or production environments.',
    },
    {
      icon: CheckCircle2,
      title: 'Two-Button Decision Gate',
      tag: 'Institutional Quality Control',
      desc: 'You maintain absolute sign-off authority. Approve deliverables with one click or trigger immediate revision windows with full associate accountability.',
    },
    {
      icon: MessageSquare,
      title: 'Matter-Tethered Messaging',
      tag: 'Contextual Real-Time Chat',
      desc: 'Communicate directly with your assigned Senior Legal Lead inside encrypted threads linked specifically to the relevant matter container.',
    },
    {
      icon: Wallet,
      title: 'Prepaid Legal Capacity',
      tag: '7%–28% Pricing Advantage',
      desc: 'Pre-purchase legal capacity with a 7% to 28% pricing advantage. Your prepaid balance never expires, carries zero recurring subscription fees, and rolls over seamlessly.',
    },
    {
      icon: Lock,
      title: 'Cryptographic WORM Logs',
      tag: 'Regulatory Compliance',
      desc: 'Write-Once-Read-Many immutable audit records preserve forensic timestamps for every upload, quotation, review, and approval for compliance audits.',
    },
  ];

  return (
    <section
      id="workflow"
      className="relative py-16 sm:py-24 bg-white text-foreground border-t border-black/5 overflow-hidden scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-montserrat font-black uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL PROTOCOL &amp; CLIENT GOVERNANCE</span>
          </div>

          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-primary leading-tight">
            How LexPack<TrademarkBadge className="w-3.5 h-3.5 sm:w-4 sm:h-4 -translate-y-2 sm:-translate-y-2.5 ml-0.5 text-accent inline-block" /> Works <br className="hidden sm:inline" />
            <span className="text-accent">Prepaid Legal Capacity with 7%–28% Advantage</span>
          </h2>

          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Prepay for ongoing legal work and save more. Every assignment follows a battle-tested, 5-stage institutional workflow with Lextimator™ estimation, confirmed fixed prices, senior advocate supervision, and our two-button Approvals Room.
          </p>

          {/* View Toggles */}
          <div className="pt-3 flex items-center justify-center gap-2">
            <div className="p-1.5 rounded-2xl bg-slate-100 border border-slate-200 inline-flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('steps')}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-montserrat font-bold transition-all duration-300 flex items-center gap-2",
                  activeTab === 'steps'
                    ? "bg-primary text-white shadow-md"
                    : "text-primary/70 hover:text-primary hover:bg-slate-200/50"
                )}
              >
                <Zap className="w-4 h-4" />
                <span>5-Stage Client Journey</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('safeguards')}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs sm:text-sm font-montserrat font-bold transition-all duration-300 flex items-center gap-2",
                  activeTab === 'safeguards'
                    ? "bg-primary text-white shadow-md"
                    : "text-primary/70 hover:text-primary hover:bg-slate-200/50"
                )}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Institutional Safeguards &amp; Security</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: 5-Stage Client Journey */}
        <AnimatePresence mode="wait">
          {activeTab === 'steps' && (
            <motion.div
              key="steps-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-12 space-y-8"
            >
              {/* Step Navigation Cards (Desktop / Tablet) */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {workflowSteps.map((s, idx) => {
                  const isSelected = selectedStep === idx;
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.step}
                      type="button"
                      onClick={() => setSelectedStep(idx)}
                      className={cn(
                        "p-4 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden flex flex-col justify-between",
                        isSelected
                          ? "bg-white border-2 border-accent shadow-lg shadow-accent/10 ring-2 ring-accent/15"
                          : "bg-slate-50/70 border-slate-200 hover:border-slate-300 hover:bg-white text-foreground/60 shadow-xs"
                      )}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={cn(
                          "font-montserrat font-black text-xs px-2.5 py-0.5 rounded-lg",
                          isSelected ? "bg-accent text-primary" : "bg-slate-200/80 text-primary font-bold"
                        )}>
                          Step {s.step}
                        </span>
                        <Icon className={cn("w-4 h-4", isSelected ? "text-accent" : "text-foreground/40")} />
                      </div>
                      <div>
                        <div className={cn(
                          "text-[10px] font-black uppercase tracking-wider mb-0.5",
                          isSelected ? "text-accent" : "text-foreground/50"
                        )}>
                          {s.phase}
                        </div>
                        <h4 className={cn(
                          "text-xs sm:text-[13px] font-bold font-montserrat leading-tight line-clamp-2",
                          isSelected ? "text-primary" : "text-foreground/80"
                        )}>
                          {s.title}
                        </h4>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Detailed Card */}
              {(() => {
                const step = workflowSteps[selectedStep];
                const StepIcon = step.icon;

                return (
                  <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-50/70 border border-slate-200 shadow-xl relative overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Left Details */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-montserrat font-black text-xs px-3 py-1 rounded-lg bg-accent text-primary">
                            STAGE {step.step} OF 05
                          </span>
                          <span className={cn("text-xs font-bold px-2.5 py-1 rounded-md border", step.badgeColor)}>
                            {step.badge}
                          </span>
                          <span className="text-[11px] text-primary/70 font-mono bg-white px-2.5 py-1 rounded-md border border-slate-200">
                            {step.route}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-montserrat text-primary leading-snug">
                          {step.title}
                        </h3>

                        <p className="text-foreground/70 text-sm sm:text-base leading-relaxed font-medium">
                          {step.description}
                        </p>

                        <div className="pt-2 space-y-2.5">
                          <p className="text-[11px] font-montserrat font-black text-accent uppercase tracking-wider">
                            Verified Protocol Actions:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {step.keyFeatures.map((feat, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-foreground/80 font-medium">
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                <span className="leading-snug">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <div className="text-xs bg-white border border-slate-200 px-4 py-2.5 rounded-xl text-primary font-semibold flex items-center gap-2 shadow-xs">
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span><strong>Milestone Gate:</strong> {step.output}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Visual Summary Card */}
                      <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-md space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                          <div className="flex items-center gap-2.5">
                            <div className="w-10 h-10 rounded-xl bg-accent/15 flex items-center justify-center text-accent">
                              <StepIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-xs font-montserrat font-black text-primary">{step.phase}</p>
                              <p className="text-[11px] text-foreground/50 font-medium">Standard Operational Procedure</p>
                            </div>
                          </div>
                          <span className="text-2xl font-black font-mono text-accent">{step.step}</span>
                        </div>

                        {step.step === '05' ? (
                          <div className="space-y-3 pt-1">
                            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                              <div className="flex items-center justify-between text-[11px] pb-1.5 border-b border-slate-200">
                                <span className="text-foreground/60 font-bold uppercase tracking-wider text-[10px]">Client Legal Capacity Wallet</span>
                                <span className="text-emerald-700 font-black text-[10px] uppercase bg-emerald-100 px-2 py-0.5 rounded-md">Active Ledger</span>
                              </div>
                              <div className="space-y-2 text-xs">
                                <div className="flex justify-between text-foreground/75 font-medium">
                                  <span>Opening Legal Capacity:</span>
                                  <span className="font-mono font-bold text-primary">CA$3,420</span>
                                </div>
                                <div className="flex justify-between text-rose-600 font-medium">
                                  <span>Approved Assignment:</span>
                                  <span className="font-mono font-bold">−CA$780</span>
                                </div>
                                <div className="pt-2 border-t border-slate-200 flex justify-between items-center">
                                  <span className="font-bold text-primary">Available Legal Capacity:</span>
                                  <span className="font-mono font-black text-base text-accent">CA$2,640</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-[11px] text-foreground/55 leading-normal font-medium">
                              Expressible directly in your currency (CAD, USD, or GBP). 100% transparent. No points to calculate or convert.
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-2.5 text-xs text-foreground/75 font-medium">
                            <div className="flex justify-between py-1.5 border-b border-slate-100">
                              <span className="text-foreground/50">Responsible Roles:</span>
                              <span className="font-bold text-primary">Client Admin &amp; Senior Legal Lead</span>
                            </div>
                            <div className="flex justify-between py-1.5 border-b border-slate-100">
                              <span className="text-foreground/50">Turnaround Commitment:</span>
                              <span className="font-bold text-accent">12h – 48h SLA Guarantee</span>
                            </div>
                            <div className="flex justify-between py-1.5 border-b border-slate-100">
                              <span className="text-foreground/50">Security Standard:</span>
                              <span className="font-bold text-emerald-700">ClamAV + Secure Watermark</span>
                            </div>
                            <div className="flex justify-between py-1.5 border-b border-slate-100">
                              <span className="text-foreground/50">Billing Settlement:</span>
                              <span className="font-bold text-primary">Prepaid Legal Capacity / Confirmed Price</span>
                            </div>
                            <div className="flex justify-between py-1.5">
                              <span className="text-foreground/50">Audit Compliance:</span>
                              <span className="font-bold text-primary">Immutable WORM Records</span>
                            </div>
                          </div>
                        )}

                        <div className="pt-2 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setSelectedStep((prev) => (prev > 0 ? prev - 1 : workflowSteps.length - 1))}
                            className="text-xs text-foreground/60 hover:text-primary px-3 py-1.5 rounded-lg hover:bg-slate-100 font-bold transition-all"
                          >
                            ← Previous
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedStep((prev) => (prev < workflowSteps.length - 1 ? prev + 1 : 0))}
                            className="text-xs bg-primary text-white font-montserrat font-black px-3.5 py-2 rounded-xl hover:bg-primary/90 flex items-center gap-1.5 shadow-sm transition-all"
                          >
                            <span>Next Stage</span>
                            <ArrowRight className="w-3 h-3 text-accent" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}

          {/* Tab 2: Institutional Safeguards & Security */}
          {activeTab === 'safeguards' && (
            <motion.div
              key="safeguards-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {safeguards.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 hover:border-accent/40 shadow-sm hover:shadow-lg transition-all duration-300 space-y-3.5 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center text-accent">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black font-montserrat text-foreground/50 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-base font-bold font-montserrat text-primary">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">{item.desc}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-700 font-semibold">
                      <Check className="w-4 h-4" />
                      <span>Institutional Client Workspace Standard</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* User's Core Commitment Quote */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-foreground/60 font-medium">
            &ldquo;Choose a LexPack™ for greater value, or simply pay for this assignment at the confirmed fixed price — <span className="text-accent font-black">the choice is always yours.</span>&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
