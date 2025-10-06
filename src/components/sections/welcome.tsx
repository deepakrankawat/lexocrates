import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Welcome() {
  const welcomeImage = PlaceHolderImages.find(img => img.id === 'lawyer-1');

  return (
    <section className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 w-96 justify-self-center rounded-full overflow-hidden">
            {welcomeImage && (
                <Image
                    src={welcomeImage.imageUrl}
                    alt={welcomeImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={welcomeImage.imageHint}
                />
            )}
          </div>
          <div>
            <p className="font-body font-bold text-accent uppercase tracking-wider">Welcome Message from the Founder</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              A Commitment to Justice and Our Clients
            </h2>
            <div className="mt-6 space-y-4 text-foreground/80">
                <p className="italic text-lg">
                    “Welcome to Northman Law. We founded this firm on the belief that everyone deserves exceptional legal representation. Our team is dedicated to you, your case, and your success. We are honored to be your trusted advisors.”
                </p>
                <p className="font-bold text-primary">- Smilly Ilani, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
