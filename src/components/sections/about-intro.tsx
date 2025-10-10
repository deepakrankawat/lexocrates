
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

export function AboutIntro() {
  const image = PlaceHolderImages.find(img => img.id === 'service-detail-1');
  return (
    <section id="about-intro" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {image && (
            <div className="relative h-[30rem] w-full">
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={image.width}
                height={image.height}
                className="object-cover w-full h-full"
                data-ai-hint={image.imageHint}
              />
            </div>
          )}
          <div className="flex flex-col">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Our Story</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              Pioneering Efficiency and Excellence in Legal Services
            </h2>
            <div className="mt-8 text-foreground/80 space-y-6">
                <p>
                    Founded by legal industry veterans, Lexocrates was born from a vision to transform the traditional legal service model. We recognized the growing need for flexible, high-quality, and cost-effective legal support for law firms and corporations alike.
                </p>
                <p>
                    Our journey has been driven by a commitment to innovation, leveraging technology and specialized talent to deliver unparalleled value. We are more than a service provider; we are a strategic partner dedicated to our clients' success.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
