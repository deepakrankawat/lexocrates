
'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '@/components/ui/app-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function CareersHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-careers');

  return (
    <section className="relative min-h-[45vh] sm:min-h-[50vh] fhd:min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-10 pb-16 lg:pt-14">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,134,11,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1800px] text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                Global Talent Network
              </p>
            </div>
          </FadeIn>
          <SlideIn direction="up" delay={0.4}>
            <h1 className="font-montserrat text-4xl sm:text-6xl md:text-7xl fhd:text-8xl font-black leading-tight text-white mb-6 lg:mb-8 tracking-tighter">
              Shape the <span className="text-accent">Future</span>
            </h1>
          </SlideIn>
          <FadeIn delay={0.6}>
            <p className="text-lg sm:text-xl fhd:text-2xl text-white/70 font-medium leading-relaxed max-w-3xl mx-auto">
              We are looking for brilliant legal minds to redefine global legal delivery. Join a culture of innovation and collaborative excellence.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
