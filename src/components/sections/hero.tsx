import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="relative bg-background text-foreground pt-32 sm:pt-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <p className="font-body font-bold text-accent uppercase tracking-wider">Welcome to Northman Law</p>
                    <h1 className="mt-4 font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-primary">
                      Your Trusted Partner In Legal Excellence
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-lg text-foreground/80">
                        At Northman Law, we are dedicated to providing exceptional legal services with integrity and professionalism. Our experienced team is here to guide you through every step of your legal journey.
                    </p>
                    <div className="mt-10 flex gap-4 justify-center lg:justify-start">
                        <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                            <Link href="/contact">Free Consultation</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/services">Learn More</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative w-full h-[30rem] lg:h-[40rem]">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            fill
                            className="object-contain object-bottom"
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
