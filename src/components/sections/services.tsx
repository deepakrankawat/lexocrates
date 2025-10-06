import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const servicesList = [
  'Education Lawyer & Consultation',
  'Business Law',
  'Education Lawyer & Consultation',
  'Business Law',
  'Education Lawyer & Consultation',
  'Business Law',
];

export function Services() {
  return (
    <section id="services" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80">
            <Image
              src="https://images.unsplash.com/photo-1590005354257-659c3969b743?q=80&w=2070&auto=format&fit=crop"
              alt="Gavel and law book"
              fill
              className="object-cover"
              data-ai-hint="gavel law book"
            />
          </div>
          <h2 className="font-headline text-5xl font-bold leading-tight text-primary">
            Professional Services
            <br />
            Prepared To Be Your
            <br />
            Lawyer Firm
          </h2>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {servicesList.map((service, index) => (
            <Link
              key={index}
              href="/services"
              className="flex items-center justify-between border-b border-border py-4 transition-colors hover:text-accent"
            >
              <span className="font-headline text-xl text-primary">{service}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
