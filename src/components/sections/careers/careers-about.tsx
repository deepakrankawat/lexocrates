
'use client';

import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '@/components/ui/app-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

export function CareersAbout() {
  const image = PlaceHolderImages.find(img => img.id === 'service-corporate-law');

  return (
    <section className="bg-background text-foreground py-20 sm:py-32 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual Side */}
          <SlideIn direction="left" className="lg:order-last">
            <div className="relative aspect-square w-full bg-secondary rounded-[3rem] overflow-hidden shadow-2xl group">
              {image && (
                <AppImage
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              )}
              {/* Sophisticated Architectural Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/20 to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-0.5 bg-accent" />
                  <p className="text-white/40 font-montserrat font-black text-[10px] uppercase tracking-[0.5em]">Global Talent Hub</p>
                </div>
              </div>
            </div>
          </SlideIn>
          
          {/* Content Side */}
          <div className="flex flex-col">
            <SlideIn direction="right">
              <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-accent/5 border border-accent/10 backdrop-blur-xl mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px]">The Lexocrates DNA</p>
              </div>
              
              {/* Simple Animated UI for Keywords */}
              <div className="space-y-4 mb-12 relative">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-6 group"
                >
                  <span className="h-px w-8 bg-accent/20 group-hover:w-16 transition-all duration-700" />
                  <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-tight tracking-tighter">Innovation,</h2>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-6 group"
                >
                  <span className="h-px w-16 bg-accent/20 group-hover:w-24 transition-all duration-700" />
                  <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-tight tracking-tighter">Collaboration,</h2>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                  className="flex items-center gap-6 group"
                >
                  <span className="h-px w-24 bg-accent group-hover:w-32 transition-all duration-700" />
                  <h2 className="font-lato text-4xl sm:text-6xl font-black text-accent leading-tight tracking-tighter">and Excellence</h2>
                </motion.div>
              </div>

              <SlideIn direction="up" delay={0.9}>
                <div className="text-lg text-foreground/60 space-y-8 font-medium leading-relaxed border-l-4 border-accent/10 pl-8 lg:pl-16">
                  <p>
                    At Lexocrates, we foster a culture of continuous learning. We are a team of passionate professionals dedicated to pushing the boundaries of legal service delivery through precision and deep inquiry.
                  </p>
                  <p>
                    We value diversity, creativity, and a proactive mindset. If you are driven by excellence and want to make a real impact in the global legal tech space, you&apos;ll find a rewarding career at Lexocrates.
                  </p>
                </div>
              </SlideIn>
            </SlideIn>
          </div>
        </div>
    </section>
  );
}
