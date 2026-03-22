
'use client';

import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';

export function BlogHero() {
  return (
    <section className="relative min-h-[50vh] fhd:min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-10 pb-16 lg:pt-14">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
            <path d="M300 200V800M700 200V800M500 200V800" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
            <rect x="300" y="300" width="400" height="400" stroke="currentColor" strokeWidth="0.5" />
            <path d="M300 400H700M300 500H700M300 600H700" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1800px] text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-accent relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              </span>
              <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs">Intellectual Capital Hub</p>
            </div>
          </FadeIn>
          <SlideIn direction="up" delay={0.4}>
            <h1 className="font-montserrat text-5xl sm:text-7xl fhd:text-8xl font-black leading-tight text-white mb-6 lg:mb-8 tracking-tighter">
              Legal <span className="text-accent">Perspectives</span>
            </h1>
          </SlideIn>
          <FadeIn delay={0.6}>
            <p className="text-lg sm:text-xl fhd:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl mx-auto border-l-0 lg:border-l-4 border-accent/20 lg:pl-10">
              Deep-dive technical analysis on the evolving landscape of global legal process outsourcing. Explore our strategic insights on AI architectures, multi-jurisdictional compliance, and high-performance legal operations.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
