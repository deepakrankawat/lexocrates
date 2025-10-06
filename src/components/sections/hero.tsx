import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)] md:min-h-screen py-24 md:py-0">
          <div className="text-center md:text-left">
            <h1 className="font-headline text-5xl font-bold leading-tight text-primary md:text-7xl">
              Uphold Truth For Justice With <span className="text-accent">Lexocrates</span> Law Firm
            </h1>
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href="#contact">Get started</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-96 md:h-full w-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}
