'use client';

import { Quote } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';

export function Welcome() {
  return (
    <section className="bg-background text-foreground py-16 sm:py-24 overflow-hidden">
        <div className="container-balanced max-w-[1200px]">
          <div className="flex flex-col items-center text-center">
            
            <SlideIn direction="up">
                <div className="inline-flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-accent/40" />
                    <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs">A MESSAGE FROM OUR FOUNDER</p>
                </div>
                
                <h2 className="font-lato text-2xl sm:text-4xl lg:text-6xl font-black text-primary leading-[1.15] sm:leading-[1.1] mb-10 tracking-tight">
                    Built on a Belief in <br />
                    <span className="text-accent">What the Law Should Do</span>
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    <Quote className="absolute -top-8 -left-6 sm:-top-12 sm:-left-12 h-16 w-16 sm:h-24 sm:w-24 text-accent/10 -z-10" />
                    <div className="space-y-6 sm:space-y-8 text-sm sm:text-lg lg:text-xl text-foreground/80 font-medium leading-relaxed border-l-2 sm:border-l-4 border-accent/20 pl-4 sm:pl-8 text-left">
                        <p>
                            &quot;As a public interest litigator, I&apos;ve spent much of my career on cases that shape communities and protect individual rights — from challenging unlawful toll collections to advocating for fair water distribution, through work in the Supreme Court of India. That work was guided by a simple belief: the law has to serve justice, not just process.&quot;
                        </p>
                        <p>
                            &quot;Lexocrates was founded on that same principle, applied to a different problem. Legal professionals do their best work when they can focus on strategic counsel and client advocacy — not on the process-heavy, time-intensive work that has to happen alongside it. Our role is to take that work on, reliably enough that it never becomes a client&apos;s concern.&quot;
                        </p>
                        <p>
                            &quot;Our team is trained across US, UK, and Canadian legal systems, works within structured processes built for confidentiality and precision, and uses technology where it genuinely helps. Whether we&apos;re supporting litigation for a firm in New York, contract management for a corporate team in London, or compliance documentation for a practice in Canada, the goal is the same: to function as a dependable extension of our clients&apos; own teams.&quot;
                        </p>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-black/5 flex flex-col items-center text-center">
                    <p className="font-montserrat font-black text-primary text-2xl tracking-tight">Yashvardhan Singh</p>
                    <p className="text-accent font-black uppercase tracking-widest text-xs mt-2">Founder &amp; CEO, Lexocrates Legal Services</p>
                </div>
            </SlideIn>

          </div>
        </div>
    </section>
  );
}
