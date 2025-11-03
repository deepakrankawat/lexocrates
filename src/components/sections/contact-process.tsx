
import { Mail, Search, MessageSquare, CheckCircle } from 'lucide-react';

const processSteps = [
    { icon: Mail, title: 'Inquiry Submitted', description: 'You send us a message through our contact form.' },
    { icon: Search, title: 'Team Review', description: 'Our relevant team reviews your inquiry to assign the best expert.' },
    { icon: MessageSquare, title: 'Personal Response', description: 'We reach out to you within 24 business hours to discuss your needs.' },
    { icon: CheckCircle, title: 'Resolution', description: 'We work with you towards a solution, whether it is a consultation or a service engagement.' },
];

export function ContactProcess() {
  return (
    <section className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-lato font-bold text-accent uppercase tracking-wider">What Happens Next</p>
            <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary">
                Our Inquiry Process
            </h2>
             <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
                We are committed to a timely and transparent communication process. Here’s what you can expect after you contact us.
            </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="absolute top-12 left-0 right-0 h-0.5 w-full bg-border -z-10 hidden lg:block"></div>
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-primary-foreground ring-8 ring-secondary">
                <step.icon className="h-10 w-10" />
              </div>
              <h3 className="mt-6 font-roboto text-xl font-medium text-primary">{step.title}</h3>
              <p className="mt-2 text-foreground/80">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
