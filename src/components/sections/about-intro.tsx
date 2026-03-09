'use client';

import { SlideIn } from '../animations/slide-in';
import { motion } from 'framer-motion';

export function AboutIntro() {
  return (
    <section id="about-intro" className="bg-background text-foreground py-24 sm:py-32 fhd:py-48 overflow-hidden">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 fhd:gap-40 items-center">
          
          <SlideIn direction="left" className="lg:order-last relative">
            <div className="relative h-[500px] lg:h-[600px] fhd:h-[800px] w-full bg-secondary/20 rounded-[4rem] overflow-hidden flex items-center justify-center shadow-[inset_0_0_100px_rgba(0,0,0,0.02)] border border-black/5 group">
              
              {/* Dynamic Global Architectural Visualization */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                  className="w-[110%] h-[110%] opacity-[0.07]"
                >
                  <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-primary">
                    <circle cx="500" cy="500" r="480" stroke="currentColor" strokeWidth="0.5" strokeDasharray="20 40" />
                    <circle cx="500" cy="500" r="380" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 20" />
                    <ellipse cx="500" cy="500" rx="480" ry="120" stroke="currentColor" strokeWidth="0.5" />
                    <ellipse cx="500" cy="500" rx="120" ry="480" stroke="currentColor" strokeWidth="0.5" />
                    <path d="M500 20V980M20 500H980" stroke="currentColor" strokeWidth="0.2" />
                  </svg>
                </motion.div>
              </div>

              {/* Central Core Globe Icon - Interactive Layer */}
              <div className="relative z-10 flex flex-col items-center gap-10 text-center p-12">
                <div className="relative">
                  {/* Glowing Aura */}
                  <div className="absolute inset-0 bg-accent/20 blur-[120px] rounded-full scale-150 animate-pulse duration-[4000ms]" />
                  
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative p-12 fhd:p-16 bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border border-black/5 backdrop-blur-3xl"
                  >
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 fhd:w-36 fhd:h-36 text-accent">
                      {/* Detailed Globe Wireframe */}
                      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                      <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                      <ellipse cx="50" cy="50" rx="15" ry="45" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
                      
                      {/* Animated Connection Lines (Arcs) */}
                      <motion.path
                        d="M25 25 Q 50 10 75 25"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      />
                      <motion.path
                        d="M25 75 Q 50 90 75 75"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.4 }}
                        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0.5 }}
                      />
                      <motion.path
                        d="M5 50 Q 50 50 95 50"
                        stroke="currentColor"
                        strokeWidth="0.3"
                        fill="none"
                        strokeDasharray="2 2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                      />

                      {/* Pulsing Strategic Nodes */}
                      {[
                        { x: 50, y: 5 }, { x: 50, y: 95 }, { x: 5, y: 50 }, { x: 95, y: 50 },
                        { x: 25, y: 25 }, { x: 75, y: 25 }, { x: 25, y: 75 }, { x: 75, y: 75 }
                      ].map((node, i) => (
                        <g key={i}>
                          <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="2"
                            fill="currentColor"
                            animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.8, 1] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                          />
                          <motion.circle
                            cx={node.x}
                            cy={node.y}
                            r="4"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            fill="none"
                            animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                          />
                        </g>
                      ))}
                    </svg>
                  </motion.div>
                </div>
                
                <div className="space-y-4">
                  <p className="font-lato font-black text-primary uppercase tracking-[0.5em] text-[10px] fhd:text-xs">
                    Global Legal Infrastructure
                  </p>
                  <div className="h-1 w-16 bg-accent mx-auto rounded-full shadow-lg shadow-accent/20" />
                </div>
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
