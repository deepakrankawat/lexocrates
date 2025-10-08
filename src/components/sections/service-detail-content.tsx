import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { servicesList } from '@/lib/services-data';

type Service = typeof servicesList[0];

export function ServiceDetailContent({ service }: { service: Service }) {
  const image1 = PlaceHolderImages.find(img => img.id === 'service-detail-1');
  const image2 = PlaceHolderImages.find(img => img.id === 'service-detail-2');

  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-96">
                {image1 && (
                    <Image
                        src={image1.imageUrl}
                        alt={image1.description}
                        width={image1.width}
                        height={image1.height}
                        className="object-cover w-full h-full"
                        data-ai-hint={image1.imageHint}
                    />
                )}
            </div>
            <div className="relative h-96 mt-12">
                {image2 && (
                    <Image
                        src={image2.imageUrl}
                        alt={image2.description}
                        width={image2.width}
                        height={image2.height}
                        className="object-cover w-full h-full"
                        data-ai-hint={image2.imageHint}
                    />
                )}
            </div>
          </div>
          <div>
            <p className="font-body font-bold text-accent uppercase tracking-wider">{service.name}</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              Expert Solutions for {service.name}
            </h2>
            <div className="mt-8 space-y-6 text-foreground/80">
              <p>
                {service.longDescription}
              </p>
            </div>
            <div className="mt-10">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Schedule a Consultation</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
    