'use client';

import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { Brain, Cpu, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Brain,
    title: "Deep Inquiry",
    number: "01",
    description: "Inspired by Socrates, we begin every project with rigorous questioning to uncover the core legal requirements."
  },
  {
    icon: Cpu,
    title: "AI Integration",
    number: "02",
    description: "We deploy advanced legal-tech models to process data with unprecedented speed and consistency."
  },
  {
    icon: ShieldCheck,
    title: "Expert Oversight",
    number: "03",
    description: "Every output is verified by common-law trained lawyers to ensure the highest standards of accuracy."
  },
  {
    icon: Globe,
    title: "Global Delivery",
    number: "04",
    description: "Our India-based hub operates 24/7 to provide seamless support across US, UK, and Canadian time zones."
  }
];

export function StrategicMethodology() {
  return (
    <section className="py-20 sm:py-32 bg-primary text-white rounded-[3rem] my-16 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="container-balanced relative z-10">
        <SlideIn className="text-center mb-20">
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px]">The Lexocrates Engine</p>
          </div>
          <h2 className="font-lato text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight mb-8">
            Strategic <span className="text-accent">Methodology</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto font-medium leading-relaxed">
            A synergistic fusion of Socratic philosophical rigor and cutting-edge technical precision.
          </p>
        </SlideIn>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden lg:block -translate-y-12" />

          <StaggerFadeIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" childClassName="h-full">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative group h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-2xl flex flex-col h-full">
                  <div className="flex justify-between items-start mb-10">
                    <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                      <step.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-4xl font-montserrat font-black text-white/10 group-hover:text-accent/20 transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="font-roboto text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-500">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed font-medium text-base">
                    {step.description}
                  </p>
                  
                  <div className="mt-auto pt-8">
                    <div className="w-8 h-1 bg-accent/20 group-hover:w-full group-hover:bg-accent transition-all duration-700" />
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerFadeIn>
        </div>
      </div>
    </section>
  );
}
