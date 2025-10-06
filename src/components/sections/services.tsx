import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';


const servicesList = [
  { name: 'Corporate Law', slug: 'corporate-law' },
  { name: 'Family Law', slug: 'family-law' },
  { name: 'Real Estate Law', slug: 'real-estate-law' },
  { name: 'Intellectual Property', slug: 'intellectual-property' },
  { name: 'Criminal Defense', slug: 'criminal-defense' },
  { name: 'Immigration Law', slug: 'immigration-law' },
];

export function Services() {
  const serviceImage = PlaceHolderImages.find(img => img.id === 'gavel-book');
  return (
    <section id="services" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80">
            {serviceImage && (
            <Image
              src={serviceImage.imageUrl}
              alt={serviceImage.description}
              fill
              className="object-cover"
              data-ai-hint={serviceImage.imageHint}
            />
            )}
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
              href={`/services/detail`}
              className="flex items-center justify-between border-b border-border py-4 transition-colors hover:text-accent"
            >
              <span className="font-headline text-xl text-primary">{service.name}</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
