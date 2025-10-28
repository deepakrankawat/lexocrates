
'use client';
import { LottiePlayer } from '@/components/animations/lottie-player';
import WritingBlogPostAnimation from '../../../public/lottie/Writing_Blog_Post.json';

export function BlogHero() {
  return (
    <section className="relative bg-primary text-primary-foreground pt-36 pb-20 sm:pt-48 sm:pb-32">
        <div className="absolute inset-0 opacity-10">
          <LottiePlayer animationData={WritingBlogPostAnimation} />
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        <h1 className="font-headline text-5xl md:text-6xl font-bold">The Lexocrates Blog</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Insights on legal outsourcing, industry trends, and best practices for optimizing your legal operations.
        </p>
      </div>
    </section>
  );
}
    
