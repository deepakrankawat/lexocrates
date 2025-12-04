
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { motion } from 'framer-motion';
import { Calendar, Users, Award } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Counter } from '../animations/counter';

const stats = [
  { icon: Calendar, value: 15, suffix: '+', label: 'Years Experience' },
];

const statVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');
  const StatIcon = stats[0].icon;

  return (
    <section className="relative bg-primary text-primary-foreground h-screen flex items-center justify-center overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeIn delay={0.2} duration={0.8}>
            <p className="font-lato font-bold text-accent uppercase tracking-wider">
              Legal Process Outsourcing
            </p>
          </FadeIn>
          <FadeIn delay={0.3} duration={0.8}>
            <p className="font-lato font-bold text-accent uppercase tracking-widest mt-4">
              EST. 2009
            </p>
          </FadeIn>
          <FadeIn delay={0.4} duration={0.8}>
            <h1 className="mt-4 font-montserrat text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Empowering Global Legal Excellence
            </h1>
          </FadeIn>
          <FadeIn delay={0.6} duration={0.8}>
            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-white/80">
              Lexocrates provides end-to-end legal outsourcing solutions,
              enabling your firm to focus on strategy while we handle precision
              legal work.
            </p>
          </FadeIn>
          <FadeIn delay={0.8} duration={0.8}>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat font-bold"
              >
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary font-montserrat font-bold"
              >
                <Link href="/contact">Request Consultation</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 text-center py-6">
            <motion.div
              className="text-white relative bg-black/30 px-2"
              variants={statVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
            >
              <StatIcon className="h-8 w-8 mx-auto mb-2 text-accent" />
              <p className="text-3xl font-bold">
                <Counter from={0} to={stats[0].value} duration={1.5} />
                {stats[0].suffix}
              </p>
              <p className="text-sm uppercase tracking-wider text-white/80">
                {stats[0].label}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
