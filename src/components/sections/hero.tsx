
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/animations/fade-in';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover z-0"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/70 z-10" />
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-primary-foreground">
        <FadeIn delay={0.2} duration={0.8}>
            <p className="font-body font-bold text-accent uppercase tracking-wider">
                Legal Process Outsourcing
            </p>
        </FadeIn>
        <FadeIn delay={0.4} duration={0.8}>
            <h1 className="mt-4 font-headline text-5xl md:text-7xl font-bold leading-tight">
                Empowering Global Legal Excellence
            </h1>
        </FadeIn>
        <FadeIn delay={0.6} duration={0.8}>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                Lexocrates provides end-to-end legal outsourcing solutions, enabling your firm to focus on strategy while we handle precision legal work.
            </p>
        </FadeIn>
        <FadeIn delay={0.8} duration={0.8}>
            <div className="mt-10">
                <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/services">
                    Explore Services
                    </Link>
                </Button>
            </div>
        </FadeIn>
      </div>
    </section>
  );
}
