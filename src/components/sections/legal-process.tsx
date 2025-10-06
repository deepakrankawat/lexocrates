import { Users, Library, FileText, Landmark } from 'lucide-react';

const processSteps = [
    { icon: Users, title: 'Discuss Problem' },
    { icon: Library, title: 'Practice Plans' },
    { icon: FileText, title: 'Make Agreement' },
    { icon: Landmark, title: 'Legal Case Saved' },
];

export function LegalProcess() {
  return (
    <section className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-headline text-5xl font-bold text-primary">
            Legal Lawyer Process
          </h2>
          <p className="max-w-sm text-foreground/80">
            Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 hidden md:block"></div>
            <div className="absolute top-1/2 left-0 right-0 h-0.5 border-t-2 border-dashed border-border -translate-y-1/2 hidden md:block"></div>

          {processSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <step.icon className="h-12 w-12" />
              </div>
              <h3 className="mt-6 font-headline text-xl font-bold text-primary">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
