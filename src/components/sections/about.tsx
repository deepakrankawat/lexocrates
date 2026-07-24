
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '@/components/animations/slide-in';
import { FadeIn } from '@/components/animations/fade-in';
import { ShieldCheck, Scale, Zap, Globe2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="bg-background text-foreground py-16 sm:py-24 lg:py-32 overflow-hidden border-y border-black/5 relative">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container-balanced relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-accent/5 border border-accent/10 backdrop-blur-2xl mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-accent relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            </span>
            <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs">
              WHO WE ARE
            </p>
          </div>
          
          <SlideIn direction="up" delay={0.2}>
            <h2 className="font-lato text-2xl sm:text-4xl lg:text-6xl font-black text-primary leading-[1.15] sm:leading-[1.1] mb-8 tracking-tight">
              A Legal Process Outsourcing Partner, Not Just a Vendor
            </h2>
          </SlideIn>

          <p className="text-base sm:text-xl text-foreground/70 leading-relaxed font-medium mb-12 max-w-3xl mx-auto text-center">
            Lexocrates was founded on a simple observation: capable legal teams are too often stretched thin by volume, with little time left for the work that actually needs their judgment. We built our practice around fixing that — pairing experienced legal professionals with structured workflows so law firms and corporate legal departments can take on more without quality slipping.
          </p>

          <div className="space-y-12">
            <div>
                <Button asChild size="xl" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/95 font-montserrat font-black text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] px-6 sm:px-14 rounded-full shadow-2xl shadow-primary/10 transition-all duration-500 hover:scale-105 active:scale-95">
                    <Link href="/about">Learn More About Us</Link>
                </Button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-xl">
                        <ShieldCheck className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Secure Data Corridors</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-xl">
                        <Scale className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Jurisdictional Precision</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-xl">
                        <Globe2 className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Overnight Delivery</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
