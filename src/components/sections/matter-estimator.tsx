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
  UserPlus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CURRENCIES, CurrencyCode } from '@/components/sections/pricing-section';
import { TrademarkBadge } from '@/components/ui/trademark-badge';

export interface EstimateResult {
  success: boolean;
  source?: 'n8n' | 'estimator_engine';
  estimateId?: string;
  serviceType: string;
  currency: CurrencyCode;
  currencySymbol: string;
  pageCount: number;
  estimatedPrice: number;
  finalPriceCad?: number;
  priceAmount?: string;
  turnaround: string;
  fileName?: string;
  fileSizeKb?: number;
  error?: string;
}

// Exactly matching n8n's ALLOWED_SERVICES (clean labels without hourly rates)
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

// Exactly matching n8n's Turnaround options (clean without multiplier surcharges)
const TURNAROUND_OPTIONS = [
  {
    id: 'Standard (3-5 Business Days)',
    label: 'Standard',
    timeframe: '3–5 Business Days',
  },
  {
    id: 'Rush (24-48 Hours)',
    label: 'Rush',
    timeframe: '24–48 Hours',
  },
  {
    id: 'Emergency (Same Day / Weekend)',
    label: 'Emergency',
    timeframe: 'Same Day / Weekend',
  },
];

export function getQualifyingLexPack(estimatedPrice: number, currency: CurrencyCode) {
  const price = estimatedPrice;
  if (currency === 'CAD') {
    if (price >= 4500) return { tier: 'Business', discount: 28, planId: 'business' };
    if (price >= 2000) return { tier: 'Professional', discount: 21, planId: 'professional' };
    if (price >= 1000) return { tier: 'Growth', discount: 14, planId: 'growth' };
    return { tier: 'Starter', discount: 7, planId: 'starter' };
  } else if (currency === 'USD') {
    if (price >= 3500) return { tier: 'Business', discount: 28, planId: 'business' };
    if (price >= 1600) return { tier: 'Professional', discount: 21, planId: 'professional' };
    if (price >= 750) return { tier: 'Growth', discount: 14, planId: 'growth' };
    return { tier: 'Starter', discount: 7, planId: 'starter' };
  } else {
    if (price >= 2800) return { tier: 'Business', discount: 28, planId: 'business' };
    if (price >= 1300) return { tier: 'Professional', discount: 21, planId: 'professional' };
    if (price >= 600) return { tier: 'Growth', discount: 14, planId: 'growth' };
    return { tier: 'Starter', discount: 7, planId: 'starter' };
  }
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

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErrorMessage('A valid work or law firm email address is required.');
      return;
    }

    if (!file) {
      setErrorMessage('Please attach your brief or contract PDF to calculate your fixed quote.');
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

  const handleReset = () => {
    setResult(null);
    setFile(null);
    setErrorMessage('');
  };

  return (
    <div className="mt-8 rounded-3xl p-6 sm:p-8 lg:p-10 bg-white border border-slate-200 shadow-xl relative overflow-hidden">
      {/* Header */}
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
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
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

        {/* 5-Step Process Flow Indicator */}
        <div className="mt-5 pt-4 border-t border-slate-200">
          <p className="text-[10px] font-montserrat font-black uppercase tracking-widest text-accent mb-2.5">
            Estimation &amp; Pricing Process:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[11px] font-medium">
            <div className="flex items-center gap-1.5 text-foreground/75 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <span className="font-mono text-accent font-black">1.</span>
              <span>Upload Documents</span>
            </div>
            <div className="flex items-center gap-1.5 text-foreground/75 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <span className="font-mono text-accent font-black">2.</span>
              <span>Lextimator™ Analyses</span>
            </div>
            <div className="flex items-center gap-1.5 text-foreground/75 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <span className="font-mono text-accent font-black">3.</span>
              <span>Scope &amp; Cost Estimate</span>
            </div>
            <div className="flex items-center gap-1.5 text-foreground/75 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
              <span className="font-mono text-accent font-black">4.</span>
              <span>Human Review</span>
            </div>
            <div className="flex items-center gap-1.5 text-primary bg-accent/15 p-2.5 rounded-xl border border-accent/30 font-bold col-span-2 sm:col-span-1">
              <span className="font-mono text-accent font-black">5.</span>
              <span>Confirmed Fixed Price</span>
            </div>
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

            {/* ESTIMATED COST SPOTLIGHT */}
            <div className="py-8 text-center border-b border-slate-200">
              <span className="text-[11px] font-montserrat font-black uppercase tracking-widest text-foreground/50 block mb-2">
                Estimated Cost
              </span>
              <div className="text-5xl sm:text-6xl font-black text-primary font-montserrat tracking-tight">
                {result.priceAmount || `${result.currencySymbol}${result.estimatedPrice} ${result.currency}`}
              </div>
              <p className="text-xs sm:text-sm font-montserrat font-medium text-foreground/65 mt-3 max-w-xl mx-auto">
                Scope and cost estimate generated by Lextimator™. Subject to human review where required before confirmed fixed price.
              </p>
            </div>

            {/* Scope & Estimated Timeline Context */}
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
                  {result.turnaround?.replace(/\s*\(\+?\d+%\)/g, '') || 'Standard (3–5 Business Days)'}
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs">
                <span className="text-foreground/50 block text-[10px] uppercase font-black tracking-wider mb-1">
                  Supervisory Validation
                </span>
                <span className="font-montserrat font-black text-primary text-base">
                  Senior Legal Lead Review &amp; QA
                </span>
              </div>
            </div>

            {/* SECTION 6: CONNECTION BETWEEN INSTANT QUOTE AND LEXPACK (SMART RECOMMENDATION) */}
            {(() => {
              const qualifying = getQualifyingLexPack(result.estimatedPrice, result.currency);
              const quoteFormatted = result.priceAmount || `${result.currencySymbol}${result.estimatedPrice.toLocaleString()} ${result.currency}`;

              return (
                <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-50/90 via-white to-amber-50/50 border-2 border-accent/50 text-left space-y-4 my-6 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/15 text-accent text-[10px] font-montserrat font-black uppercase tracking-wider mb-1.5">
                        <Sparkles className="w-3 h-3" />
                        <span>Automatic Best-Value Opportunity</span>
                      </div>
                      <h4 className="text-base sm:text-xl font-black font-montserrat text-primary">
                        You qualify for better LexPack™ pricing.
                      </h4>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="text-[10px] text-foreground/50 uppercase font-black tracking-wider block">
                        Approved Fixed Quote
                      </span>
                      <div className="text-xl sm:text-2xl font-black font-montserrat text-primary">
                        {quoteFormatted}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-accent/10 border border-accent/20 text-xs sm:text-sm text-primary leading-relaxed font-medium">
                    Your current assignment qualifies for the <strong className="text-accent font-black">{qualifying.tier} LexPack</strong>, giving you a <strong className="text-emerald-700 font-black">{qualifying.discount}% value advantage</strong> compared with standard Pay Per Assignment pricing.
                  </div>

                  <p className="text-xs text-foreground/60 italic font-medium">
                    &ldquo;Choose a LexPack for greater value, or simply pay per assignment based on your approved quote — the choice is always yours.&rdquo;
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {/* Option B: Choose LexPack & Save */}
                    <Link
                      href={`https://engine.lexocrates.com/client-registration?plan=${qualifying.planId}&ref=${result.estimateId || ''}&quote=${result.estimatedPrice}&currency=${result.currency}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full py-5 rounded-xl bg-accent hover:bg-accent/90 text-primary font-montserrat font-black text-xs tracking-wide shadow-md shadow-accent/20 flex items-center justify-center gap-2 transition-all">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Choose {qualifying.tier} LexPack &amp; Save ({qualifying.discount}%)</span>
                      </Button>
                    </Link>

                    {/* Option A: Continue with Fixed Quote (Pay Per Assignment) */}
                    <Link
                      href={`https://engine.lexocrates.com/client-registration?email=${encodeURIComponent(
                        email
                      )}&service=${encodeURIComponent(result.serviceType)}&ref=${
                        result.estimateId || ''
                      }&quote=${result.estimatedPrice}&currency=${result.currency}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="w-full py-5 rounded-xl bg-primary hover:bg-primary/95 text-white border border-primary font-montserrat font-bold text-xs tracking-wide flex items-center justify-center gap-2 transition-all shadow-sm">
                        <span>Continue with {quoteFormatted} Fixed Quote</span>
                        <ArrowRight className="w-3.5 h-3.5 text-accent" />
                      </Button>
                    </Link>
                  </div>

                  <div className="flex items-center justify-between text-xs text-foreground/60 pt-1 font-medium">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      Prepaid Legal Capacity never expires
                    </span>
                    <Link href="#pricing" className="text-accent hover:underline font-black">
                      View All LexPack Tiers →
                    </Link>
                  </div>
                </div>
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
          /* ================= CLEAN FORM (Pure Services & Document Upload) ================= */
          <motion.form
            key="form-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
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

            {/* Field 2 & 3: Email & Client Reference */}
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
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-primary placeholder:text-foreground/35 text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1.5">
                  Law Firm / Client Reference <span className="text-foreground/45 lowercase font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Miller LLP / Matter #402"
                  value={clientReference}
                  onChange={(e) => setClientReference(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-primary placeholder:text-foreground/35 text-xs sm:text-sm font-medium focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                />
              </div>
            </div>

            {/* Field 4: Upload Document (PDF) */}
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

            {/* Field 5: Turnaround Speed */}
            <div>
              <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-primary mb-1.5">
                Delivery Timeline <span className="text-accent">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
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
                    <span className="text-xs font-montserrat font-bold text-primary block mb-1">
                      {opt.label}
                    </span>
                    <span className="text-[10.5px] text-foreground/55 font-medium block">
                      {opt.timeframe}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions: Confidentiality & Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-center gap-2 text-xs text-foreground/60 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Protected under bilateral NDA • Guaranteed confirmed fixed pricing</span>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-6 rounded-xl bg-primary hover:bg-primary/90 text-white font-montserrat font-black text-xs uppercase tracking-[0.15em] shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group transition-all"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Lextimator™ Analysing Assignment...</span>
                  </>
                ) : (
                  <>
                    <span>Get Your Estimate from Lextimator™</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
