
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { motion } from 'framer-motion';
import { Scale, FileText, Briefcase, Landmark, Calendar, Users, Award } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Counter } from '../animations/counter';

const icons = [
  { icon: Scale, size: 'w-16 h-16', top: '10%', left: '15%' },
  { icon: FileText, size: 'w-12 h-12', top: '20%', left: '80%' },
  { icon: Briefcase, size: 'w-20 h-20', top: '70%', left: '10%' },
  { icon: Landmark, size: 'w-14 h-14', top: '80%', left: '90%' },
];

const stats = [
    { icon: Calendar, value: 15, suffix: '+', label: 'Years Experience' },
    { icon: Users, value: 50, suffix: '+', label: 'Legal Experts' },
    { icon: Award, value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const lineVariants = {
  hidden: { pathLength: 0 },
  visible: { 
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut" }
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-home');
  
  return (
    <section className="relative bg-primary text-primary-foreground h-screen flex items-center overflow-hidden pt-24">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover object-center sm:object-top"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Floating Icons Background for Desktop */}
      <div className="absolute inset-0 z-10 hidden sm:block">
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
                    Lexocrates provides end-to-end legal outsourcing solutions, enabling your firm to focus on strategy while we handle precision legal work.
                </p>
            </FadeIn>
            <FadeIn delay={0.8} duration={0.8}>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat font-bold">
                        <Link href="/services">
                        Explore Services
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white hover:text-primary font-montserrat font-bold">
                        <Link href="/contact">
                            Request Consultation
                        </Link>
                    </Button>
                </div>
            </FadeIn>
        </div>
      </div>

      {/* Bottom Stats Bar for Desktop */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 z-20 bg-black/30 backdrop-blur-sm hidden sm:block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ staggerChildren: 0.3 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center py-6 relative">
                {stats.map((stat, index) => (
                    <motion.div 
                        key={index} 
                        className="text-white relative bg-black/30 px-2"
                        variants={statVariants}
                    >
                        <stat.icon className="h-8 w-8 mx-auto mb-2 text-accent" />
                        <p className="text-3xl font-bold">
                            <Counter from={0} to={stat.value} duration={1.5} />{stat.suffix}
                        </p>
                        <p className="text-sm uppercase tracking-wider text-white/80">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </div>
      </motion.div>

    </section>
  );
}
