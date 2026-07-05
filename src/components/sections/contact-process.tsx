
'use client';

import { ClipboardCheck, Search, MessageSquare, CheckCircle } from 'lucide-react';
import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';

const processSteps = [
    { icon: ClipboardCheck, title: 'Structured Intake', description: 'Your requirements are recorded as a qualified sales enquiry.' },
    { icon: Search, title: 'Scope & Risk Review', description: 'We assess jurisdiction, volume, security, supervision, and conflicts.' },
    { icon: MessageSquare, title: 'Expert Consultation', description: 'A relevant delivery specialist contacts you within one business day.' },
    { icon: CheckCircle, title: 'Pilot or Engagement Plan', description: 'We define deliverables, controls, service levels, and launch steps.' },
];

export function ContactProcess() {
  return (
    <div className="relative z-10">
      <SlideIn className="text-center mb-16">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-xs">From Enquiry to Delivery</p>
          <h2 className="font-lato text-4xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Our LPO Qualification <br /><span className="text-accent">Protocol</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-white/60 font-medium text-lg">
              A disciplined intake gives both teams a clearer, safer path into a pilot or managed engagement.
          </p>
      </SlideIn>
      
      <div className="relative">
        {/* Connector Line for Desktop - Moved outside StaggerFadeIn to avoid grid alignment issues */}
        <div className="absolute top-12 left-0 right-0 h-0.5 bg-white/10 -z-10 hidden lg:block" />
        
        <StaggerFadeIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
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
    </div>
  );
}
