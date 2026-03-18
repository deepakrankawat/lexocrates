
'use client';

import { CheckCircle2, ArrowRight, Search, Gavel, FileText, ShieldCheck, Users, LucideIcon } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
import { Button } from '../ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AppImage } from '../ui/app-image';

interface Service {
  name: string;
  slug: string;
  iconName: string;
  longDescription: string;
  keyAreas: string[];
  image?: {
    imageUrl: string;
    description: string;
    imageHint: string;
  };
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
      "flex flex-col lg:flex-row gap-12 lg:gap-24 items-center",
      !isEven && "lg:flex-row-reverse"
    )}>
      {/* Visual Representation with Image */}
      <SlideIn direction={isEven ? "left" : "right"} className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-accent/5 rounded-[2rem] sm:rounded-[3rem] blur-2xl group-hover:bg-accent/10 transition-all duration-700" />
          <div className="relative aspect-video lg:aspect-[4/3] rounded-[2.5rem] bg-secondary border border-black/5 overflow-hidden shadow-2xl">
             {service.image ? (
                <AppImage
                    src={service.image.imageUrl}
                    alt={service.image.description}
                    data-ai-hint={service.image.imageHint}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
             ) : (
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <ServiceIcon className="w-32 h-32 text-primary/10" />
                </div>
             )}
             
             {/* Sophisticated Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
             
             <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl bg-accent/90 backdrop-blur-md flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-500 shadow-xl">
                   <ServiceIcon className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="font-montserrat font-black text-2xl sm:text-3xl text-white tracking-tight mb-2">{service.name}</h3>
                <div className="w-12 h-1 bg-accent" />
             </div>
          </div>
        </div>
      </SlideIn>

      {/* Content Description */}
      <SlideIn direction={isEven ? "right" : "left"} className="w-full lg:w-1/2">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <div className="inline-flex items-center gap-4 mb-4">
                <span className="text-accent/20 font-montserrat text-5xl sm:text-7xl font-black">0{index + 1}</span>
                <div className="h-px w-12 bg-accent/30" />
            </div>
            <h3 className="font-lato text-3xl sm:text-4xl font-black text-primary mb-6">
              {service.name}
            </h3>
            <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed font-medium">
              {service.longDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-black/5">
             {service.keyAreas.map((area, i) => (
               <FadeIn key={i} delay={0.1 * i} className="flex items-center gap-3">
                  <div className="p-1 bg-accent/10 rounded-full">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-sm font-bold text-primary/80 tracking-tight">{area}</span>
               </FadeIn>
             ))}
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
            {showLink && (
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-accent font-montserrat font-black text-xs sm:text-sm uppercase tracking-[0.2em] px-10 py-7 rounded-full shadow-xl shadow-primary/20 transition-all duration-300">
                <Link href={`/services/${service.slug}`} className="text-center">Full Case Study</Link>
              </Button>
            )}
            <Button asChild variant="ghost" className="w-full sm:w-auto text-accent font-black uppercase tracking-widest text-xs hover:bg-transparent hover:translate-x-2 transition-all">
               <Link href="/contact" className="flex items-center justify-center sm:justify-start gap-2">Request Quote <ArrowRight className="w-5 h-5" /></Link>
            </Button>
          </div>
        </div>
      </SlideIn>
    </div>
  );
}
