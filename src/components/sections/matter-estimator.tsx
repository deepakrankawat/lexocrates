'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Scale,
  RotateCcw,
  AlertCircle,
  FileCheck,
  UserPlus,
  Zap,
  Layers,
  Building2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CURRENCIES, CurrencyCode, TRIAL_THRESHOLDS, COMPLIMENTARY_PILOT_CONFIG } from '@/components/sections/pricing-section';
import { TrademarkBadge } from '@/components/ui/trademark-badge';

export interface EstimateResult {
  success: boolean;
  source?: 'n8n' | 'estimator_engine';
  estimateId?: string;
  serviceType: string;
  currency: CurrencyCode;
  currencySymbol: string;
  pageCount: number;
  estimatedHours?: number;
  estimatedPrice: number;
  finalPriceCad?: number;
  isTrialEligible?: boolean;
  isPilotEligible?: boolean;
  pilotValueLimit?: string;
  pilotValueLimitAmount?: number;
  trialLimitCad?: number;
  trialLimitAmount?: number;
  trialLimitFormatted?: string;
  priceAmount?: string;
  turnaround: string;
  fileName?: string;
  fileSizeKb?: number;
  error?: string;
}

// Exactly matching n8n's ALLOWED_SERVICES
const N8N_SERVICES = [
  {
    id: 'Litigation Support',
    label: 'Litigation Support',
    desc: 'Discovery assistance, pleadings, chronologies, motions & hearing preparation.',
  },
  {
    id: 'Contract Review',
    label: 'Contract Review',
    desc: 'Commercial contracts, redlining, deviation summaries & NDA reviews.',
  },
  {
    id: 'Legal Research & Writing',
    label: 'Legal Research & Writing',
    desc: 'Case law analysis, statutory interpretation & comprehensive legal memoranda.',
  },
  {
    id: 'eDiscovery & Document Review',
    label: 'eDiscovery & Document Review',
    desc: 'Relevance coding, privilege review, issue tagging & document production QA.',
  },
  {
    id: 'Contract Lifecycle Management (CLM)',
    label: 'Contract Lifecycle Management (CLM)',
    desc: 'End-to-end CLM setup, template standardization, renewals & metadata tagging.',
  },
  {
    id: 'Compliance & Regulatory Support',
    label: 'Compliance & Regulatory Support',
    desc: 'Multi-jurisdictional audits, corporate filing assessments & regulatory filings.',
  },
  {
    id: 'Paralegal & Virtual Legal Assistance',
    label: 'Paralegal & Virtual Legal Assistance',
    desc: 'General legal administration, matter docketing, correspondence & file filing.',
  },
  {
    id: 'Legal Operations Support',
    label: 'Legal Operations Support',
    desc: 'Workflow automation, outside counsel billing analysis & operational advisory.',
  },
];

// Delivery Timeline options aligned with initial operating capacity
const TURNAROUND_OPTIONS = [
  {
    id: 'Standard (3-5 Business Days)',
    label: 'Standard',
    timeframe: '3–5 Business Days',
    desc: 'Ordinarily 3–5 business days. Confirmed individually prior to commencement.',
  },
  {
    id: 'Priority (2-3 Business Days)',
    label: 'Priority',
    timeframe: '2–3 Business Days',
    desc: 'Subject to delivery team availability and written confirmation by Lexocrates.',
  },
  {
    id: 'Complex / High-Volume Work',
    label: 'Complex / High-Volume',
    timeframe: 'Confirmed on Assessment',
    desc: 'Delivery timeline confirmed following scoping and assignment assessment.',
  },
];

// Live LexPack bundles showcase data (Direct percentage bonus on deposit)
const LEXPACK_SHOWCASE_TIERS = [
  {
    id: 'starter',
    name: 'Starter',
    deposit: { CAD: 399, USD: 299, GBP: 239 },
    capacity: { CAD: 427, USD: 320, GBP: 256 },
    discount: 7,
    extra: { CAD: 28, USD: 21, GBP: 17 },
  },
  {
    id: 'growth',
    name: 'Growth',
    isPopular: true,
    deposit: { CAD: 1199, USD: 899, GBP: 719 },
    capacity: { CAD: 1367, USD: 1025, GBP: 820 },
    discount: 14,
    extra: { CAD: 168, USD: 126, GBP: 101 },
  },
  {
    id: 'professional',
    name: 'Professional',
    deposit: { CAD: 2699, USD: 1999, GBP: 1599 },
    capacity: { CAD: 3266, USD: 2419, GBP: 1935 },
    discount: 21,
    extra: { CAD: 567, USD: 420, GBP: 336 },
  },
  {
    id: 'business',
    name: 'Business',
    isBestValue: true,
    deposit: { CAD: 5399, USD: 3999, GBP: 3199 },
    capacity: { CAD: 6911, USD: 5119, GBP: 4095 },
    discount: 28,
    extra: { CAD: 1512, USD: 1120, GBP: 896 },
  },
];

export function formatTurnaroundTimeframe(rawTurnaround?: string): string {
  if (!rawTurnaround) return '3–5 Business Days (Standard)';
  const clean = rawTurnaround.replace(/\s*\(\+?\d+%\)/g, '').trim();
  const lower = clean.toLowerCase();
  if (lower.includes('priority') || lower.includes('2-3') || lower.includes('2–3') || lower.includes('expedited')) {
    return '2–3 Business Days (Subject to Confirmation)';
  }
  if (lower.includes('complex') || lower.includes('high-volume') || lower.includes('assessment')) {
    return 'Confirmed on Assessment';
  }
  return '3–5 Business Days (Standard)';
}

