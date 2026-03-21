
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '../animations/slide-in';
import { motion } from 'framer-motion';
import { LegalWorkflowAiAnimation } from '../animations/legal-workflow-ai-animation';
import { Scale, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary py-12 lg:py-24">
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

      <div className="relative z-10 mx-auto w-full px-5 sm:px-10 lg:px-20 max-w-[1920px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <div className="flex flex-col items-center lg:items-start">
              <SlideIn direction="up" delay={0.1}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-8 shadow-xl">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-accent relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  </span>
                  <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[8px] sm:text-xs">
                    Jurisdictional Rigor • Global Delivery
                  </p>
                </div>
              </SlideIn>

              <SlideIn direction="up" delay={0.2}>
                <h1 className="font-montserrat text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white mb-6 tracking-tighter">
                  Strategic <br />
                  <span className="text-accent">Legal</span> <br className="hidden sm:block" />
                  Operations
                </h1>
              </SlideIn>

              <SlideIn direction="up" delay={0.25}>
                <p className="text-accent font-montserrat font-bold text-base sm:text-xl lg:text-2xl mb-8 tracking-tight max-w-2xl mx-auto lg:mx-0">
                  Where Confidentiality, Precision, and Speed Converge
                </p>
              </SlideIn>

              <SlideIn direction="up" delay={0.35} className="space-y-6 lg:space-y-4 mb-10 w-full flex flex-col items-center lg:items-start">
                <h2 className="text-sm sm:text-xl font-montserrat font-bold tracking-tight border-l-0 lg:border-l-4 border-accent lg:pl-8 inline-block lg:block text-white uppercase lg:normal-case tracking-[0.2em] lg:tracking-tight">
                  Elite LPO Support for Global Law Firms
                </h2>
                
                <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-lg text-white/70 font-medium leading-relaxed lg:pl-8 mx-auto lg:mx-0 px-4 lg:px-0">
                  Partnering with the world&apos;s leading practices in the US, UK, and Canada. We integrate elite Indian expertise with advanced AI technology to transform high-stakes legal workflows into high-performance operational successes.
                </p>
              </SlideIn>

              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start lg:ml-8 w-full sm:w-auto px-6 lg:px-0">
                <SlideIn direction="up" delay={0.45}>
                  <Button
                    asChild
                    size="xl"
                    className="w-full sm:w-auto h-14 bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs sm:text-sm uppercase tracking-[0.25em] px-10 rounded-full shadow-xl shadow-primary/20 transition-all duration-500 hover:scale-105"
                  >
                    <Link href="/services" className="flex items-center justify-center gap-2">
                      Explore Solutions <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </SlideIn>
                <SlideIn direction="up" delay={0.5}>
                  <Button
                    asChild
                    size="xl"
                    variant="outline"
                    className="w-full sm:w-auto h-14 bg-white/5 backdrop-blur-xl text-white border-white/20 hover:bg-white hover:text-primary font-montserrat font-black text-xs sm:text-sm uppercase tracking-[0.25em] px-10 rounded-full transition-all duration-500 hover:scale-105"
                  >
                    <Link href="/contact">Strategy Call</Link>
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
