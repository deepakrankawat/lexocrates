'use client';

import { CheckCircle2, ArrowRight, Search, Gavel, FileText, ShieldCheck, Users, LucideIcon } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
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
      "flex flex-col lg:flex-row gap-8 lg:gap-24 items-center",
      !isEven && "lg:flex-row-reverse"
    )}>
      {/* Visual Representation with Technical Blueprint Style */}
      <SlideIn direction={isEven ? "left" : "right"} className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] sm:rounded-[3rem] blur-2xl group-hover:bg-accent/10 transition-all duration-700" />
          <div className="relative aspect-video lg:aspect-[4/3] rounded-[2rem] sm:rounded-[3rem] bg-primary overflow-hidden shadow-2xl border border-white/10">
             
             {/* Technical Grid Background */}
             <div className="absolute inset-0 opacity-[0.05]" 
                  style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
             
             {/* Animated Concentric Circles */}
             <div className="absolute inset-0 flex items-center justify-center opacity-[0.03]">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="w-[120%] h-[120%] border border-white rounded-full border-dashed"
                />
             </div>

             {/* Sophisticated Icon Presentation */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="p-8 sm:p-16 rounded-full bg-accent/10 backdrop-blur-3xl border border-accent/20 flex items-center justify-center shadow-[0_0_50px_rgba(184,134,11,0.2)]"
                    >
                        <ServiceIcon className="w-12 h-12 sm:w-24 sm:h-24 text-accent" />
                    </motion.div>
                </div>
             </div>
             
             <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 z-10">
                <div className="inline-flex items-center gap-2 sm:gap-4 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-2 sm:mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[7px] sm:text-[8px]">Strategic Protocol 0{index + 1}</p>
                </div>
                <h3 className="font-montserrat font-black text-xl sm:text-3xl text-white tracking-tight">{service.name}</h3>
             </div>
          </div>
        </div>
      </SlideIn>

      {/* Content Description */}
      <SlideIn direction={isEven ? "right" : "left"} className="w-full lg:w-1/2">
        <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
          <div>
            <div className="hidden lg:inline-flex items-center gap-4 mb-4">
                <span className="text-accent/20 font-montserrat text-5xl sm:text-7xl font-black">0{index + 1}</span>
                <div className="h-px w-12 bg-accent/30" />
            </div>
            <h3 className="font-lato text-2xl sm:text-4xl font-black text-primary mb-4 sm:mb-6">
              {service.name}
            </h3>
            <p className="text-base sm:text-xl text-foreground/70 leading-relaxed font-medium">
              {service.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-6 sm:pt-8 border-t border-black/5">
             {service.keyAreas.map((area, i) => (
               <FadeIn key={i} delay={0.1 * i} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="p-1 bg-accent/10 rounded-full">
                    <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-primary/80 tracking-tight">{area}</span>
               </FadeIn>
             ))}
          </div>

          <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {showLink && (
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-accent font-montserrat font-black text-xs sm:text-sm uppercase tracking-[0.2em] px-8 sm:px-10 py-5 sm:py-7 rounded-full shadow-xl shadow-primary/20 transition-all duration-300">
                <Link href={`/services/${service.slug}`} className="text-center">Full Case Study</Link>
              </Button>
            )}
            <Button asChild variant="ghost" className="w-full sm:w-auto text-accent font-black uppercase tracking-widest text-[10px] sm:text-xs hover:bg-transparent hover:translate-x-2 transition-all">
               <Link href="/contact" className="flex items-center justify-center gap-2">Request Quote <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" /></Link>
            </Button>
          </div>
        </div>
      </SlideIn>
    </div>
  );
}