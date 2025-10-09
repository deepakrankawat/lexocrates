
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/animations/fade-in';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="relative h-screen min-h-[40rem] flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center">
            <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight">
              Delivering Legal Outcomes with Precision
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/90">
              Empowering law firms and enterprises through secure, efficient, and scalable legal outsourcing.
            </p>
            <div className="mt-10">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
