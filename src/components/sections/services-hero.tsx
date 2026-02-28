
'use client';

import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';

export function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] fhd:min-h-[70vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
            <path d="M0 500H1000" stroke="currentColor" strokeWidth="0.5" />
            <path d="M500 0V1000" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="0.5" />
            <rect x="200" y="200" width="600" height="600" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1800px] text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs fhd:text-sm mb-8">
              What We Deliver
            </p>
          </FadeIn>
          <SlideIn direction="up" delay={0.4}>
            <h1 className="font-montserrat text-5xl sm:text-7xl fhd:text-8xl font-black leading-tight text-white mb-8 tracking-tighter">
              Strategic <span className="text-accent">Solutions</span>
            </h1>
          </SlideIn>
          <FadeIn delay={0.6}>
            <p className="text-xl fhd:text-2xl text-white/70 font-medium leading-relaxed">
              Transforming legal workflows with advanced technology and elite Indian legal expertise.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
