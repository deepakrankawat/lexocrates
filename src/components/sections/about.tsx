import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-lady-justice');

  return (
    <section id="about" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col">
            <p className="font-body font-bold text-accent uppercase tracking-wider">About Us</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              Helping To Overcome And Ease The Legal Burden
            </h2>
             <p className="mt-6 text-foreground/80">
                With decades of combined experience, Northman Law has established itself as a pillar of the legal community. We believe in a client-first approach, ensuring personalized and effective solutions for every case.
            </p>
            <div className="mt-10">
                <Button asChild size="lg">
                    <Link href="/about">Learn More</Link>
                </Button>
            </div>
          </div>
          <div className="relative h-[30rem] w-full">
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
