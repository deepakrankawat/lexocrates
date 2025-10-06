
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function FreeConsultationHero() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');

  return (
    <section className="relative bg-primary text-primary-foreground pt-36 pb-20 sm:pt-48 sm:pb-32">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-20"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <h1 className="font-headline text-6xl md:text-7xl font-bold">Appointment</h1>
            <div className="flex items-center gap-8">
                <div className="w-px h-24 bg-primary-foreground/50 hidden md:block"></div>
                <p className="max-w-2xl text-lg text-primary-foreground/80">
                    Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
}
