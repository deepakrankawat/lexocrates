
'use client';

import { Quote, User } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';

export function Welcome() {
  return (
    <section className="bg-background text-foreground py-24 sm:py-40 overflow-hidden">
        <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            
            {/* Enhanced Icon-based Visual */}
            <div className="relative group">
              <div className="relative z-10 w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
                {/* Architectural SVG Background Layers */}
                <div className="absolute inset-0 bg-accent/5 rounded-[4rem] rotate-6 scale-105 -z-10" />
                <div className="absolute inset-0 bg-primary/5 rounded-[4rem] -rotate-3 scale-105 -z-10" />
                
                {/* Main Icon Container */}
                <div className="relative h-full w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.12)] border-8 border-white bg-secondary flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-700">
                  <div className="p-16 bg-accent/10 rounded-full text-accent transition-transform duration-700 group-hover:scale-110">
                    <User className="w-32 h-32 fhd:w-48 fhd:h-48" strokeWidth={1} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* Decorative Geometric SVG Elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 opacity-[0.05] pointer-events-none -z-10 text-primary">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M0,0 L100,0 L100,100 Z" />
                  </svg>
                </div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 opacity-[0.08] pointer-events-none -z-10 text-accent">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                     <circle cx="50" cy="50" r="50" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col">
              <SlideIn direction="right">
                  <div className="inline-flex items-center gap-4 mb-8">
                      <div className="w-12 h-px bg-accent/40" />
                      <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs">A Message from Our Founder</p>
                  </div>
                  
                  <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-[1.1] mb-12 tracking-tight">
                      A Commitment to <br />
                      <span className="text-accent">Intellectual</span> Excellence
                  </h2>

                  <div className="relative">
                      <Quote className="absolute -top-12 -left-12 h-24 w-24 text-accent/10 -z-10" />
                      <div className="space-y-10 text-xl sm:text-2xl text-foreground/70 font-medium leading-relaxed italic border-l-4 border-accent/10 pl-10">
                          <p>
                              &quot;As a public interest litigator, I have spent my career championing causes that shape communities and protect the rights of individuals. My work in the Supreme Court of India has been guided by the belief that the law must serve justice above all.&quot;
                          </p>
                          <p>
                              &quot;Lexocrates Legal Services was founded on that same principle. In an increasingly interconnected world, legal professionals must focus on strategic counsel while trusting capable partners to handle complex processes.&quot;
                          </p>
                      </div>
                  </div>

                  <div className="mt-16 pt-12 border-t border-black/5 flex flex-col sm:flex-row sm:items-center gap-8">
                      <div>
                          <p className="font-montserrat font-black text-primary text-3xl tracking-tight">Yashvardhan Singh</p>
                          <p className="text-accent font-black uppercase tracking-widest text-[11px] mt-2">Founder & CEO, Lexocrates Legal Services</p>
                      </div>
                      <div className="hidden sm:block h-16 w-px bg-black/5" />
                      <div className="opacity-30">
                          <svg className="w-48 h-12 text-primary" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 40C30 20 60 50 90 30C120 10 150 40 190 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                      </div>
                  </div>
              </SlideIn>
            </div>

          </div>
        </div>
    </section>
  );
}
