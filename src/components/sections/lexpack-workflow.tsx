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
      title: 'Transparent Fixed Scope & LexPoint Quotation',
      route: 'Lex Engine Estimator',
      badge: 'Zero Hourly Surprise',
      badgeColor: 'bg-[#E5A91E]/15 text-[#E5A91E] border-[#E5A91E]/30',
      icon: Scale,
      description:
        'A dedicated Senior Legal Lead conducts preliminary scope analysis. You receive an upfront, locked quotation in LexPoints (or fixed currency) with guaranteed turnaround before any work begins.',
      keyFeatures: [
        'Locked fixed quote — zero billable hour drift or hidden administrative fees',
        'Transparent points estimate benchmarked against document page count & complexity',
        'One-click digital quote approval inside your Client Workspace',
        'Immediate conflict-of-interest check executed across institutional records',
      ],
      output: 'Quote locked; LexPoints held safely in wallet escrow',
    },
    {
      step: '03',
      phase: 'Production & Security',
      title: 'Supervised Legal Execution & Dynamic Forensic Watermarking',
      route: '#matters / #documents',
      badge: 'Senior Advocate QA',
      badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
      icon: ShieldCheck,
      description:
        'Specialized paralegals and legal researchers execute your research, contract review, or pleading drafting under strict Senior Advocate supervision and multi-tier quality control.',
      keyFeatures: [
        'Complete segregation of client-uploaded raw files from finalized work product',
        'On-the-fly Dynamic Forensic Watermarking stamped on all preview & download documents',
        'Watermark includes Client Name, User Email, IP Address, Timestamp & Document Hash',
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
      title: 'Seamless LexPoint Deduction & Cryptographic WORM Audit',
      route: '#lexpack / #billing',
      badge: 'Points Never Expire',
      badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
      icon: Wallet,
      description:
        'Upon your final approval, LexPoints are seamlessly deducted from your prepaid wallet balance. Receive automated tax-compliant invoices and immutable WORM audit trails.',
      keyFeatures: [
        'Deduction occurs ONLY when you approve the final deliverable',
        'Prepaid LexPoints carry over indefinitely — zero monthly expiration or retainer traps',
        'Write-Once-Read-Many (WORM) audit trail logs every file upload, access, and sign-off',
        'Instant download of itemized, exportable GST/tax invoices for corporate accounting',
      ],
      output: 'Final production deliverable released + immutable audit receipt',
    },
  ];

  const safeguards = [
    {
      icon: ShieldCheck,
      title: 'Dynamic Forensic Watermarking',
      tag: 'Data Leak Prevention',
      desc: 'Every preview and download is stamped on-the-fly with authorized user name, email, IP address, and timestamp to eliminate unauthorized dissemination.',
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
      title: 'Prepaid LexPack Wallet',
      tag: 'Zero Retainer Traps',
      desc: 'Pre-purchase legal capacity at volume discounts. LexPoints never expire, carry zero recurring subscription fees, and roll over seamlessly.',
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
      className="relative py-16 sm:py-24 bg-[#070F26] text-white border-t border-slate-800/80 overflow-hidden scroll-mt-16"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-1/4 w-[600px] h-[600px] bg-[#E5A91E]/5 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,169,30,0.08)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E5A91E]/15 border border-[#E5A91E]/30 text-[#E5A91E] text-[11px] font-montserrat font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OPERATIONAL PROTOCOL &amp; CLIENT GOVERNANCE</span>
          </div>

          <h2 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
            How LexPack<TrademarkBadge className="w-3.5 h-3.5 -translate-y-2.5 ml-0.5 text-[#E5A91E] inline-block" /> Works <br className="hidden sm:inline" />
            <span className="text-[#E5A91E]">From Intake to Approved Deliverable</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Every matter and job follows a battle-tested, 5-stage institutional workflow with upfront fixed quotes, senior advocate supervision, ClamAV document security, and our two-button Approvals Room.
          </p>

          {/* View Toggles */}
          <div className="pt-3 flex items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('steps')}
              className={cn(
                "px-4 py-2 rounded-xl text-xs sm:text-sm font-montserrat font-bold transition-all duration-300 flex items-center gap-2",
                activeTab === 'steps'
                  ? "bg-[#E5A91E] text-[#0B1736] shadow-lg shadow-[#E5A91E]/20"
                  : "bg-slate-900/90 text-slate-300 border border-slate-700/80 hover:text-white"
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
                  ? "bg-[#E5A91E] text-[#0B1736] shadow-lg shadow-[#E5A91E]/20"
                  : "bg-slate-900/90 text-slate-300 border border-slate-700/80 hover:text-white"
              )}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Institutional Safeguards &amp; Security</span>
            </button>
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
                        "p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 border relative overflow-hidden flex flex-col justify-between",
                        isSelected
                          ? "bg-slate-900 border-[#E5A91E] shadow-xl shadow-[#E5A91E]/10 ring-1 ring-[#E5A91E]"
                          : "bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/90 text-slate-400"
                      )}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className={cn(
                          "font-montserrat font-black text-xs px-2 py-0.5 rounded-md",
                          isSelected ? "bg-[#E5A91E] text-[#0B1736]" : "bg-slate-800 text-slate-400"
                        )}>
                          Step {s.step}
                        </span>
                        <Icon className={cn("w-4 h-4", isSelected ? "text-[#E5A91E]" : "text-slate-500")} />
                      </div>
                      <div>
                        <div className={cn(
                          "text-[11px] font-bold uppercase tracking-wider mb-0.5",
                          isSelected ? "text-[#E5A91E]" : "text-slate-400"
                        )}>
                          {s.phase}
                        </div>
                        <h4 className={cn(
                          "text-xs sm:text-[13px] font-bold font-montserrat leading-tight line-clamp-2",
                          isSelected ? "text-white" : "text-slate-300"
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
                  <div className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#E5A91E]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Left Details */}
                      <div className="lg:col-span-7 space-y-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-montserrat font-black text-sm px-3 py-1 rounded-lg bg-[#E5A91E] text-[#0B1736]">
                            STAGE {step.step} OF 05
                          </span>
                          <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-md border", step.badgeColor)}>
                            {step.badge}
                          </span>
                          <span className="text-[11px] text-slate-400 font-mono bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                            {step.route}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-black font-montserrat text-white leading-snug">
                          {step.title}
                        </h3>

                        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                          {step.description}
                        </p>

                        <div className="pt-2 space-y-2.5">
                          <p className="text-[11px] font-montserrat font-bold text-[#E5A91E] uppercase tracking-wider">
                            Verified Protocol Actions:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                            {step.keyFeatures.map((feat, i) => (
                              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                                <CheckCircle2 className="w-4 h-4 text-[#E5A91E] shrink-0 mt-0.5" />
                                <span className="leading-snug">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 flex flex-wrap items-center gap-3">
                          <div className="text-xs bg-slate-950/80 border border-slate-800 px-3.5 py-2 rounded-xl text-slate-300 flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span><strong>Milestone Gate:</strong> {step.output}</span>
                          </div>
                        </div>
                      </div>

                      {/* Right Visual Summary Card */}
                      <div className="lg:col-span-5 bg-[#0B1736] p-6 rounded-2xl border border-slate-800/90 shadow-inner space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <div className="flex items-center gap-2.5">
                            <div className="w-9 h-9 rounded-lg bg-[#E5A91E]/20 flex items-center justify-center text-[#E5A91E]">
                              <StepIcon className="w-5 h-5" />
                            </div>
                            <div>
                              <p className="text-xs font-montserrat font-black text-white">{step.phase}</p>
                              <p className="text-[11px] text-slate-400">Standard Operational Procedure</p>
                            </div>
                          </div>
                          <span className="text-2xl font-black font-mono text-[#E5A91E]">{step.step}</span>
                        </div>

                        <div className="space-y-2.5 text-xs text-slate-300">
                          <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                            <span className="text-slate-400">Responsible Roles:</span>
                            <span className="font-semibold text-white">Client Admin &amp; Senior Legal Lead</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                            <span className="text-slate-400">Turnaround Commitment:</span>
                            <span className="font-semibold text-[#E5A91E]">12h – 48h SLA Guarantee</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                            <span className="text-slate-400">Security Standard:</span>
                            <span className="font-semibold text-emerald-400">ClamAV + Dynamic Watermark</span>
                          </div>
                          <div className="flex justify-between py-1.5 border-b border-slate-800/60">
                            <span className="text-slate-400">Billing Settlement:</span>
                            <span className="font-semibold text-white">Prepaid LexPoints / Approved Quote</span>
                          </div>
                          <div className="flex justify-between py-1.5">
                            <span className="text-slate-400">Audit Compliance:</span>
                            <span className="font-semibold text-white">Immutable WORM Records</span>
                          </div>
                        </div>

                        <div className="pt-2 flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => setSelectedStep((prev) => (prev > 0 ? prev - 1 : workflowSteps.length - 1))}
                            className="text-xs text-slate-400 hover:text-white px-2.5 py-1 rounded-lg hover:bg-slate-800"
                          >
                            ← Previous
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedStep((prev) => (prev < workflowSteps.length - 1 ? prev + 1 : 0))}
                            className="text-xs bg-[#E5A91E] text-[#0B1736] font-montserrat font-bold px-3 py-1.5 rounded-lg hover:bg-amber-400 flex items-center gap-1"
                          >
                            <span>Next Stage</span>
                            <ArrowRight className="w-3 h-3" />
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
              className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {safeguards.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-[#E5A91E]/50 transition-all duration-300 space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#E5A91E]/15 border border-[#E5A91E]/30 flex items-center justify-center text-[#E5A91E]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10.5px] font-bold font-montserrat text-slate-400 uppercase tracking-wider bg-slate-800/90 px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                      </div>
                      <h4 className="text-base font-bold font-montserrat text-white">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                      <Check className="w-3.5 h-3.5" />
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
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            &ldquo;Choose a LexPack for greater value, or simply pay per matter or job based on your approved quote — <span className="text-[#E5A91E] font-semibold">the choice is always yours.</span>&rdquo;
          </p>
        </div>

      </div>
    </section>
  );
}
