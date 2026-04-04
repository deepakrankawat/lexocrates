'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';

export function Cta() {
  return (
    <section className="bg-background py-16 sm:py-24 text-foreground">
      <div className="container-balanced">
        <FadeIn>
          <div className="relative rounded-[3rem] bg-primary overflow-hidden p-8 sm:p-12 lg:p-24 text-center lg:text-left shadow-2xl shadow-primary/20 w-full max-w-[100vw] box-border">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-[100px] -mr-48 -mt-48" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -ml-32 -mb-32" />
              
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                <div>
                  <h2 className="font-lato text-4xl sm:text-6xl font-black text-white leading-tight mb-8 tracking-tight">
                    Ready to Optimize <br /> Your Legal Workflow?
                  </h2>
                  <p className="text-lg sm:text-xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Partner with Lexocrates and experience a seamless integration of global expertise and cutting-edge efficiency. Your success is our mission.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-end w-full overflow-hidden sm:overflow-visible">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-base md:text-xl px-8 py-6 md:px-12 md:py-10 h-auto w-full sm:w-auto break-words whitespace-normal text-center rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 max-w-full">
                    <Link href="/contact" className="w-full flex justify-center items-center">Request a Consultation</Link>
                  </Button>
                </div>
              </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