export interface RecommendedLexPack {
  tier: string;
  planId: string;
  deposit: number;
  capacity: number;
  discount: number;
  depositFormatted: string;
  capacityFormatted: string;
  currentAssignmentFormatted: string;
  remainingCapacity: number;
  remainingCapacityFormatted: string;
  coversFull: boolean;
}

export function getRecommendedLexPack(estimatedPrice: number, currency: CurrencyCode): RecommendedLexPack {
  const sym = CURRENCIES[currency]?.symbol || '$';

  let tierObj = LEXPACK_SHOWCASE_TIERS[0];
  for (const t of LEXPACK_SHOWCASE_TIERS) {
    tierObj = t;
    if (t.capacity[currency] >= estimatedPrice) {
      break;
    }
  }

  const deposit = tierObj.deposit[currency];
  const capacity = tierObj.capacity[currency];
  const remaining = capacity - estimatedPrice;

  return {
    tier: tierObj.name,
    planId: tierObj.id,
    deposit,
    capacity,
    discount: tierObj.discount,
    depositFormatted: `${sym}${deposit.toLocaleString()}`,
    capacityFormatted: `${sym}${capacity.toLocaleString()}`,
    currentAssignmentFormatted: `${sym}${estimatedPrice.toLocaleString()}`,
    remainingCapacity: remaining > 0 ? remaining : 0,
    remainingCapacityFormatted: remaining > 0 ? `${sym}${remaining.toLocaleString()}` : `${sym}0`,
    coversFull: remaining >= 0,
  };
}

export function getQualifyingLexPack(estimatedPrice: number, currency: CurrencyCode) {
  const rec = getRecommendedLexPack(estimatedPrice, currency);
  return {
    tier: rec.tier,
    discount: rec.discount,
    planId: rec.planId,
    capacity: rec.capacityFormatted,
    deposit: rec.depositFormatted,
    depositAmount: rec.deposit,
    capacityAmount: rec.capacity,
    remainingCapacityFormatted: rec.remainingCapacityFormatted,
  };
}

