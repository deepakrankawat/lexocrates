'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Sophisticated Architectural Background Graphic Optimized for FHD */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base Mesh Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(184,134,11,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.08)_0%,transparent_50%)]" />
        
        {/* Subtle technical grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        {/* Large Architectural SVG Graphic - Proportional Scaling */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] h-[160%] fhd:w-[130%] fhd:h-[130%] opacity-[0.07] pointer-events-none transition-transform duration-1000">
          <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
            <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="0.5" />
            <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
            <path d="M500 0V1000M0 500H1000" stroke="currentColor" strokeWidth="0.5" />
            <path d="M150 150L850 850M850 150L150 850" stroke="currentColor" strokeWidth="0.5" />
            <rect x="250" y="250" width="500" height="500" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 500 500)" />
            <path d="M500 200L800 500L500 800L200 500Z" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
             
        {/* Decorative Blurred Accents */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-[180px] -mr-96 -mt-96 animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] -ml-48 -mb-48" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-20 fhd:px-20 max-w-[1920px] py-12 text-center lg:text-left">
        <div className="max-w-7xl mx-auto lg:mx-0">
          
          {/* Component: Badge */}
          <FadeIn delay={0.2} duration={0.8}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 fhd:mb-12 shadow-2xl">
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs fhd:text-sm">
                Global Legal Process Outsourcing
              </p>
            </div>
          </FadeIn>
          
          {/* Component: Headline with Clamp Typography */}
          <SlideIn direction="up" delay={0.4} duration={0.8}>
            <h1 className="font-montserrat text-[3.5rem] sm:text-[5rem] lg:text-[6.5rem] fhd:text-[clamp(6rem,8.5vw,10.5rem)] font-black leading-[0.9] text-white mb-10 fhd:mb-16 tracking-tighter">
              Strategic <br />
              <span className="text-accent">Legal</span> <br />
              Operations
            </h1>
          </SlideIn>

          {/* Component: Description */}
          <FadeIn delay={0.6} duration={0.8}>
            <p className="max-w-3xl fhd:max-w-5xl text-lg sm:text-xl lg:text-2xl fhd:text-[1.75rem] text-white/70 font-medium leading-relaxed mb-12 fhd:mb-20 mx-auto lg:mx-0 border-l-4 border-accent/20 pl-8">
              Driving efficiency for the world&apos;s leading law firms and corporate legal departments. We provide the expertise and technology to transform your legal workflow.
            </p>
          </FadeIn>

          {/* Component: Actions */}
          <FadeIn delay={0.8} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center gap-6 fhd:gap-10 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-lg fhd:text-2xl px-12 py-8 fhd:px-16 fhd:py-12 rounded-full shadow-[0_20px_50px_rgba(206,166,48,0.2)] transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <Link href="/services">View Solutions</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-primary font-montserrat font-black text-lg fhd:text-2xl px-12 py-8 fhd:px-16 fhd:py-12 rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <Link href="/contact">Schedule Strategy Call</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Bottom status bar - Balanced for FHD */}
      <div className="absolute bottom-10 left-6 lg:left-20 fhd:left-20 hidden md:flex items-center gap-6 opacity-30">
        <div className="flex flex-col gap-1">
          <div className="w-12 h-0.5 bg-accent" />
          <div className="w-8 h-0.5 bg-accent/50" />
        </div>
        <p className="text-white font-lato font-bold text-[10px] fhd:text-xs uppercase tracking-[0.3em]">Excellence. Innovation. Trust.</p>
      </div>

      <div className="absolute bottom-8 right-1/2 translate-x-1/2 hidden lg:block opacity-10">
        <div className="w-px h-24 fhd:h-40 bg-gradient-to-b from-accent via-accent to-transparent" />
      </div>
    </section>
  );
}
