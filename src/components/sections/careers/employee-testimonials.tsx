
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '@/components/ui/app-image';

const testimonials = [
  {
    quote: "Working at Lexocrates has been a transformative experience. The focus on technology and continuous learning provides an incredible environment for growth.",
    name: "Hernando Jully",
    title: "Senior Legal Researcher",
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-5')
  },
  {
    quote: "The collaborative culture here is second to none. I feel like my contributions are genuinely valued, and I'm constantly learning from my talented colleagues.",
    name: "Lydia Dary",
    title: "Document Review Specialist",
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-6')
  },
  {
    quote: "I was looking for a company that was truly forward-thinking in the legal space. Lexocrates is that and more. We are making a real impact for our clients.",
    name: "Desy Willy",
    title: "Director of Compliance",
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-3')
  }
];

export function EmployeeTestimonials() {
  return (
    <section className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-16">
          <p className="font-body font-bold text-accent uppercase tracking-wider">From Our Team</p>
          <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">
            Why Our Team Loves Working Here
          </h2>
        </SlideIn>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/1">
                <div className="p-1">
                  <Card className="bg-background text-center">
                    <CardContent className="p-8">
                      <p className="text-foreground/80 italic text-lg">&quot;{testimonial.quote}&quot;</p>
                      <div className="flex items-center justify-center mt-6">
                        <Avatar className="h-12 w-12 mr-4">
                          {testimonial.avatar && (
                            <AppImage
                              src={testimonial.avatar.imageUrl}
                              alt={testimonial.name}
                              width={48}
                              height={48}
                              data-ai-hint={testimonial.avatar.imageHint}
                            />
                          )}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-bold text-primary">{testimonial.name}</p>
                          <p className="text-sm text-foreground/70">{testimonial.title}</p>
                        </div>
                      </div>
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
