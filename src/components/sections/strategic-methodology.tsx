'use client';

import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { Brain, Cpu, ShieldCheck, Globe } from 'lucide-react';

const steps = [
  {
    icon: Brain,
    title: "Deep Inquiry",
    description: "Inspired by Socrates, we begin every project with rigorous questioning to uncover the core legal requirements."
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "We deploy advanced legal-tech models to process data with unprecedented speed and consistency."
  },
  {
    icon: ShieldCheck,
    title: "Expert Oversight",
    description: "Every output is verified by common-law trained lawyers to ensure the highest standards of accuracy."
  },
  {
    icon: Globe,
    title: "Global Delivery",
    description: "Our India-based hub operates 24/7 to provide seamless support across US, UK, and Canadian time zones."
  }
];

export function StrategicMethodology() {
  return (
    <section className="py-20 sm:py-32 bg-secondary/30 rounded-[3rem] my-16 overflow-hidden">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24">
        <SlideIn className="text-center mb-20">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-[10px]">Our Execution Engine</p>
          <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-tight tracking-tight mb-8">
            The Strategic <br /><span className="text-accent">Methodology</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-medium">
            How we combine philosophical rigor with technical precision to deliver elite legal results at global scale.
          </p>
        </SlideIn>

        <StaggerFadeIn className="grid gap-10 md:grid-cols-2 lg:grid-cols-4" childClassName="h-full">
          {steps.map((step, index) => (
            <div key={index} className="bg-background p-10 rounded-[2.5rem] border border-black/5 hover:border-accent/50 transition-all duration-500 shadow-sm hover:shadow-2xl group flex flex-col h-full">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                <step.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-roboto text-2xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-foreground/60 leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
