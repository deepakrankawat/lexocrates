
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '@/components/animations/slide-in';
import { LawBalanceLottie } from '@/components/animations/law-balance-animation';
import { Scale } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-background text-foreground py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <SlideIn direction="right">
            <div className="flex flex-col text-center lg:text-left">
              <p className="font-lato font-bold text-accent uppercase tracking-wider">About Lexocrates</p>
              <h2 className="mt-4 font-lato text-3xl md:text-5xl font-bold text-primary leading-tight">
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
            <div className="relative h-80 w-80 justify-self-center bg-secondary flex items-center justify-center">
              <Scale className="h-48 w-48 text-accent/80" />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
