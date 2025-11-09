
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '@/components/animations/slide-in';
<<<<<<< HEAD
import { AppImage } from '@/components/ui/app-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function About() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'service-detail-1');
=======
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AppImage } from '../ui/app-image';

export function About() {
  const image = PlaceHolderImages.find(img => img.id === 'service-detail-1');
>>>>>>> 6f76f247f64bd3ad8604e8351438b371dea4b2a1
  return (
    <section id="about" className="bg-background text-foreground py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <SlideIn direction="right">
            <div className="flex flex-col text-center lg:text-left">
              <p className="font-lato font-bold text-accent uppercase tracking-wider">About Lexocrates</p>
              <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary leading-tight">
                Your Trusted Partner in Legal Process Outsourcing
              </h2>
              <p className="mt-6 text-foreground/80">
                  Lexocrates was founded to bridge the gap between high-quality legal services and cost-effective operational management. We empower law firms and corporate legal departments to achieve more by handling their essential legal tasks with precision and expertise.
              </p>
              <div className="mt-10">
                  <Button asChild size="lg" className="font-montserrat font-bold">
                      <Link href="/about">Discover Our Story</Link>
                  </Button>
              </div>
            </div>
          </SlideIn>
          <SlideIn direction="left" className="relative h-80 lg:h-[32rem] flex items-center justify-center">
<<<<<<< HEAD
            {aboutImage && (
                <AppImage
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={aboutImage.width}
                    height={aboutImage.height}
                    className="object-cover h-full w-full"
                    wrapperClassName="h-full w-full"
                    data-ai-hint={aboutImage.imageHint}
                />
            )}
=======
            <div className="relative h-full w-full justify-self-center bg-secondary flex items-center justify-center">
              {image && (
                <AppImage
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
>>>>>>> 6f76f247f64bd3ad8604e8351438b371dea4b2a1
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
