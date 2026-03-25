'use client';

import { SlideIn } from '../animations/slide-in';
import { Badge } from '../ui/badge';
import { Landmark, Globe2, BookOpen, CheckCircle2 } from 'lucide-react';

const regions = [
  {
    name: "North America",
    countries: ["USA", "Canada"],
    details: "Expertise in litigation support, document review, and regulatory compliance for US and Canadian legal standards.",
    icon: Landmark
  },
  {
    name: "United Kingdom",
    countries: ["England", "Wales", "Scotland"],
    details: "Specialized contract lifecycle management and legal research focused on UK Common Law and GDPR standards.",
    icon: BookOpen
  },
  {
    name: "India",
    countries: ["Domestic Operations"],
    details: "Our strategic hub, providing round-the-clock delivery with teams trained in international legal systems.",
    icon: Globe2
  }
];

export function Jurisdictions() {
  return (
    <section className="py-16 sm:py-24 bg-background overflow-hidden">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <SlideIn direction="left">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">Global Compliance</p>
            <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-tight tracking-tight mb-8">
              Cross-Border <br /> Expertise
            </h2>
            <p className="text-xl text-foreground/70 font-medium leading-relaxed mb-10 max-w-xl">
              We bridge the gap between jurisdictions. Our legal experts are fluent in the complexities of international law, ensuring your firm remains compliant and efficient across global borders.
            </p>
            <div className="space-y-6">
              {['24/7 Workflow Continuity', 'GDPR & ISO Compliance', 'Common Law Specialization'].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="bg-accent/10 p-2 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-bold text-primary tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </SlideIn>

          <SlideIn direction="right" className="grid gap-6">
            {regions.map((region, index) => (
              <div key={index} className="relative p-8 rounded-3xl bg-secondary/50 border border-black/5 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/5 rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                      <region.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-roboto text-xl font-bold text-primary">{region.name}</h4>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {region.countries.map((c, i) => (
                      <Badge key={i} variant="outline" className="border-accent/30 text-accent font-black uppercase text-[10px] tracking-widest">{c}</Badge>
                    ))}
                  </div>
                </div>
                <p className="text-foreground/60 font-medium leading-relaxed">
                  {region.details}
                </p>
              </div>
            ))}
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
