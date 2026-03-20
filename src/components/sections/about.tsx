
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '@/components/animations/slide-in';
import { FadeIn } from '@/components/animations/fade-in';
import { ShieldCheck, Scale, Zap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-background text-foreground py-24 sm:py-32 overflow-hidden border-y border-black/5 relative">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-accent/5 border border-accent/10 backdrop-blur-2xl mb-10 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            </span>
            <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs">
              The Lexocrates Advantage
            </p>
          </div>
          
          <SlideIn direction="up" delay={0.2}>
            <h2 className="font-lato text-4xl sm:text-6xl lg:text-7xl font-black text-primary leading-[1.1] mb-10 tracking-tighter">
              Your Strategic Partner <br /> in <span className="text-accent">Legal Growth</span>
            </h2>
          </SlideIn>

          <p className="text-xl sm:text-2xl text-foreground/60 leading-relaxed font-medium mb-16 max-w-3xl mx-auto border-l-4 sm:border-l-0 border-accent/20 pl-8 sm:pl-0 text-left sm:text-center">
              Lexocrates was founded to bridge the gap between high-quality legal services and cost-effective operational management. We empower law firms and corporate legal departments to achieve more by handling their essential legal tasks with precision and expertise.
          </p>

          <div className="space-y-12">
            <div>
                <Button asChild size="xl" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/95 font-montserrat font-black text-xs uppercase tracking-[0.3em] px-14 rounded-full shadow-2xl shadow-primary/10 transition-all duration-500 hover:scale-105 active:scale-95">
                    <Link href="/about">Discover Our Story</Link>
                </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-xl">
                        <ShieldCheck className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Secure Protocol</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-xl">
                        <Scale className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Absolute Precision</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-xl">
                        <Zap className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Rapid Integration</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
