'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';
import { motion } from 'framer-motion';
import { LegalWorkflowAiAnimation } from '../animations/legal-workflow-ai-animation';
import { Scale } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary py-12 lg:py-24">
      {/* High-End Architectural Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(184,134,11,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
        
        {/* Refined Technical Grid */}
        <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Floating Legal Symbols SVGs */}
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

        {/* Atmospheric Blurred Glows */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[800px] h-[300px] sm:h-[800px] bg-accent/10 rounded-full blur-[80px] sm:blur-[150px] -mr-32 sm:-mr-64 -mt-32 sm:-mt-64 animate-pulse duration-[10000ms]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1920px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-8 shadow-xl">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                </span>
                <span className="sr-only">Status: Active</span>
                <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[8px] sm:text-xs">
                  Confidentiality • Precision • Speed
                </p>
              </div>
              <h1 className="font-montserrat text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] text-white mb-6 tracking-tighter">
                Strategic <br />
                <span className="text-accent">Legal</span> <br className="hidden sm:block" />
                Operations
              </h1>
              <div className="space-y-4 mb-10">
                <h2 className="text-sm sm:text-xl lg:text-2xl text-white font-montserrat font-bold tracking-tight border-l-4 border-accent pl-4 sm:pl-8 inline-block lg:block">
                  Excellence in Legal Process Outsourcing
                </h2>
                <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-lg text-white/70 font-medium leading-relaxed lg:pl-8">
                  Partnering with the world&apos;s leading law firms to drive operational efficiency. We integrate elite Indian expertise with advanced AI technology to transform your global legal workflow.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start lg:ml-8">
                <Button
                  asChild
                  size="xl"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs sm:text-sm uppercase tracking-[0.25em] px-10 rounded-full shadow-xl shadow-primary/20 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <Link href="/services">Explore Solutions</Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border-white/20 hover:bg-white hover:text-primary font-montserrat font-black text-xs sm:text-sm uppercase tracking-[0.25em] px-10 rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <Link href="/contact">Strategy Call</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="hidden lg:block relative">
            <LegalWorkflowAiAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
