
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';
import { AppImage } from '../ui/app-image';

const partners = [
  {
    name: 'Daerazo',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-1')
  },
  {
    name: 'Miguxian',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-2')
  },
  {
    name: 'Jeninayln',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-3')
  },
  {
    name: 'Superanzo',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-4')
  },
   {
    name: 'Fictional Corp',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-1')
  },
  {
    name: 'New Partner',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-2')
  }
];

export function Partners() {
  return (
    <section className="bg-secondary text-foreground py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideIn direction="right">
                <div>
                    <p className="font-body font-bold text-accent uppercase tracking-wider">Our Trusted Partners</p>
                    <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
                        Building Success Together
                    </h2>
                    <p className="mt-6 text-foreground/80">
                        We collaborate with leading organizations to deliver exceptional value and drive innovation in the legal industry. Our partnerships are built on a foundation of trust, shared goals, and a commitment to excellence.
                    </p>
                </div>
            </SlideIn>
            <StaggerFadeIn className="grid grid-cols-2 sm:grid-cols-3 gap-y-8 gap-x-12 items-center justify-items-center">
            {partners.map((partner, index) => (
                partner.logo &&
                <motion.div 
                key={index}
                className="flex justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                >
                    <AppImage
                    src={partner.logo.imageUrl}
                    alt={`${partner.name} logo`}
                    width={140}
                    height={40}
                    className="object-contain"
                    data-ai-hint={partner.logo.imageHint}
                    />
                </motion.div>
            ))}
            </StaggerFadeIn>
        </div>
      </div>
    </section>
  );
}
