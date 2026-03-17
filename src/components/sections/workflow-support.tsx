'use client';

import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { Settings, ShieldCheck, HeartHandshake, Zap, Globe, Cpu } from 'lucide-react';

const workflowSteps = [
  {
    icon: Globe,
    title: "Global In-take",
    description: "Your team submits raw legal data through our secure, encrypted portal, available 24/7."
  },
  {
    icon: Cpu,
    title: "AI Classification",
    description: "Proprietary AI models perform initial sorting, data extraction, and consistency checks."
  },
  {
    icon: ShieldCheck,
    title: "Elite Legal Review",
    description: "India-based lawyers verify AI outputs against specific jurisdictional standards."
  },
  {
    icon: HeartHandshake,
    title: "Strategic Delivery",
    description: "Verified results are delivered directly into your workflow, often overnight."
  }
];

export function WorkflowSupport() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/30 rounded-[4rem] my-24 overflow-hidden relative">
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <SlideIn direction="left">
            <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/50 border border-black/5 backdrop-blur-xl mb-6">
              <Settings className="w-4 h-4 text-accent animate-spin-slow" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px]">Operational Protocol</p>
            </div>
            <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-tight tracking-tight mb-8">
              Service Workflow <br />& <span className="text-accent">Support Ecosystem</span>
            </h2>
            <p className="text-xl text-foreground/60 font-medium leading-relaxed border-l-4 border-accent/20 pl-8">
              We don't just provide talent; we provide a high-fidelity infrastructure designed to support your firm's most critical legal operations around the clock.
            </p>
          </SlideIn>

          <SlideIn direction="right" className="grid grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-3xl shadow-xl border border-black/5">
               <Zap className="w-8 h-8 text-accent mb-4" />
               <h4 className="font-bold text-primary mb-2">Instant Response</h4>
               <p className="text-sm text-foreground/60 leading-relaxed font-medium">Average 15-minute response time for operational support.</p>
            </div>
            <div className="p-8 bg-primary text-white rounded-3xl shadow-xl">
               <ShieldCheck className="w-8 h-8 text-accent mb-4" />
               <h4 className="font-bold text-white mb-2">Bank-Level Security</h4>
               <p className="text-sm text-white/60 leading-relaxed font-medium">End-to-end encryption for all multi-jurisdictional data.</p>
            </div>
          </SlideIn>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-accent/20 hidden lg:block -translate-y-12" />
          
          <StaggerFadeIn className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
             {workflowSteps.map((step, index) => (
               <div key={index} className="relative group">
                  <div className="bg-white p-10 rounded-[2.5rem] border border-black/5 hover:border-accent shadow-sm hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                       <step.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
                    </div>
                    <span className="font-montserrat font-black text-accent/20 text-xs uppercase tracking-widest mb-4">Step {index + 1}</span>
                    <h3 className="font-roboto text-xl font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-foreground/60 font-medium text-sm leading-relaxed">
                       {step.description}
                    </p>
                  </div>
               </div>
             ))}
          </StaggerFadeIn>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}
