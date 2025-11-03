
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ServicesHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-services');

  return (
    <section className="relative text-white pt-36 pb-20 sm:pt-48 sm:pb-32">
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h1 className="font-montserrat text-5xl md:text-6xl font-bold">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
          Explore our comprehensive suite of legal outsourcing solutions designed to enhance efficiency and reduce overhead.
        </p>
      </div>
    </section>
  );
}
    
