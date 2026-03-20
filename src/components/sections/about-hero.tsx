
'use client';

import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';

export function AboutHero() {
  return (
    <section className="relative min-h-[40vh] fhd:min-h-[50vh] flex items-center justify-center overflow-hidden bg-primary py-8 lg:py-12">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.05] pointer-events-none">
          <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
            <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
            <path d="M500 0V1000M0 500H1000" stroke="currentColor" strokeWidth="0.5" />
            <rect x="250" y="250" width="500" height="500" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 500 500)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1800px] text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs fhd:text-sm mb-6 lg:mb-8">
              Our Identity
            </p>
          </FadeIn>
          <SlideIn direction="up" delay={0.4}>
            <h1 className="font-montserrat text-5xl sm:text-7xl fhd:text-8xl font-black leading-tight text-white mb-6 lg:mb-8 tracking-tighter">
              About <span className="text-accent">Lexocrates</span>
            </h1>
          </SlideIn>
          <FadeIn delay={0.6}>
            <p className="text-xl fhd:text-2xl text-white/70 font-medium leading-relaxed">
              Empowering global law firms through precision, ethics, and intellectual excellence. Founded on the Socratic principle of deep inquiry, we bridge the gap between complex legal needs and cost-effective, tech-driven delivery—acting as a seamless extension of your professional practice.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
