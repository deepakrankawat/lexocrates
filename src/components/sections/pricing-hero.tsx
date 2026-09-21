'use client';

import React from 'react';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { TrademarkBadge } from '@/components/ui/trademark-badge';
import { Scale, Sparkles, Layers, HelpCircle } from 'lucide-react';

export function PricingHero() {
  return (
    <section className="relative min-h-[42vh] fhd:min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary pt-[90px] sm:pt-[110px] lg:pt-[140px] pb-14 lg:pb-20">
      {/* Background radial effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(184,134,11,0.18)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.12)_0%,transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.04]">
          <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
            <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="500" cy="500" r="420" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
            <path d="M500 0V1000M0 500H1000" stroke="currentColor" strokeWidth="0.5" />
            <rect x="260" y="260" width="480" height="480" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 500 500)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 container-balanced text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-6 shadow-xl">
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              </span>
              <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[9px] sm:text-xs">
                COMMERCIAL ARCHITECTURE &amp; CAPACITY
              </p>
            </div>
          </FadeIn>

          <SlideIn direction="up" delay={0.25}>
            <h1 className="font-montserrat text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6 tracking-tighter">
              Lex<span className="text-accent">Pack</span>
              <TrademarkBadge className="w-3.5 h-3.5 sm:w-5 sm:h-5 -translate-y-2 sm:-translate-y-3.5 ml-0.5 text-accent inline-block" />{' '}
              &amp; <br className="hidden sm:inline" />
              <span className="text-accent">Lextimator</span>
              <TrademarkBadge className="w-3.5 h-3.5 sm:w-5 sm:h-5 -translate-y-2 sm:-translate-y-3.5 ml-0.5 text-accent inline-block" />
            </h1>
          </SlideIn>

          <FadeIn delay={0.4}>
            <p className="text-base sm:text-xl fhd:text-2xl text-white/80 font-medium leading-relaxed max-w-3xl mx-auto">
              Prepaid legal capacity in your selected currency (CAD, USD, or GBP) with <strong>7% to 28% value advantage</strong>, or pay per assignment with upfront confirmed fixed pricing. Zero monthly retainers — the choice is always yours.
            </p>
          </FadeIn>

          {/* Quick-Jump Section Navigation Tabs matching website theme */}
          <FadeIn delay={0.55} className="mt-8 sm:mt-10">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xl shadow-2xl max-w-full">
              <Link
                href="#pay-per-assignment"
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-montserrat font-black text-[11px] sm:text-xs uppercase tracking-wider bg-accent text-primary shadow-md hover:bg-accent/90 transition-all flex items-center gap-1.5"
              >
                <Scale className="w-3.5 h-3.5" />
                <span>Lextimator™ Estimation</span>
              </Link>

              <Link
                href="#pricing"
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-montserrat font-bold text-[11px] sm:text-xs uppercase tracking-wider text-white hover:bg-white/15 transition-all flex items-center gap-1.5 group"
              >
                <Sparkles className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
                <span>LexPack™ Bundles (Save 7%–28%)</span>
              </Link>

              <Link
                href="#workflow"
                className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-montserrat font-bold text-[11px] sm:text-xs uppercase tracking-wider text-white hover:bg-white/15 transition-all flex items-center gap-1.5 group"
              >
                <Layers className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
                <span>5-Stage Workflow</span>
              </Link>

              <Link
                href="#faq"
                className="px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-montserrat font-semibold text-[11px] sm:text-xs uppercase tracking-wider text-white/80 hover:text-white hover:bg-white/15 transition-all flex items-center gap-1"
              >
                <HelpCircle className="w-3.5 h-3.5 opacity-70" />
                <span>FAQs</span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
