
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';
import { motion } from 'framer-motion';
import { LegalWorkflowAiAnimation } from '../animations/legal-workflow-ai-animation';
import { Scale } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-primary py-8 lg:py-12">
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
        <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-accent/10 rounded-full blur-[100px] sm:blur-[150px] -mr-32 sm:-mr-64 -mt-32 sm:-mt-64 animate-pulse duration-[10000ms]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1920px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <FadeIn delay={0.1} duration={0.6}>
              <div className="inline-flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-8 shadow-xl">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                </span>
                <p className="font-lato font-black text-accent uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[8px] sm:text-xs">
                  Confidentiality • Precision • Speed
                </p>
              </div>
            </FadeIn>
            
            <SlideIn direction="up" delay={0.2} duration={0.7}>
              <h1 className="font-montserrat text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] sm:leading-[0.95] text-white mb-6 lg:mb-8 tracking-tighter">
                Strategic <br />
                <span className="text-accent">Legal</span> <br className="hidden sm:block" />
                Operations
              </h1>
            </SlideIn>

            <FadeIn delay={0.3} duration={0.7}>
              <div className="space-y-4 mb-8 lg:mb-10">
                <h2 className="text-base sm:text-xl lg:text-2xl text-white font-montserrat font-bold tracking-tight border-l-4 border-accent pl-4 sm:pl-8">
                  Excellence in Legal Process Outsourcing
                </h2>
                <p className="max-w-2xl lg:max-w-3xl text-sm sm:text-base lg:text-lg text-white/70 font-medium leading-relaxed lg:pl-8">
                  Partnering with the world&apos;s leading law firms to drive operational efficiency. We integrate elite Indian expertise with advanced AI technology to transform your global legal workflow across the US, UK, and Canada.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} duration={0.7}>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start lg:ml-8">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs sm:text-sm lg:text-base px-8 sm:px-10 py-6 sm:py-7 rounded-full shadow-xl shadow-primary/20 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden group/cta"
                >
                  <Link href="/services" className="relative">
                    <span>Explore Solutions</span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 translate-x-[-200%]"
                      animate={{ translateX: ["-200%", "200%"] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
                    />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border-white/20 hover:bg-white hover:text-primary font-montserrat font-black text-xs sm:text-sm lg:text-base px-8 sm:px-10 py-6 sm:py-7 rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
                >
                  <Link href="/contact">Strategy Call</Link>
                </Button>
              </div>
            </FadeIn>
          </div>

          <SlideIn direction="left" delay={0.5} className="hidden lg:block relative">
            <div className="relative gpu-accelerated">
              <LegalWorkflowAiAnimation />
              {/* Floating SVG Quill Ornament */}
              <motion.div 
                className="absolute -top-10 -right-10 opacity-20 pointer-events-none"
                animate={{ rotate: [0, 5, -5, 0], y: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="0.5">
                  <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
                  <line x1="16" y1="8" x2="2" y2="22" />
                  <line x1="17.5" y1="15" x2="9" y2="15" />
                </svg>
              </motion.div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
