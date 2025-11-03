
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-about');

  return (
    <section className="relative text-white pt-32 pb-12 sm:pt-40 sm:pb-20">
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
        <h1 className="font-montserrat text-5xl md:text-6xl font-bold">About Lexocrates</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
            Learn about our mission to revolutionize legal services through expertise, technology, and a client-centric approach.
        </p>
      </div>
    </section>
  );
}
    

    