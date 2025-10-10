
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '../ui/app-image';


const testimonials = [
  {
    quote: "Partnering with Lexocrates transformed our legal operations. Their expertise and efficiency are unmatched. We can now focus on our core business, knowing our legal tasks are in expert hands.",
    name: 'Johnathan G.',
    title: 'General Counsel, Innovate Corp',
    avatar: PlaceHolderImages.find(img => img.id === 'client-avatar-1'),
  },
  {
    quote: "The team at Lexocrates is incredibly responsive and knowledgeable. They integrated seamlessly with our existing workflows and have become a trusted extension of our legal department.",
    name: 'Sarah L.',
    title: 'COO, Tech Solutions Ltd.',
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-6'),
  },
  {
    quote: "Lexocrates' contract management services have saved us countless hours and significantly reduced our risk exposure. Their attention to detail is second to none.",
    name: 'Michael B.',
    title: 'CFO, Global Ventures Inc.',
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-5'),
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary text-foreground py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Testimonials</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
                What Our Valued Clients Say
            </h2>
        </SlideIn>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-background text-center p-8 md:p-12 h-full">
                    <CardContent className="flex flex-col items-center justify-center p-0">
                      <Quote className="h-10 w-10 text-accent mb-6" />
                      <blockquote className="text-lg md:text-xl font-light text-foreground/90 mb-8 italic">
                          “{testimonial.quote}”
                      </blockquote>
                      <footer className="flex items-center gap-4">
                          {testimonial.avatar && (
                              <AppImage
                                  src={testimonial.avatar.imageUrl}
                                  alt={`Portrait of ${testimonial.name}`}
                                  width={56}
                                  height={56}
                                  className="object-cover rounded-full"
                                  data-ai-hint={testimonial.avatar.imageHint}
                              />
                          )}
                          <div>
                              <p className="font-headline text-lg font-bold text-primary">{testimonial.name}</p>
                              <p className="text-sm text-foreground/70">{testimonial.title}</p>
                          </div>
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
