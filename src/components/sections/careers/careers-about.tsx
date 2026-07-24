
'use client';

import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '@/components/ui/app-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

export function CareersAbout() {
  const image = PlaceHolderImages.find(img => img.id === 'service-corporate-law');
  const overlayImage = PlaceHolderImages.find(img => img.id === 'service-detail-1');

  return (
    <section className="bg-background text-foreground py-20 sm:py-32 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual Side */}
          <SlideIn direction="left" className="lg:order-last">
            <div className="relative aspect-square w-full bg-secondary rounded-[3rem] overflow-hidden shadow-2xl group">
              {image && (
                <AppImage
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              )}
              {/* Sophisticated Architectural Overlays */}
              {overlayImage && (
                <AppImage
                  src={overlayImage.imageUrl}
                  alt={overlayImage.description}
                  data-ai-hint={overlayImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-accent" />
                  <p className="text-white/40 font-montserrat font-black text-[10px] uppercase tracking-[0.5em]">Global Talent Hub</p>
                </div>
              </div>
            </div>
          </SlideIn>
          
          {/* Content Side */}
          <div className="flex flex-col">
            <SlideIn direction="right">
              <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 backdrop-blur-xl mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px]">LIFE AT LEXOCRATES</p>
              </div>
              
              <h2 className="font-lato text-3xl sm:text-5xl md:text-6xl font-black text-primary leading-tight tracking-tighter mb-8">
                Professional Growth <br /><span className="text-accent">Through Meaningful Work</span>
              </h2>

              <SlideIn direction="up" delay={0.4}>
                <div className="text-base sm:text-lg text-foreground/80 font-medium leading-relaxed border-l-4 border-accent/20 pl-6">
                  <p>
                    At Lexocrates, professional growth comes through meaningful work, collaboration, and continuous learning. We encourage curiosity, accountability, and knowledge sharing, creating an environment where legal professionals can build practical skills while contributing to high-quality legal support across multiple jurisdictions.
                  </p>
                </div>
              </SlideIn>
            </SlideIn>
          </div>
        </div>
    </section>
  );
}
