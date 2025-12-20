
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/animations/fade-in';

export function Cta() {
  return (
    <section className="bg-secondary py-12 sm:py-16 text-foreground">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="grid grid-cols-1 items-center justify-center text-center md:text-left bg-background p-12 gap-8">
              <div>
                <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary">
                  Ready to Optimize Your Legal Workflow?
                </h2>
                <p className="mt-4 max-w-2xl text-foreground/80">
                  Let's discuss how Lexocrates can help you achieve your business goals. Schedule a free, no-obligation consultation with our expert team today.
                </p>
                <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat font-bold">
                  <Link href="/contact">Request a Consultation</Link>
                </Button>
              </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
