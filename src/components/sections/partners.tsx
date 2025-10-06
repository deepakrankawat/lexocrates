import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const partnerImages = PlaceHolderImages.filter(img => img.id.startsWith('partner-logo-'));

export function Partners() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center font-headline text-lg font-semibold text-primary/80">
          Trusted by Industry Leaders
        </h3>
        <div className="mt-8 flow-root">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:gap-x-12 lg:gap-x-16">
            {partnerImages.map((logo) => (
              <div key={logo.id} className="flex-shrink-0">
                <Image
                  className="h-10 w-auto object-contain transition-all duration-300 grayscale hover:grayscale-0"
                  src={logo.imageUrl}
                  alt={logo.description}
                  width={158}
                  height={48}
                  data-ai-hint={logo.imageHint}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
