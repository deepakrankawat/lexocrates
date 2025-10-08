
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '@/components/animations/slide-in';
import { FadeIn } from '@/components/animations/fade-in';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-lady-justice');

  return (
    <section id="about" className="bg-background text-foreground py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <SlideIn direction="right">
            <div className="flex flex-col">
              <p className="font-body font-bold text-accent uppercase tracking-wider">About Lexocrates</p>
              <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
                Your Trusted Partner in Legal Process Outsourcing
              </h2>
              <p className="mt-6 text-foreground/80">
                  Lexocrates was founded to bridge the gap between high-quality legal services and cost-effective operational management. We empower law firms and corporate legal departments to achieve more by handling their essential legal tasks with precision and expertise.
              </p>
              <div className="mt-10">
                  <Button asChild size="lg">
                      <Link href="/about">Discover Our Story</Link>
                  </Button>
              </div>
            </div>
          </SlideIn>
          <SlideIn direction="left" className="relative h-[30rem] w-full">
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={aboutImage.width}
                    height={aboutImage.height}
                    className="object-cover w-full h-full"
                    data-ai-hint={aboutImage.imageHint}
                />
            )}
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

    