export function MatterEstimator() {
  const [service, setService] = useState('Litigation Support');
  const [email, setEmail] = useState('');
  const [clientReference, setClientReference] = useState('');
  const [turnaround, setTurnaround] = useState('Standard (3-5 Business Days)');
  const [currency, setCurrency] = useState<CurrencyCode>('CAD');
  const [file, setFile] = useState<File | null>(null);

  // States
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState<EstimateResult | null>(null);

  // Free Trial & Organization Form States ("ye approve hote hi organization form on ho jayega")
  const [showOrgForm, setShowOrgForm] = useState(false);
  const [orgName, setOrgName] = useState('');
  const [orgType, setOrgType] = useState('Law Firm / Private Practice');
  const [contactName, setContactName] = useState('');
  const [orgPhone, setOrgPhone] = useState('');
  const [orgJurisdiction, setOrgJurisdiction] = useState('Canada');
  const [orgNotes, setOrgNotes] = useState('');
  const [orgSubmitting, setOrgSubmitting] = useState(false);
  const [orgSuccess, setOrgSuccess] = useState(false);
  const [orgError, setOrgError] = useState('');

  const curr = CURRENCIES[currency];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (!selectedFile.name.toLowerCase().endsWith('.pdf')) {
        setErrorMessage('Please upload a valid PDF file (.pdf) for matter estimation.');
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setShowOrgForm(false);
    setOrgSuccess(false);
    setOrgError('');

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('A valid work or law firm email address is required.');
      return;
    }

    if (!file) {
      setErrorMessage('Please attach your brief or contract PDF (.pdf) for Lextimator™ analysis.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('file', file, file.name);
      formData.append('service', service);
      formData.append('email', email.trim());
      formData.append('turnaround', turnaround);
      formData.append('currency', currency);
      if (clientReference.trim()) {
        formData.append('client_reference', clientReference.trim());
      }

      const res = await fetch('/api/estimate', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || data.success === false) {
        throw new Error(data.error || 'Failed to process matter estimate.');
      }

      setResult(data);
    } catch (err: any) {
      console.error('Estimate submission error:', err);
      setErrorMessage(err.message || 'Error communicating with estimator.');
    } finally {
      setLoading(false);
    }
  };

  const handleOrgSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setOrgError('');

    if (!orgName.trim()) {
      setOrgError('Organization or Law Firm name is required.');
      return;
    }

    if (!contactName.trim()) {
      setOrgError('Lead counsel / contact person name is required.');
      return;
    }

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setOrgError('A valid work email address is required.');
      return;
    }

    if (!orgPhone.trim()) {
      setOrgError('Phone / direct contact number is required.');
      return;
    }

    setOrgSubmitting(true);

    try {
      const calculatedCad =
        result?.finalPriceCad ??
        (result?.currency === 'CAD'
          ? result.estimatedPrice
          : Math.round(
              (result?.estimatedPrice || 0) * (result?.currency === 'USD' ? 1.38 : 1.75)
            ));

      const res = await fetch('/api/trial-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          estimateId: result?.estimateId,
          serviceType: result?.serviceType,
          organizationName: orgName.trim(),
          organizationType: orgType,
          contactName: contactName.trim(),
          email: email.trim(),
          phone: orgPhone.trim(),
          jurisdiction: orgJurisdiction,
          finalPriceCad: calculatedCad,
          estimatedPrice: result?.estimatedPrice || 0,
          currency: result?.currency || currency,
          turnaround: result?.turnaround,
          pageCount: result?.pageCount,
          notes: orgNotes.trim(),
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to complete organization complimentary pilot registration.');
      }

      setOrgSuccess(true);
    } catch (err: any) {
      console.error('Organization registration error:', err);
      setOrgError(err.message || 'Error submitting organization trial details.');
    } finally {
      setOrgSubmitting(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setFile(null);
    setErrorMessage('');
    setShowOrgForm(false);
    setOrgSuccess(false);
    setOrgError('');
    setOrgNotes('');
  };

  return (
    <div className="mt-8 rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-slate-200 shadow-xl relative overflow-hidden">
      {/* Top Header Bar */}
      <div className="pb-6 border-b border-slate-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-montserrat font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Lextimator™ • AI-Powered Legal Work Estimation Engine</span>
            </div>
            <h3 className="font-montserrat text-2xl sm:text-3xl font-black text-primary flex items-center gap-1.5">
              <span>Lextimator</span>
              <TrademarkBadge className="w-3.5 h-3.5 sm:w-4 sm:h-4 -translate-y-2 text-accent" />
            </h3>
            <p className="text-xs sm:text-sm text-accent font-montserrat font-bold mt-0.5">
              AI-Powered Legal Work Estimation
            </p>
            <p className="text-xs sm:text-sm text-foreground/60 mt-0.5 font-medium">
              Know the scope, time and cost before you commit.
            </p>
          </div>

          {/* Currency Switcher */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto shadow-xs">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cur) => (
              <button
                key={cur}
                type="button"
                onClick={() => setCurrency(cur)}
                className={cn(
                  'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-montserrat font-bold transition-all',
                  currency === cur
                    ? 'bg-primary text-white shadow-sm font-black'
                    : 'text-primary/70 hover:text-primary hover:bg-slate-200/60'
                )}
              >
                <span>{CURRENCIES[cur].flag}</span>
                <span>{cur}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {result ? (
          /* ================= SUCCESS / PRELIMINARY ESTIMATE RESULT CARD ================= */
          <motion.div
            key="result-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="mt-8 rounded-3xl p-6 sm:p-8 bg-slate-50/70 border-2 border-accent/40 shadow-xl relative"
          >
            {/* Top Bar with Service & Estimate Reference */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-montserrat font-black uppercase tracking-widest text-accent block">
                    Preliminary Estimate • Produced by Lextimator™
                  </span>
                  <h4 className="font-montserrat text-lg sm:text-xl font-black text-primary">
                    {result.serviceType}
                  </h4>
                </div>
              </div>

              {result.estimateId && (
                <div className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-right self-start sm:self-auto shadow-xs">
                  <span className="block text-[9px] font-mono uppercase tracking-wider text-foreground/50">
                    Estimate Reference ID
                  </span>
                  <span className="font-mono text-xs font-bold text-accent">
                    {result.estimateId}
                  </span>
                </div>
              )}
            </div>

            {/* LEXTIMATOR ESTIMATED COST SPOTLIGHT & ACTIONS */}
            {(() => {
              const sym = result.currencySymbol || curr.symbol || '$';
              const quoteFormatted = `${sym}${result.estimatedPrice.toLocaleString()}`;
              const turnaroundTimeframe = formatTurnaroundTimeframe(result.turnaround);
              const recommended = getRecommendedLexPack(result.estimatedPrice, result.currency);

              // Dynamic currency threshold: CA$200 / US$150 / £120
              const thresholdConfig = TRIAL_THRESHOLDS[result.currency] || TRIAL_THRESHOLDS['CAD'];
              const isTrialEligible =
                typeof result.isTrialEligible === 'boolean'
                  ? result.isTrialEligible
                  : result.estimatedPrice <= thresholdConfig.amount;

              return (
                <>
                  <div className="py-8 text-center border-b border-slate-200">
                    <span className="text-[11px] font-montserrat font-black uppercase tracking-widest text-foreground/50 block mb-2">
                      Estimated Cost
                    </span>
                    <div className="text-5xl sm:text-6xl font-black text-primary font-montserrat tracking-tight">
                      {quoteFormatted}
                    </div>
                    <p className="text-xs sm:text-sm font-montserrat font-medium text-foreground/65 mt-3 max-w-xl mx-auto">
                      Scope, preliminary cost, and delivery timeframe generated by Lextimator™. Subject to senior legal review — confirmed scope, price, and delivery date are issued for your approval before work begins.
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/[0.08] border border-accent/30 text-primary text-xs sm:text-sm font-semibold max-w-xl mx-auto text-left sm:text-center">
                      <Sparkles className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>Expect more legal work? A Starter LexPack could provide better value on this and future assignments.</span>
                    </div>
                  </div>

                  {/* Scope & Measurable Turnaround & Validation Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 text-xs">
                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-foreground/50 block text-[10px] uppercase font-black tracking-wider mb-1">
                        Document Scope
                      </span>
                      <span className="font-montserrat font-black text-primary text-base">
                        {result.pageCount} Pages
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-foreground/50 block text-[10px] uppercase font-black tracking-wider mb-1">
                        Estimated Turnaround
                      </span>
                      <span className="font-montserrat font-black text-accent text-base">
                        {turnaroundTimeframe}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                      <span className="text-foreground/50 block text-[10px] uppercase font-black tracking-wider mb-1">
                        Estimate Validation
                      </span>
                      <span className="font-montserrat font-black text-primary text-base">
                        Senior Legal Review
                      </span>
                    </div>
                  </div>

                  {/* ================= COMPLIMENTARY PILOT ENGAGEMENT & ORGANIZATION FORM ================= */}
                  {isTrialEligible ? (
                    <div className="my-6 rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-emerald-50/90 via-amber-50/30 to-white border-2 border-emerald-500/40 shadow-md">
                      {orgSuccess ? (
                        /* Success View after Organization Form Submission */
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-center py-6 space-y-4"
                        >
                          <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto shadow-inner">
                            <CheckCircle2 className="w-8 h-8" />
                          </div>

                          <div>
                            <span className="text-[10px] font-montserrat font-black uppercase tracking-widest text-emerald-700 bg-emerald-100/70 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-2">
                              Complimentary Pilot Activated • {sym}0 Confirmed
                            </span>
                            <h4 className="font-montserrat text-2xl sm:text-3xl font-black text-primary">
                              Complimentary Pilot Confirmed for {orgName}!
                            </h4>
                            <p className="text-xs sm:text-sm text-foreground/70 max-w-lg mx-auto font-medium mt-1.5">
                              Your assignment (Reference: <span className="font-mono font-bold text-primary">{result.estimateId}</span>) has been scheduled under our {thresholdConfig.formatted} Complimentary Pilot Engagement.
                            </p>
                          </div>

                          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-emerald-200/80 shadow-xs max-w-md mx-auto text-left text-xs space-y-2">
                            <div className="flex justify-between pb-1.5 border-b border-slate-100">
                              <span className="text-foreground/60 font-medium">Organization / Firm:</span>
                              <span className="font-montserrat font-bold text-primary">{orgName} ({orgType})</span>
                            </div>
                            <div className="flex justify-between pb-1.5 border-b border-slate-100">
                              <span className="text-foreground/60 font-medium">Lead Counsel / Contact:</span>
                              <span className="font-montserrat font-bold text-primary">{contactName}</span>
                            </div>
                            <div className="flex justify-between pb-1.5 border-b border-slate-100">
                              <span className="text-foreground/60 font-medium">Delivery Timeframe:</span>
                              <span className="font-montserrat font-bold text-emerald-800">{turnaroundTimeframe}</span>
                            </div>
                            <div className="flex justify-between pt-0.5">
                              <span className="text-foreground/60 font-medium">Pilot Engagement Balance:</span>
                              <span className="font-montserrat font-black text-emerald-800 text-sm">
                                {sym}0 (Valued at {quoteFormatted})
                              </span>
                            </div>
                          </div>

                          <p className="text-xs text-foreground/60 font-medium max-w-md mx-auto">
                            Our Senior Legal Lead will review your uploaded brief and dispatch your delivery and audit confirmation to <strong className="text-primary">{email}</strong>. Subject to final scope validation under our single complimentary pilot per organisation policy.
                          </p>

                          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                            <Link
                              href="https://engine.lexocrates.com/client-login"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full sm:w-auto"
                            >
                              <Button className="w-full sm:w-auto px-6 py-4 rounded-xl bg-primary text-white font-montserrat font-bold text-xs uppercase tracking-wider shadow-sm hover:bg-primary/95 flex items-center justify-center gap-2">
                                <span>Go to Client Portal</span>
                                <ArrowRight className="w-4 h-4 text-accent" />
                              </Button>
                            </Link>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={handleReset}
                              className="w-full sm:w-auto text-xs font-montserrat font-bold"
                            >
                              Estimate Another Assignment
                            </Button>
                          </div>
                        </motion.div>
                      ) : showOrgForm ? (
                        /* Organization Form ON ("origation from on ho jayega") */
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="space-y-5"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-emerald-500/20">
                            <div>
                              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-montserrat font-black uppercase tracking-wider mb-1.5">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                <span>Complimentary Pilot Approved • Step 2: Organization Registration</span>
                              </div>
                              <h4 className="font-montserrat text-xl sm:text-2xl font-black text-primary">
                                Organization &amp; Law Firm Registration
                              </h4>
                              <p className="text-xs text-foreground/65 font-medium mt-0.5">
                                Provide your firm or in-house legal team details to activate assignment <span className="font-mono font-bold text-primary">{result.estimateId}</span> under our {thresholdConfig.formatted} Complimentary Pilot Engagement.
                              </p>
                            </div>

                            <div className="text-left sm:text-right flex-shrink-0">
                              <span className="text-[10px] uppercase font-mono font-bold text-foreground/50 block">
                                Pilot Cost
                              </span>
                              <span className="font-montserrat font-black text-2xl text-emerald-800">
                                {sym}0
                              </span>
                              <span className="text-[10px] text-foreground/50 block line-through">
                                Valued at {quoteFormatted}
                              </span>
                            </div>
                          </div>

                          {orgError && (
                            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-xs font-semibold">
                              <AlertCircle className="w-4 h-4 flex-shrink-0" />
                              <span>{orgError}</span>
                            </div>
                          )}

                          <form onSubmit={handleOrgSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1">
                                  Organization / Law Firm Name <span className="text-accent">*</span>
                                </label>
                                <div className="relative">
                                  <Building2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/40" />
                                  <input
                                    type="text"
                                    required
                                    placeholder="e.g. Davies &amp; Ward LLP / Acme Legal"
                                    value={orgName}
                                    onChange={(e) => setOrgName(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-primary placeholder:text-foreground/35 text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1">
                                  Organization Category <span className="text-accent">*</span>
                                </label>
                                <select
                                  value={orgType}
                                  onChange={(e) => setOrgType(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-primary text-xs sm:text-sm font-semibold focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all cursor-pointer"
                                >
                                  <option value="Law Firm / Private Practice">Law Firm / Private Practice</option>
                                  <option value="In-House Corporate Legal Department">In-House Corporate Legal Department</option>
                                  <option value="Solo Practitioner / Barrister">Solo Practitioner / Barrister</option>
                                  <option value="Government / Regulatory Agency">Government / Regulatory Agency</option>
                                  <option value="Other Legal Enterprise">Other Legal Enterprise</option>
                                </select>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1">
                                  Lead Counsel / Contact Person <span className="text-accent">*</span>
                                </label>
                                <div className="relative">
                                  <UserPlus className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-foreground/40" />
                                  <input
                                    type="text"
                                    required
                                    placeholder="e.g. Adv. Robert Vance"
                                    value={contactName}
                                    onChange={(e) => setContactName(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-200 text-primary placeholder:text-foreground/35 text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                                  />
                                </div>
                              </div>

                              <div>
                                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1">
                                  Direct Contact / Phone Number <span className="text-accent">*</span>
                                </label>
                                <input
                                  type="tel"
                                  required
                                  placeholder="e.g. +1 (416) 555-0199"
                                  value={orgPhone}
                                  onChange={(e) => setOrgPhone(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-primary placeholder:text-foreground/35 text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                                />
                              </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div>
                                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1">
                                  Official Law Firm / Work Email <span className="text-accent">*</span>
                                </label>
                                <input
                                  type="email"
                                  required
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-primary placeholder:text-foreground/35 text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                                />
                              </div>

                              <div>
                                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1">
                                  Jurisdiction <span className="text-accent">*</span>
                                </label>
                                <select
                                  value={orgJurisdiction}
                                  onChange={(e) => setOrgJurisdiction(e.target.value)}
                                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-primary text-xs sm:text-sm font-semibold focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all cursor-pointer"
                                >
                                  <option value="Canada">Canada (Federal / Provincial)</option>
                                  <option value="United States">United States (Federal / State)</option>
                                  <option value="United Kingdom">United Kingdom (England &amp; Wales)</option>
                                  <option value="Other / Cross-Border">Other / Cross-Border</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1">
                                Matter Scope or Specific Instructions <span className="text-foreground/45 lowercase font-normal">(optional)</span>
                              </label>
                              <textarea
                                rows={2}
                                placeholder="e.g. Focus on liability clauses, indemnity exceptions, and governing law provisions..."
                                value={orgNotes}
                                onChange={(e) => setOrgNotes(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-primary placeholder:text-foreground/35 text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-none"
                              />
                            </div>

                            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                              <Button
                                type="submit"
                                disabled={orgSubmitting}
                                className="w-full sm:w-auto px-8 py-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-montserrat font-black text-xs uppercase tracking-wider shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
                              >
                                {orgSubmitting ? (
                                  <>
                                    <RefreshCw className="w-4 h-4 animate-spin" />
                                    <span>Activating Complimentary Pilot...</span>
                                  </>
                                ) : (
                                  <>
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>Confirm Organization &amp; Activate Complimentary Pilot ({sym}0)</span>
                                  </>
                                )}
                              </Button>

                              <Button
                                type="button"
                                variant="ghost"
                                onClick={() => setShowOrgForm(false)}
                                className="text-xs text-foreground/60 hover:text-primary font-montserrat font-bold"
                              >
                                Cancel / View Paid Options
                              </Button>
                            </div>
                          </form>
                        </motion.div>
                      ) : (
                        /* Complimentary Pilot Qualified Banner & Button to Turn Form ON */
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
                          <div className="space-y-1.5 max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[10px] font-montserrat font-black uppercase tracking-wider">
                              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                              <span>Complimentary Pilot Eligible • Valid Under {thresholdConfig.formatted}</span>
                            </div>
                            <h4 className="font-montserrat text-xl sm:text-2xl font-black text-primary leading-tight">
                              🎉 This Assignment Qualifies for a Complimentary Pilot!
                            </h4>
                            <p className="text-xs sm:text-sm text-foreground/75 font-medium leading-relaxed">
                              Eligible new clients may begin with one limited-scope assignment, up to the applicable complimentary pilot value (<strong>{thresholdConfig.formatted}</strong>), at no charge. Because this estimate (<strong>{quoteFormatted}</strong>) is within the limit, your firm can experience Lexocrates quality with <strong>{sym}0 upfront cost</strong>.
                            </p>
                            <div className="flex flex-wrap items-center gap-3 text-[11px] text-foreground/65 font-semibold pt-1">
                              <span className="flex items-center gap-1 text-emerald-700 font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Zero payment required
                              </span>
                              <span className="flex items-center gap-1 text-emerald-700 font-bold">
                                <CheckCircle2 className="w-3.5 h-3.5" /> Senior Legal Lead review
                              </span>
                              <span className="flex items-center gap-1 text-slate-600 font-medium">
                                <CheckCircle2 className="w-3.5 h-3.5 text-slate-400" /> 1 pilot per client organisation
                              </span>
                            </div>
                          </div>

                          <div className="w-full md:w-auto flex-shrink-0">
                            <Button
                              type="button"
                              onClick={() => setShowOrgForm(true)}
                              className="w-full md:w-auto px-7 py-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                            >
                              <span>Approve Complimentary Pilot &amp; Register Organization</span>
                              <ArrowRight className="w-4 h-4 text-amber-200" />
                            </Button>
                            <p className="text-[10px] text-center text-foreground/50 mt-1.5 font-medium">
                              Approves scope &amp; opens organization registration form
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Pilot Limit Exceeded Banner (Exceeds threshold) */
                    <div className="my-6 p-4 sm:p-5 rounded-2xl bg-amber-500/[0.08] border border-accent/30 flex items-start gap-3.5 text-xs">
                      <div className="p-2 rounded-xl bg-accent/20 text-accent flex-shrink-0 mt-0.5">
                        <AlertCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-montserrat font-black text-primary uppercase text-[10px] tracking-wider">
                            Status: Exceeds {thresholdConfig.formatted} Complimentary Pilot Value Limit
                          </span>
                          <span className="px-2 py-0.2 rounded-full text-[9px] font-black bg-slate-200 text-slate-700">
                            Standard Rates Apply
                          </span>
                        </div>
                        <p className="text-foreground/75 leading-relaxed font-medium">
                          Complimentary Pilot Engagements are valid exclusively for limited-scope assignments up to the applicable market limit (<strong>{thresholdConfig.formatted}</strong>). Since this assignment estimate is <strong>{quoteFormatted}</strong>, standard Pay-Per-Assignment or LexPack™ capacity applies. You can proceed at the confirmed fixed price below or select a LexPack™ for a 7% to 28% value advantage.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* PRIMARY LEXTIMATOR ACTION: PROCEED WITH THIS ASSIGNMENT */}
                  <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <span className="text-[10px] font-montserrat font-black uppercase tracking-wider text-accent block mb-1">
                        Upfront Scope &amp; Delivery Lock
                      </span>
                      <p className="text-sm sm:text-base font-montserrat font-bold text-primary">
                        Pay {quoteFormatted} for This Assignment
                      </p>
                      <p className="text-xs text-foreground/60 font-medium mt-0.5">
                        Scope, confirmed fixed price, and delivery timeline are locked in writing prior to work commencing.
                      </p>
                    </div>

                    <Link
                      href={`https://engine.lexocrates.com/client-registration?email=${encodeURIComponent(
                        email
                      )}&service=${encodeURIComponent(result.serviceType)}&ref=${
                        result.estimateId || ''
                      }&quote=${result.estimatedPrice}&currency=${result.currency}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-shrink-0"
                    >
                      <Button className="w-full sm:w-auto px-7 py-5 rounded-xl bg-primary hover:bg-primary/95 text-white border border-primary font-montserrat font-bold text-xs sm:text-sm tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm">
                        <span>Pay {quoteFormatted} for This Assignment</span>
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </Button>
                    </Link>
                  </div>

                  {/* SECTION 2: OPTIONAL LEXPACK SAVINGS FOR ONGOING WORK (SECONDARY FINANCIAL PROPOSITION) */}
                  <div className="p-6 sm:p-7 rounded-3xl bg-slate-50/80 border border-slate-200 text-left space-y-4 my-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 text-accent text-[10px] font-montserrat font-black uppercase tracking-wider mb-1.5">
                          <Sparkles className="w-3 h-3" />
                          <span>Optional LexPack™ Saving</span>
                        </div>
                        <h4 className="text-base sm:text-xl font-black font-montserrat text-primary leading-snug">
                          Expect more legal work? A Starter LexPack could provide better value on this and future assignments.
                        </h4>
                        <p className="text-xs text-foreground/65 font-medium mt-1">
                          Prepay legal capacity to lock in guaranteed savings (7%–28% value advantage) across all ongoing matters with zero monthly retainers or expiration dates.
                        </p>
                      </div>

                      <div className="text-left sm:text-right flex-shrink-0">
                        <span className="text-[10px] text-foreground/50 uppercase font-black tracking-wider block">
                          Lextimator Estimate
                        </span>
                        <div className="text-xl sm:text-2xl font-black font-montserrat text-primary">
                          {quoteFormatted}
                        </div>
                      </div>
                    </div>

                    {/* Tangible Financial Calculation Breakdown */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2.5 text-xs sm:text-sm">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-2 border-b border-slate-100 font-medium gap-1">
                        <span className="text-foreground/75">
                          <strong className="text-primary font-bold">{recommended.tier} LexPack:</strong> Pay {recommended.depositFormatted}
                        </span>
                        <span className="font-montserrat font-bold text-primary">
                          → Receive {recommended.capacityFormatted} legal capacity{' '}
                          <span className="text-emerald-700 font-black">
                            (+{curr.symbol}{(recommended.capacity - recommended.deposit).toLocaleString()} bonus capacity • +{recommended.discount}% bonus)
                          </span>
                        </span>
                      </div>

                      <div className="flex items-center justify-between pb-2 border-b border-slate-100 font-medium">
                        <span className="text-foreground/75">
                          Use for this assignment
                        </span>
                        <span className="font-montserrat font-bold text-rose-600">
                          −{recommended.currentAssignmentFormatted}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-0.5 font-bold">
                        <span className="text-primary">
                          Remaining legal capacity for future work
                        </span>
                        <span className="font-montserrat font-black text-accent text-sm sm:text-base">
                          {recommended.remainingCapacityFormatted}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-foreground/60 italic font-medium">
                      &ldquo;Lextimator™ provides clarity on single matters; LexPack™ provides long-term monetary advantage.&rdquo;
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                      <div className="flex items-center gap-1.5 text-xs text-foreground/60 font-medium">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Prepaid legal capacity never expires and carries forward</span>
                      </div>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        <Link
                          href={`https://engine.lexocrates.com/client-registration?plan=${recommended.planId}&ref=${result.estimateId || ''}&quote=${result.estimatedPrice}&currency=${result.currency}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full sm:w-auto"
                        >
                          <Button className="w-full sm:w-auto px-5 py-4 rounded-xl bg-accent hover:bg-accent/90 text-primary font-montserrat font-black text-xs tracking-wide shadow-sm flex items-center justify-center gap-2 transition-all">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Choose {recommended.tier} LexPack ({recommended.depositFormatted})</span>
                          </Button>
                        </Link>

                        <Link
                          href="#pricing"
                          className="hidden sm:inline-flex text-xs font-montserrat font-bold text-accent hover:underline whitespace-nowrap"
                        >
                          View All LexPack Tiers →
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}

            {/* Reset CTA */}
            <div className="pt-2 text-center">
              <Button
                type="button"
                variant="ghost"
                onClick={handleReset}
                className="text-xs text-foreground/60 hover:text-primary font-montserrat font-bold inline-flex items-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Estimate Another Assignment with Lextimator™</span>
              </Button>
            </div>
          </motion.div>
        ) : (
          /* ================= DUAL COLUMN: LEXTIMATOR FORM + LEXPACK SHOWCASE ================= */
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT COLUMN: Lextimator Interactive Form (7 Cols) */}
            <motion.form
              key="form-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="lg:col-span-7 space-y-6"
            >
              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-xs font-semibold">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Field 1: Select Service */}
              <div>
                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1.5">
                  Select Legal Service <span className="text-accent">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-primary text-xs sm:text-sm font-semibold focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all cursor-pointer"
                >
                  {N8N_SERVICES.map((s) => (
                    <option key={s.id} value={s.id} className="bg-white text-primary">
                      {s.label}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-foreground/55 mt-1 font-medium">
                  {N8N_SERVICES.find((s) => s.id === service)?.desc}
                </p>
              </div>

              {/* Field 2: Upload Assignment Brief (.pdf) */}
              <div>
                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1.5">
                  Upload Assignment Brief or Document (.pdf) <span className="text-accent">*</span>
                </label>

                <div className="relative border-2 border-dashed border-slate-200 hover:border-accent/50 bg-slate-50/50 rounded-2xl p-5 transition-all flex items-center justify-between">
                  <input
                    type="file"
                    id="n8n-document-upload"
                    accept=".pdf"
                    required
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent flex-shrink-0">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-montserrat font-bold text-primary">
                        {file ? file.name : 'Select or drag-and-drop assignment PDF'}
                      </p>
                      <p className="text-[10.5px] text-foreground/50 mt-0.5 font-medium">
                        {file
                          ? `${(file.size / 1024).toFixed(1)} KB attached • Ready for Lextimator™ analysis`
                          : 'Upload documents to let Lextimator™ analyse the assignment scope, turnaround, and cost (Max 25MB).'}
                      </p>
                    </div>
                  </div>
                  {file ? (
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setFile(null)}
                      className="text-xs text-rose-600 hover:text-rose-700 relative z-10 font-bold"
                    >
                      Remove
                    </Button>
                  ) : (
                    <span className="px-3.5 py-1.5 rounded-lg bg-primary text-white text-xs font-montserrat font-bold pointer-events-none shadow-xs">
                      Browse PDF
                    </span>
                  )}
                </div>
              </div>

              {/* Field 4: Turnaround Speed */}
              <div>
                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1.5">
                  Delivery Timeline <span className="text-accent">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {TURNAROUND_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setTurnaround(opt.id)}
                      className={cn(
                        'p-3.5 rounded-xl border text-left transition-all',
                        turnaround === opt.id
                          ? 'bg-accent/10 border-2 border-accent text-primary shadow-xs ring-1 ring-accent/30'
                          : 'bg-slate-50 border-slate-200 text-foreground/60 hover:border-slate-300 hover:bg-white'
                      )}
                    >
                      <span className="text-xs font-montserrat font-bold text-primary block mb-0.5">
                        {opt.label}
                      </span>
                      <span className="text-[11px] font-bold text-accent block mb-1">
                        {opt.timeframe}
                      </span>
                      <span className="text-[10px] text-foreground/50 font-medium block leading-snug">
                        {opt.desc}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-[10.5px] text-foreground/55 font-medium mt-2">
                  <strong className="text-primary font-bold">Delivery Policy:</strong> Final timeline is individually confirmed with your firm before work commences.
                </p>
              </div>

              {/* Field 5 & 6: Email & Client Reference */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1.5">
                    Work / Law Firm Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="counsel@yourfirm.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-primary placeholder:text-foreground/35 text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1.5">
                    Matter Reference <span className="text-foreground/45 lowercase font-normal">(optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Miller LLP / Matter #402"
                    value={clientReference}
                    onChange={(e) => setClientReference(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-primary placeholder:text-foreground/35 text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                  />
                </div>
              </div>

              {/* Dynamic Complimentary Pilot Engagement Guarantee Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-amber-500/5 to-transparent border border-emerald-500/25 flex items-start gap-3.5 text-xs">
                <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-800 flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4 text-emerald-700" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-montserrat font-black text-primary uppercase text-[11px] tracking-wider">
                      {COMPLIMENTARY_PILOT_CONFIG.heading}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[9px] font-black bg-emerald-100 text-emerald-800 border border-emerald-300">
                      {COMPLIMENTARY_PILOT_CONFIG.subheading}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-amber-100 text-amber-950 border border-amber-300">
                      Up to {TRIAL_THRESHOLDS[currency].formatted}
                    </span>
                  </div>
                  <p className="text-[12px] text-foreground/75 mt-1 leading-snug font-medium">
                    {COMPLIMENTARY_PILOT_CONFIG.universalDescription}{' '}
                    <span className="text-foreground/60 font-normal">({COMPLIMENTARY_PILOT_CONFIG.rule})</span>
                  </p>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full py-6 rounded-xl bg-primary hover:bg-primary/95 text-white font-montserrat font-black text-xs uppercase tracking-[0.15em] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Lextimator™ Analysing Scope...</span>
                    </>
                  ) : (
                    <>
                      <span>Get Your Estimate from Lextimator™</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-accent" />
                    </>
                  )}
                </Button>
                <p className="text-[10.5px] text-center text-foreground/50 mt-2 font-medium flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Strict bilateral NDA • Zero obligation • Guaranteed confirmed fixed pricing</span>
                </p>
              </div>
            </motion.form>

            {/* RIGHT COLUMN: LEXPACK PROMINENT SHOWCASE CARD (5 Cols) */}
            <div className="lg:col-span-5 rounded-3xl p-6 sm:p-7 bg-gradient-to-b from-slate-50 via-amber-50/20 to-slate-50 border-2 border-accent/30 shadow-lg relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-accent text-primary flex items-center justify-center font-black">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-black text-primary text-base">
                      Lex<span className="text-accent">Pack</span>™ Bundles
                    </h4>
                    <p className="text-[10px] text-accent font-bold uppercase tracking-wider">
                      7% to 28% Value Advantage
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-montserrat font-black bg-accent/20 text-primary border border-accent/40">
                  {curr.code}
                </span>
              </div>

              <div className="my-3 p-3 rounded-xl bg-amber-500/[0.08] border border-accent/25">
                <p className="text-xs text-slate-800 font-semibold leading-relaxed">
                  Expect more legal work? A Starter LexPack could provide better value on this and future assignments.
                </p>
              </div>

              {/* 4 Tier Quick Snapshot Cards */}
              <div className="space-y-2.5 my-4">
                {LEXPACK_SHOWCASE_TIERS.map((tier) => {
                  const dep = tier.deposit[currency];
                  const cap = tier.capacity[currency];
                  const ext = tier.extra[currency];

                  return (
                    <div
                      key={tier.id}
                      className={cn(
                        'p-3 rounded-2xl border transition-all flex items-center justify-between text-xs',
                        tier.isPopular
                          ? 'bg-white border-2 border-accent shadow-sm ring-1 ring-accent/20'
                          : 'bg-white/80 border-slate-200 hover:border-slate-300'
                      )}
                    >
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-montserrat font-black text-primary text-xs">
                            {tier.name}
                          </span>
                          {tier.isPopular && (
                            <span className="px-1.5 py-0.2 rounded-full text-[8px] font-black bg-accent text-primary">
                              POPULAR
                            </span>
                          )}
                          {tier.isBestValue && (
                            <span className="px-1.5 py-0.2 rounded-full text-[8px] font-black bg-emerald-600 text-white">
                              BEST VALUE
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-foreground/50 font-medium block">
                          Deposit: {curr.symbol}{dep.toLocaleString()}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="font-montserrat font-black text-primary text-xs block">
                          {curr.symbol}{cap.toLocaleString()} Capacity
                        </span>
                        <div className="flex items-center gap-1 mt-0.5 justify-end">
                          <span className="text-[9px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded shadow-2xs">
                            +{curr.symbol}{ext.toLocaleString()} Bonus
                          </span>
                          <span className="text-[9px] font-black text-amber-900 bg-amber-100 border border-amber-300 px-1.5 py-0.5 rounded shadow-2xs whitespace-nowrap">
                            +{tier.discount}% Bonus
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Reassurances & Direct Link to Pricing Section */}
              <div className="pt-3 border-t border-slate-200 space-y-2 text-[11px] text-foreground/75 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Prepaid legal capacity never expires</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Automatic Best-Value tier protection</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                  <span>Dedicated Senior Advocate &amp; Paralegal Pod</span>
                </div>
              </div>

              <div className="mt-5">
                <Link href="#pricing" className="block w-full">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full py-4 rounded-xl border-accent/40 hover:bg-accent/10 text-primary font-montserrat font-black text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xs"
                  >
                    <Layers className="w-3.5 h-3.5 text-accent" />
                    <span>View All LexPack Bundles &amp; Matrix ↓</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
