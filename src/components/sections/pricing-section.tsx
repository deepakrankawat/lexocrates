'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Sparkles, ArrowRight, Lock, UserPlus, Building2, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { TrademarkBadge } from '@/components/ui/trademark-badge';

export type CurrencyCode = 'CAD' | 'USD' | 'GBP';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  name: string;
  country: string;
  flag: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  CAD: {
    code: 'CAD',
    symbol: 'CA$',
    name: 'Canadian Dollar',
    country: 'Canada',
    flag: '🇨🇦',
  },
  USD: {
    code: 'USD',
    symbol: '$',
    name: 'US Dollar',
    country: 'United States',
    flag: '🇺🇸',
  },
  GBP: {
    code: 'GBP',
    symbol: '£',
    name: 'British Pound',
    country: 'United Kingdom',
    flag: '🇬🇧',
  },
};

export { COMPLIMENTARY_PILOT_CONFIG, TRIAL_THRESHOLDS, getPilotLimit } from '@/data/pilot-config';
export type { PilotMarketLimit } from '@/data/pilot-config';

export interface LexPackBundleTier {
  id: string;
  name: string;
  subtitle: string;
  prices: Record<CurrencyCode, number | string>;
  discountPercent: number;
  advantage: string;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export function calculateLegalCapacity(price: number | string, discountPercent: number): number | null {
  if (typeof price !== 'number' || discountPercent <= 0) return null;
  return Math.round(price + (price * discountPercent / 100));
}

export const LEXPACK_BUNDLES_DATA: LexPackBundleTier[] = [
  {
    id: 'starter',
    name: 'Starter LexPack',
    subtitle: 'Ideal for boutique law firms starting with AI-powered legal work estimation and ongoing support.',
    prices: { USD: 299, GBP: 239, CAD: 399 },
    discountPercent: 7,
    advantage: '+7% Bonus Capacity',
    features: [
      'Prepaid Legal Capacity with +7% bonus capacity',
      'Receives +7% bonus legal capacity on deposit',
      'Standard delivery (ordinarily 3–5 business days)',
      'Scope, price & timeline confirmed before work begins',
      'Full access to Lextimator™ Estimation Engine',
      'Secure Client Portal Access & No Auto-Renewals',
    ],
    ctaText: 'Buy Starter',
  },
  {
    id: 'growth',
    name: 'Growth LexPack',
    subtitle: 'Designed for active law firms managing continuous contract review and litigation support.',
    badge: 'MOST POPULAR',
    isPopular: true,
    prices: { USD: 899, GBP: 719, CAD: 1199 },
    discountPercent: 14,
    advantage: '+14% Bonus Capacity',
    features: [
      'Prepaid Legal Capacity with +14% bonus capacity',
      'Receives +14% bonus legal capacity on deposit',
      'Priority queue & 2–3 business day delivery option*',
      'Dedicated Account Support & Matter Docketing',
      'Full access to Lextimator™ Estimation Engine',
      'No monthly expiration or rollover stress',
    ],
    ctaText: 'Buy Growth',
  },
  {
    id: 'professional',
    name: 'Professional LexPack',
    subtitle: 'High-volume legal capacity for corporate legal departments and busy litigation practices.',
    prices: { USD: 1999, GBP: 1599, CAD: 2699 },
    discountPercent: 21,
    advantage: '+21% Bonus Capacity',
    features: [
      'Prepaid Legal Capacity with +21% bonus capacity',
      'Receives +21% bonus legal capacity on deposit',
      'Dedicated Senior Legal Lead assigned to your matters',
      'Priority delivery scheduling across active briefs*',
      'Multi-jurisdictional research & M&A due diligence',
      'Custom firm templates & workflow adaptation',
    ],
    ctaText: 'Buy Pro',
  },
  {
    id: 'business',
    name: 'Business LexPack',
    subtitle: 'Enterprise-scale pay-as-you-go capacity for multi-partner law firms and global legal teams.',
    badge: 'BEST VALUE',
    prices: { USD: 3999, GBP: 3199, CAD: 5399 },
    discountPercent: 28,
    advantage: '+28% Bonus Capacity',
    features: [
      'Prepaid Legal Capacity with +28% bonus capacity',
      'Receives +28% bonus legal capacity on deposit',
      'Dedicated Senior Legal Team & Paralegal Pod',
      'Custom workflow customization & practice integrations',
      'Multi-partner seat allocation & usage governance',
      'SOC-2 / ISO 27001 Security compliance & API access',
    ],
    ctaText: 'Buy Business',
  },
  {
    id: 'enterprise',
    name: 'Enterprise LexPack',
    subtitle: 'Tailored enterprise volume, custom workflow, and dedicated commercial terms for large law firms and enterprise legal ops.',
    badge: 'COMMERCIAL',
    prices: { USD: 'Custom', GBP: 'Custom', CAD: 'Custom' },
    discountPercent: 0,
    advantage: 'Custom Terms',
    features: [
      'Custom Prepaid Legal Capacity & bespoke volume terms',
      'Dedicated Practice Group alignment & Senior Account Director',
      'Custom API, document pipelines & practice management integrations',
      'Enterprise governance, billing & consolidated invoicing arrangements',
      'Tailored Security, Audit & Bilateral NDA Compliance Governance',
    ],
    ctaText: 'Contact Enterprise',
  },
];

export function PricingSection() {
  const [currency, setCurrency] = useState<CurrencyCode>('CAD');

  useEffect(() => {
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz.includes('London') || tz.includes('Europe')) {
        setCurrency('GBP');
      } else if (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Los_Angeles') || tz.includes('Denver') || tz.includes('Phoenix')) {
        setCurrency('USD');
      } else {
        setCurrency('CAD');
      }
    } catch (e) {
      setCurrency('CAD');
    }
  }, []);

  const curr = CURRENCIES[currency];

  const standardBundles = LEXPACK_BUNDLES_DATA.filter((b) => b.id !== 'enterprise');
  const enterpriseBundle = LEXPACK_BUNDLES_DATA.find((b) => b.id === 'enterprise');

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gradient-to-b from-slate-100/90 via-slate-50 to-slate-100/80 text-foreground relative border-t border-slate-200/90 overflow-hidden scroll-mt-20">
      {/* Subtle ambient background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-accent/10 to-transparent blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-amber-950 text-xs font-montserrat font-black uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span>Prepaid Legal Capacity • 7%–28% Value Advantage</span>
          </div>

          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            Lex<span className="text-accent">Pack</span>
            <TrademarkBadge className="w-3.5 h-3.5 sm:w-4 sm:h-4 -translate-y-2 sm:-translate-y-2.5 ml-0.5 text-accent inline-block" />{' '}
            Prepaid Legal Capacity
          </h2>

          <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
            Prepay for ongoing legal work and save more. Purchase prepaid legal capacity whenever required. Zero monthly retainer traps, zero hourly billing drift, and no expiration dates.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200/90 text-slate-700 text-xs font-semibold shadow-xs">
              <UserPlus className="w-4 h-4 text-accent flex-shrink-0" />
              <span>Select any tier below to proceed to onboarding &amp; activate your legal capacity.</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/15 border border-accent/25 text-amber-950 text-xs font-semibold">
              <span>Optional: You can always <Link href="#pay-per-assignment" className="underline hover:text-accent font-black ml-1">Pay Per Assignment</Link> instead.</span>
            </div>
          </div>
        </div>

        {/* Currency Switcher */}
        <div className="mt-8 flex flex-col items-center justify-center gap-2">
          <span className="text-[11px] font-montserrat font-black uppercase tracking-widest text-slate-500">
            Select Billing Currency
          </span>
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-sm">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
              const c = CURRENCIES[code];
              const isActive = currency === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  className={cn(
                    "flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl font-montserrat font-black text-xs sm:text-sm transition-all duration-300",
                    isActive
                      ? "bg-primary text-white shadow-md scale-[1.02]"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
                  )}
                >
                  <span className="text-base sm:text-lg">{c.flag}</span>
                  <span>{c.code} ({c.symbol})</span>
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-600 font-medium mt-1">
            Displaying LexPack™ in <strong className="text-slate-900 font-bold">{curr.flag} {curr.name} ({curr.code})</strong> for law firms in {curr.country}.
          </p>
        </div>

        {/* 4 Standard LexPack Bundle Cards (Spacious, High-Contrast 4-Column Grid) */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {standardBundles.map((bundle) => {
            const price = bundle.prices[currency];
            const capacity = calculateLegalCapacity(price, bundle.discountPercent);
            const extraValue = (typeof price === 'number' && typeof capacity === 'number') ? capacity - price : null;

            return (
              <motion.div
                key={bundle.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "relative rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 bg-white",
                  bundle.isPopular
                    ? "border-2 border-accent shadow-xl shadow-accent/15 ring-4 ring-accent/10 lg:-translate-y-2"
                    : "border border-slate-200 shadow-md hover:shadow-xl hover:border-slate-300"
                )}
              >
                {/* Top Badge */}
                {bundle.badge && (
                  <div className={cn(
                    "absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] sm:text-xs font-montserrat font-black uppercase tracking-wider shadow-md whitespace-nowrap",
                    bundle.isPopular ? "bg-accent text-primary" : "bg-primary text-white"
                  )}>
                    {bundle.badge}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Title & Description */}
                  <div>
                    <h3 className="font-montserrat text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                      {bundle.name}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed mt-2 min-h-[38px]">
                      {bundle.subtitle}
                    </p>
                  </div>

                  {/* Financial Metrics Box */}
                  <div className={cn(
                    "p-4 sm:p-5 rounded-2xl border transition-colors mt-3",
                    bundle.isPopular
                      ? "bg-amber-500/[0.05] border-accent/40"
                      : "bg-slate-50/90 border-slate-200/90"
                  )}>
                    {/* Prepaid Deposit */}
                    <div>
                      <span className="text-[11px] text-slate-500 uppercase font-black tracking-wider block">
                        Prepaid Deposit
                      </span>
                      <div className="flex items-baseline gap-1.5 mt-1">
                        <span className="font-montserrat text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                          {typeof price === 'number' ? `${curr.symbol}${price.toLocaleString()}` : price}
                        </span>
                        <span className="text-xs text-slate-500 font-bold uppercase">
                          {typeof price === 'number' ? 'One-Time' : ''}
                        </span>
                      </div>
                    </div>

                    {/* Capacity & Advantage Divider */}
                    <div className="mt-3 pt-3 border-t border-slate-200 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-600 font-bold text-xs uppercase tracking-wider">
                          Legal Capacity
                        </span>
                        <span className="font-montserrat font-black text-lg sm:text-xl text-primary">
                          {typeof capacity === 'number' ? `${curr.symbol}${capacity.toLocaleString()}` : 'Custom'}
                        </span>
                      </div>

                      {extraValue !== null && extraValue > 0 && typeof price === 'number' && (
                        <div className="flex items-center justify-between">
                          <span className="text-slate-600 font-bold text-xs uppercase tracking-wider">
                            Bonus Capacity
                          </span>
                          <span className="text-emerald-800 bg-emerald-50 border border-emerald-300 px-2.5 py-1 rounded-lg text-xs font-black shadow-2xs">
                            +{curr.symbol}{extraValue.toLocaleString()} Bonus
                          </span>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-0.5">
                        <span className="text-slate-600 font-bold text-xs uppercase tracking-wider">
                          Pricing Advantage
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-black tracking-wide bg-accent/20 text-amber-950 border border-accent/40 whitespace-nowrap">
                          {bundle.advantage}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 my-4">
                    {bundle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700 font-medium leading-snug">
                        <div className="p-0.5 rounded-full bg-emerald-100 text-emerald-700 flex-shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Button */}
                <div className="pt-3">
                  <Button
                    asChild
                    className={cn(
                      "w-full h-11 py-2.5 px-4 rounded-xl font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group text-center shadow-md",
                      bundle.isPopular
                        ? "bg-accent hover:bg-accent/90 text-primary shadow-accent/25"
                        : "bg-primary hover:bg-primary/95 text-white"
                    )}
                  >
                    <Link href={`https://engine.lexocrates.com/client-registration?plan=${encodeURIComponent(bundle.id)}`}>
                      <span className="whitespace-nowrap">{bundle.ctaText}</span>
                      <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-slate-500 mt-2 font-medium flex items-center justify-center gap-1.5">
                    <UserPlus className="w-3.5 h-3.5 text-accent" />
                    <span>Creates your client account</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Dedicated Full-Width Enterprise LexPack VIP Banner */}
        {enterpriseBundle && (
          <div className="mt-8 rounded-3xl bg-gradient-to-br from-primary via-slate-900 to-primary text-white border-2 border-accent/40 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            {/* Background luxury glow circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              {/* Left Column: Heading, Subtitle & Commercial Terms */}
              <div className="lg:w-5/12 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-montserrat font-black uppercase tracking-wider">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Enterprise &amp; Institutional</span>
                </div>

                <h3 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                  {enterpriseBundle.name}
                </h3>

                <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-medium">
                  {enterpriseBundle.subtitle}
                </p>

                <div className="pt-2 flex items-baseline gap-2">
                  <span className="font-montserrat text-2xl sm:text-3xl font-black text-accent">
                    Custom Volume Terms
                  </span>
                  <span className="text-xs text-white/60 font-semibold uppercase">
                    • Invoiced or Prepaid
                  </span>
                </div>
              </div>

              {/* Middle Column: Enterprise Inclusions */}
              <div className="lg:w-4/12 border-t lg:border-t-0 lg:border-l border-white/15 pt-5 lg:pt-0 lg:pl-8">
                <span className="text-xs font-montserrat font-black uppercase tracking-wider text-accent block mb-3">
                  Enterprise Inclusions:
                </span>
                <ul className="space-y-2.5">
                  {enterpriseBundle.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-white/90 font-medium leading-snug">
                      <div className="p-0.5 rounded-full bg-accent/20 text-accent flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: CTA & Partner Consultation */}
              <div className="lg:w-3/12 flex flex-col items-stretch lg:items-end justify-center gap-3 border-t lg:border-t-0 border-white/15 pt-5 lg:pt-0">
                <Button
                  asChild
                  className="w-full sm:w-auto lg:w-full h-12 px-6 rounded-xl bg-accent hover:bg-accent/90 text-primary font-montserrat font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-accent/20 transition-all flex items-center justify-center gap-2 group"
                >
                  <Link href="/contact">
                    <span>Contact Enterprise</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <div className="text-center lg:text-right">
                  <span className="text-xs text-white/70 font-semibold flex items-center justify-center lg:justify-end gap-1.5">
                    <PhoneCall className="w-3.5 h-3.5 text-accent" />
                    <span>Direct Senior Legal Team Consultation</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Plan Bundle Matrix Comparison Table in Website Theme */}
        <div className="mt-14 bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xl">
          <div className="mb-6">
            <h3 className="font-montserrat text-xl sm:text-2xl font-black text-slate-900">
              LexPack™ Legal Capacity &amp; Pricing Advantage Matrix
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-medium leading-relaxed">
              Legal capacity is calculated as <strong className="text-slate-900 font-mono">Prepaid Deposit + Bonus (Deposit × Bonus %)</strong>. For example, a Starter LexPack deposit of CA$399 yields CA$427 in legal capacity (+CA$28 bonus capacity, locking in a +7% bonus advantage on all legal work).
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-white font-montserrat font-black uppercase text-[11px] sm:text-xs tracking-wider bg-slate-900">
                  <th className="py-4 px-4 sm:px-6 border-r border-white/10">LexPack™ Tier</th>
                  <th className="py-4 px-4 sm:px-6 border-r border-white/10">Client Pays</th>
                  <th className="py-4 px-4 sm:px-6 border-r border-white/10">Legal Capacity Received</th>
                  <th className="py-4 px-4 sm:px-6 border-r border-white/10">Bonus Capacity</th>
                  <th className="py-4 px-4 sm:px-6">Bonus Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-medium">
                {LEXPACK_BUNDLES_DATA.map((bundle, idx) => {
                  const p = bundle.prices[currency];
                  const cap = calculateLegalCapacity(p, bundle.discountPercent);
                  const formattedPay = typeof p === 'number' ? `${curr.symbol}${p.toLocaleString()}` : p;
                  const formattedCap = typeof cap === 'number' ? `${curr.symbol}${cap.toLocaleString()}` : 'Custom Capacity';
                  const formattedExtra = (typeof p === 'number' && typeof cap === 'number')
                    ? `+${curr.symbol}${(cap - p).toLocaleString()}`
                    : 'Bespoke';
                  
                  return (
                    <tr
                      key={bundle.id}
                      className={cn(
                        "transition-colors",
                        idx % 2 === 1 ? "bg-slate-50/70" : "bg-white",
                        bundle.isPopular && "bg-amber-50/50 font-semibold"
                      )}
                    >
                      <td className="py-4 px-4 sm:px-6 font-bold text-slate-900 border-r border-slate-200">
                        <div className="flex items-center gap-2">
                          <span className="font-montserrat font-black">{bundle.name.replace(/ (Bundle|LexPack)/, '')}</span>
                          {bundle.isPopular && (
                            <span className="bg-accent text-primary text-[10px] font-montserrat font-black px-2.5 py-0.5 rounded-full shadow-xs">
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-slate-900 font-black border-r border-slate-200">
                        {formattedPay}
                      </td>
                      <td className="py-4 px-4 sm:px-6 border-r border-slate-200">
                        <span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-950 font-black border border-amber-300/80 inline-block shadow-2xs">
                          {formattedCap}
                        </span>
                      </td>
                      <td className="py-4 px-4 sm:px-6 border-r border-slate-200">
                        <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 font-bold border border-emerald-300 inline-block shadow-2xs">
                          {formattedExtra}
                        </span>
                      </td>
                      <td className="py-4 px-4 sm:px-6">
                        <span className={cn(
                          "px-3 py-1 rounded-full font-black text-xs inline-block whitespace-nowrap",
                          bundle.discountPercent > 0
                            ? "bg-primary/10 text-primary border border-primary/20"
                            : "bg-slate-100 text-slate-700 border border-slate-300"
                        )}>
                          {bundle.advantage}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Transparent Turnaround Policy Note */}
          <div className="mt-4 px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
            <span className="font-bold text-slate-900">*Delivery Timeline Commitment:</span> Standard turnaround is ordinarily 3–5 business days. Priority delivery (2–3 business days) is subject to operational availability and written confirmation by Lexocrates. Complex or high-volume matters receive an individual delivery schedule during scoping. In every case, the final delivery timeline is confirmed and locked before work begins.
          </div>
        </div>

        {/* Section 7 & 8: Best-Value Protection & Rolling 12-Month Relationship Pricing */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-11 h-11 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-montserrat text-base sm:text-xl font-black text-slate-900">
                Automatic Best-Value Protection
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              You are never penalized for starting with a smaller LexPack. If you select Starter but your transaction value qualifies for Growth, Professional, or Business, our system automatically identifies the higher tier and applies the greater value advantage (up to 28%) before checkout.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all">
            <div className="flex items-center gap-3.5 mb-3.5">
              <div className="w-11 h-11 rounded-2xl bg-accent/20 text-amber-900 flex items-center justify-center flex-shrink-0 shadow-xs">
                <Zap className="w-6 h-6 text-accent" />
              </div>
              <h4 className="font-montserrat text-base sm:text-xl font-black text-slate-900">
                Rolling 12-Month Relationship Pricing
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Start small. As your relationship with Lexocrates grows, your pricing improves automatically. Cumulative qualifying purchases over the preceding 12 months advance your tier from 7% → 14% → 21% → 28% without requiring large upfront commitments.
            </p>
          </div>
        </div>

        {/* Reassurance Guarantees */}
        <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2.5 text-slate-800">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-bold">Enterprise-Grade Confidentiality &amp; NDA</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-slate-800">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-bold">Transparent Pricing • No Hidden Retainers</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-slate-800">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-xs sm:text-sm font-bold">Dedicated Paralegal &amp; Legal Delivery Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
