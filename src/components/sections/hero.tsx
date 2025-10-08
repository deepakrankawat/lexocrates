
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="relative bg-primary text-primary-foreground h-screen flex items-center justify-center overflow-hidden">
      {heroImage && (
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 15, ease: 'easeInOut' }}
        >
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        </motion.div>
      )}
      <div className="absolute inset-0 bg-primary/60" />
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Streamline Your Legal Operations with Lexocrates
        </motion.h1>
        <motion.p 
          className="mt-6 mx-auto max-w-2xl text-lg text-primary-foreground/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          We provide expert legal outsourcing solutions, empowering your business to focus on growth while we handle the complexities.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          className="mt-10"
        >
          <Button 
            asChild 
            size="lg" 
            variant="secondary"
            className="group relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link href="/contact">
              <span className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-accent-foreground"></span>
              Get Consultation
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
