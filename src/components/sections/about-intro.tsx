
'use client';

import { SlideIn } from '../animations/slide-in';
import { motion } from 'framer-motion';
import { Globe3D } from '@/components/ui/globe-3d';

export function AboutIntro() {
  return (
    <section id="about-intro" className="bg-background text-foreground py-16 sm:py-24 fhd:py-32 overflow-hidden">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 fhd:gap-40 items-center">
          
          <SlideIn direction="left" className="lg:order-last relative">
            <div className="relative h-[450px] sm:h-[600px] lg:h-[700px] fhd:h-[900px] w-full flex items-center justify-center group">
              
              {/* Technical Blueprint Backdrop */}
              <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern id="introGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#introGrid)" />
                </svg>
              </div>

              {/* Focus Rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-accent/10 rounded-full animate-spin-slow opacity-20 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] h-[95%] border border-dashed border-accent/5 rounded-full animate-reverse-spin opacity-10 pointer-events-none" />

              {/* 3D Global Visualization */}
              <div className="relative z-10 w-full h-full">
                <Globe3D />
              </div>

              {/* Strategic Data Badges */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-10 sm:left-10 sm:right-10 z-20 flex flex-col sm:flex-row items-center justify-between gap-4 pointer-events-none">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-primary/95 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-accent">Active Node</p>
                    <p className="text-xs font-bold text-white uppercase tracking-tighter">Jaipur Operations Center</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-white/95 backdrop-blur-xl border border-black/5 p-4 rounded-2xl shadow-2xl flex items-center gap-4"
                >
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary/40">Sync Status</p>
                    <p className="text-xs font-bold text-primary uppercase tracking-tighter text-nowrap">Global Markets Unified</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                </motion.div>
              </div>
            </div>
          </SlideIn>
          
          <SlideIn direction="right">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent/30" />
                <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs fhd:text-sm">Strategic Continuity</p>
              </div>
              <h2 className="font-lato text-3xl sm:text-5xl fhd:text-7xl font-black text-primary leading-[1.1] tracking-tighter mb-8 sm:mb-10">
                A Global Bridge <br />
                <span className="text-accent/80">of Legal Intelligence</span>
              </h2>
              <div className="text-lg sm:text-xl fhd:text-2xl text-foreground/70 space-y-6 sm:space-y-10 font-medium leading-relaxed border-l-4 border-accent/10 pl-6 sm:pl-10 fhd:pl-12">
                <p>
                  Founded in Jaipur, India, Lexocrates operates as a high-fidelity bridge between elite Indian legal talent and the rigorous demands of firms in Canada, the US, and the UK.
                </p>
                <p>
                  Our connectivity concept is built on seamless integration. We don't just "outsource"—we synchronize. Our India-based lawyers act as a direct extension of your internal team, providing 24/7 coverage through sophisticated data corridors and common-law mastery.
                </p>
                <p>
                  By blending Socratic inquiry with modern operational precision, we ensure that the bridge between our operations and your practice is defined by absolute confidentiality, speed, and ethical stewardship.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-reverse-spin {
          animation: reverse-spin 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
