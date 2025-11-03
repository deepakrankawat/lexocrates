
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { FadeIn } from '@/components/animations/fade-in';

export function CareersHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-careers');

  return (
    <section className="relative text-white pt-32 pb-12 sm:pt-36 sm:pb-16">
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
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <FadeIn>
          <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold">Join Our Team of Legal Experts</h1>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/80">
            Be part of a forward-thinking company that is reshaping the legal industry through innovation and excellence.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
    

    