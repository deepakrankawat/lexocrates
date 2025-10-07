import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="relative bg-primary text-primary-foreground h-[80vh] min-h-[500px] flex items-center justify-center">
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
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Uphold Truth For Justice With Northman Law Firm
        </h1>
        <p className="mt-6 mx-auto max-w-2xl text-lg text-primary-foreground/80">
          We are a team of passionate and experienced legal professionals dedicated to providing the highest quality of service.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
