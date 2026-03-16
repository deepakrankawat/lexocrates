'use client';

import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AppImage } from '../ui/app-image';

const logos = [
  PlaceHolderImages.find(img => img.id === 'partner-logo-1'),
  PlaceHolderImages.find(img => img.id === 'partner-logo-2'),
  PlaceHolderImages.find(img => img.id === 'partner-logo-3'),
  PlaceHolderImages.find(img => img.id === 'partner-logo-4'),
];

export function PartnerLogos() {
  return (
    <section className="py-12 bg-background border-y border-black/5 overflow-hidden">
      <div className="mx-auto w-full px-6">
        <p className="text-center font-lato font-black text-[10px] text-foreground/30 uppercase tracking-[0.5em] mb-12">
          Trusted by Global Legal Entities
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.filter(Boolean).map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="h-8 lg:h-12 w-auto"
            >
              {logo && (
                <AppImage
                  src={logo.imageUrl}
                  alt={logo.description}
                  width={logo.width}
                  height={logo.height}
                  data-ai-hint={logo.imageHint}
                  className="h-full w-auto object-contain"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
