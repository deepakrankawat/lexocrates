
'use client';

import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
import { Scale, Lightbulb, ShieldCheck } from 'lucide-react';

const tenets = [
  {
    icon: Scale,
    title: "Intellectual Rigor",
    description: "Every legal process we manage is treated with the same depth of inquiry as a high-stakes litigation, ensuring no detail is overlooked."
  },
  {
    icon: Lightbulb,
    title: "Ethical Vision",
    description: "Our leadership is guided by the Socratic belief that the unexamined life—and the unexamined legal process—is not worth pursuing."
  },
  {
    icon: ShieldCheck,
    title: "Global Stewardship",
    description: "We lead with a sense of responsibility toward the international legal communities we serve, upholding their standards as our own."
  }
];

export function LeadershipPhilosophy() {
  return (
    <section className="py-12 sm:py-16 bg-primary text-white rounded-[3rem] my-8 overflow-hidden">
      <div className="container-balanced">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="right">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-xs">Our Mindset</p>
            <h2 className="font-lato text-4xl sm:text-5xl font-black leading-tight tracking-tight mb-8">
              Leadership Beyond <br /><span className="text-accent">Management</span>
            </h2>
            <p className="text-xl text-white/70 font-medium leading-relaxed mb-12 border-l-4 border-accent/20 pl-8">
              At Lexocrates, leadership is not about hierarchy; it is about the stewardship of excellence. We foster an environment where every lawyer is empowered to think critically and act ethically.
            </p>
          </SlideIn>

          <div className="grid gap-6">
            {tenets.map((tenet, index) => (
              <FadeIn key={index} delay={0.2 * index}>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex items-start gap-6 hover:bg-white/10 transition-colors duration-500">
                  <div className="p-3 bg-accent/20 rounded-xl">
                    <tenet.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-roboto text-xl font-bold mb-2">{tenet.title}</h4>
                    <p className="text-white/60 font-medium leading-relaxed">{tenet.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
