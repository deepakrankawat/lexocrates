import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check } from 'lucide-react';

export function Experience() {
  const experienceImage = PlaceHolderImages.find(img => img.id === 'about-us-lady-justice');

  return (
    <section id="experience" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <h2 className="font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
              28 Years Has Been A Legal Attorney And Consulting
            </h2>
            <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Support For Our Clients</span>
                </li>
                 <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>Always On Time</span>
                </li>
                 <li className="flex items-center gap-3">
                    <Check className="h-6 w-6 text-accent flex-shrink-0" />
                    <span>We Are Profesional</span>
                </li>
            </ul>
          </div>
           <div className="relative h-96 lg:h-[32rem]">
            {experienceImage && (
              <Image
                src={experienceImage.imageUrl}
                alt={experienceImage.description}
                fill
                className="object-cover"
                data-ai-hint={experienceImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
