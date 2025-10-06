import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partners = [
  {
    name: 'Daerazo',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-1')
  },
  {
    name: 'Miguxian',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-2')
  },
  {
    name: 'Jeninayln',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-3')
  },
  {
    name: 'Superanzo',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-4')
  },
];

export function Partners() {
  return (
    <section className="bg-primary text-primary-foreground/80 py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center font-headline text-lg font-semibold text-primary-foreground/90">
          Our Partnership
        </h3>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            partner.logo &&
            <div key={partner.name} className="flex flex-col items-center gap-4 text-center">
              <div className="relative h-10 w-32">
                <Image
                  src={partner.logo.imageUrl}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                  data-ai-hint={partner.logo.imageHint}
                />
              </div>
              <span className="font-headline text-lg">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
