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
      title: 'Upload Documents',
      desc: 'Share your assignment scope, relevant briefs, jurisdiction (US, Canada, UK), and deadlines under strict bilateral NDA security.',
    },
    {
      num: '02',
      title: 'Lextimator™ Analysis',
      desc: 'Our AI estimation engine evaluates document density and parameters to produce an upfront Estimated Cost and Estimated Turnaround.',
    },
    {
      num: '03',
      title: 'Human Review & Confirmed Price',
      desc: 'Senior Legal Leads validate requirements where needed, issuing your guaranteed Confirmed Fixed Price before any work begins.',
    },
    {
      num: '04',
      title: 'Pay Per Assignment or LexPack™',
      desc: 'Pay for this single assignment at the confirmed price, or apply prepaid LexPack™ legal capacity for a 7%–28% pricing advantage.',
    },
  ];

  const highlights = [
    {
      icon: Lock,
      title: 'Confirmed Fixed Price',
      desc: 'No hourly rate overages or billable hour drift. Your price is confirmed and locked in advance.',
    },
    {
      icon: Clock,
      title: 'Zero Retainer Commitments',
      desc: 'No subscriptions, no mandatory upfront bundles. Pay solely for your confirmed assignment.',
    },
    {
      icon: Award,
      title: 'Senior Advocate Oversight',
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
      className="relative py-16 sm:py-24 bg-white text-foreground overflow-hidden scroll-mt-20 border-b border-black/5"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-montserrat font-black uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Freedom of Choice • No Forced Bundles</span>
          </div>

          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-primary leading-tight">
            Don&apos;t Need a LexPack™? <br className="hidden sm:inline" />
            <span className="text-accent">Pay Per Assignment Instead.</span>
          </h2>

          {/* User's Core Value Statement Banner */}
          <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-accent/10 via-accent/5 to-transparent border border-accent/20 shadow-sm">
            <p className="text-sm sm:text-base lg:text-lg font-montserrat font-bold text-primary leading-relaxed">
              &ldquo;Choose a LexPack™ for greater value, or simply pay for this assignment at the confirmed fixed price — <span className="text-accent font-black">the choice is always yours.</span>&rdquo;
            </p>
          </div>

          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            First, use Lextimator™ to understand the scope, turnaround and expected cost of your legal work. Then pay for that assignment at the confirmed fixed price — or choose a LexPack™ for greater value on ongoing legal requirements.
          </p>
        </div>

        {/* Interactive Lextimator™ AI-Powered Legal Work Estimation Engine */}
        <MatterEstimator />

        {/* Main Pay Per Assignment Spotlight Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mt-12 rounded-3xl p-6 sm:p-8 lg:p-10 bg-slate-50/70 border border-slate-200/90 shadow-lg relative overflow-hidden"
        >
          {/* Header row inside card */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0 shadow-inner">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-montserrat font-black uppercase tracking-widest text-accent">
                    On-Demand Legal Support
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[9px] font-montserrat font-black bg-emerald-100 text-emerald-800 border border-emerald-200">
                    Pay Per Assignment
                  </span>
                </div>
                <h3 className="font-montserrat text-xl sm:text-2xl font-black text-primary">
                  Pay Per Assignment (Confirmed Fixed Price)
                </h3>
              </div>
            </div>
          </div>

          {/* Workflow Steps (4 columns on desktop) */}
          <div className="pt-8">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xs font-montserrat font-black uppercase tracking-wider text-primary flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent" />
                <span>How Pay Per Assignment Works:</span>
              </h4>
              <span className="text-xs text-foreground/50 font-medium hidden sm:inline">
                Simple 4-Step Process • Powered by Lextimator™
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s) => (
                <div
                  key={s.num}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-accent/40 transition-all hover:translate-y-[-2px] duration-200 shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <span className="text-xs font-mono font-black text-accent bg-accent/10 border border-accent/20 px-2.5 py-0.5 rounded-lg">
                        STEP {s.num}
                      </span>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <h5 className="font-montserrat font-bold text-sm text-primary mb-1.5">
                      {s.title}
                    </h5>
                    <p className="text-xs text-foreground/65 leading-relaxed font-medium">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((h, idx) => {
              const Icon = h.icon;
              return (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                  <div className="p-2 rounded-lg bg-accent/10 text-accent flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h6 className="font-montserrat font-bold text-xs text-primary">
                      {h.title}
                    </h6>
                    <p className="text-[11px] text-foreground/60 mt-0.5 leading-normal font-medium">
                      {h.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Assurance Bar */}
        <div className="mt-10 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-xs font-black uppercase tracking-wider text-primary">
                Confirmed Fixed Pricing
              </h4>
              <p className="text-xs text-foreground/60 mt-1 font-medium leading-relaxed">
                Every assignment scope is locked in writing with guaranteed turnaround. No scope creep or billable hour surprises.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent flex-shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-xs font-black uppercase tracking-wider text-primary">
                Optional LexPack™ Savings
              </h4>
              <p className="text-xs text-foreground/60 mt-1 font-medium leading-relaxed">
                Start with a single assignment today. If your volume grows, easily activate a LexPack™ for a 7%–28% pricing advantage.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-accent/10 text-accent flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-montserrat text-xs font-black uppercase tracking-wider text-primary">
                Need Help Deciding?
              </h4>
              <p className="text-xs text-foreground/60 mt-1 font-medium leading-relaxed">
                Speak with our operations team to find out whether Pay Per Assignment or a LexPack™ best fits your caseload.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
