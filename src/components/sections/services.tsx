'use client';

import { servicesList } from '@/lib/services-data';
import { SlideIn } from '../animations/slide-in';
import { ServiceFeatureItem } from './service-feature-item';

export function Services() {
  return (
    <section id="services" className="bg-background text-foreground py-16 sm:py-24">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px]">
        <SlideIn className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-[10px] sm:text-sm">
            Solutions Spotlight
          </p>
          <h2 className="font-lato text-3xl sm:text-5xl lg:text-6xl font-black leading-tight text-primary mb-6 sm:mb-8 tracking-tight">
            Detailed Service <br className="hidden sm:block" /><span className="text-accent">Architecture</span>
          </h2>
          <p className="text-base sm:text-xl text-foreground/60 font-medium leading-relaxed">
            A deep dive into how Lexocrates transforms traditional legal tasks into high-performance operational workflows.
          </p>
        </SlideIn>

        <div className="space-y-20 lg:space-y-32">
          {servicesList.map((service, index) => (
            <ServiceFeatureItem 
              key={service.slug} 
              service={service} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
