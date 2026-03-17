'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { SlideIn } from '@/components/animations/slide-in';
import { WritingBlogPostLottie } from '@/components/animations/writing-blog-post-animation';

export function BlogShowcase() {
  return (
    <section id="blog-showcase" className="bg-secondary text-foreground py-16 sm:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="right">
            <div className="flex flex-col text-center lg:text-left">
              <p className="font-lato font-bold text-accent uppercase tracking-wider">Stay Informed</p>
              <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary leading-tight">
                Insights from Our Legal Experts
              </h2>
              <p className="mt-6 text-foreground/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Our blog is your resource for the latest trends, analysis, and best practices in legal process outsourcing. We share our expertise to help you optimize your operations for success.
              </p>
              <div className="mt-10">
                  <Button asChild size="lg" className="font-montserrat font-bold w-full sm:w-auto">
                      <Link href="/contact">Get in Touch</Link>
                  </Button>
              </div>
            </div>
          </SlideIn>
          <SlideIn direction="left" className="relative h-64 sm:h-96 lg:h-[32rem] flex items-center justify-center">
            <div className="relative h-full w-full max-w-[400px] justify-self-center">
              <WritingBlogPostLottie />
            </div>
          </SlideIn>
        </div>
    </section>
  );
}
