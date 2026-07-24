'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '@/components/animations/slide-in';
import { WritingBlogPostLottie } from '@/components/animations/writing-blog-post-animation';

export function BlogShowcase() {
  return (
    <section id="blog-showcase" className="bg-primary text-white py-16 sm:py-24 rounded-[3rem] my-16 overflow-hidden">
      <div className="container-balanced">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="right">
            <div className="flex flex-col text-center lg:text-left">
              <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-xs">READY TO TAKE THE NEXT STEP?</p>
              <h2 className="mt-4 font-lato text-3xl sm:text-5xl font-black text-white leading-tight">
                Looking for Reliable Legal Support?
              </h2>
              <p className="mt-6 text-white/80 font-medium text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Our insights reflect the same principles that guide our legal process outsourcing services — structured processes, experienced legal professionals, and an unwavering commitment to quality. If you&apos;re looking for a trusted legal support partner, we&apos;d be happy to discuss how Lexocrates can support your legal operations.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="xl" className="bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-[0.2em] rounded-full px-8 shadow-lg transition-all duration-300">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button asChild size="xl" className="bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-[0.2em] rounded-full px-8 transition-all duration-300">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </SlideIn>
          <SlideIn direction="left" className="relative h-64 sm:h-96 lg:h-[28rem] flex items-center justify-center">
            <div className="relative h-full w-full max-w-[400px] justify-self-center opacity-90">
              <WritingBlogPostLottie />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
