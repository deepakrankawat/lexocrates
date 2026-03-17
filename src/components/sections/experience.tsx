'use client';

import { Calendar, Users } from 'lucide-react';
import { SlideIn } from '@/components/animations/slide-in';
import { Counter } from '@/components/animations/counter';
import { motion } from 'framer-motion';

export function Experience() {
  return (
    <section id="experience" className="bg-background text-foreground py-12 sm:py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="right">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent/30" />
                <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs">Our Track Record</p>
              </div>
              <h2 className="font-lato text-4xl sm:text-5xl font-black leading-tight text-primary tracking-tighter mb-8">
                Decades of Expertise, <br />
                <span className="text-accent">Measurable</span> Results
              </h2>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed font-medium mb-12">
                Our firm's foundation is built on years of dedicated service and a deep understanding of global legal standards. We leverage this experience to deliver efficiency and excellence for our clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="text-center p-6 sm:p-8 bg-secondary/50 rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 hover:border-accent/30 transition-all duration-500 shadow-sm">
                      <Calendar className="h-8 w-8 sm:h-10 sm:w-10 mx-auto text-accent mb-4 sm:mb-6" />
                      <p className="text-4xl sm:text-5xl font-black text-primary tracking-tighter">
                        <Counter from={0} to={15} />+
                      </p>
                      <p className="text-accent font-black uppercase tracking-[0.2em] text-[9px] sm:text-[10px] mt-3 sm:mt-4">Years Experience</p>
                  </div>
                  <div className="text-center p-6 sm:p-8 bg-secondary/50 rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 hover:border-accent/30 transition-all duration-500 shadow-sm">
                      <Users className="h-8 w-8 sm:h-10 sm:w-10 mx-auto text-accent mb-4 sm:mb-6" />
                      <p className="text-4xl sm:text-5xl font-black text-primary tracking-tighter">
                         <Counter from={0} to={50} />+
                      </p>
                      <p className="text-accent font-black uppercase tracking-[0.2em] text-[9px] sm:text-[10px] mt-3 sm:mt-4">Legal Experts</p>
                  </div>
              </div>
            </div>
          </SlideIn>

           <SlideIn direction="left" className="relative h-[300px] sm:h-[450px] lg:h-[550px] flex items-center justify-center">
            <div className="relative h-full w-full rounded-[2.5rem] sm:rounded-[4rem] bg-primary overflow-hidden flex items-center justify-center p-8 sm:p-12 shadow-2xl">
                {/* Decorative Background grid */}
                <div className="absolute inset-0 opacity-[0.05]" 
                     style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                
                {/* Visual Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/10 blur-[60px] sm:blur-[100px] rounded-full" />

                <div className="relative w-full h-full flex items-center justify-center">
                    <svg viewBox="0 0 400 200" className="w-full h-full overflow-visible">
                        <defs>
                            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#ceab30" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#ceab30" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* Animated Area Fill */}
                        <motion.path
                            d="M0 180 L50 160 L100 170 L150 120 L200 130 L250 80 L300 90 L350 40 L400 50 V180 H0 Z"
                            fill="url(#chartGradient)"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        />
                        
                        {/* The Animated Line */}
                        <motion.path
                            d="M0 180 L50 160 L100 170 L150 120 L200 130 L250 80 L300 90 L350 40 L400 50"
                            fill="none"
                            stroke="#ceab30"
                            strokeWidth="5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2.5, ease: "easeInOut" }}
                        />

                        {/* Pulsing end point */}
                        <motion.circle
                            cx="400"
                            cy="50"
                            r="8"
                            fill="#ceab30"
                            initial={{ scale: 0 }}
                            animate={{ scale: [1, 1.4, 1] }}
                            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
                
                {/* Floating label */}
                <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 flex items-center gap-3">
                  <div className="w-8 sm:w-10 h-0.5 bg-accent" />
                  <p className="text-white/40 font-lato font-bold text-[8px] sm:text-[10px] uppercase tracking-[0.3em]">Growth Metrics</p>
                </div>
            </div>
          </SlideIn>
        </div>
    </section>
  );
}
