'use client';
import { Button } from '@/components/ui/button';
import { SlideIn } from '@/components/animations/slide-in';
import Link from 'next/link';
import { Briefcase } from 'lucide-react';

export function CareersPositions() {
  return (
    <section className="bg-secondary/30 text-foreground py-12 sm:py-20 rounded-[3rem] my-12">
        <SlideIn className="text-center mb-12">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-[10px]">Opportunities</p>
          <h2 className="font-lato text-3xl md:text-4xl font-black text-primary tracking-tight">
            Join Our Global Network
          </h2>
        </SlideIn>
        
        <div className="max-w-2xl mx-auto px-6">
            <SlideIn direction="up" delay={0.2}>
                <div className="bg-background p-10 sm:p-16 rounded-[2.5rem] border border-black/5 shadow-sm text-center">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8">
                        <Briefcase className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="font-montserrat font-black text-2xl text-primary mb-4 tracking-tight">No Current Vacancies</h3>
                    <p className="text-foreground/60 font-medium leading-relaxed mb-10">
                        While we do not have any specific open positions at this time, we are constantly expanding our strategic legal network. We invite elite legal professionals to share their credentials for future considerations.
                    </p>
                    <Button asChild className="bg-primary hover:bg-accent text-white font-montserrat font-black text-[11px] uppercase tracking-[0.3em] px-12 py-8 rounded-full shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95">
                        <Link href="/contact">Submit Your Credentials</Link>
                    </Button>
                </div>
            </SlideIn>
        </div>
    </section>
  );
}
