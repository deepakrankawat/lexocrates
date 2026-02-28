'use client';

import { Button } from '../ui/button';
import Link from 'next/link';
import { servicesList } from '@/lib/services-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { SlideIn } from '../animations/slide-in';

export function Services() {
  return (
    <section id="services" className="bg-secondary/30 text-foreground py-24 sm:py-32">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px]">
        <SlideIn className="text-center mb-20 max-w-4xl mx-auto">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">
            Our Expertise
          </p>
          <h2 className="font-lato text-4xl sm:text-6xl font-black leading-tight text-primary mb-8 tracking-tight">
            Comprehensive Legal Solutions
          </h2>
          <p className="text-xl text-foreground/70 font-medium leading-relaxed">
            Lexocrates offers a suite of legal outsourcing solutions designed to enhance efficiency, reduce overhead, and allow your team to focus on high-value strategic work.
          </p>
        </SlideIn>

        <StaggerFadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {servicesList.map((service) => {
            const ServiceIcon = service.icon;
            return (
                <Card key={service.slug} className="group relative bg-background border-black/5 hover:border-accent/50 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden flex flex-col p-2">
                    <CardHeader className="flex-row items-center gap-6 p-8">
                        <div className="p-4 bg-accent/5 rounded-2xl group-hover:bg-accent transition-colors duration-500">
                        <ServiceIcon className="h-8 w-8 text-accent group-hover:text-white transition-colors duration-500" />
                        </div>
                        <CardTitle className="font-roboto text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-500 leading-tight">
                          {service.name}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow p-8 pt-0">
                        <p className="text-foreground/60 text-lg leading-relaxed flex-grow">
                          {service.description}
                        </p>
                        <Button asChild variant="link" className="p-0 h-auto text-accent font-bold text-lg justify-start mt-8 transition-transform group-hover:translate-x-2">
                            <Link href={`/services/${service.slug}`} className="flex items-center gap-2">
                                Learn More <ArrowRight className="h-5 w-5" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            );
          })}
        </StaggerFadeIn>
        
        <div className="mt-20 text-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-montserrat font-black text-lg px-12 py-8 rounded-full shadow-2xl shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95">
              <Link href="/services">Explore All Services</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}