
'use client';

import { Quote } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';

export function Welcome() {
  return (
    <section className="bg-background text-foreground py-24 sm:py-40 overflow-hidden">
        <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1200px]">
          <div className="flex flex-col items-center text-center">
            
            <SlideIn direction="up">
                <div className="inline-flex items-center gap-4 mb-8">
                    <div className="w-12 h-px bg-accent/40" />
                    <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs">A Message from Our Founder</p>
                </div>
                
                <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-[1.1] mb-12 tracking-tight">
                    A Commitment to <br />
                    <span className="text-accent">Intellectual</span> Excellence
                </h2>

                <div className="relative max-w-4xl mx-auto">
                    <Quote className="absolute -top-12 -left-12 h-24 w-24 text-accent/10 -z-10" />
                    <div className="space-y-10 text-xl sm:text-2xl text-foreground/70 font-medium leading-relaxed italic border-l-4 border-accent/10 pl-10 text-left">
                        <p>
                            &quot;As a public interest litigator, I have spent my career championing causes that shape communities and protect the rights of individuals. From challenging unlawful toll collections to advocating for fair water distribution, my work in the Supreme Court of India has been guided by the belief that the law must serve justice above all.&quot;
                        </p>
                        <p>
                            &quot;Lexocrates Legal Services was founded on that same principle. In an increasingly interconnected world, legal professionals must focus on what they do best—strategic counsel and client advocacy—while trusting capable partners to handle the complex, time-intensive processes that run in the background.&quot;
                        </p>
                        <p>
                            &quot;Our team is trained in US, UK, and Canadian legal systems, equipped with advanced legal technology, and committed to the highest standards of confidentiality and precision. Whether assisting a law firm in New York with litigation support, aiding a London corporate in contract management, or helping a Canadian practice with compliance documentation, our mission is clear: to be a seamless extension of your legal team. I invite you to explore how Lexocrates can bring value, efficiency, and integrity to your practice.&quot;
                        </p>
                    </div>
                </div>

                <div className="mt-16 pt-12 border-t border-black/5 flex flex-col items-center text-center">
                    <p className="font-montserrat font-black text-primary text-3xl tracking-tight">Yashvardhan Singh</p>
                    <p className="text-accent font-black uppercase tracking-widest text-[11px] mt-2">Founder & CEO, Lexocrates Legal Services</p>
                    <div className="mt-8 opacity-30">
                        <svg className="w-48 h-12 text-primary" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 40C30 20 60 50 90 30C120 10 150 40 190 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </SlideIn>

          </div>
        </div>
    </section>
  );
}
