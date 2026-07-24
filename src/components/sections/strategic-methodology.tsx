'use client';

import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { Brain, Cpu, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Brain,
    title: "Understand the Requirement",
    number: "01",
    description: "Every engagement begins by understanding the scope of work, jurisdiction, timelines, and client expectations before any work is assigned."
  },
  {
    icon: Cpu,
    title: "Apply Technology Where It Adds Value",
    number: "02",
    description: "We integrate legal technology and AI-enabled tools where they improve efficiency, consistency, and workflow, without replacing legal expertise."
  },
  {
    icon: ShieldCheck,
    title: "Quality Review & Legal Oversight",
    number: "03",
    description: "Every deliverable undergoes independent quality review by experienced legal professionals before it reaches the client, ensuring accuracy, consistency, and adherence to agreed standards."
  },
  {
    icon: Globe,
    title: "Seamless Cross-Border Delivery",
    number: "04",
    description: "Our India-based delivery centre enables seamless collaboration with clients across Canada, the United Kingdom, and the United States, ensuring reliable support across time zones without compromising responsiveness or quality."
  }
];

export function StrategicMethodology() {
  return (
    <section className="py-20 sm:py-32 bg-primary text-white rounded-[3rem] my-16 overflow-hidden relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="container-balanced relative z-10">
        <SlideIn className="text-center mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px]">HOW WE WORK — OUR METHODOLOGY</p>
          </div>
          <h2 className="font-lato text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            A Process Built on Inquiry and Oversight
          </h2>
        </SlideIn>

        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent hidden lg:block -translate-y-12" />

          <StaggerFadeIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" childClassName="h-full">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative group h-full"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
              >
                <div className="bg-white/5 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white/10 hover:border-accent/50 transition-all duration-500 shadow-2xl flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-500">
                      <step.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="text-3xl font-montserrat font-black text-white/20 group-hover:text-accent/40 transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>
                  
                  <h3 className="font-roboto text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-500">{step.title}</h3>
                  <p className="text-white/70 leading-relaxed font-medium text-sm">
                    {step.description}
                  </p>
                  
                  <div className="mt-auto pt-6">
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
