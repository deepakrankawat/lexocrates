
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground min-h-screen flex items-center overflow-hidden pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="text-center">
                <FadeIn delay={0.2} duration={0.8}>
                    <p className="font-lato font-bold text-accent uppercase tracking-wider">
                        Legal Process Outsourcing
                    </p>
                </FadeIn>
                <FadeIn delay={0.4} duration={0.8}>
                    <h1 className="mt-4 font-montserrat text-4xl sm:text-5xl font-bold leading-tight">
                        Empowering Global Legal Excellence
                    </h1>
                </FadeIn>
                <FadeIn delay={0.6} duration={0.8}>
                    <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-primary-foreground/80">
                        Lexocrates provides end-to-end legal outsourcing solutions, enabling your firm to focus on strategy while we handle precision legal work.
                    </p>
                </FadeIn>
                <FadeIn delay={0.8} duration={0.8}>
                    <div className="mt-10">
                        <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat font-bold">
                            <Link href="/services">
                            Explore Services
                            </Link>
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </div>
      </div>
    </section>
  );
}
