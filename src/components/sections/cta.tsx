
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';
import { LawBalanceLottie } from '../animations/law-balance-animation';

export function Cta() {
  return (
    <section className="bg-secondary py-20 sm:py-28 text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center text-center md:text-left bg-background p-12 gap-8">
              <div>
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
               <div className="relative h-64 w-64 justify-self-center">
                <LawBalanceLottie />
              </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
