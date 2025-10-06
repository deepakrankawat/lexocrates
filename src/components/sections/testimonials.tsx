"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const testimonials = [
  {
    quote: "Northman Law's expertise was invaluable. They guided us through a complex merger with professionalism and precision. We couldn't have asked for a better partner.",
    name: 'Johnathan Doe',
    title: 'CEO, Innovate Corp',
    logo: PlaceHolderImages.find(img => img.id === 'client-logo-1'),
  },
  {
    quote: "The team's dedication and insightful approach to our case were remarkable. They truly prioritize their clients' needs and deliver exceptional results.",
    name: 'Jane Smith',
    title: 'Founder, Quantum Dynamics',
    logo: PlaceHolderImages.find(img => img.id === 'client-logo-2'),
  },
  {
    quote: "For any real estate legal matters, I highly recommend Northman Law. Their attention to detail and proactive communication made the entire process stress-free.",
    name: 'Sam Wilson',
    title: 'Director, Apex Properties',
    logo: PlaceHolderImages.find(img => img.id === 'client-logo-3'),
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Our Happy Client Say About Us
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            Our clients' success is our greatest achievement. Hear directly from those we've had the privilege to represent.
          </p>
        </div>
        <Carousel
          opts={{ align: 'start' }}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-1">
                  <Card className="h-full flex flex-col">
                    <CardContent className="flex-grow flex flex-col justify-center p-6 text-center">
                      <blockquote className="text-lg italic text-foreground/90">
                        "{testimonial.quote}"
                      </blockquote>
                      <footer className="mt-6">
                        <p className="font-bold">{testimonial.name}</p>
                        <p className="text-sm text-foreground/70">{testimonial.title}</p>
                        {testimonial.logo && (
                           <div className="flex justify-center mt-4">
                              <Image
                                  src={testimonial.logo.imageUrl}
                                  alt={`${testimonial.title} logo`}
                                  width={120}
                                  height={40}
                                  className="object-contain"
                                  data-ai-hint={testimonial.logo.imageHint}
                                />
                           </div>
                        )}
                      </footer>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
