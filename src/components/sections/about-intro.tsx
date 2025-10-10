
import { BookOpen } from 'lucide-react';

export function AboutIntro() {
  return (
    <section id="about-intro" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[30rem] w-full bg-secondary flex items-center justify-center">
            <BookOpen className="h-48 w-48 text-primary/10" />
          </div>
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
