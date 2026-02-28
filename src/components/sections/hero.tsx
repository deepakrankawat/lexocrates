
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Background Decorative Elements for depth and modern feel */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] -mr-80 -mt-80 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -ml-64 -mb-64" />
      
      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px] py-32 text-center lg:text-left">
        <div className="max-w-5xl mx-auto lg:mx-0">
          <FadeIn delay={0.2} duration={0.8}>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-md mb-10">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px] sm:text-xs">
                Global Legal Process Outsourcing
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4} duration={0.8}>
            <h1 className="font-montserrat text-5xl sm:text-7xl lg:text-[10rem] font-black leading-[0.9] text-white mb-12 tracking-tighter">
              Strategic <br />
              <span className="text-accent">Legal</span> <br />
              Efficiency
            </h1>
            <p className="max-w-3xl text-xl sm:text-2xl lg:text-3xl text-white/70 font-medium leading-relaxed mb-16 mx-auto lg:mx-0">
              Lexocrates empowers law firms and corporations with high-impact outsourcing solutions. We bridge the gap between complex legal tasks and global operational excellence.
            </p>
          </FadeIn>

          <FadeIn delay={0.8} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xl px-12 py-10 rounded-full shadow-2xl shadow-accent/20 transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <Link href="/services">Explore Solutions</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-primary font-montserrat font-black text-xl px-12 py-10 rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Modern Visual Anchor */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block opacity-30">
        <div className="w-px h-32 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
