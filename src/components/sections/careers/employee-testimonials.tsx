
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
    <section className="bg-secondary text-foreground py-16 sm:py-24">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px]">
        <SlideIn className="text-center mb-12">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-xs">From Our Team</p>
          <h2 className="mt-4 font-lato text-4xl md:text-5xl font-black text-primary tracking-tight">
            Why Our Team Loves Working Here
          </h2>
        </SlideIn>
        
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/1 flex">
                <div className="p-2 flex-grow">
                  <Card className="bg-background text-center h-full flex flex-col border-none shadow-sm rounded-[2rem] overflow-hidden">
                    <CardContent className="p-10 flex flex-col h-full items-center">
                      <div className="flex-grow flex items-center justify-center mb-10">
                        <p className="text-foreground/80 italic text-xl leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                      </div>
                      
                      <div className="flex items-center justify-center mt-auto pt-8 border-t border-black/5 w-full">
                        <Avatar className="h-14 w-14 mr-4 border-2 border-accent/10">
                          {testimonial.avatar && (
                            <AppImage
                              src={testimonial.avatar.imageUrl}
                              alt={testimonial.name}
                              width={56}
                              height={56}
                              data-ai-hint={testimonial.avatar.imageHint}
                              className="object-cover"
                            />
                          )}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-montserrat font-black text-primary text-lg leading-none">{testimonial.name}</p>
                          <p className="text-xs text-accent font-black uppercase tracking-widest mt-2">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="-left-16" />
            <CarouselNext className="-right-16" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
