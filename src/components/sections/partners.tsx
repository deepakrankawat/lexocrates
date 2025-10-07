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
   {
    name: 'Fictional Corp',
    logo: PlaceHolderImages.find(p => p.id === 'partner-logo-1')
  },
];

export function Partners() {
  return (
    <section className="bg-background text-foreground/80 py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-headline text-4xl font-bold text-primary">
          Our Partnership
        </h2>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 gap-x-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            partner.logo &&
            <div key={index} className="flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                <Image
                  src={partner.logo.imageUrl}
                  alt={`${partner.name} logo`}
                  width={140}
                  height={40}
                  className="object-contain"
                  data-ai-hint={partner.logo.imageHint}
                />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
