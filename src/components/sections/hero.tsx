'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '../animations/fade-in';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');

  return (
    <>
      <section className="relative min-h-screen md:flex items-center justify-center overflow-hidden bg-primary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center md:object-right-top transition-transform duration-[2000ms] scale-105 hover:scale-100"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px] pt-24 pb-32">
          <div className="max-w-4xl text-left">
            <FadeIn delay={0.2} duration={0.8}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md mb-8">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                <p className="font-lato font-extrabold text-accent uppercase tracking-widest text-sm">
                  15+ Years of Global Experience
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.4} duration={0.8}>
              <h1 className="font-montserrat text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.1] text-white mb-8 tracking-tight">
                Empowering <br />
                <span className="text-accent">Global Legal</span> <br />
                Excellence
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl text-white/80 font-medium leading-relaxed mb-12">
                Lexocrates provides end-to-end legal outsourcing solutions, enabling your firm to focus on strategy while we handle precision legal work with unparalleled expertise.
              </p>
            </FadeIn>

            <FadeIn delay={0.8} duration={0.8}>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat font-black text-lg px-10 py-8 rounded-full shadow-2xl shadow-accent/20 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-primary font-montserrat font-bold text-lg px-10 py-8 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <Link href="/contact">Request Consultation</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}