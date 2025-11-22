
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { motion } from 'framer-motion';
import { Scale, FileText, Briefcase, Landmark } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const icons = [
  { icon: Scale, size: 'w-16 h-16', top: '10%', left: '15%' },
  { icon: FileText, size: 'w-12 h-12', top: '20%', left: '80%' },
  { icon: Briefcase, size: 'w-20 h-20', top: '70%', left: '10%' },
  { icon: Landmark, size: 'w-14 h-14', top: '80%', left: '90%' },
  { icon: Scale, size: 'w-8 h-8', top: '50%', left: '50%' },
  { icon: FileText, size: 'w-10 h-10', top: '5%', left: '40%' },
  { icon: Landmark, size: 'w-16 h-16', top: '40%', left: '20%' },
  { icon: Briefcase, size: 'w-12 h-12', top: '90%', left: '60%' },
];

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');
  
  return (
    <section className="relative bg-primary text-primary-foreground min-h-screen flex items-center overflow-hidden pt-24">
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
      <div className="absolute inset-0 bg-primary/80 z-0" />

      {/* Floating Icons Background */}
      <div className="absolute inset-0 z-10">
        {icons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute text-accent/10"
            style={{ top: item.top, left: item.left }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: index * 0.2,
            }}
          >
            <motion.div
              animate={{
                y: [0, -10, 0, 10, 0],
                x: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            >
              <item.icon className={item.size} />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div className="text-center">
                <FadeIn delay={0.2} duration={0.8}>
                    <p className="font-lato font-bold text-accent uppercase tracking-wider">
                        Legal Process Outsourcing
                    </p>
                </FadeIn>
                <FadeIn delay={0.4} duration={0.8}>
                    <h1 className="mt-4 font-montserrat text-4xl sm:text-5xl font-bold leading-tight text-white">
                        Empowering Global Legal Excellence
                    </h1>
                </FadeIn>
                <FadeIn delay={0.6} duration={0.8}>
                    <p className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-white/80">
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
