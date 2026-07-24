
'use client';

import { SlideIn } from '../animations/slide-in';
import { FadeIn } from '../animations/fade-in';
import { Scale, ShieldCheck, Globe2 } from 'lucide-react';

const tenets = [
  {
    icon: Scale,
    title: "Rigor in Every Engagement",
    description: "Every legal process we manage receives the same level of care and quality oversight, regardless of its size or complexity. Consistency is built into every stage of our workflow."
  },
  {
    icon: ShieldCheck,
    title: "An Ethical Baseline, Not a Talking Point",
    description: "Confidentiality, professionalism, and ethical conduct are fundamental to how we operate. They are not differentiators — they are the standard every client should expect."
  },
  {
    icon: Globe2,
    title: "Responsibility Across Jurisdictions",
    description: "Supporting clients across jurisdictions means understanding the legal standards, professional expectations, and jurisdictional requirements unique to every market we serve."
  }
];

export function LeadershipPhilosophy() {
  return (
    <section className="py-16 sm:py-24 bg-primary text-white rounded-[3rem] my-12 overflow-hidden">
      <div className="container-balanced">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="right">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-xs">OUR APPROACH TO LEADERSHIP</p>
            <h2 className="font-lato text-3xl sm:text-5xl font-black leading-tight tracking-tight mb-8">
              Leadership as Stewardship, Not Hierarchy
            </h2>
            <p className="text-lg text-white/80 font-medium leading-relaxed mb-12 border-l-4 border-accent/30 pl-6">
              We see leadership not as a management structure, but as a responsibility to uphold the highest standards — for our clients, our people, and every engagement we undertake. That commitment is reflected in three guiding principles.
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
                    <p className="text-white/70 font-medium text-sm leading-relaxed">{tenet.description}</p>
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
