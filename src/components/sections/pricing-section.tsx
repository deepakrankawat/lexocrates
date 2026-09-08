'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ShieldCheck, Zap, Sparkles, ArrowRight, Lock, UserPlus } from 'lucide-react';
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

export interface LexPackBundleTier {
  id: string;
  name: string;
  subtitle: string;
  prices: Record<CurrencyCode, number | string>;
  lexPoints: number | string;
  advantage: string;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export const LEXPACK_BUNDLES_DATA: LexPackBundleTier[] = [
  {
    id: 'starter',
    name: 'Starter Bundle',
    subtitle: 'Ideal for boutique law firms starting with AI-powered LPO and contract reviews.',
    prices: { USD: 299, GBP: 239, CAD: 399 },
    lexPoints: 100,
    advantage: 'Standard',
    features: [
      '100 LexPoints (LP) Capacity',
      'No monthly expiration or auto-renewals',
      'Full access to Lex Engine Estimator',
      'Standard 48-Hour SLA Response',
      'Secure Client Portal Access',
    ],
    ctaText: 'Buy Starter',
  },
  {
    id: 'growth',
    name: 'Growth Bundle',
    subtitle: 'Designed for active law firms managing continuous contract review and litigation support.',
    badge: 'MOST POPULAR',
    isPopular: true,
    prices: { USD: 899, GBP: 719, CAD: 1199 },
    lexPoints: 350,
    advantage: 'Save 14%',
    features: [
      '350 LexPoints (LP) Capacity',
      'Save 14% vs Starter pricing ($2.56/LP)',
      'No monthly expiration or rollover stress',
      'Priority 24-Hour SLA Response',
      'Dedicated Account Manager & Syncs',
    ],
    ctaText: 'Buy Growth',
  },
  {
    id: 'professional',
    name: 'Professional Bundle',
    subtitle: 'High-volume legal capacity for corporate legal departments and busy litigation practices.',
    prices: { USD: 1999, GBP: 1599, CAD: 2699 },
    lexPoints: 900,
    advantage: 'Save 26%',
    features: [
      '900 LexPoints (LP) Capacity',
      'Save 26% vs Starter pricing ($2.22/LP)',
      'Multi-jurisdictional research & M&A due diligence',
      'Express 12-to-24 Hour Urgent SLA Option',
      'Custom Enterprise Workflow Integration',
    ],
    ctaText: 'Buy Professional',
  },
  {
    id: 'business',
    name: 'Business Bundle',
    subtitle: 'Enterprise scale pay-as-you-go capacity for multi-partner law firms and global legal teams.',
    badge: 'BEST VALUE',
    prices: { USD: 3999, GBP: 3199, CAD: 5399 },
    lexPoints: 2000,
    advantage: 'Save 33%',
    features: [
      '2,000 LexPoints (LP) Capacity',
      'Save 33% maximum discount ($2.00/LP)',
      'Unlimited user seats & paralegal workflows',
      'SOC-2 / ISO 27001 Security compliance',
      'Dedicated Senior Legal Lead & API access',
    ],
    ctaText: 'Buy Business',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Bundle',
    subtitle: 'Tailored enterprise volume, custom SLA, and dedicated commercial terms for large law firms.',
    badge: 'COMMERCIAL',
    prices: { USD: 'Custom', GBP: 'Custom', CAD: 'Custom' },
    lexPoints: 'Custom',
    advantage: 'Custom Commercial Terms',
    features: [
      'Custom LexPoints (LP) Capacity',
      'Bespoke commercial terms & invoicing',
      'Dedicated Senior Legal Lead & 24/7 SLA',
      'Custom API & Enterprise Integration',
      'Custom Security & Compliance SLA',
    ],
    ctaText: 'Contact Commercial',
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

  return (
    <section className="pt-[110px] sm:pt-[130px] lg:pt-[150px] pb-10 sm:pb-14 bg-[#0B1736] text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(229,169,30,0.06)_0%,transparent_70%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E5A91E]/15 border border-[#E5A91E]/30 text-[#E5A91E] text-[10px] font-montserrat font-black uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            <span>Pay-As-You-Go Capacity • No Subscription Model</span>
          </div>

          <h2 className="font-montserrat text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white flex items-center justify-center">
            <span className="inline-flex items-center">
              <span>Lex<span className="text-[#E5A91E]">Pack</span></span>
              <TrademarkBadge className="w-3 h-3 sm:w-3.5 sm:h-3.5 -translate-y-2 sm:-translate-y-2.5 ml-0.5 text-[#E5A91E]" />
            </span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Purchase capacity whenever required. Points never expire. Larger LexPack bundles offer better value with zero monthly retainer traps.
          </p>

          <div className="pt-1">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 text-[10.5px]">
              <UserPlus className="w-3 h-3 text-[#E5A91E]" />
              <span>Select any plan below to proceed to the onboarding form &amp; create your account.</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 rounded-xl border border-slate-700/80 shadow-inner">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
              const c = CURRENCIES[code];
              const isActive = currency === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-montserrat font-extrabold text-[11px] transition-all duration-300",
                    isActive
                      ? "bg-[#E5A91E] text-[#0B1736] shadow-md scale-[1.02]"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/80"
                  )}
                >
                  <span className="text-xs">{c.flag}</span>
                  <span>{c.code} ({c.symbol})</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-2 text-center">
          <p className="text-[11px] text-slate-400 font-medium">
            Displaying LexPack in <span className="text-white font-bold">{curr.flag} {curr.name} ({curr.code})</span> for law firms in {curr.country}.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 items-stretch">
          {LEXPACK_BUNDLES_DATA.map((bundle) => {
            const price = bundle.prices[currency];

            return (
              <motion.div
                key={bundle.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "relative rounded-2xl px-4 pt-5 pb-4 flex flex-col justify-between transition-all duration-300",
                  bundle.isPopular
                    ? "bg-slate-900 border-2 border-[#E5A91E] shadow-xl shadow-[#E5A91E]/10"
                    : "bg-slate-900/80 border border-slate-800 hover:border-slate-700 backdrop-blur-xl"
                )}
              >
                {bundle.badge && (
                  <div className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[9px] font-montserrat font-black uppercase tracking-wider shadow-md whitespace-nowrap",
                    bundle.isPopular ? "bg-[#E5A91E] text-[#0B1736]" : "bg-slate-800 text-[#E5A91E] border border-[#E5A91E]/30"
                  )}>
                    {bundle.badge}
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <h3 className="font-montserrat text-sm font-black text-white">
                      {bundle.name}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-medium leading-normal mt-0.5 line-clamp-2">
                      {bundle.subtitle}
                    </p>
                  </div>

                  <div className={cn(
                    "p-2.5 rounded-xl border transition-colors",
                    bundle.isPopular
                      ? "bg-slate-800/90 border-slate-700"
                      : "bg-slate-950/60 border-slate-800"
                  )}>
                    <div className="flex items-baseline gap-1">
                      <span className="font-montserrat text-xl font-black text-white tracking-tight">
                        {typeof price === 'number' ? `${curr.symbol}${price.toLocaleString()}` : price}
                      </span>
                      <span className="text-[9px] text-slate-400 font-bold uppercase">
                        {typeof price === 'number' ? '/ One-Time' : ''}
                      </span>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-800/80 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-400 font-semibold text-[9px] uppercase tracking-wider">Capacity</span>
                        <span className="text-[#E5A91E] font-black text-[11px]">
                          {typeof bundle.lexPoints === 'number' ? `${bundle.lexPoints.toLocaleString()} LP` : `${bundle.lexPoints} LP`}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-[11px] gap-1">
                        <span className="text-slate-400 font-semibold text-[9px] uppercase tracking-wider">Advantage</span>
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[9px] font-black tracking-wide inline-block text-right",
                          bundle.advantage.includes('Save')
                            ? "bg-emerald-500 text-white shadow-sm"
                            : bundle.advantage.includes('Commercial') || bundle.advantage.includes('Custom')
                            ? "bg-amber-500/20 text-[#E5A91E] border border-[#E5A91E]/40"
                            : "bg-slate-800 text-slate-300 border border-slate-700/60"
                        )}>
                          {bundle.advantage}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 my-2">
                    {bundle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-1.5 text-[10px] text-slate-300 font-medium">
                        <div className="p-0.5 rounded-full bg-[#E5A91E]/15 text-[#E5A91E] flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <Button
                    asChild
                    className={cn(
                      "w-full h-9 py-1.5 px-2 rounded-xl font-montserrat font-black text-[10px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1 group text-center overflow-hidden",
                      bundle.isPopular
                        ? "bg-[#E5A91E] hover:bg-[#d49b1a] text-[#0B1736] shadow-md shadow-[#E5A91E]/20"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    )}
                  >
                    <Link href={`https://engine.lexocrates.com/client-registration?plan=${encodeURIComponent(bundle.id)}`}>
                      <span className="truncate">{bundle.ctaText}</span>
                      <ArrowRight className="w-3 h-3 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                  <p className="text-[9px] text-center text-slate-400 mt-1.5 font-medium flex items-center justify-center gap-1">
                    <UserPlus className="w-2.5 h-2.5 text-[#E5A91E]" />
                    <span>Creates your client account</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Plan Bundle Matrix Comparison Table */}
        <div className="mt-10 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 sm:p-6 backdrop-blur-xl shadow-lg">
          <div className="mb-4">
            <h3 className="font-montserrat text-lg sm:text-xl font-black text-white">
              Bundle &amp; Value Advantage Overview
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Compare LexPoints capacity and discount structure across all 5 tiers.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/80">
            <table className="w-full text-left text-[11px] border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-[#E5A91E] font-montserrat font-black uppercase text-[10px] tracking-wider bg-slate-900/80">
                  <th className="py-2.5 px-4 border-r border-slate-800">Bundle</th>
                  <th className="py-2.5 px-4 border-r border-slate-800">Price</th>
                  <th className="py-2.5 px-4 border-r border-slate-800">LexPoints</th>
                  <th className="py-2.5 px-4">Value Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 font-medium">
                {LEXPACK_BUNDLES_DATA.map((bundle) => {
                  const p = bundle.prices[currency];
                  const formatted = typeof p === 'number' ? `${curr.symbol}${p.toLocaleString()}` : p;
                  return (
                    <tr
                      key={bundle.id}
                      className={cn(
                        "hover:bg-slate-800/40 transition-colors",
                        bundle.isPopular && "bg-amber-500/5"
                      )}
                    >
                      <td className="py-2.5 px-4 font-bold text-white border-r border-slate-800">
                        <div className="flex items-center gap-1.5">
                          <span>{bundle.name.replace(' Bundle', '')}</span>
                          {bundle.isPopular && (
                            <span className="bg-[#E5A91E] text-[#0B1736] text-[8px] font-black px-1.5 py-0.5 rounded">
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-2.5 px-4 text-slate-200 font-semibold border-r border-slate-800">
                        {formatted}
                      </td>
                      <td className="py-2.5 px-4 text-[#E5A91E] font-bold border-r border-slate-800">
                        {typeof bundle.lexPoints === 'number' ? `${bundle.lexPoints.toLocaleString()} LP` : `${bundle.lexPoints} LP`}
                      </td>
                      <td className={cn(
                        "py-2.5 px-4",
                        bundle.advantage.includes('Save')
                          ? "font-extrabold text-white"
                          : bundle.advantage.includes('Custom')
                          ? "font-extrabold text-amber-400"
                          : "text-slate-300 font-medium"
                      )}>
                        {bundle.advantage}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E5A91E]" />
            <span className="text-[11px] text-slate-300 font-semibold">Enterprise-Grade Confidentiality &amp; NDA</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Lock className="w-4 h-4 text-[#E5A91E]" />
            <span className="text-[11px] text-slate-300 font-semibold">Transparent Pricing • No Hidden Retainers</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-[#E5A91E]" />
            <span className="text-[11px] text-slate-300 font-semibold">Dedicated Paralegal &amp; Legal Delivery Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
