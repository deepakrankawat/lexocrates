import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutIntro() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'about-us-lady-justice');

  return (
    <section id="about-intro" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[30rem] w-full">
            {aboutImage && (
                <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    fill
                    className="object-cover"
                    data-ai-hint={aboutImage.imageHint}
                />
            )}
          </div>
          <div className="flex flex-col">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Our Story</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
              Helping To Overcome And Ease The Legal Burden
            </h2>
            <div className="mt-8 text-foreground/80 space-y-6">
                <p>
                    Founded on the principles of integrity, dedication, and excellence, Lexocrates has grown from a small practice into a leading firm renowned for its formidable presence in the courtroom and its unwavering commitment to clients. We believe that every client deserves a voice, and we fight tirelessly to ensure that voice is heard.
                </p>
                <p>
                    Our journey has been one of continuous growth, learning, and adaptation, always staying ahead of the legal curve to provide the most effective counsel possible. We are more than just lawyers; we are partners in your pursuit of justice.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
