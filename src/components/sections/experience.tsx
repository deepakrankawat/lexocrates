
import { Briefcase, Award, TrendingUp, Calendar, Users, AreaChart } from 'lucide-react';
import { SlideIn } from '@/components/animations/slide-in';
import { Counter } from '@/components/animations/counter';

export function Experience() {
  return (
    <section id="experience" className="bg-background text-foreground py-12 sm:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <SlideIn direction="right">
            <div className="flex flex-col">
              <p className="font-lato font-bold text-accent uppercase tracking-wider">Our Track Record</p>
              <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold leading-tight text-primary">
                Decades of Expertise, Measurable Results
              </h2>
              <p className="mt-6 text-foreground/80">
                Our firm's foundation is built on years of dedicated service and a deep understanding of global legal standards. We leverage this experience to deliver efficiency and excellence for our clients.
              </p>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="text-center">
                      <Calendar className="h-12 w-12 mx-auto text-accent" />
                      <p className="mt-2 text-4xl font-bold text-primary">
                        <Counter from={0} to={15} />+
                      </p>
                      <p className="text-foreground/80">Years Experience</p>
                  </div>
                  <div className="text-center">
                      <Users className="h-12 w-12 mx-auto text-accent" />
                      <p className="mt-2 text-4xl font-bold text-primary">
                         <Counter from={0} to={50} />+
                      </p>
                      <p className="text-foreground/80">Legal Experts</p>
                  </div>
              </div>
            </div>
          </SlideIn>
           <SlideIn direction="left" className="relative h-96 lg:h-[32rem] flex items-center justify-center">
            <div className="relative h-96 w-96 justify-self-center bg-secondary flex items-center justify-center">
              <AreaChart className="h-48 w-48 text-accent/80" />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

    