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
    <div className="mt-8 rounded-3xl p-6 sm:p-8 lg:p-10 bg-gradient-to-b from-[#0F1D40] via-[#0B1736] to-[#070F26] border border-[#E5A91E]/30 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E5A91E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A91E]/15 border border-[#E5A91E]/30 text-[#E5A91E] text-[11px] font-montserrat font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Instant Fixed Quote • Zero Retainers</span>
          </div>
          <h3 className="font-montserrat text-xl sm:text-2xl lg:text-3xl font-black text-white">
            Matter Pricing Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Select your service, attach your PDF brief, and receive your guaranteed fixed quote instantly.
          </p>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950/80 rounded-xl border border-slate-800 self-start md:self-auto">
          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((cur) => (
            <button
              key={cur}
              type="button"
              onClick={() => setCurrency(cur)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-montserrat font-bold transition-all',
                currency === cur
                  ? 'bg-[#E5A91E] text-slate-950 shadow-md font-black'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              )}
            >
              <span>{CURRENCIES[cur].flag}</span>
              <span>{cur}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {result ? (
          /* ================= SUCCESS / PURE PRICE RESULT CARD ================= */
          <motion.div
            key="result-view"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            className="mt-8 rounded-2xl p-6 sm:p-8 bg-slate-950/90 border-2 border-[#E5A91E]/50 shadow-2xl relative"
          >
            {/* Top Bar with Service & Quote Reference */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-montserrat font-black uppercase tracking-widest text-[#E5A91E] block">
                    Approved Fixed Quote
                  </span>
                  <h4 className="font-montserrat text-lg sm:text-xl font-black text-white">
                    {result.serviceType}
                  </h4>
                </div>
              </div>

              {result.estimateId && (
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-right self-start sm:self-auto">
                  <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-400">
                    Quote Reference ID
                  </span>
                  <span className="font-mono text-xs font-bold text-[#E5A91E]">
                    {result.estimateId}
                  </span>
                </div>
              )}
            </div>

            {/* PURE PRICE SPOTLIGHT (Zero hourly rates, zero work hours) */}
            <div className="py-8 text-center border-b border-slate-800/80">
              <span className="text-[11px] font-montserrat font-bold uppercase tracking-widest text-slate-400 block mb-2">
                Total Fixed Matter Fee
              </span>
              <div className="text-5xl sm:text-6xl font-black text-[#E5A91E] font-montserrat tracking-tight">
                {result.priceAmount || `${result.currencySymbol}${result.estimatedPrice} ${result.currency}`}
              </div>
              <p className="text-xs sm:text-sm font-montserrat font-medium text-slate-300 mt-3">
                Guaranteed locked price for this matter. No hourly billing, retainer commitments, or surprise fees.
              </p>
            </div>

            {/* Clean Matter Context (Scope & Timeline only, NO hours or hourly rate) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Document Scope
                </span>
                <span className="font-montserrat font-bold text-white text-sm">
                  {result.pageCount} Pages
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Delivery Timeline
                </span>
                <span className="font-montserrat font-bold text-[#E5A91E] text-sm">
                  {result.turnaround?.replace(/\s*\(\+?\d+%\)/g, '') || 'Standard'}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider mb-1">
                  Supervisory Tier
                </span>
                <span className="font-montserrat font-bold text-white text-sm">
                  Senior Associate Review & QA
                </span>
              </div>
            </div>

            {/* Next Steps CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
              <Link
                href={`https://engine.lexocrates.com/client-registration?email=${encodeURIComponent(
                  email
                )}&service=${encodeURIComponent(result.serviceType)}&ref=${
                  result.estimateId || ''
                }&quote=${result.estimatedPrice}&currency=${result.currency}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1"
              >
                <Button className="w-full py-6 rounded-xl bg-[#E5A91E] hover:bg-[#d49917] text-slate-950 font-montserrat font-black text-sm tracking-wide shadow-lg shadow-[#E5A91E]/20 flex items-center justify-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  <span>Create Account</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>

              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="w-full sm:w-auto py-6 rounded-xl border-slate-700 bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-montserrat font-bold flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Estimate Another Matter</span>
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
              <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center gap-3 text-rose-400 text-xs font-medium">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Field 1: Select Service (Clean names without hourly rate tags) */}
            <div>
              <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Select Legal Service <span className="text-[#E5A91E]">*</span>
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-xs sm:text-sm focus:outline-none focus:border-[#E5A91E] focus:ring-1 focus:ring-[#E5A91E]/30 transition-all cursor-pointer"
              >
                {N8N_SERVICES.map((s) => (
                  <option key={s.id} value={s.id} className="bg-slate-900 text-white">
                    {s.label}
                  </option>
                ))}
              </select>
              <p className="text-[11px] text-slate-400 mt-1">
                {N8N_SERVICES.find((s) => s.id === service)?.desc}
              </p>
            </div>

            {/* Field 2 & 3: Email & Client Reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Work / Law Firm Email <span className="text-[#E5A91E]">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="counsel@yourfirm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#E5A91E] focus:ring-1 focus:ring-[#E5A91E]/30 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Law Firm / Client Reference <span className="text-slate-500 lowercase">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Miller LLP / Matter #402"
                  value={clientReference}
                  onChange={(e) => setClientReference(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#E5A91E] focus:ring-1 focus:ring-[#E5A91E]/30 transition-all"
                />
              </div>
            </div>

            {/* Field 4: Upload Document (PDF) */}
            <div>
              <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Upload Matter Brief or Document (.pdf) <span className="text-[#E5A91E]">*</span>
              </label>
              <div className="relative border border-dashed border-slate-800 hover:border-slate-700 bg-slate-950/50 rounded-2xl p-5 transition-all flex items-center justify-between">
                <input
                  type="file"
                  id="n8n-document-upload"
                  accept=".pdf"
                  required
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#E5A91E]/15 border border-[#E5A91E]/30 flex items-center justify-center text-[#E5A91E] flex-shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-montserrat font-bold text-white">
                      {file ? file.name : 'Select or drag-and-drop matter PDF'}
                    </p>
                    <p className="text-[10.5px] text-slate-400 mt-0.5">
                      {file
                        ? `${(file.size / 1024).toFixed(1)} KB attached • Ready for instant quote`
                        : 'Upload PDF brief to calculate your locked fixed price (Max 25MB).'}
                    </p>
                  </div>
                </div>
                {file ? (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => setFile(null)}
                    className="text-xs text-rose-400 hover:text-rose-300 relative z-10"
                  >
                    Remove
                  </Button>
                ) : (
                  <span className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-montserrat font-semibold text-slate-300 pointer-events-none">
                    Browse PDF
                  </span>
                )}
              </div>
            </div>

            {/* Field 5: Turnaround Speed (Clean labels without surcharges) */}
            <div>
              <label className="block text-[11px] font-montserrat font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                Delivery Timeline <span className="text-[#E5A91E]">*</span>
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
                        ? 'bg-[#E5A91E]/15 border-[#E5A91E] text-white shadow-sm ring-1 ring-[#E5A91E]/30'
                        : 'bg-slate-950/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                    )}
                  >
                    <span className="text-xs font-montserrat font-bold text-white block mb-1">
                      {opt.label}
                    </span>
                    <span className="text-[10.5px] text-slate-400 block">
                      {opt.timeframe}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Actions: Confidentiality & Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Protected under bilateral NDA • Guaranteed fixed pricing</span>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-6 rounded-xl bg-[#E5A91E] hover:bg-[#d49917] text-slate-950 font-montserrat font-black text-sm tracking-wide shadow-lg shadow-[#E5A91E]/20 flex items-center justify-center gap-2 group transition-all"
              >
                {loading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Calculating Fixed Quote...</span>
                  </>
                ) : (
                  <>
                    <span>Get Fixed Quote</span>
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
