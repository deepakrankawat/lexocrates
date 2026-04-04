'use client';

import { ShieldCheck, Zap, Scale, Handshake } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';

const values = [
  {
    icon: ShieldCheck,
    title: "Uncompromising Integrity",
    description: "Ethics are at the core of our 'Lex + Socrates' philosophy. We maintain strict confidentiality and professional transparency in every engagement."
  },
  {
    icon: Zap,
    title: "Technological Precision",
    description: "We leverage cutting-edge legal tech to drive efficiency without sacrificing the intellectual rigor required for complex legal tasks."
  },
  {
    icon: Scale,
    title: "Jurisdictional Depth",
    description: "Our team is deeply trained in common law systems, providing seamless support for firms in Canada, the US, and the UK."
  },
  {
    icon: Handshake,
    title: "Strategic Partnership",
    description: "We don't just process tasks; we act as a seamless extension of your team, aligned with your strategic goals and client success."
  }
];

export function CoreValues() {
  return (
    <section className="py-16 sm:py-24 bg-secondary/30 rounded-[3rem] my-16 overflow-hidden">
      <div className="container-balanced">
        <SlideIn className="text-center mb-16">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Foundation</p>
          <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-tight tracking-tight mb-8">
            The Principles That <br /><span className="text-accent">Define Us</span>
          </h2>
        </SlideIn>

        <StaggerFadeIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" childClassName="h-full">
          {values.map((value, index) => (
            <div key={index} className="h-full bg-background p-10 rounded-3xl border border-black/5 hover:border-accent/50 transition-all duration-500 shadow-sm hover:shadow-xl group flex flex-col">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                <value.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="font-roboto text-2xl font-bold text-primary mb-4">{value.title}</h3>
              <p className="text-foreground/60 leading-relaxed font-medium">
                {value.description}
              </p>
            </div>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
