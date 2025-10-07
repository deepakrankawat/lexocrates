
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { servicesList } from '@/lib/services-data';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { SlideIn } from '../animations/slide-in';

export function Services() {
  const [activeService, setActiveService] = useState(servicesList[0]);

  return (
    <section id="services" className="bg-secondary text-foreground py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-16">
          <p className="font-body font-bold text-accent uppercase tracking-wider">Our Services</p>
          <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
            We Specialize In The Following Areas
          </h2>
        </SlideIn>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <StaggerFadeIn className="flex flex-col gap-4">
            {servicesList.map((service) => (
              <Link 
                href={`/services/${service.slug}`} 
                key={service.slug} 
                className={cn(
                  "p-6 border-l-4 transition-colors duration-300 relative group flex items-center justify-between",
                  activeService.slug === service.slug 
                    ? 'bg-background border-accent shadow-md' 
                    : 'border-transparent hover:bg-background/50'
                )}
                onMouseEnter={() => setActiveService(service)}
              >
                <div className="flex items-center gap-6">
                   <div className={cn(
                    "p-3 rounded-full transition-colors duration-300",
                    activeService.slug === service.slug ? 'bg-accent text-accent-foreground' : 'bg-accent/10 text-accent'
                    )}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl font-bold text-primary">{service.name}</h3>
                    <p className="text-foreground/80 text-sm mt-1">{service.description}</p>
                  </div>
                </div>
                 <ArrowRight className={cn(
                  "h-6 w-6 text-accent transition-opacity flex-shrink-0",
                  activeService.slug === service.slug ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  )} />
              </Link>
            ))}
          </StaggerFadeIn>
          <div className="relative h-[35rem] w-full hidden lg:block">
            <AnimatePresence>
              {activeService.image && (
                  <motion.div
                    key={activeService.slug}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <Image
                    src={activeService.image.imageUrl}
                    alt={activeService.image.description}
                    fill
                    className="object-cover"
                    data-ai-hint={activeService.image.imageHint}
                    />
                  </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
