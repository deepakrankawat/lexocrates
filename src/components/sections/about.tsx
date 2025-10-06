import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-lady-justice');

  return (
    <section id="about" className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[30rem] w-full">
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover rounded-lg"
                    data-ai-hint={aboutImage.imageHint}
                />
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-body font-bold text-accent uppercase tracking-wider">About Our Firm</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              A Legacy of Trust and Excellence
            </h2>
             <p className="mt-6 text-foreground/80">
                With decades of combined experience, Northman Law has established itself as a pillar of the legal community. We believe in a client-first approach, ensuring personalized and effective solutions for every case.
            </p>
            <ul className="mt-6 space-y-4">
                <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Client-centric approach ensures personalized legal strategies.</span>
                </li>
                 <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Proven track record of success in high-stakes cases.</span>
                </li>
                 <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Committed to upholding the highest standards of integrity.</span>
                </li>
            </ul>
            <div className="mt-10">
                <Button asChild size="lg">
                    <Link href="/about">Learn More</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
