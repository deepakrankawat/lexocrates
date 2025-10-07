
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';

export function Cta() {
  return (
    <section className="bg-primary py-20 sm:py-28 text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center">
              <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold">
                We Help You With Quality Legal Lawyer
              </h2>
              <p className="mt-4 max-w-2xl text-primary-foreground/80">
                Let's talk about how we can help you achieve your legal goals. Schedule a free, no-obligation consultation with our expert team today.
              </p>
              <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Get a Quote</Link>
              </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
