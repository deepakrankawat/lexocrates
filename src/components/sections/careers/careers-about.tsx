

import { SlideIn } from '@/components/animations/slide-in';
import { AppImage } from '@/components/ui/app-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function CareersAbout() {
  const image = PlaceHolderImages.find(img => img.id === 'service-corporate-law');

  return (
    <section className="bg-background text-foreground py-12 sm:py-16 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left" className="lg:order-last">
            <div className="relative h-[30rem] w-full bg-secondary flex items-center justify-center">
              {image && (
                <AppImage
                  src={image.imageUrl}
                  alt={image.description}
                  data-ai-hint={image.imageHint}
                  width={600}
                  height={800}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div className="flex flex-col">
              <p className="font-lato font-bold text-accent uppercase tracking-wider">Our Culture</p>
              <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary leading-tight">
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
    </section>
  );
}
