'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '../animations/fade-in';
import { Calendar } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');

  return (
    <>
      {/* Desktop Hero */}
      <section className="relative hidden bg-primary text-primary-foreground h-screen md:flex items-center justify-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-right"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-full laptop:max-w-[1200px] fhd:max-w-[1400px] qhd:max-w-[1600px] uhd:max-w-[1800px]">
          <div className="text-center">
            <FadeIn delay={0.2} duration={0.8}>
              <p className="font-lato font-bold text-white/80 tracking-wider mb-2">
                  Precision in Law, Rooted in Philosophy
              </p>
            </FadeIn>
            <FadeIn delay={0.3} duration={0.8}>
              <p className="font-lato font-bold text-accent uppercase tracking-wider">
                Legal Process Outsourcing
              </p>
            </FadeIn>
            <FadeIn delay={0.4} duration={0.8}>
              <h1 className="mt-4 font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Empowering Global Legal Excellence
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/80">
                Lexocrates provides end-to-end legal outsourcing solutions,
                enabling your firm to focus on strategy while we handle precision
                legal work.
              </p>
            </FadeIn>
            <FadeIn delay={0.6} duration={0.8}>
              <p className="font-lato font-bold text-accent uppercase tracking-widest mt-4">
                15+ Years Experience
              </p>
            </FadeIn>
            <FadeIn delay={0.8} duration={0.8}>
              <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat font-bold"
                >
                  <Link href="/services">Explore Services</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary font-montserrat font-bold"
                >
                  <Link href="/contact">Request Consultation</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mobile Hero */}
      <section className="relative md:hidden bg-primary text-primary-foreground py-20 pt-32 text-center overflow-hidden">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover object-right blur-sm"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto w-full px-4">
             <FadeIn delay={0.2} duration={0.8}>
                <p className="font-lato font-bold text-white/80 tracking-wider mb-2">
                    Precision in Law, Rooted in Philosophy
                </p>
            </FadeIn>
            <FadeIn delay={0.3} duration={0.8}>
                <p className="font-lato font-bold text-accent uppercase tracking-wider">
                Legal Process Outsourcing
                </p>
            </FadeIn>
            <FadeIn delay={0.4} duration={0.8}>
                <h1 className="mt-4 font-montserrat text-3xl font-bold leading-tight text-white">
                Empowering Global Legal Excellence
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-base text-white/80">
                Lexocrates provides end-to-end legal outsourcing solutions,
                enabling your firm to focus on strategy while we handle precision
                legal work.
                </p>
            </FadeIn>
            <FadeIn delay={0.6} duration={0.8}>
                <p className="font-lato font-bold text-accent uppercase tracking-widest mt-4">
                15+ Years Experience
                </p>
            </FadeIn>
            <FadeIn delay={0.8} duration={0.8}>
                <div className="mt-8 flex flex-col justify-center items-center gap-4">
                    <Button asChild size="lg" className="w-full max-w-xs bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat font-bold">
                        <Link href="/services">Explore Services</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full max-w-xs bg-transparent text-white border-white hover:bg-white hover:text-primary font-montserrat font-bold">
                        <Link href="/contact">Request Consultation</Link>
                    </Button>
                </div>
            </FadeIn>
        </div>
      </section>
    </>
  );
}
