
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SlideIn } from '@/components/animations/slide-in';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'about-us-lady-justice');

  return (
    <section className="bg-background text-foreground overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)] py-20 sm:py-28">
                <SlideIn direction="right">
                    <div className="flex flex-col items-start text-left">
                        <p className="font-body font-bold text-accent uppercase tracking-wider">
                            Legal Process Outsourcing
                        </p>
                        <h1 className="mt-4 font-headline text-5xl md:text-6xl font-bold text-primary leading-tight">
                            Empowering Global Legal Excellence
                        </h1>
                        <p className="mt-6 max-w-xl text-lg text-foreground/80">
                            Lexocrates provides end-to-end legal outsourcing solutions, enabling your firm to focus on strategy while we handle precision legal work.
                        </p>
                        <div className="mt-10">
                            <Button asChild size="lg">
                                <Link href="/services">
                                Explore Services
                                </Link>
                            </Button>
                        </div>
                    </div>
                </SlideIn>
                <SlideIn direction="left" className="relative h-[30rem] w-full hidden lg:block">
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
