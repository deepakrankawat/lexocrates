
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { servicesList } from '@/lib/services-data';

type Service = typeof servicesList[0];

export function ServiceDetailHero({ service }: { service: Service }) {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-services');

  return (
    <section className="relative text-white pt-24 pb-12 sm:pt-32 sm:pb-16 min-h-[40vh]">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={heroImage.width}
                height={heroImage.height}
                className="object-cover absolute inset-0 w-full h-full"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
      <div className="mx-auto px-6 sm:px-12 lg:px-24 relative text-center max-w-[1800px]">
        <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold">{service.name}</h1>
        <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/80">
            In-depth information about our specialized {service.name.toLowerCase()} services, tailored to your unique requirements.
        </p>
      </div>
    </section>
  );
}
