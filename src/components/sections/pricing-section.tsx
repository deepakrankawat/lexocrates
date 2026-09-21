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
  discountPercent: number;
  advantage: string;
  isPopular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
}

export function calculateLegalCapacity(price: number | string, discountPercent: number): number | null {
  if (typeof price !== 'number' || discountPercent <= 0) return null;
  return Math.round(price / (1 - discountPercent / 100));
}

export const LEXPACK_BUNDLES_DATA: LexPackBundleTier[] = [
  {
    id: 'starter',
    name: 'Starter LexPack',
    subtitle: 'Ideal for boutique law firms starting with AI-powered legal work estimation and ongoing support.',
    prices: { USD: 299, GBP: 239, CAD: 399 },
    discountPercent: 7,
    advantage: '7% Value Advantage',
    features: [
      'Prepaid Legal Capacity with 7% discount applied',
      'Receives bonus capacity (Price ÷ 0.93)',
      'No monthly expiration or auto-renewals',
      'Full access to Lextimator™ Estimation Engine',
      'Standard 48-Hour SLA Response',
      'Secure Client Portal Access',
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
    advantage: '14% Value Advantage',
    features: [
      'Prepaid Legal Capacity with 14% discount applied',
      'Receives bonus capacity (Price ÷ 0.86)',
      'No monthly expiration or rollover stress',
      'Priority 24-Hour SLA Response',
      'Dedicated Account Manager & Syncs',
    ],
    ctaText: 'Buy Growth',
  },
  {
    id: 'professional',
    name: 'Professional LexPack',
    subtitle: 'High-volume legal capacity for corporate legal departments and busy litigation practices.',
    prices: { USD: 1999, GBP: 1599, CAD: 2699 },
    discountPercent: 21,
    advantage: '21% Value Advantage',
    features: [
      'Prepaid Legal Capacity with 21% discount applied',
      'Receives bonus capacity (Price ÷ 0.79)',
      'Multi-jurisdictional research & M&A due diligence',
      'Express 12-to-24 Hour Urgent SLA Option',
      'Custom Enterprise Workflow Integration',
    ],
    ctaText: 'Buy Pro',
  },
  {
    id: 'business',
    name: 'Business LexPack',
    subtitle: 'Enterprise scale pay-as-you-go capacity for multi-partner law firms and global legal teams.',
    badge: 'BEST VALUE',
    prices: { USD: 3999, GBP: 3199, CAD: 5399 },
    discountPercent: 28,
    advantage: '28% Value Advantage',
    features: [
      'Prepaid Legal Capacity with 28% discount applied',
      'Receives bonus capacity (Price ÷ 0.72)',
      'Unlimited user seats & paralegal workflows',
      'SOC-2 / ISO 27001 Security compliance',
      'Dedicated Senior Legal Lead & API access',
    ],
    ctaText: 'Buy Business',
  },
  {
    id: 'enterprise',
    name: 'Enterprise LexPack',
    subtitle: 'Tailored enterprise volume, custom SLA, and dedicated commercial terms for large law firms.',
    badge: 'COMMERCIAL',
    prices: { USD: 'Custom', GBP: 'Custom', CAD: 'Custom' },
    discountPercent: 0,
    advantage: 'Custom Terms',
    features: [
      'Custom Prepaid Legal Capacity',
      'Bespoke commercial terms & invoicing',
      'Dedicated Senior Legal Lead & 24/7 SLA',
      'Custom API & Enterprise Integration',
      'Custom Security & Compliance SLA',
    ],
    ctaText: 'Contact Us',
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
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50/70 text-foreground relative border-t border-black/5 overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-montserrat font-black uppercase tracking-widest shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Prepaid Legal Capacity • 7%–28% Value Advantage</span>
          </div>

          <h2 className="font-montserrat text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-primary leading-tight">
            Lex<span className="text-accent">Pack</span>
            <TrademarkBadge className="w-3.5 h-3.5 sm:w-4 sm:h-4 -translate-y-2 sm:-translate-y-2.5 ml-0.5 text-accent inline-block" />{' '}
            Prepaid Legal Capacity
          </h2>

          <p className="text-foreground/70 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Prepay for ongoing legal work and save more. Purchase prepaid legal capacity whenever required. Zero monthly retainer traps or expiration dates.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-black/10 text-foreground/75 text-[11px] font-medium shadow-xs">
              <UserPlus className="w-3.5 h-3.5 text-accent" />
              <span>Select any tier below to proceed to onboarding &amp; activate your legal capacity.</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-primary text-[11px] font-medium">
              <span>Optional: You can always <Link href="#pay-per-assignment" className="underline hover:text-accent font-bold ml-1">Pay Per Assignment</Link> instead.</span>
            </div>
          </div>
        </div>

        {/* Currency Switcher */}
        <div className="mt-8 flex items-center justify-center">
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-black/10 shadow-sm">
            {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
              const c = CURRENCIES[code];
              const isActive = currency === code;
              return (
                <button
                  key={code}
                  type="button"
                  onClick={() => setCurrency(code)}
                  className={cn(
                    "flex items-center gap-1.5 px-4 py-2 rounded-xl font-montserrat font-black text-xs transition-all duration-300",
                    isActive
                      ? "bg-primary text-white shadow-md scale-[1.02]"
                      : "text-primary/70 hover:text-primary hover:bg-slate-100"
                  )}
                >
                  <span>{c.flag}</span>
                  <span>{c.code} ({c.symbol})</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-2.5 text-center">
          <p className="text-xs text-foreground/55 font-medium">
            Displaying LexPack™ in <span className="text-primary font-bold">{curr.flag} {curr.name} ({curr.code})</span> for law firms in {curr.country}.
          </p>
        </div>

        {/* LexPack Bundle Cards Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 items-stretch">
          {LEXPACK_BUNDLES_DATA.map((bundle) => {
            const price = bundle.prices[currency];
            const capacity = calculateLegalCapacity(price, bundle.discountPercent);
            const extraValue = (typeof price === 'number' && typeof capacity === 'number') ? capacity - price : null;

            return (
              <motion.div
                key={bundle.id}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className={cn(
                  "relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300",
                  bundle.isPopular
                    ? "bg-white border-2 border-accent shadow-xl shadow-accent/10 ring-2 ring-accent/15"
                    : "bg-white border border-slate-200/90 hover:border-accent/40 shadow-sm hover:shadow-xl"
                )}
              >
                {bundle.badge && (
                  <div className={cn(
                    "absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[9px] font-montserrat font-black uppercase tracking-wider shadow-md whitespace-nowrap",
                    bundle.isPopular ? "bg-accent text-primary" : "bg-primary text-white"
                  )}>
                    {bundle.badge}
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <h3 className="font-montserrat text-base font-black text-primary">
                      {bundle.name}
                    </h3>
                    <p className="text-[11px] text-foreground/60 font-medium leading-normal mt-1 line-clamp-2">
                      {bundle.subtitle}
                    </p>
                  </div>

                  <div className={cn(
                    "p-3 rounded-xl border transition-colors mt-3",
                    bundle.isPopular
                      ? "bg-amber-500/[0.06] border-accent/30"
                      : "bg-slate-50 border-slate-200/80"
                  )}>
                    <div>
                      <span className="text-[9px] text-foreground/50 uppercase font-black tracking-wider block">
                        Prepaid Deposit
                      </span>
                      <div className="flex items-baseline gap-1 mt-0.5">
                        <span className="font-montserrat text-2xl font-black text-primary tracking-tight">
                          {typeof price === 'number' ? `${curr.symbol}${price.toLocaleString()}` : price}
                        </span>
                        <span className="text-[10px] text-foreground/50 font-bold uppercase">
                          {typeof price === 'number' ? 'One-Time' : ''}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-black/5 space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-foreground/60 font-bold text-[10px] uppercase tracking-wider">Legal Capacity</span>
                        <span className="text-accent font-black text-sm">
                          {typeof capacity === 'number' ? `${curr.symbol}${capacity.toLocaleString()}` : 'Custom'}
                        </span>
                      </div>

                      {extraValue !== null && extraValue > 0 && (
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-foreground/60 font-medium text-[10px] uppercase tracking-wider">Extra Work</span>
                          <span className="text-emerald-700 font-bold bg-emerald-100/70 border border-emerald-200 px-1.5 py-0.5 rounded text-[10px]">
                            +{curr.symbol}{extraValue.toLocaleString()} Value
                          </span>
                        </div>
                      )}

                      <div className="flex items-center justify-between text-xs gap-1">
                        <span className="text-foreground/60 font-bold text-[10px] uppercase tracking-wider">Advantage</span>
                        <span className={cn(
                          "px-2 py-0.5 rounded-full text-[10px] font-black tracking-wide inline-block text-right",
                          bundle.discountPercent > 0
                            ? "bg-accent/15 text-primary border border-accent/30"
                            : "bg-primary/10 text-primary border border-primary/20"
                        )}>
                          {bundle.advantage}
                        </span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 my-3">
                    {bundle.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-[11px] text-foreground/75 font-medium">
                        <div className="p-0.5 rounded-full bg-accent/15 text-accent flex-shrink-0 mt-0.5">
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
                      "w-full h-10 py-2 px-3 rounded-xl font-montserrat font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-1.5 group text-center shadow-xs",
                      bundle.isPopular
                        ? "bg-accent hover:bg-accent/90 text-primary shadow-md shadow-accent/20"
                        : "bg-primary hover:bg-primary/95 text-white"
                    )}
                  >
                    <Link href={`https://engine.lexocrates.com/client-registration?plan=${encodeURIComponent(bundle.id)}`}>
                      <span className="whitespace-nowrap">{bundle.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </Button>
                  <p className="text-[10px] text-center text-foreground/50 mt-1.5 font-medium flex items-center justify-center gap-1">
                    <UserPlus className="w-3 h-3 text-accent" />
                    <span>Creates your client account</span>
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Plan Bundle Matrix Comparison Table in Website Theme */}
        <div className="mt-12 bg-white rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-lg">
          <div className="mb-5">
            <h3 className="font-montserrat text-xl sm:text-2xl font-black text-primary">
              LexPack™ Legal Capacity &amp; Pricing Advantage Matrix
            </h3>
            <p className="text-xs text-foreground/60 mt-1">
              Legal capacity is calculated as <span className="text-primary font-bold font-mono">Prepaid Deposit ÷ (1 − Discount %)</span>, providing purchasing power greater than your deposit.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-white font-montserrat font-black uppercase text-[11px] tracking-wider bg-primary">
                  <th className="py-3 px-4 sm:px-5 border-r border-white/10">LexPack™ Tier</th>
                  <th className="py-3 px-4 sm:px-5 border-r border-white/10">Client Pays</th>
                  <th className="py-3 px-4 sm:px-5 border-r border-white/10">Legal Capacity Received</th>
                  <th className="py-3 px-4 sm:px-5 border-r border-white/10">Extra Work Value</th>
                  <th className="py-3 px-4 sm:px-5">Value Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {LEXPACK_BUNDLES_DATA.map((bundle) => {
                  const p = bundle.prices[currency];
                  const cap = calculateLegalCapacity(p, bundle.discountPercent);
                  const formattedPay = typeof p === 'number' ? `${curr.symbol}${p.toLocaleString()}` : p;
                  const formattedCap = typeof cap === 'number' ? `${curr.symbol}${cap.toLocaleString()}` : 'Custom Capacity';
                  const formattedExtra = (typeof p === 'number' && typeof cap === 'number') ? `+${curr.symbol}${(cap - p).toLocaleString()}` : 'Bespoke';
                  return (
                    <tr
                      key={bundle.id}
                      className={cn(
                        "hover:bg-slate-50 transition-colors",
                        bundle.isPopular && "bg-amber-50/40 font-semibold"
                      )}
                    >
                      <td className="py-3.5 px-4 sm:px-5 font-bold text-primary border-r border-slate-100">
                        <div className="flex items-center gap-2">
                          <span>{bundle.name.replace(/ (Bundle|LexPack)/, '')}</span>
                          {bundle.isPopular && (
                            <span className="bg-accent text-primary text-[9px] font-montserrat font-black px-2 py-0.5 rounded-full shadow-xs">
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-primary font-bold border-r border-slate-100">
                        {formattedPay}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-accent font-black border-r border-slate-100">
                        {formattedCap}
                      </td>
                      <td className="py-3.5 px-4 sm:px-5 text-emerald-700 font-bold border-r border-slate-100">
                        {formattedExtra}
                      </td>
                      <td className={cn(
                        "py-3.5 px-4 sm:px-5 font-black",
                        bundle.discountPercent > 0 ? "text-primary" : "text-accent"
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

        {/* Section 7 & 8: Best-Value Protection & Rolling 12-Month Relationship Pricing */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-montserrat text-base sm:text-lg font-black text-primary">
                Automatic Best-Value Protection
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
              You are never penalized for starting with a smaller LexPack. If you select Starter but your transaction value qualifies for Growth, Professional, or Business, our system automatically identifies the higher tier and applies the greater value advantage (up to 28%) before checkout.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="font-montserrat text-base sm:text-lg font-black text-primary">
                Rolling 12-Month Relationship Pricing
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed font-medium">
              Start small. As your relationship with Lexocrates grows, your pricing improves automatically. Cumulative qualifying purchases over the preceding 12 months advance your tier from 7% → 14% → 21% → 28% without requiring large upfront commitments.
            </p>
          </div>
        </div>

        {/* Reassurance Guarantees */}
        <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="flex items-center justify-center gap-2 text-foreground/80">
            <ShieldCheck className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold">Enterprise-Grade Confidentiality &amp; NDA</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-foreground/80">
            <Lock className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold">Transparent Pricing • No Hidden Retainers</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-foreground/80">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-xs font-semibold">Dedicated Paralegal &amp; Legal Delivery Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
