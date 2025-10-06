"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada risus amet nunc posuere rhoncus accumsan congue id dolor. Convallis maecenas sed in pellentesque.",
    name: 'Johnatan G.',
    title: 'CEO, Innovate Corp',
    avatar: PlaceHolderImages.find(img => img.id === 'lawyer-2'),
    rating: 4.8,
    reviews: 322,
  },
];

export function Testimonials() {
    const testimonial = testimonials[0];
    const testimonialImage = PlaceHolderImages.find(img => img.id === 'blog-image-1');


  return (
    <section className="bg-primary text-primary-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
          <div>
            <h3 className="text-accent font-medium mb-2">Testimonials</h3>
            <h2 className="font-headline text-5xl font-bold leading-tight">
                Our Happy Client Say
                <br />
                About Us
            </h2>
          </div>
          <div className="relative h-64">
            {testimonialImage && (
                <Image
                    src={testimonialImage.imageUrl}
                    alt={testimonialImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={testimonialImage.imageHint}
                />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
            <div className="relative h-64 w-64 justify-self-center">
                {testimonial.avatar && (
                    <Image
                        src={testimonial.avatar.imageUrl}
                        alt={`Portrait of ${testimonial.name}`}
                        fill
                        className="object-cover rounded-full"
                        data-ai-hint={testimonial.avatar.imageHint}
                    />
                )}
            </div>
            <div className="md:col-span-2">
                <Quote className="h-16 w-16 text-accent mb-4" fill="currentColor" />
                <blockquote className="text-lg text-primary-foreground/80 mb-6">
                    {testimonial.quote}
                </blockquote>
                <footer className="flex flex-col gap-2">
                    <p className="font-headline text-2xl font-bold">{testimonial.name}</p>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                key={i}
                                className={`h-5 w-5 ${
                                    i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-400'
                                }`}
                                />
                            ))}
                        </div>
                        <p className="text-sm text-primary-foreground/80">
                            {testimonial.rating}/5 - {testimonial.reviews} Reviewed
                        </p>
                    </div>
                </footer>
            </div>
        </div>
      </div>
    </section>
  );
}
