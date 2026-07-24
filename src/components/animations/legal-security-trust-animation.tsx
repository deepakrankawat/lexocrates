'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Award, FileCheck2, Cpu, CheckCircle2, UserCheck, Eye } from 'lucide-react';

const trustBadges = [
  {
    id: 'confidentiality',
    icon: ShieldCheck,
    title: 'Strict Non-Disclosure & Privacy',
    description: 'Comprehensive NDA agreements, encrypted file transfer, and strict client confidentiality protocols.',
    badge: 'Protected',
  },
  {
    id: 'attorney',
    icon: UserCheck,
    title: '100% Counsel Supervision',
    description: 'Senior legal reviewers check every deliverable before client release. Strategy stays with counsel.',
    badge: 'Human Oversight',
  },
  {
    id: 'canlii',
    icon: Award,
    title: 'CanLII Precedent Research',
    description: 'Canadian federal and provincial statutory and case law research using CanLII & Quicklaw standards.',
    badge: 'Canadian Focus',
  },
  {
    id: 'accuracy',
    icon: FileCheck2,
    title: 'Citation & Quality Control',
    description: 'Multi-tiered QC protocols and page-line citation verification ensure court-ready work product.',
    badge: 'QA Benchmark',
  },
];

export function LegalSecurityTrustAnimation() {
  const [activeBadgeId, setActiveBadgeId] = useState('soc2');
  const activeBadge = trustBadges.find((b) => b.id === activeBadgeId) || trustBadges[0];

  return (
    <div className="relative w-full rounded-[2.5rem] bg-primary border border-white/10 p-6 sm:p-8 overflow-hidden shadow-2xl">
      {/* Background Radial Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-accent/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-accent/15 border border-accent/30 text-accent">
            <Lock className="h-5 w-5 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
            </span>
          </div>
          <div>
            <span className="font-montserrat font-black text-xs uppercase tracking-[0.25em] text-accent block">
              TRUST & CONFIDENTIALITY VAULT
            </span>
            <p className="text-xs text-white/70 font-medium">Enterprise Security & Quality Framework</p>
          </div>
        </div>

        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-[10px] font-montserrat font-black uppercase tracking-wider text-accent">
          <CheckCircle2 className="h-3 w-3" />
          Active Protection
        </span>
      </div>

      {/* Interactive Badge Selector Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {trustBadges.map((item) => {
          const Icon = item.icon;
          const isActive = activeBadgeId === item.id;
          return (
            <motion.button
              key={item.id}
              onClick={() => setActiveBadgeId(item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-3 p-3.5 rounded-2xl border text-left transition-all duration-300 ${
                isActive
                  ? 'bg-accent/20 border-accent text-white shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              <div className={`p-2 rounded-xl shrink-0 ${isActive ? 'bg-accent text-primary' : 'bg-white/10 text-accent'}`}>
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="font-montserrat font-black text-xs truncate leading-tight">{item.title}</p>
                <span className="text-[9px] uppercase tracking-wider font-bold text-accent/80 block mt-0.5">{item.badge}</span>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Interactive Animated Active Trust Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeBadge.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 relative overflow-hidden"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-accent text-primary shrink-0 shadow-lg">
              <activeBadge.icon className="h-6 w-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-montserrat font-black text-base text-white">{activeBadge.title}</h4>
                <span className="px-2 py-0.5 rounded-md bg-accent/20 text-accent text-[9px] font-black uppercase tracking-wider">
                  Verified
                </span>
              </div>
              <p className="text-xs text-white/75 font-medium leading-relaxed">
                {activeBadge.description}
              </p>
            </div>
          </div>

          {/* Live Trust Telemetry Indicator */}
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50 font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              Real-time Compliance Monitoring
            </span>
            <span>Zero-Retention Workspace</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
