import { Search, Compass, CheckCircle2, ShieldCheck, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const processSteps = [
  { stepNumber: '01', icon: Search, title: 'Understand', description: 'We start with your requirements — scope, jurisdiction, timelines, and how your team prefers to work.' },
  { stepNumber: '02', icon: Compass, title: 'Plan', description: 'The right professionals and workflow get assigned to your matter, with quality standards and expectations set up front.' },
  { stepNumber: '03', icon: CheckCircle2, title: 'Execute', description: 'Our team delivers the work with regular communication and close adherence to your instructions — no surprises.' },
  { stepNumber: '04', icon: ShieldCheck, title: 'Review', description: 'Every deliverable goes through independent quality review before it reaches you.' },
  { stepNumber: '05', icon: Send, title: 'Deliver', description: 'Final work arrives securely and on time, with support available for whatever comes next.' },
];

export function LegalProcess() {
  return (
    <section className="bg-secondary text-foreground py-16 sm:py-24">
      <div className="container-balanced">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="font-lato font-bold text-accent uppercase tracking-wider text-xs sm:text-sm mb-3">HOW WE WORK</p>
          <h2 className="font-lato text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-tight tracking-tight">
            A Simple, Transparent Process
          </h2>
          <p className="mt-4 text-base sm:text-lg text-foreground/80 leading-relaxed font-medium">
            Every engagement runs through the same structure — built for clarity, quality, and on-time delivery, whether it&apos;s a one-off matter or an ongoing relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-12">
          {processSteps.map((step) => (
            <div key={step.stepNumber} className="relative flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
              <span className="text-2xl font-black font-serif text-accent mb-2">{step.stepNumber}</span>
              <h3 className="font-roboto text-xl font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed font-medium">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="xl" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/95 font-montserrat font-black text-xs uppercase tracking-[0.2em] px-8 sm:px-10 rounded-full">
            <Link href="/contact">Let&apos;s Discuss Your Requirements</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
