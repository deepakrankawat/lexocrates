'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AnimatedText = ({ children, delay }: { children: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  const paperVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      rotate: i * 2 - 2,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    }),
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
      <div className="absolute inset-0 bg-primary/80" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="relative">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 -m-4 bg-white/10 backdrop-blur-sm border border-white/20"
              variants={paperVariants}
              initial="hidden"
              animate="visible"
              custom={i}
            />
          ))}

          <div className="relative p-8 sm:p-12">
            <AnimatedText delay={0.6}>
              <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Delivering Legal Outcomes with Precision
              </h1>
            </AnimatedText>

            <AnimatedText delay={0.8}>
              <p className="mt-6 mx-auto max-w-2xl text-lg text-white/90">
                Empowering law firms and enterprises through secure, efficient, and scalable legal outsourcing.
              </p>
            </AnimatedText>

            <AnimatedText delay={1.0}>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  <Link href="/services">
                    Explore Services
                  </Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="h-8 w-8 text-white/50" />
      </motion.div>
    </section>
  );
}
