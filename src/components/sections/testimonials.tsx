"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: "Working with Northman Law was a game-changer. Their expertise and dedication were evident from day one. I couldn't have asked for a better team to handle my case.",
    name: 'Johnathan G.',
    title: 'CEO, Innovate Corp',
    avatar: PlaceHolderImages.find(img => img.id === 'client-avatar-1'),
  },
    {
    quote: "The professionalism and attention to detail at Northman Law are second to none. They made a complex legal process feel manageable and stress-free.",
    name: 'Sarah L.',
    title: 'Founder, Tech Solutions',
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-6'),
  },
    {
    quote: "I highly recommend Northman Law. Their team is not only knowledgeable but also genuinely cares about their clients' well-being. A truly exceptional firm.",
    name: 'Michael B.',
    title: 'Real Estate Developer',
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-5'),
  },
];

export function Testimonials() {
  return (
    <section className="bg-primary text-primary-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Client Testimonials</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight">
                What Our Clients Say
            </h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="p-1">
                   <div className="text-center">
                       <Quote className="h-12 w-12 text-accent mx-auto mb-6" fill="currentColor" />
                       <blockquote className="text-xl md:text-2xl font-light text-primary-foreground/90 mb-8 italic">
                           “{testimonial.quote}”
                       </blockquote>
                       <footer className="flex flex-col items-center gap-4">
                           {testimonial.avatar && (
                                <Image
                                    src={testimonial.avatar.imageUrl}
                                    alt={`Portrait of ${testimonial.name}`}
                                    width={64}
                                    height={64}
                                    className="object-cover rounded-full"
                                    data-ai-hint={testimonial.avatar.imageHint}
                                />
                           )}
                           <div>
                               <p className="font-headline text-xl font-bold">{testimonial.name}</p>
                               <p className="text-sm text-primary-foreground/70">{testimonial.title}</p>
                           </div>
                           <div className="flex items-center">
                               {[...Array(5)].map((_, i) => (
                                   <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                               ))}
                           </div>
                       </footer>
                   </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 -translate-x-1/2" />
          <CarouselNext className="right-0 translate-x-1/2" />
        </Carousel>
      </div>
    </section>
  );
}
