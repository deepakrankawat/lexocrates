import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ServiceDetailContent() {
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
                        fill
                        className="object-cover rounded-lg"
                        data-ai-hint={image1.imageHint}
                    />
                )}
            </div>
            <div className="relative h-96 mt-12">
                {image2 && (
                    <Image
                        src={image2.imageUrl}
                        alt={image2.description}
                        fill
                        className="object-cover rounded-lg"
                        data-ai-hint={image2.imageHint}
                    />
                )}
            </div>
          </div>
          <div>
            <p className="font-body font-bold text-accent uppercase tracking-wider">Corporate Law</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              Expert Corporate Law & Consultation
            </h2>
            <div className="mt-8 space-y-6 text-foreground/80">
              <p>
                Navigating the complexities of corporate law requires a skilled and experienced hand. At Northman Law, we provide comprehensive legal services for businesses of all sizes, from startups to established corporations. Our expertise covers everything from business formation and compliance to mergers and acquisitions.
              </p>
              <p>
                We act as your strategic partners, helping you mitigate risk, ensure compliance, and achieve your business objectives. Trust us to provide the sound legal counsel you need to thrive in a competitive marketplace.
              </p>
            </div>
            <div className="mt-10">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/contact">Book Appointment</Link>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
