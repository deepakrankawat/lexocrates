import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="bg-background text-foreground pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h1 className="font-headline text-5xl font-bold leading-tight text-primary md:text-7xl">
                    Uphold Truth For
                    <br/>
                    Justice With <span className="text-accent">Lexocrates</span>
                    <br/>
                    Law Firm
                    </h1>
                    <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-foreground/80">
                        Your trusted partner in navigating the complexities of the legal world. We provide expert counsel and unwavering support for all your legal needs.
                    </p>
                    <div className="mt-10">
                        <Button asChild size="lg">
                            <Link href="#contact">Get started</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative w-full h-80 md:h-[500px]">
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
        </div>
    </section>
  );
}
