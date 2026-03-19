'use client';

import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '@/components/ui/app-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function CareersAbout() {
  const image = PlaceHolderImages.find(img => img.id === 'service-corporate-law');

  return (
    <section className="bg-background text-foreground py-20 sm:py-32 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left" className="lg:order-last">
            <div className="relative aspect-square w-full bg-secondary rounded-[3rem] overflow-hidden shadow-2xl group">
              {image && (
                <AppImage
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div className="flex flex-col">
              <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Culture</p>
              <h2 className="font-lato text-4xl sm:text-5xl font-black text-primary leading-tight tracking-tight mb-8">
                Innovation, Collaboration, <br />and <span className="text-accent">Excellence</span>
              </h2>
              <div className="text-lg text-foreground/70 space-y-6 font-medium leading-relaxed border-l-4 border-accent/10 pl-8">
                <p>
                  At Lexocrates, we foster a culture of continuous learning. We are a team of passionate professionals dedicated to pushing the boundaries of legal service delivery.
                </p>
                <p>
                  We value diversity, creativity, and a proactive mindset. If you are driven by excellence and want to make a real impact in the legal tech space, you'll find a rewarding career at Lexocrates.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
    </section>
  );
}
