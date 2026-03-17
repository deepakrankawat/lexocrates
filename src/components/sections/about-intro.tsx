'use client';

import { SlideIn } from '../animations/slide-in';
import { motion } from 'framer-motion';
import { Globe3D } from '@/components/ui/globe-3d';

export function AboutIntro() {
  return (
    <section id="about-intro" className="bg-background text-foreground py-16 sm:py-24 fhd:py-32 overflow-hidden">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 fhd:gap-40 items-center">
          
          <SlideIn direction="left" className="lg:order-last relative">
            <div className="relative h-[400px] lg:h-[450px] fhd:h-[550px] w-full flex items-center justify-center group">
              
              {/* Dynamic 3D Globe Visualization - Now handles its own client-side lifecycle */}
              <div className="absolute inset-0 z-10">
                <Globe3D />
              </div>

              {/* Decorative Background Grid */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.05]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                  className="w-[110%] h-[110%]"
                >
                  <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
                    <circle cx="500" cy="500" r="480" stroke="currentColor" strokeWidth="0.8" strokeDasharray="20 40" />
                    <ellipse cx="500" cy="500" rx="480" ry="120" stroke="currentColor" strokeWidth="0.8" />
                    <ellipse cx="500" cy="500" rx="120" ry="480" stroke="currentColor" strokeWidth="0.8" />
                  </svg>
                </motion.div>
              </div>
            </div>
          </SlideIn>
          
          <SlideIn direction="right">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent/30" />
                <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs fhd:text-sm">Our Global Reach</p>
              </div>
              <h2 className="font-lato text-4xl sm:text-5xl fhd:text-7xl font-black text-primary leading-[1.1] tracking-tighter mb-10">
                From Jaipur to Canada: <br />
                <span className="text-accent/80">Connecting Legal Excellence</span>
              </h2>
              <div className="text-xl fhd:text-2xl text-foreground/70 space-y-10 font-medium leading-relaxed border-l-4 border-accent/10 pl-10 fhd:pl-12">
                <p>
                  Founded in Jaipur, India, Lexocrates is a specialized Legal Process Outsourcing (LPO) firm serving law firms and corporations across Canada, the US, and the UK.
                </p>
                <p>
                  Our India-based lawyers are trained in international legal systems, offering round-the-clock delivery, strict confidentiality, and deep jurisdictional expertise. The name blends Lex (law) with Socrates (philosophy), symbolizing our commitment to ethics and intellect.
                </p>
                <p>
                  Today, we stand as a trusted partner for global entities seeking intelligent, ethical, and cost-efficient legal services. Our success is built on the foundation of integrity and intellectual excellence.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
