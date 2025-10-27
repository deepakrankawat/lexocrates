
import { BookOpen, BookMarked } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';

export function AboutIntro() {
  return (
    <section id="about-intro" className="bg-background text-foreground py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="left" className="lg:order-last">
            <div className="relative h-[30rem] w-full bg-secondary flex items-center justify-center">
              <BookMarked className="h-48 w-48 text-accent/80" />
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div className="flex flex-col">
              <p className="font-body font-bold text-accent uppercase tracking-wider">Our Story</p>
              <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary leading-tight">
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
