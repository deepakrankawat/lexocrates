'use client';

import { SlideIn } from '../animations/slide-in';
import { motion } from 'framer-motion';

export function AboutIntro() {
  return (
    <section id="about-intro" className="bg-background text-foreground py-24 sm:py-32 fhd:py-40 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 fhd:gap-32 items-center">
          <SlideIn direction="left" className="lg:order-last relative">
            <div className="relative h-[400px] lg:h-[600px] fhd:h-[700px] w-full bg-secondary/30 rounded-[3rem] overflow-hidden flex items-center justify-center shadow-inner">
              {/* Dynamic Globe Background */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="w-[120%] h-[120%]"
                  >
                    <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
                        <circle cx="500" cy="500" r="450" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 20" />
                        <ellipse cx="500" cy="500" rx="450" ry="150" stroke="currentColor" strokeWidth="0.5" />
                        <ellipse cx="500" cy="500" rx="150" ry="450" stroke="currentColor" strokeWidth="0.5" />
                        <circle cx="500" cy="500" r="250" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
                    </svg>
                  </motion.div>
              </div>

              {/* Central Global Excellence Icon */}
              <div className="relative z-10 flex flex-col items-center gap-8 text-center p-12">
                  <div className="relative">
                      <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full scale-150 animate-pulse" />
                      <div className="relative p-10 bg-white rounded-full shadow-2xl border border-black/5">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-24 h-24 fhd:w-32 fhd:h-32 text-accent">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20" />
                            <path d="M12 2a14.5 14.5 0 0 1 0 20" />
                            <path d="M2 12h20" />
                        </svg>
                      </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-lato font-black text-primary uppercase tracking-[0.4em] text-[10px] fhd:text-xs">
                        Global Legal Connectivity
                    </p>
                    <div className="h-0.5 w-12 bg-accent mx-auto rounded-full" />
                  </div>
              </div>
            </div>
          </SlideIn>
          
          <SlideIn direction="right">
            <div className="flex flex-col">
              <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Story</p>
              <h2 className="font-lato text-4xl sm:text-5xl fhd:text-6xl font-black text-primary leading-tight tracking-tight mb-8">
                From Jaipur to Canada: <br />
                A Commitment to Legal Excellence
              </h2>
              <div className="text-xl fhd:text-2xl text-foreground/70 space-y-8 font-medium leading-relaxed">
                  <p>
                      Founded in Jaipur, India, Lexocrates is a specialized Legal Process Outsourcing (LPO) firm serving law firms and corporations across Canada and beyond.
                  </p>
                  <p>
                      Our India-based lawyers are trained in international legal systems, offering round-the-clock delivery, strict confidentiality, and deep jurisdictional expertise. The name blends Lex (law) with Socrates (philosophy), symbolizing our commitment to ethics and intellect.
                  </p>
                   <p>
                      Today, we stand as a trusted partner for corporations and law firms seeking intelligent, ethical, and cost-efficient legal services. Our success is built on the foundation of integrity, client centricity, and intellectual excellence.
                  </p>
              </div>
            </div>
          </SlideIn>
        </div>
    </section>
  );
}
