import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const experiencePoints = [
  'Success Handled Cases',
  'Responsible Raised',
  'Success Handled Cases',
  'Responsible Raised',
];

export function Experience() {
  const experienceImage = PlaceHolderImages.find(img => img.id === 'about-us-lady-justice');

  return (
    <section id="experience" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="relative min-h-[400px] md:min-h-[500px]">
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
          <div className="flex flex-col justify-center p-8 md:p-16">
            <h2 className="font-headline text-5xl font-bold leading-tight text-primary">
              28 Years Has Been A Legal Attorney And Consulting
            </h2>
            <div className="my-8 h-px w-24 bg-accent" />
            <ul className="space-y-4">
              {experiencePoints.map((point, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent" />
                  <span className="text-lg text-foreground/80">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
