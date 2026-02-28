'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '@/components/animations/slide-in';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AppImage } from '../ui/app-image';

export function About() {
  const image = PlaceHolderImages.find(img => img.id === 'service-detail-1');
  return (
    <section id="about" className="bg-background text-foreground py-24 sm:py-40 overflow-hidden">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          <SlideIn direction="right">
            <div className="flex flex-col text-left">
              <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">
                The Lexocrates Advantage
              </p>
              <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-[1.1] mb-8 tracking-tight">
                Your Strategic Partner <br /> in Legal Growth
              </h2>
              <p className="text-xl text-foreground/70 leading-relaxed font-medium mb-12">
                  Lexocrates was founded to bridge the gap between high-quality legal services and cost-effective operational management. We empower law firms and corporate legal departments to achieve more by handling their essential legal tasks with precision and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                  <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90 font-montserrat font-black text-lg px-12 py-8 rounded-full shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105">
                      <Link href="/about">Discover Our Story</Link>
                  </Button>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="left" className="relative">
             <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] group">
                {image && (
                    <AppImage
                        src={image.imageUrl}
                        alt={image.description}
                        data-ai-hint={image.imageHint}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="absolute -bottom-10 -right-10 hidden md:block w-48 h-48 bg-accent rounded-3xl -z-10 animate-pulse" />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}