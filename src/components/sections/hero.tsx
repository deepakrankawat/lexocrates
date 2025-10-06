import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="relative min-h-screen bg-background text-foreground">
      <div className="absolute inset-0 md:grid md:grid-cols-12">
        <div className="col-span-4 bg-primary"></div>
        <div className="hidden md:block col-span-8 relative">
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
      <div className="relative min-h-screen grid md:grid-cols-12 items-center">
        <div className="col-span-12 md:col-span-4 p-8 md:p-12 text-primary-foreground">
            <h1 className="font-headline text-5xl font-bold leading-tight md:text-6xl">
              Uphold Truth For
              <br/>
              Justice With <span className="text-accent">Lexocrates</span>
              <br/>
              Law Firm
            </h1>
            <div className="mt-10">
              <Button asChild size="lg" variant="secondary">
                <Link href="#contact">Get started</Link>
              </Button>
            </div>
        </div>
        <div className="col-span-12 md:col-span-8 relative min-h-[50vh] md:min-h-0">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover md:hidden"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
        </div>
      </div>
    </section>
  );
}
