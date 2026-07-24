
'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '@/components/ui/app-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function CareersHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-careers');

  return (
    <section className="relative min-h-[45vh] sm:min-h-[50vh] fhd:min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-[84px] sm:pt-[100px] lg:pt-[130px] pb-12 lg:pb-16">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(184,134,11,0.15)_0%,transparent_50%)]" />
      </div>

      <div className="relative z-10 container-balanced fhd:px-32 text-center">
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                CAREERS
              </p>
            </div>
          </FadeIn>
          <SlideIn direction="up" delay={0.4}>
            <h1 className="font-montserrat text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white mb-6 lg:mb-8 tracking-tighter">
              Build Your Career With Lexocrates
            </h1>
          </SlideIn>
          <FadeIn delay={0.6}>
            <p className="text-base sm:text-lg fhd:text-xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto mb-8">
              Develop practical experience supporting law firms and corporate legal departments across Canada, the United Kingdom, and the United States through legal research, litigation support, contract lifecycle management, compliance, and legal operations.
              <br /><br />
              At Lexocrates, we believe exceptional legal support begins with talented people, supported by structured processes and a commitment to continuous learning. If you&apos;re looking to build your career in a professional, collaborative, and growth-oriented environment, we&apos;d be pleased to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-full shadow-lg transition-all duration-300"
            >
              Submit Your Resume
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
