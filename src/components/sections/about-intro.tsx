'use client';

import { SlideIn } from '../animations/slide-in';
import { GlobalNodeNetwork } from '@/components/ui/global-node-network';

export function AboutIntro() {
  return (
    <section id="about-intro" className="bg-background text-foreground py-16 sm:py-24 fhd:py-32 overflow-hidden">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1920px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 fhd:gap-40 items-center">
          
          <SlideIn direction="left" className="lg:order-last relative">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] fhd:h-[700px] w-full flex items-center justify-center group">
              
              {/* Simplified Visual Container */}
              <div className="relative w-full h-full bg-secondary/10 rounded-[3rem] border border-black/5 overflow-hidden shadow-sm transition-all duration-700">
                <GlobalNodeNetwork />
              </div>

              {/* Minimalist Visual Accent */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </SlideIn>
          
          <SlideIn direction="right">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent/30" />
                <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs fhd:text-sm">Strategic Continuity</p>
              </div>
              <h2 className="font-lato text-3xl sm:text-5xl fhd:text-7xl font-black text-primary leading-[1.1] tracking-tighter mb-8 sm:mb-10">
                A Global Bridge <br />
                <span className="text-accent/80">of Legal Intelligence</span>
              </h2>
              <div className="text-lg sm:text-xl fhd:text-2xl text-foreground/70 space-y-6 sm:space-y-10 font-medium leading-relaxed border-l-4 border-accent/10 pl-6 sm:pl-10 fhd:pl-12">
                <p>
                  Founded in Jaipur, India, Lexocrates operates as a high-fidelity bridge between elite Indian legal talent and the rigorous demands of firms in Canada, the US, and the UK.
                </p>
                <p>
                  Our connectivity concept is built on seamless integration. We don't just "outsource"—we synchronize. Our India-based lawyers act as a direct extension of your internal team, providing 24/7 coverage through sophisticated data corridors and common-law mastery.
                </p>
                <p>
                  By blending Socratic inquiry with modern operational precision, we ensure that the bridge between our operations and your practice is defined by absolute confidentiality, speed, and ethical stewardship.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
