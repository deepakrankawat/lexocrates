
'use client';

import { Mail, Search, MessageSquare, CheckCircle } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';

const processSteps = [
    { icon: Mail, title: 'Inquiry Submitted', description: 'Your message reaches our strategic response team.' },
    { icon: Search, title: 'Expert Allocation', description: 'We assign the most relevant legal expert to your specific inquiry.' },
    { icon: MessageSquare, title: 'Consultation', description: 'We reach out within 24 business hours to discuss your workflow.' },
    { icon: CheckCircle, title: 'Strategy Execution', description: 'We define the engagement scope and integrate with your team.' },
];

export function ContactProcess() {
  return (
    <div className="relative z-10">
      <SlideIn className="text-center mb-16">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-xs">The Next Steps</p>
          <h2 className="font-lato text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Our Communication <br /><span className="text-accent">Protocol</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/60 font-medium text-lg">
              We value precision in communication. Here is how we handle your initial outreach.
          </p>
      </SlideIn>
      
      <StaggerFadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-white/10 -z-10 hidden lg:block" />
          
          {processSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group/step">
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-accent text-accent-foreground ring-8 ring-primary/50 group-hover/step:scale-110 transition-transform duration-500">
                <step.icon className="h-10 w-10" />
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white text-primary font-black flex items-center justify-center text-xs shadow-lg">
                  0{index + 1}
                </div>
              </div>
              <h3 className="mt-8 font-roboto text-xl font-black text-white">{step.title}</h3>
              <p className="mt-4 text-white/60 font-medium leading-relaxed">{step.description}</p>
            </div>
          ))}
      </StaggerFadeIn>
    </div>
  );
}
