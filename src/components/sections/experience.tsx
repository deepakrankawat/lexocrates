'use client';

import { Calendar, Users } from 'lucide-react';
import { SlideIn } from '@/components/animations/slide-in';
import { Counter } from '@/components/animations/counter';
import { LegalHologramConsole } from '@/components/animations/legal-hologram-console';

export function Experience() {
  return (
    <section id="experience" className="bg-background text-foreground py-12 sm:py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="right">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-accent/30" />
                <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs">Our Track Record</p>
              </div>
              <h2 className="font-lato text-4xl sm:text-5xl font-black leading-tight text-primary tracking-tighter mb-8">
                Decades of Expertise, <br />
                <span className="text-accent">Measurable</span> Results
              </h2>
              <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed font-medium mb-12">
                Our firm's foundation is built on years of dedicated service and a deep understanding of global legal standards. We leverage this experience to deliver efficiency and excellence for our clients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="text-center p-6 sm:p-8 bg-secondary/50 rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 hover:border-accent/30 transition-all duration-500 shadow-sm">
                      <Calendar className="h-8 w-8 sm:h-10 sm:w-10 mx-auto text-accent mb-4 sm:mb-6" />
                      <p className="text-4xl sm:text-5xl font-black text-primary tracking-tighter">
                        <Counter from={0} to={2} />+
                      </p>
                      <p className="text-accent font-black uppercase tracking-[0.2em] text-[9px] sm:text-[10px] mt-3 sm:mt-4">Years Experience</p>
                  </div>
                  <div className="text-center p-6 sm:p-8 bg-secondary/50 rounded-[2rem] sm:rounded-[2.5rem] border border-black/5 hover:border-accent/30 transition-all duration-500 shadow-sm">
                      <Users className="h-8 w-8 sm:h-10 sm:w-10 mx-auto text-accent mb-4 sm:mb-6" />
                      <p className="text-4xl sm:text-5xl font-black text-primary tracking-tighter">
                         <Counter from={0} to={50} />+
                      </p>
                      <p className="text-accent font-black uppercase tracking-[0.2em] text-[9px] sm:text-[10px] mt-3 sm:mt-4">Legal Experts</p>
                  </div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="left" className="w-full">
            <LegalHologramConsole />
          </SlideIn>
        </div>
    </section>
  );
}
