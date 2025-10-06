import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="bg-background text-foreground pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-6rem)]">
                <div className="text-center md:text-left">
                    <h1 className="font-headline text-5xl font-bold leading-tight text-primary md:text-7xl">
                    Uphold Truth For
                    <br/>
                    Justice With <span className="text-accent">Lexocrates</span>
                    <br/>
                    Law Firm
                    </h1>
                    <div className="mt-10">
                        <Button asChild size="lg">
                            <Link href="#contact">Get started</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative h-96 md:h-[600px]">
                    {heroImage && (
                        <Image
                            src={heroImage.imageUrl}
                            alt={heroImage.description}
                            width={heroImage.width}
                            height={heroImage.height}
                            className="object-cover w-full h-full"
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
