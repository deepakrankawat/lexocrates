
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SlideIn } from '@/components/animations/slide-in';

export function CareersAbout() {
  const aboutImage = PlaceHolderImages.find(img => img.id === 'gavel-book');

  return (
    <section className="bg-background text-foreground py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left" className="relative h-[30rem] w-full">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={aboutImage.width}
                height={aboutImage.height}
                className="object-cover w-full h-full"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </SlideIn>
          <SlideIn direction="right">
            <div className="flex flex-col">
              <p className="font-body font-bold text-accent uppercase tracking-wider">Our Culture</p>
              <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
                Innovation, Collaboration, and Excellence
              </h2>
              <div className="mt-6 text-foreground/80 space-y-6">
                <p>
                  At Lexocrates, we foster a culture of continuous learning and collaboration. We are a team of passionate professionals dedicated to pushing the boundaries of legal service delivery. Our mission is to empower our clients through technology and expertise, and we believe that starts with empowering our own team.
                </p>
                <p>
                  We value diversity, creativity, and a proactive mindset. If you are driven by excellence and want to make a real impact in the legal tech space, you'll find a rewarding career at Lexocrates.
                </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

    