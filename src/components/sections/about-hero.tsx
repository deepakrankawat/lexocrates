import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="relative bg-primary text-primary-foreground py-20 sm:py-32">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-20"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 className="font-headline text-6xl md:text-7xl font-bold">About Us</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Discover the dedication, expertise, and passion that drive Northman Law to be your most trusted legal partner.
        </p>
      </div>
    </section>
  );
}
