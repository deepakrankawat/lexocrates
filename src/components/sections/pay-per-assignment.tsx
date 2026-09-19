'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Scale, 
  HelpCircle,
  Briefcase,
  Clock,
  Lock,
  Award
} from 'lucide-react';
import { MatterEstimator } from '@/components/sections/matter-estimator';


export function PayPerAssignmentSection() {
  const steps = [
    {
      num: '01',
      title: 'Submit Matter / Job Brief',
      desc: 'Share your matter or job scope, relevant documents, jurisdiction (US, Canada, UK), and required deadlines under complete NDA security.',
    },
    {
      num: '02',
      title: 'Receive Approved Quote',
      desc: 'Our legal leads review your requirements and deliver a transparent, fixed-price quote with guaranteed turnaround time before work begins.',
    },
    {
      num: '03',
      title: 'Supervised Execution',
      desc: 'Specialized paralegals and legal researchers execute your brief under senior associate oversight and multi-tier quality assurance.',
    },
    {
      num: '04',
      title: 'Settle Per Matter or Job',
      desc: 'Review completed deliverables and pay strictly based on your approved quote. Zero retainer traps, commitments, or recurring charges.',
    },
  ];

  const highlights = [
    {
      icon: Lock,
      title: 'Fixed Guaranteed Pricing',
      desc: 'No hourly rate overages or unexpected billing surprises. Your quote is locked and approved in advance.',
    },
    {
      icon: Clock,
      title: 'Zero Retainer Commitments',
      desc: 'No subscriptions, no points burn, and no upfront bundle purchase required. Pay solely for completed matters or jobs.',
    },
    {
      icon: Award,
      title: 'Senior Associate Oversight',
      desc: 'Every deliverable undergoes rigorous supervisory review by senior advocates before reaching your desk.',
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Confidentiality',
      desc: 'Strict international data protection standards, comprehensive bilateral NDA, and encrypted workflow.',
    },
  ];

  return (
    <section
      id="pay-per-assignment"
      className="relative py-16 sm:py-24 bg-[#070F26] text-white border-t border-slate-800/80 overflow-hidden"
    >
      {/* Ambient lighting effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,169,30,0.06)_0%,transparent_65%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#E5A91E]/15 border border-[#E5A91E]/30 text-[#E5A91E] text-[11px] font-montserrat font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Freedom of Choice • No Forced Bundles</span>
          </div>

          <h2 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
            Don&apos;t Need a LexPack? <br className="hidden sm:inline" />
            <span className="text-[#E5A91E]">Pay Per Matter or Job Instead.</span>
          </h2>

          {/* User's Core Value Statement Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-[#E5A91E]/30 shadow-xl backdrop-blur-md">
            <p className="text-sm sm:text-base lg:text-lg font-montserrat font-bold text-slate-100 leading-relaxed">
              &ldquo;Choose a LexPack for greater value, or simply pay per matter or job based on your approved quote — <span className="text-[#E5A91E]">the choice is always yours.</span>&rdquo;
            </p>
          </div>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Not every law firm or corporate counsel needs bulk capacity. Whether you have an urgent one-time litigation brief, seasonal overflow, or simply wish to test our quality on a single matter or job, our on-demand model gives you complete financial control with zero upfront commitments.
          </p>
        </div>

        {/* Interactive Instant Matter & Turnaround Estimator */}
        <MatterEstimator />

        {/* Main Pay Per Matter or Job Spotlight Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mt-12 rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-950 border border-slate-700/80 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          {/* Header row inside card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#E5A91E]/15 border border-[#E5A91E]/30 flex items-center justify-center text-[#E5A91E] flex-shrink-0 shadow-inner">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-montserrat font-black uppercase tracking-widest text-[#E5A91E]">
                    On-Demand Legal Support
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-montserrat font-bold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    No Minimums
                  </span>
                </div>
                <h3 className="font-montserrat text-xl sm:text-2xl font-black text-white">
                  Pay Per Matter or Job (Quote-Based)
                </h3>
              </div>
            </div>
          </div>

          {/* Workflow Steps (4 columns on desktop) */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-montserrat font-black uppercase tracking-wider text-slate-200 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#E5A91E]" />
                <span>How Pay-Per-Matter or Job Works:</span>
              </h4>
              <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
                Simple 4-Step Process • 24hr Turnaround on Quotes
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/90 hover:border-slate-700 transition-all hover:translate-y-[-2px] duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-mono font-black text-[#E5A91E] bg-[#E5A91E]/10 border border-[#E5A91E]/20 px-2 py-0.5 rounded-lg">
                        STEP {s.num}
                      </span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                    <h5 className="font-montserrat font-bold text-sm text-white mb-1.5">
                      {s.title}
                    </h5>
                    <p className="text-[11.5px] text-slate-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="mt-8 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-[#E5A91E] flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h6 className="font-montserrat font-bold text-xs text-white">
                      {h.title}
                    </h6>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-normal">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Assurance Bar */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#E5A91E]/15 text-[#E5A91E] flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-xs font-black uppercase tracking-wider text-white">
                Guaranteed Written Quotes
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Every matter or job scope is locked in writing with guaranteed turnaround. No scope creeps or surprise fees.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#E5A91E]/15 text-[#E5A91E] flex-shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-xs font-black uppercase tracking-wider text-white">
                Switch Anytime
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Start with a single matter or job today. If your ongoing volume increases, you can easily upgrade to a LexPack for volume discounts.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-[#E5A91E]/15 text-[#E5A91E] flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-xs font-black uppercase tracking-wider text-white">
                Need Help Deciding?
              </h4>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Speak with our operations team to find out whether a LexPack or single matter/job quote best fits your caseload.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
