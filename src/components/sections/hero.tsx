import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background');

  return (
    <section className="relative h-[calc(100vh-4rem)] min-h-[500px] flex items-center justify-center text-center">
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
      <div className="absolute inset-0 bg-primary/70" />
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="font-headline text-5xl font-bold leading-tight text-white md:text-7xl">
          Excellence in Legal Representation
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-white/90 md:text-xl">
          Northman Law is a premier law firm dedicated to providing exceptional legal services and achieving outstanding results for our clients.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#contact">Request a Free Consultation</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="#services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
