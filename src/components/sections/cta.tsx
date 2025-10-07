import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Cta() {
    const ctaImage = PlaceHolderImages.find(img => img.id === 'gavel-book');
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary text-primary-foreground py-20 sm:py-24 overflow-hidden">
             {ctaImage && <Image src={ctaImage.imageUrl} alt="CTA background" fill className="object-cover opacity-10" />}
            <div className="relative flex flex-col items-center justify-center text-center">
                <p className="font-body font-bold text-accent uppercase tracking-wider">Get In Touch</p>
                <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold">
                Ready to Discuss Your Case?
                </h2>
                <p className="mt-4 max-w-2xl text-primary-foreground/80">
                Let's talk about how we can help you achieve your legal goals. Schedule a free, no-obligation consultation with our expert team today.
                </p>
                <Button asChild size="lg" variant="secondary" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact">Schedule a Consultation</Link>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
