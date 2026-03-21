
'use client';

import { CheckCircle2, ArrowRight, Search, Gavel, FileText, ShieldCheck, Users, LucideIcon } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Service {
  name: string;
  slug: string;
  iconName: string;
  longDescription: string;
  keyAreas: string[];
}

const iconMap: Record<string, LucideIcon> = {
  Search,
  Gavel,
  FileText,
  ShieldCheck,
  Users,
};

export function ServiceFeatureItem({ service, index, showLink = true }: { service: Service, index: number, showLink?: boolean }) {
  const ServiceIcon = iconMap[service.iconName] || Search;
  const isEven = index % 2 === 0;

  return (
    <div className={cn(
      "flex flex-col lg:flex-row gap-12 lg:gap-24 items-start",
      !isEven && "lg:flex-row-reverse"
    )}>
      {/* Visual Representation with Technical Blueprint Style */}
      <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/5 rounded-[2.5rem] lg:rounded-[3rem] blur-2xl group-hover:bg-accent/10 transition-all duration-700" />
          <div className="relative aspect-video lg:aspect-[4/3] rounded-[2.5rem] lg:rounded-[3rem] bg-primary overflow-hidden shadow-2xl border border-white/10">
             
             {/* Technical Grid Background */}
             <div className="absolute inset-0 opacity-[0.05]" 
                  style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
             
             {/* Sophisticated Icon Presentation */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <div className="p-8 sm:p-12 lg:p-16 rounded-full bg-accent/10 backdrop-blur-3xl border border-accent/20 flex items-center justify-center shadow-[0_0_50px_rgba(184,134,11,0.2)]">
                        <ServiceIcon className="w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-accent" />
                    </div>
                </div>
             </div>
             
             <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-10 text-center sm:text-left">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[8px]">Strategic Protocol 0{index + 1}</p>
                </div>
                <h3 className="font-montserrat font-black text-xl sm:text-2xl lg:text-3xl text-white tracking-tight">{service.name}</h3>
             </div>
          </div>
        </div>
      </div>

      {/* Content Description */}
      <div className="w-full lg:w-1/2">
        <div className="space-y-8 sm:space-y-10 text-left">
          <div className="relative">
            <div className="hidden lg:inline-flex items-center gap-4 mb-6">
                <span className="text-accent/20 font-montserrat text-8xl font-black leading-none">0{index + 1}</span>
                <div className="h-px w-16 bg-accent/30" />
            </div>
            <h3 className="font-lato text-3xl sm:text-4xl lg:text-5xl font-black text-primary mb-6 lg:mb-8 tracking-tighter">
              {service.name}
            </h3>
            <div className="prose prose-lg max-w-none text-foreground/70 space-y-6">
              <p className="text-lg sm:text-xl font-medium leading-relaxed">
                {service.longDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 lg:pt-10 border-t border-black/5">
             {service.keyAreas.map((area, i) => (
               <div key={i} className="flex items-start gap-3 p-4 bg-secondary/30 rounded-2xl group/area hover:bg-white hover:shadow-xl transition-all duration-500">
                  <div className="p-1 bg-accent/10 rounded-full mt-0.5 group-hover/area:bg-accent transition-colors">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent group-hover/area:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-bold text-primary/80 tracking-tight">{area}</span>
               </div>
             ))}
          </div>

          <div className="pt-8 lg:pt-10 flex flex-col sm:flex-row items-center gap-4 lg:gap-8">
            {showLink && (
              <Button asChild size="xl" className="w-full sm:w-auto h-14 bg-primary text-white hover:bg-accent font-montserrat font-black text-xs uppercase tracking-[0.3em] px-10 rounded-full shadow-xl transition-all duration-300">
                <Link href={`/services/${service.slug}`}>Deep Service Overview</Link>
              </Button>
            )}
            <Button asChild variant="ghost" className="w-full sm:w-auto h-12 text-accent font-black uppercase tracking-widest text-[11px] hover:bg-transparent hover:translate-x-2 transition-all">
               <Link href="/contact" className="flex items-center justify-center gap-2">Request Technical Quote <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
