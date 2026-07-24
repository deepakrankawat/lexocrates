'use client';

import { ShieldCheck, Target, Cpu, Handshake } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';

const values = [
  {
    icon: ShieldCheck,
    title: 'Integrity & Confidentiality',
    description: 'Trust is the foundation of every client relationship. We uphold the highest standards of professionalism, confidentiality, and ethical conduct in every engagement we undertake.'
  },
  {
    icon: Target,
    title: 'Quality & Precision',
    description: 'We combine experienced legal professionals with structured workflows and rigorous quality standards to deliver work that is accurate, consistent, and dependable.'
  },
  {
    icon: Cpu,
    title: 'Technology with Purpose',
    description: 'We apply AI-enabled tools where they meaningfully improve efficiency and consistency, while ensuring that every deliverable continues to benefit from human expertise and professional judgment.'
  },
  {
    icon: Handshake,
    title: 'Partnership & Collaboration',
    description: 'We operate as an extension of our clients\' legal teams, building long-term relationships through responsiveness, transparency, and a shared commitment to achieving better outcomes.'
  }
];

export function CoreValues() {
  return (
    <section className="py-12 sm:py-24 bg-secondary/30 rounded-[2rem] sm:rounded-[3rem] my-12 sm:my-16 overflow-hidden">
      <div className="container-balanced">
        <SlideIn className="text-center mb-12 sm:mb-16 max-w-4xl mx-auto">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm">OUR VALUES</p>
          <h2 className="font-lato text-2xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight">
            The Principles That Guide Everything We Do
          </h2>
        </SlideIn>

        <StaggerFadeIn className="grid gap-6 md:grid-cols-2 lg:grid-cols-4" childClassName="h-full">
          {values.map((value, index) => (
            <div key={index} className="h-full bg-background p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-black/5 hover:border-accent/50 transition-all duration-500 shadow-sm hover:shadow-xl group flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                <value.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-roboto text-xl font-bold text-primary mb-3">{value.title}</h3>
              <p className="text-foreground/70 leading-relaxed font-medium text-sm">
                {value.description}
              </p>
            </div>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
