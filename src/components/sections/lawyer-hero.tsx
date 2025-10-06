import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function LawyerHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="relative bg-primary text-primary-foreground pt-36 pb-20 sm:pt-48 sm:pb-32">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-10"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold">Our Attorneys</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Meet the experienced and dedicated legal professionals who form the backbone of Northman Law.
        </p>
      </div>
    </section>
  );
}
