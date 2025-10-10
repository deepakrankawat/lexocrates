
"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote, MessageSquareQuote } from 'lucide-react';
import { motion } from 'framer-motion';
import { SlideIn } from '@/components/animations/slide-in';
import { FadeIn } from '@/components/animations/fade-in';

const testimonials = [
  {
    quote: "Partnering with Lexocrates transformed our legal operations. Their expertise and efficiency are unmatched. We can now focus on our core business, knowing our legal tasks are in expert hands.",
    name: 'Johnathan G.',
    title: 'General Counsel, Innovate Corp',
    avatar: PlaceHolderImages.find(img => img.id === 'client-avatar-1'),
  },
];

export function Testimonials() {
  return (
    <section className="bg-background text-foreground py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="right">
              <p className="font-body font-bold text-accent uppercase tracking-wider">Testimonials</p>
              <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
                  What Our Valued Clients Say
              </h2>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="mt-8">
                   <div className="text-left">
                       <motion.div
                         initial={{ scale: 0 }}
                         whileInView={{ scale: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: 0.2 }}
                       >
                         <Quote className="h-12 w-12 text-accent mb-6" fill="currentColor" />
                       </motion.div>
                       <FadeIn delay={0.4}>
                         <blockquote className="text-xl md:text-2xl font-light text-foreground/90 mb-8 italic">
                             “{testimonial.quote}”
                         </blockquote>
                       </FadeIn>
                       <FadeIn delay={0.6}>
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
                       </FadeIn>
                   </div>
                </div>
              ))}
          </SlideIn>
          <SlideIn direction="left" className="relative h-96 w-full bg-secondary flex items-center justify-center">
            <MessageSquareQuote className="h-48 w-48 text-primary/10" />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
