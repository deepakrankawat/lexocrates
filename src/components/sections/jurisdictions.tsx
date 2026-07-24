'use client';

import { SlideIn } from '../animations/slide-in';
import { Badge } from '../ui/badge';
import { Landmark, Globe2, BookOpen, CheckCircle2 } from 'lucide-react';

const regions = [
  {
    name: "North America",
    countries: ["Canada", "United States"],
    details: "Canada - Supporting Canadian law firms and corporate legal departments with legal research, litigation support, contract lifecycle management, compliance, eDiscovery, and paralegal services.\n\nUnited States - Delivering scalable legal process outsourcing solutions designed to complement the operational needs of US law firms and in-house legal teams.",
    icon: Landmark
  },
  {
    name: "United Kingdom",
    countries: ["England", "Wales", "Scotland"],
    details: "England • Wales • Scotland - Providing legal research, contract support, compliance, and legal operations support across UK common law jurisdictions.",
    icon: BookOpen
  },
  {
    name: "India",
    countries: ["Strategic Delivery Centre"],
    details: "Our operations in India provide the foundation for secure, efficient, and high-quality legal support, enabling close collaboration with clients across Canada, the United Kingdom, and the United States.",
    icon: Globe2
  }
];

export function Jurisdictions() {
  return (
    <section className="py-16 sm:py-24 bg-background overflow-hidden border-t border-black/5">
      <div className="container-balanced">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-xs sm:text-sm">
              INTERNATIONAL CAPABILITY
            </p>
            <h2 className="font-lato text-2xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight mb-6">
              Cross-Border Expertise
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 font-medium leading-relaxed mb-8 max-w-xl">
              Lexocrates supports law firms and corporate legal departments across common law jurisdictions through legal process outsourcing solutions delivered by experienced professionals within structured, jurisdiction-aware workflows. This approach enables us to provide consistent, reliable, and secure legal support across borders.
            </p>
            <div className="space-y-4">
              <p className="font-lato font-bold text-accent uppercase tracking-[0.2em] text-xs">
                SECURE &amp; RELIABLE DELIVERY • CONFIDENTIAL &amp; PROCESS-DRIVEN • COMMON LAW FOCUS
              </p>
            </div>
          </SlideIn>

          <SlideIn direction="right" className="grid gap-6">
            {regions.map((region, index) => (
              <div key={index} className="relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-secondary/50 border border-black/5 group hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="flex flex-col sm:flex-row items-start justify-between mb-4 w-full gap-4 sm:gap-0">
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
                <p className="text-foreground/70 text-sm font-medium leading-relaxed whitespace-pre-line">
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
