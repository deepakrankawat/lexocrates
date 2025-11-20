
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { servicesList } from '@/lib/services-data';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { SlideIn } from '../animations/slide-in';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';

export function Services() {
  const [activeService, setActiveService] = useState(servicesList[0]);

  return (
    <section id="services" className="bg-white text-foreground py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-12">
          <p className="font-lato font-bold text-accent uppercase tracking-wider">Our Services</p>
          <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold leading-tight text-primary">
            We Specialize In The Following Areas
          </h2>
        </SlideIn>

        {/* Desktop View: Interactive two-column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
          <StaggerFadeIn className="flex flex-col gap-4">
            {servicesList.map((service) => (
              <div
                key={service.slug}
                className={cn(
                  "p-6 border-l-4 transition-colors duration-300 relative group flex items-start cursor-pointer",
                  activeService.slug === service.slug
                    ? 'bg-background border-accent shadow-md'
                    : 'border-transparent hover:bg-background/50'
                )}
                onClick={() => setActiveService(service)}
                onMouseEnter={() => setActiveService(service)}
              >
                <div className={cn(
                  "p-3 rounded-full transition-colors duration-300 mr-6",
                  activeService.slug === service.slug ? 'bg-accent text-accent-foreground' : 'bg-accent/10 text-accent'
                )}>
                  <service.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-roboto text-xl font-medium text-primary">{service.name}</h3>
                  <p className="text-foreground/80 text-sm mt-1">{service.description}</p>
                </div>
              </div>
            ))}
          </StaggerFadeIn>
          <div className="lg:sticky lg:top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-accent/10 text-accent rounded-full">
                        <activeService.icon className="h-8 w-8" />
                      </div>
                      <h3 className="font-roboto text-2xl font-bold text-primary">{activeService.name}</h3>
                    </div>
                    <p className="text-foreground/80 mb-6">{activeService.longDescription}</p>

                    <h4 className="font-roboto text-lg font-semibold text-primary mb-4">Key Areas:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                      {activeService.keyAreas.map((area, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{area}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild className="w-full font-montserrat font-bold group">
                      <Link href={`/services/${activeService.slug}`}>
                        Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile & Tablet View: Card-based grid */}
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service) => (
                <motion.div
                    key={service.slug}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="h-full"
                >
                    <Card className="h-full flex flex-col group overflow-hidden">
                        <CardContent className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-accent/10 text-accent rounded-full">
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <h3 className="font-roboto text-xl font-bold text-primary">{service.name}</h3>
                            </div>
                            <p className="text-foreground/80 mb-6 text-sm flex-grow">{service.description}</p>
                            <Button asChild size="sm" className="w-full mt-auto font-montserrat font-bold group">
                                <Link href={`/services/${service.slug}`}>
                                    Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
