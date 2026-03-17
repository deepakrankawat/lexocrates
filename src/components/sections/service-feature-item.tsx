'use client';

import { CheckCircle2, ArrowRight } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface Service {
  name: string;
  slug: string;
  icon: LucideIcon;
  longDescription: string;
  keyAreas: string[];
}

export function ServiceFeatureItem({ service, index, showLink = true }: { service: Service, index: number, showLink?: boolean }) {
  const ServiceIcon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <div className={cn(
      "flex flex-col lg:flex-row gap-16 lg:gap-24 items-center",
      !isEven && "lg:flex-row-reverse"
    )}>
      {/* Visual Representation */}
      <SlideIn direction={isEven ? "left" : "right"} className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/5 rounded-[3rem] blur-2xl group-hover:bg-accent/10 transition-all duration-700" />
          <div className="relative aspect-video lg:aspect-[4/3] rounded-[2.5rem] bg-secondary border border-black/5 overflow-hidden shadow-2xl flex items-center justify-center p-12">
             <div className="absolute top-0 right-0 p-10 opacity-[0.03]">
                <ServiceIcon className="w-64 h-64 text-primary" />
             </div>
             <div className="relative z-10 text-center">
                <div className="w-24 h-24 rounded-3xl bg-accent/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-accent transition-colors duration-500">
                   <ServiceIcon className="w-12 h-12 text-accent group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-montserrat font-black text-3xl text-primary mb-4 tracking-tight">{service.name}</h3>
                <div className="w-12 h-1 bg-accent mx-auto" />
             </div>
          </div>
        </div>
      </SlideIn>

      {/* Content Description */}
      <SlideIn direction={isEven ? "right" : "left"} className="w-full lg:w-1/2">
        <div className="space-y-8">
          <div>
            <h3 className="font-lato text-3xl font-black text-primary mb-6 flex items-center gap-4">
              <span className="text-accent/20 font-montserrat text-5xl">0{index + 1}</span>
              {service.name}
            </h3>
            <p className="text-lg text-foreground/70 leading-relaxed font-medium">
              {service.longDescription}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-black/5">
             {service.keyAreas.map((area, i) => (
               <FadeIn key={i} delay={0.1 * i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm font-bold text-primary/80 tracking-tight">{area}</span>
               </FadeIn>
             ))}
          </div>

          <div className="pt-8 flex items-center gap-6">
            {showLink && (
              <Button asChild size="lg" className="bg-primary text-white hover:bg-accent font-montserrat font-black text-sm uppercase tracking-[0.2em] px-10 py-7 rounded-full transition-all duration-300">
                <Link href={`/services/${service.slug}`}>Full Case Study</Link>
              </Button>
            )}
            <Button asChild variant="ghost" className="text-accent font-black uppercase tracking-widest text-xs hover:bg-transparent hover:translate-x-2 transition-all">
               <Link href="/contact" className="flex items-center gap-2">Request Quote <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </SlideIn>
    </div>
  );
}
