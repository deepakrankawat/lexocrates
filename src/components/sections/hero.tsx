'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';
import { motion } from 'framer-motion';
import { LegalWorkflowAiAnimation } from '../animations/legal-workflow-ai-animation';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary py-6 lg:py-10">
      {/* High-End Architectural Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(184,134,11,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
        
        {/* Refined Technical Grid */}
        <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Atmospheric Blurred Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px] -mr-64 -mt-64 animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -ml-32 -mb-32" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1920px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <FadeIn delay={0.2} duration={0.8}>
              <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-8 shadow-xl">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                </span>
                <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[9px] sm:text-xs">
                  Where Confidentiality, Precision, and Speed Converge
                </p>
              </div>
            </FadeIn>
            
            <SlideIn direction="up" delay={0.4} duration={0.8}>
              <h1 className="font-montserrat text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-white mb-6 lg:mb-8 tracking-tighter">
                Strategic <br />
                <span className="text-accent">Legal</span> <br className="hidden sm:block" />
                Operations
              </h1>
            </SlideIn>

            <FadeIn delay={0.6} duration={0.8}>
              <div className="space-y-4 mb-8 lg:mb-10">
                <h2 className="text-lg sm:text-xl lg:text-2xl text-white font-montserrat font-bold tracking-tight border-l-4 border-accent pl-5 lg:pl-8">
                  Excellence in Legal Process Outsourcing
                </h2>
                <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-lg text-white/70 font-medium leading-relaxed lg:pl-8">
                  Partnering with the world&apos;s leading law firms and corporate legal departments to drive operational efficiency. We integrate elite Indian expertise with advanced AI technology to transform your global legal workflow—delivering multi-jurisdictional support across the US, UK, and Canada with uncompromising accuracy.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.8} duration={0.8}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start lg:ml-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-sm lg:text-base px-10 py-7 rounded-full shadow-xl shadow-primary/20 transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <Link href="/services">Explore Solutions</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border-white/20 hover:bg-white hover:text-primary font-montserrat font-black text-sm lg:text-base px-10 py-7 rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <Link href="/contact">Schedule Strategy Call</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <SlideIn direction="left" delay={0.6} className="hidden lg:block relative">
            <LegalWorkflowAiAnimation />
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 backdrop-blur-2xl rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-[10px] font-black text-white/60 uppercase tracking-[0.3em]">AI-Driven Precision Workflow Active</p>
            </div>
          </SlideIn>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <p className="text-white font-lato font-black text-[10px] uppercase tracking-[0.6em]">Explore</p>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-10 bg-gradient-to-b from-accent to-transparent" 
        />
      </div>

      {/* Decorative Badge */}
      <div className="absolute bottom-6 left-6 lg:left-20 hidden md:flex items-center gap-6 opacity-30 group cursor-default">
        <div className="flex flex-col gap-1">
          <div className="w-12 h-1 bg-accent transition-all duration-500 group-hover:w-16" />
          <div className="w-8 h-1 bg-accent/40" />
        </div>
        <p className="text-white font-montserrat font-black text-[10px] uppercase tracking-[0.4em]">Excellence. Innovation. Trust.</p>
      </div>
    </section>
  );
}