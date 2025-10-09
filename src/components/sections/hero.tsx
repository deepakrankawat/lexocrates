
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SlideIn } from '@/components/animations/slide-in';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="bg-background text-foreground pt-32 pb-20 sm:pt-48 sm:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="right">
            <div className="flex flex-col items-start text-left">
              <h1 className="font-headline text-5xl md:text-6xl font-bold leading-tight text-primary">
                Delivering Legal Outcomes with Precision
              </h1>
              <p className="mt-6 max-w-xl text-lg text-foreground/80">
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
          </SlideIn>
          <SlideIn direction="left" className="relative h-[30rem] w-full">
            {heroImage && (
                <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={heroImage.width}
                    height={heroImage.height}
                    className="object-cover w-full h-full"
                    priority
                    data-ai-hint={heroImage.imageHint}
                />
            )}
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
