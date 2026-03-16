
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '@/components/ui/app-image';

const testimonials = [
  {
    quote: "Our mission at Lexocrates is to redefine global legal delivery. It is inspiring to see our team integrate elite Indian expertise with advanced AI technology every day to drive client success.",
    name: "Yashvardhan Singh",
    title: "Chief Executive Officer",
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-4')
  },
  {
    quote: "Leading operations here means ensuring excellence at every step. The collaborative energy and professional dedication of our diverse legal experts is what truly drives our operational success.",
    name: "Geetanjali",
    title: "Chief Operating Officer",
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-2')
  },
  {
    quote: "The intellectual rigor we apply to every multi-jurisdictional case is unmatched. Lexocrates provides a unique platform where the best legal minds can truly excel in a global landscape.",
    name: "Hameer Singh",
    title: "Head of Legal Services",
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-3')
  },
  {
    quote: "Bridging the gap between law and technology is a challenge we've turned into our greatest strength. Our tech-driven workflow represents the next evolution of legal process outsourcing.",
    name: "Sam Panwar",
    title: "Head of Technology",
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-5')
  }
];

export function EmployeeTestimonials() {
  return (
    <section className="bg-secondary/30 text-foreground py-16 sm:py-24 rounded-[3rem] my-12">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px]">
        <SlideIn className="text-center mb-12">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-xs">Voice of Leadership</p>
          <h2 className="mt-4 font-lato text-4xl md:text-5xl font-black text-primary tracking-tight">
            Commitment to Excellence
          </h2>
        </SlideIn>
        
        <Carousel
          opts={{
            align: "start",
            loop: true
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/1 lg:basis-1/1 flex">
                <div className="p-2 flex-grow">
                  <Card className="bg-background text-center h-full flex flex-col border border-black/5 shadow-sm rounded-[2rem] overflow-hidden group hover:shadow-2xl transition-all duration-500">
                    <CardContent className="p-10 flex flex-col h-full items-center">
                      <div className="flex-grow flex items-center justify-center mb-10">
                        <p className="text-foreground/70 italic text-xl sm:text-2xl leading-relaxed font-medium">&quot;{testimonial.quote}&quot;</p>
                      </div>
                      
                      <div className="flex items-center justify-center mt-auto pt-8 border-t border-black/5 w-full">
                        <Avatar className="h-16 w-16 mr-6 border-2 border-accent/20 shadow-lg">
                          {testimonial.avatar && (
                            <AppImage
                              src={testimonial.avatar.imageUrl}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              data-ai-hint={testimonial.avatar.imageHint}
                              className="object-cover"
                            />
                          )}
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <p className="font-montserrat font-black text-primary text-xl leading-none">{testimonial.name}</p>
                          <p className="text-[10px] text-accent font-black uppercase tracking-widest mt-2">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden sm:block">
            <CarouselPrevious className="-left-16 bg-white border-black/5 text-primary hover:bg-accent hover:text-white" />
            <CarouselNext className="-right-16 bg-white border-black/5 text-primary hover:bg-accent hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
