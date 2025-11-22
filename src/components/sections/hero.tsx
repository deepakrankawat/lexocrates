'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { AppImage } from '../ui/app-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';
import { Landmark, Scale, FileText, Briefcase } from 'lucide-react';

export function Hero() {
  const image = PlaceHolderImages.find(img => img.id === 'hero-legal');

  const floatingIcons = [
    { icon: Scale, className: 'top-10 left-10 h-8 w-8' },
    { icon: FileText, className: 'bottom-20 right-16 h-10 w-10' },
    { icon: Briefcase, className: 'top-1/2 -left-4 h-7 w-7' },
    { icon: FileText, className: 'bottom-1/4 left-1/4 h-5 w-5' },
    { icon: Scale, className: 'top-1/4 right-1/4 h-6 w-6' },
    { icon: Landmark, className: 'bottom-10 right-1/2 h-9 w-9' },
  ];

  return (
    <section className="relative bg-primary text-primary-foreground min-h-screen flex items-center overflow-hidden pt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
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
                    <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-primary-foreground/80">
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

            <div className="relative h-96 lg:h-[32rem] flex items-center justify-center">
                 {image && (
                    <motion.div 
                      className="relative z-10 w-[280px] h-[420px] sm:w-[320px] sm:h-[480px] border-4 border-accent shadow-2xl"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
                    >
                        <AppImage
                            src={image.imageUrl}
                            alt={image.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image.imageHint}
                        />
                    </motion.div>
                )}
                <div className="absolute inset-0">
                    {floatingIcons.map((item, index) => (
                        <motion.div
                            key={index}
                            className={`absolute text-accent/20 ${item.className}`}
                            initial={{ opacity: 0, scale: 0.5, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{
                                duration: 1.5,
                                delay: 0.8 + index * 0.2,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut',
                            }}
                        >
                            <item.icon />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
