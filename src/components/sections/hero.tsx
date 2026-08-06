'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '../animations/slide-in';
import { motion } from 'framer-motion';
import { LegalWorkflowAiAnimation } from '../animations/legal-workflow-ai-animation';
import { Scale, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary pt-[84px] sm:pt-[100px] lg:pt-[140px] pb-12 lg:pb-24">
      {/* High-End Architectural Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Desktop Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(184,134,11,0.15)_0%,transparent_50%)] hidden lg:block" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.1)_0%,transparent_50%)] hidden lg:block" />
        
        {/* Mobile-Specific Center Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(184,134,11,0.15)_0%,transparent_60%)] lg:hidden" />
        
        <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
        
        <div className="absolute top-1/4 right-1/4 opacity-[0.05] hidden md:block">
          <motion.div
            className="gpu-accelerated"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          >
            <Scale size={400} strokeWidth={0.5} color="white" />
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full px-5 sm:px-10 lg:px-28 xl:px-36 max-w-[1920px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start">
              <SlideIn direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-8 shadow-xl">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-accent relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  </span>
                  <p className="font-lato font-black text-accent uppercase tracking-[0.2em] text-[8px] sm:text-xs">
                    SUPPORTING LAW FIRMS &amp; CORPORATE LEGAL TEAMS ACROSS CANADA, THE UK &amp; THE USA · GLOBAL DELIVERY
                  </p>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.2}>
                <h1 className="font-montserrat text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-[1.15] sm:leading-[1.1] text-white mb-6 tracking-tight">
                  Legal Process Outsourcing, Built Around How Your Team Actually Works
                </h1>
              </SlideIn>

              <SlideIn direction="up" delay={0.35} className="space-y-6 lg:space-y-4 mb-10 w-full flex flex-col items-center lg:items-start">
                <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-lg text-white/80 font-medium leading-relaxed mx-auto lg:mx-0 px-4 lg:px-0">
                  Lexocrates partners with law firms and corporate legal departments in Canada, the UK, and the USA, managing the process-intensive legal work that keeps your team from focusing on what matters most. From legal research and litigation support to contract lifecycle management, eDiscovery, compliance, and paralegal services, our legal professionals work within structured, quality-driven processes built to fit your workflow — not the other way around.
                </p>
              </SlideIn>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start w-full sm:w-auto px-2 sm:px-0">
                <SlideIn direction="up" delay={0.45} className="w-full sm:w-auto">
                  <Button
                    asChild
                    size="xl"
                    className="w-full sm:w-auto h-11 sm:h-13 lg:h-14 bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] px-6 sm:px-10 rounded-full shadow-xl shadow-primary/20 transition-all duration-500 hover:scale-105"
                  >
                    <Link href="/services" className="flex items-center justify-center gap-2">
                      Explore Our Services <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </SlideIn>
                <SlideIn direction="up" delay={0.5} className="w-full sm:w-auto">
                  <Button
                    asChild
                    size="xl"
                    className="w-full sm:w-auto h-11 sm:h-13 lg:h-14 bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-primary font-montserrat font-black text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.15em] sm:tracking-[0.2em] px-6 sm:px-10 rounded-full transition-all duration-500 hover:scale-105"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </SlideIn>
              </div>

              {/* Trust Indicators */}
              <SlideIn direction="up" delay={0.6} className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700 lg:ml-8">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">24/7 Global Sync</span>
                </div>
              </SlideIn>
            </div>
          </div>

          <SlideIn direction="up" delay={0.55} className="relative mt-8 lg:mt-0 px-4">
            <div className="absolute inset-0 bg-accent/5 blur-[80px] rounded-full lg:hidden" />
            <LegalWorkflowAiAnimation />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
