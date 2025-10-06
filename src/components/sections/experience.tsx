import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, Briefcase, Smile } from 'lucide-react';

export function Experience() {
  const experienceImage = PlaceHolderImages.find(img => img.id === 'gavel-book');

  return (
    <section id="experience" className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
             <p className="font-body font-bold text-accent uppercase tracking-wider">Why Choose Us</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
              Decades of Experience, Unmatched Results
            </h2>
            <p className="mt-6 text-foreground/80">
              Our firm's foundation is built on years of dedicated service and a deep understanding of the law. We leverage this experience to achieve the best possible outcomes for our clients, consistently delivering results that matter.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center">
                <Smile className="h-12 w-12 mx-auto text-accent"/>
                <p className="mt-2 text-4xl font-bold text-primary">500+</p>
                <p className="text-foreground/80">Happy Clients</p>
              </div>
               <div className="text-center">
                <Briefcase className="h-12 w-12 mx-auto text-accent"/>
                <p className="mt-2 text-4xl font-bold text-primary">1000+</p>
                <p className="text-foreground/80">Cases Won</p>
              </div>
               <div className="text-center">
                <Award className="h-12 w-12 mx-auto text-accent"/>
                <p className="mt-2 text-4xl font-bold text-primary">50+</p>
                <p className="text-foreground/80">Awards Won</p>
              </div>
            </div>
          </div>
           <div className="relative h-96 lg:h-[32rem]">
            {experienceImage && (
              <Image
                src={experienceImage.imageUrl}
                alt={experienceImage.description}
                fill
                className="object-cover rounded-lg"
                data-ai-hint={experienceImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
