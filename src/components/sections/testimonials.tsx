"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with Northman Law was a game-changer. Their expertise and dedication were evident from day one. I couldn't have asked for a better team to handle my case.",
    name: 'Johnathan G.',
    title: 'CEO, Innovate Corp',
    avatar: PlaceHolderImages.find(img => img.id === 'client-avatar-1'),
  },
];

export function Testimonials() {
  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
              <p className="font-body font-bold text-accent uppercase tracking-wider">Testimonials</p>
              <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
                  Our Happy Client Say About Us
              </h2>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="mt-8">
                   <div className="text-left">
                       <Quote className="h-12 w-12 text-accent mb-6" fill="currentColor" />
                       <blockquote className="text-xl md:text-2xl font-light text-foreground/90 mb-8 italic">
                           “{testimonial.quote}”
                       </blockquote>
                       <footer className="flex items-center gap-4">
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
                               <p className="text-sm text-foreground/70">{testimonial.title}</p>
                           </div>
                       </footer>
                   </div>
                </div>
              ))}
          </div>
          <div className="relative h-96 w-full">
            <Image
                src="https://images.unsplash.com/photo-1590099543482-3b3d3083a474?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxsYWR5JTIwanVzdGljZXxlbnwwfHx8fDE3NTk3NTIyNDd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Architectural columns"
                fill
                className="object-cover"
                data-ai-hint="architecture columns"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
