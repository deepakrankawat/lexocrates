
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';

export function Cta() {
  return (
    <section className="bg-background py-20 sm:py-28 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center justify-center text-center">
              <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">
                Ready to Optimize Your Legal Workflow?
              </h2>
              <p className="mt-4 max-w-2xl text-foreground/80">
                Let's discuss how Lexocrates can help you achieve your business goals. Schedule a free, no-obligation consultation with our expert team today.
              </p>
              <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Request a Consultation</Link>
              </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
