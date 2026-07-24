'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';

export function Cta() {
  return (
    <section className="bg-background py-16 sm:py-24 text-foreground">
      <div className="container-balanced">
        <FadeIn>
          <div className="relative rounded-[2rem] sm:rounded-[3rem] bg-primary overflow-hidden p-6 sm:p-12 lg:p-24 text-center lg:text-left shadow-2xl shadow-primary/20 w-full box-border">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <h2 className="font-lato text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight uppercase">
                    READY TO STRENGTHEN YOUR LEGAL OPERATIONS?
                  </h2>
                  <p className="text-base sm:text-xl text-white/80 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Let&apos;s talk about what&apos;s taking up your team&apos;s time right now — and whether it&apos;s work we can take off your plate.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4 w-full">
                  <Button asChild size="lg" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full shadow-2xl transition-all duration-300">
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button asChild size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-primary font-montserrat font-black text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4 h-auto rounded-full transition-all duration-300">
                    <Link href="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
