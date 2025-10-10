
import { Smile, Briefcase, Award, TrendingUp } from 'lucide-react';
import { SlideIn } from '@/components/animations/slide-in';
import { Counter } from '@/components/animations/counter';

export function Experience() {
  return (
    <section id="experience" className="bg-background text-foreground py-20 sm:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="right">
            <div className="flex flex-col">
              <p className="font-body font-bold text-accent uppercase tracking-wider">Our Track Record</p>
              <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
                Decades of Expertise, Measurable Results
              </h2>
              <p className="mt-6 text-foreground/80">
                Our firm's foundation is built on years of dedicated service and a deep understanding of global legal standards. We leverage this experience to deliver efficiency and excellence for our clients.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
                  <div className="text-center">
                      <Smile className="h-12 w-12 mx-auto text-accent" />
                      <p className="mt-2 text-4xl font-bold text-primary">
                        <Counter from={0} to={200} />+
                      </p>
                      <p className="text-foreground/80">Global Clients</p>
                  </div>
                  <div className="text-center">
                      <Briefcase className="h-12 w-12 mx-auto text-accent" />
                      <p className="mt-2 text-4xl font-bold text-primary">
                         <Counter from={0} to={5000} />+
                      </p>
                      <p className="text-foreground/80">Contracts Managed</p>
                  </div>
                  <div className="text-center">
                      <Award className="h-12 w-12 mx-auto text-accent" />
                      <p className="mt-2 text-4xl font-bold text-primary">
                         <Counter from={0} to={99} />%
                      </p>
                      <p className="text-foreground/80">Client Satisfaction</p>
                  </div>
              </div>
            </div>
          </SlideIn>
           <SlideIn direction="left" className="relative h-96 lg:h-[32rem] bg-secondary flex items-center justify-center">
            <TrendingUp className="h-48 w-48 text-accent/80" strokeWidth={0.5} />
          </SlideIn>
        </div>
      </div>
    </section>
  );
}
