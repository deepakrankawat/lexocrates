
'use client';

import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';

const advisors = [
  {
    name: "Dr. Arthur Sterling",
    location: "London, UK",
    role: "International Compliance Advisor",
    specialty: "GDPR & Common Law Standards"
  },
  {
    name: "Sarah McCloud",
    location: "Toronto, Canada",
    role: "Operational Strategy Consultant",
    specialty: "LPO Integration & Workflow Design"
  },
  {
    name: "Jameson Vance",
    location: "New York, USA",
    role: "Legal Tech Advisory Board",
    specialty: "AI & E-Discovery Innovation"
  }
];

export function GlobalAdvisors() {
  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="container-balanced">
        <SlideIn className="text-center mb-16">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-xs">Global Perspective</p>
          <h2 className="font-lato text-4xl sm:text-5xl font-black text-primary leading-tight tracking-tight mb-6">
            Our International <br /><span className="text-accent">Advisory Board</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto font-medium">
            Bridging the gap between Indian legal talent and international operational standards.
          </p>
        </SlideIn>

        <StaggerFadeIn className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((advisor, index) => (
            <Card key={index} className="bg-secondary/30 border-black/5 rounded-3xl overflow-hidden group hover:bg-white hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary text-white rounded-full group-hover:bg-accent transition-colors">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span className="font-black text-accent uppercase tracking-[0.2em] text-[10px]">{advisor.location}</span>
                </div>
                <h4 className="font-opensans text-2xl font-bold text-primary mb-2">{advisor.name}</h4>
                <p className="font-lato font-black text-foreground/40 uppercase tracking-widest text-[11px] mb-6">{advisor.role}</p>
                <div className="pt-6 border-t border-black/5">
                  <p className="text-foreground/60 font-medium">Expertise in {advisor.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
