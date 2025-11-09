
import { BookOpen } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';
import { AppImage } from '../ui/app-image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function AboutIntro() {
  const image = PlaceHolderImages.find(img => img.id === 'service-detail-2');

  return (
    <section id="about-intro" className="bg-background text-foreground py-12 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left" className="lg:order-last">
            <div className="relative h-80 lg:h-[30rem] w-full bg-secondary flex items-center justify-center">
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
              <p className="font-lato font-bold text-accent uppercase tracking-wider">Our Story</p>
              <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary leading-tight">
                From Jaipur to Canada: A Commitment to Legal Excellence
              </h2>
              <div className="mt-8 text-foreground/80 space-y-6">
                  <p>
                      Founded in Jaipur, India, Lexocrates is a Legal Process Outsourcing (LPO) firm serving law firms and corporations across Canada.
                  </p>
                  <p>
                      Our India-based lawyers are trained in international legal systems, offering round-the-clock delivery, strict confidentiality, and deep jurisdictional expertise. The name blends Lex (law) with Socrates (philosophy), symbolizing our commitment to ethics and intellect.
                  </p>
                   <p>
                      Today, we stand as a trusted partner for corporations, law firms, and businesses seeking intelligent, ethical, and cost-efficient legal services. Our success is built on the foundation of integrity, client centricity, and intellectual excellence.
                  </p>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
