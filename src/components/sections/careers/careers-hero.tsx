
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/animations/fade-in';

export function CareersHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-careers');

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
        <FadeIn>
          <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold">Join Our Team of Legal Experts</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-primary-foreground/80">
            Be part of a forward-thinking company that is reshaping the legal industry through innovation and excellence.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

    