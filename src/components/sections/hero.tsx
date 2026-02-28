
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '../animations/fade-in';
import { SlideIn } from '../animations/slide-in';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-20">
      {/* Sophisticated Abstract Background (No Images) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep mesh gradient effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(184,134,11,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
        
        {/* Subtle technical grid pattern for 'Legal Operations' feel */}
        <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" 
             style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
             
        {/* Large blurred decorative 'blobs' */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] -mr-96 -mt-96 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] -ml-48 -mb-48" />
      </div>

      <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px] py-32 text-center lg:text-left">
        <div className="max-w-6xl mx-auto lg:mx-0">
          <FadeIn delay={0.2} duration={0.8}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-12 shadow-2xl">
              <span className="h-2.5 w-2.5 rounded-full bg-accent animate-ping" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                Global Legal Process Outsourcing
              </p>
            </div>
          </FadeIn>
          
          <SlideIn direction="up" delay={0.4} duration={0.8}>
            <h1 className="font-montserrat text-5xl sm:text-7xl lg:text-[10rem] font-black leading-[0.85] text-white mb-14 tracking-tighter">
              Strategic <br />
              <span className="text-accent">Legal</span> <br />
              Operations
            </h1>
          </SlideIn>

          <FadeIn delay={0.6} duration={0.8}>
            <p className="max-w-3xl text-xl sm:text-2xl lg:text-3xl text-white/80 font-medium leading-relaxed mb-16 mx-auto lg:mx-0 border-l-4 border-accent/30 pl-8">
              Driving efficiency for the world's leading law firms and corporate legal departments. We provide the expertise and technology to transform your legal workflow.
            </p>
          </FadeIn>

          <FadeIn delay={0.8} duration={0.8}>
            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xl px-14 py-10 rounded-full shadow-[0_20px_50px_rgba(206,166,48,0.3)] transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <Link href="/services">View Solutions</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/5 backdrop-blur-md text-white border-white/20 hover:bg-white hover:text-primary font-montserrat font-black text-xl px-14 py-10 rounded-full transition-all duration-500 hover:scale-110 active:scale-95"
              >
                <Link href="/contact">Schedule Strategy Call</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
      
      {/* Bottom status bar for modern corporate feel */}
      <div className="absolute bottom-12 left-6 lg:left-24 hidden md:flex items-center gap-6 opacity-40">
        <div className="flex flex-col gap-1">
          <div className="w-12 h-0.5 bg-accent" />
          <div className="w-8 h-0.5 bg-accent/50" />
        </div>
        <p className="text-white font-lato font-bold text-xs uppercase tracking-[0.2em]">Excellence. Innovation. Trust.</p>
      </div>

      <div className="absolute bottom-10 right-1/2 translate-x-1/2 hidden lg:block opacity-20">
        <div className="w-px h-32 bg-gradient-to-b from-accent via-accent to-transparent" />
      </div>
    </section>
  );
}
