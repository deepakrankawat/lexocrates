import { Users, Library, FileText, Landmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const processSteps = [
    { icon: Users, title: 'Initial Consultation', description: 'We discuss your needs and define the scope of work.' },
    { icon: Library, title: 'Strategy & Onboarding', description: 'Our team develops a tailored workflow and integrates with your systems.' },
    { icon: FileText, title: 'Execution & Delivery', description: 'We execute tasks with precision and provide regular progress updates.' },
    { icon: Landmark, title: 'Review & Optimization', description: 'We review outcomes and optimize processes for continuous improvement.' },
];

export function LegalProcess() {
  return (
    <section className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">How We Work</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">
                Our Engagement Process
            </h2>
             <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
                We follow a structured and transparent process to ensure seamless integration and consistent, high-quality results.
            </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="absolute top-12 left-0 right-0 h-0.5 w-full bg-border -z-10 hidden lg:block"></div>
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-secondary">
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="mt-6 font-headline text-xl font-bold text-primary">{step.title}</h3>
              <p className="mt-2 text-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
