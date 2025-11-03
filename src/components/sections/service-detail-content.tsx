
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { servicesList } from '@/lib/services-data';
import { AppImage } from '../ui/app-image';

type Service = typeof servicesList[0];

export function ServiceDetailContent({ service }: { service: Service }) {
  const image1 = PlaceHolderImages.find(img => img.id === 'service-detail-1');
  const image2 = PlaceHolderImages.find(img => img.id === 'service-detail-2');
  const ServiceIcon = service.icon;

  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="text-center">
            <div className="flex justify-center mb-6">
                <div className="p-4 bg-accent/10 rounded-full">
                    <ServiceIcon className="h-12 w-12 text-accent" />
                </div>
            </div>
            <p className="font-lato font-bold text-accent uppercase tracking-wider">{service.name}</p>
            <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary leading-tight">
              Expert Solutions for {service.name}
            </h2>
            <div className="mt-8 space-y-6 text-foreground/80 max-w-3xl mx-auto">
              <p>
                {service.longDescription}
              </p>
            </div>
            <div className="mt-10">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-montserrat font-bold">
                    <Link href="/contact">Schedule a Consultation</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
