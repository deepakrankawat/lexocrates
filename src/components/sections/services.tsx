
import { Button } from '../ui/button';
import Link from 'next/link';

export function Services() {
  return (
    <section id="services" className="bg-white text-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-lato font-bold text-accent uppercase tracking-wider">
            Our Services
          </p>
          <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold leading-tight text-primary">
            We Specialize In The Following Areas
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-foreground/80">
            Lexocrates offers a comprehensive suite of legal outsourcing solutions designed to enhance efficiency, reduce overhead, and allow your team to focus on high-value strategic work. From contract management to complex legal research, our expert team serves as a seamless extension of your practice.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="font-montserrat font-bold">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
