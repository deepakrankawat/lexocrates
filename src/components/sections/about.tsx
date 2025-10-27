
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '@/components/animations/slide-in';
import { LottiePlayer } from '@/components/animations/lottie-player';
import LawBalanceAnimation from '../../../public/lottie/law-balance.json';

export function About() {
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
          <SlideIn direction="left" className="relative h-96 lg:h-[32rem] flex items-center justify-center">
            <div className="relative h-96 w-96 justify-self-center">
              <LottiePlayer animationData={LawBalanceAnimation} />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
