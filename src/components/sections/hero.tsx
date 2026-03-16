
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[calc(100vh-160px)] flex items-center justify-center overflow-hidden bg-primary py-16 sm:py-24 lg:py-0">
      {/* High-End Architectural Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep Background Gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(184,134,11,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
        
        {/* Refined Technical Grid */}
        <div className="absolute inset-0 opacity-[0.04] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        {/* Minimalist Global Sphere Visualization */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60%] h-[120%] opacity-20 pointer-events-none hidden xl:block">
          <motion.div 
            initial={{ rotate: 0, opacity: 0 }}
            animate={{ rotate: 360, opacity: 1 }}
            transition={{ 
              rotate: { duration: 180, repeat: Infinity, ease: "linear" },
              opacity: { duration: 2, delay: 0.5 }
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white/40">
              <circle cx="500" cy="500" r="480" stroke="currentColor" strokeWidth="0.5" strokeDasharray="20 40" />
              <ellipse cx="500" cy="500" rx="480" ry="160" stroke="currentColor" strokeWidth="0.5" />
              <ellipse cx="500" cy="500" rx="160" ry="480" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="500" cy="500" r="240" stroke="currentColor" strokeWidth="0.2" strokeDasharray="5 10" />
              
              {/* Subtle Pulsing Data Nodes */}
              {[
                { x: 500, y: 20 }, { x: 500, y: 980 }, { x: 20, y: 500 }, { x: 980, y: 500 },
                { x: 146, y: 146 }, { x: 854, y: 146 }, { x: 146, y: 854 }, { x: 854, y: 854 }
              ].map((pos, i) => (
                <motion.circle
                  key={i}
                  cx={pos.x}
                  cy={pos.y}
                  r="3"
                  fill="currentColor"
                  animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.8, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                />
              ))}
            </svg>
          </motion.div>
        </div>

        {/* Atmospheric Blurred Glows */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-accent/10 rounded-full blur-[200px] -mr-96 -mt-96 animate-pulse duration-[12000ms]" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px] -ml-48 -mb-48" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1920px] text-center lg:text-left">
        <div className="max-w-7xl mx-auto lg:mx-0">
          
          <FadeIn delay={0.2} duration={0.8}>
            <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-10 lg:mb-14 shadow-2xl">
              <span className="flex h-2 w-2 rounded-full bg-accent relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              </span>
              <p className="font-lato font-black text-accent uppercase tracking-[0.5em] text-[10px] sm:text-xs">
                Excellence in Legal Process Outsourcing
              </p>
            </div>
          </FadeIn>
          
          <SlideIn direction="up" delay={0.4} duration={0.8}>
            <h1 className="font-montserrat text-4xl sm:text-6xl md:text-7xl lg:text-8xl fhd:text-[clamp(4.5rem,6.5vw,8.5rem)] font-black leading-[0.92] text-white mb-10 lg:mb-14 tracking-tighter">
              Strategic <br />
              <span className="text-accent">Legal</span> <br className="hidden sm:block" />
              Operations
            </h1>
          </SlideIn>

          <FadeIn delay={0.6} duration={0.8}>
            <div className="space-y-8 mb-12 lg:mb-20">
              <h2 className="text-xl sm:text-2xl lg:text-3xl fhd:text-4xl text-white font-montserrat font-bold tracking-tight border-l-4 border-accent pl-6 lg:pl-10">
                Where Confidentiality, Precision, and Speed Converge
              </h2>
              <p className="max-w-2xl lg:max-w-3xl fhd:max-w-4xl text-base sm:text-lg lg:text-xl fhd:text-2xl text-white/70 font-medium leading-relaxed lg:pl-10">
                Driving operational excellence for the world&apos;s leading law firms and corporate legal departments. We integrate elite Indian expertise with advanced technological precision to transform your global legal workflow.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.8} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start lg:ml-10">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-base lg:text-lg px-12 py-8 lg:px-16 lg:py-9 rounded-full shadow-[0_25px_60px_rgba(206,166,48,0.25)] transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <Link href="/services">Explore Solutions</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-xl text-white border-white/20 hover:bg-white hover:text-primary font-montserrat font-black text-base lg:text-lg px-12 py-8 lg:px-16 lg:py-9 rounded-full transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <Link href="/contact">Schedule Strategy Call</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Refined Decorative Scroll Indicator Component */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-6 opacity-40">
        <p className="text-white font-lato font-black text-[9px] uppercase tracking-[0.6em] mb-2">Scroll to Explore</p>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-16 bg-gradient-to-b from-accent to-transparent" 
        />
      </div>

      {/* Modern Badge-style Footer Decoration */}
      <div className="absolute bottom-12 left-6 lg:left-24 hidden md:flex items-center gap-8 opacity-40 group cursor-default">
        <div className="flex flex-col gap-1.5">
          <div className="w-16 h-1 bg-accent transition-all duration-500 group-hover:w-24" />
          <div className="w-10 h-1 bg-accent/40" />
        </div>
        <p className="text-white font-montserrat font-black text-[11px] uppercase tracking-[0.4em]">Excellence. Innovation. Trust.</p>
      </div>
    </section>
  );
}
