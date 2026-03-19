'use client';

import { GraduationCap, Laptop, Clock, ShieldCheck, Globe, Zap } from 'lucide-react';
import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: GraduationCap,
    title: 'Intellectual Growth',
    description: 'Continuous training in US, UK, and Canadian legal systems and common law practice.',
  },
  {
    icon: Laptop,
    title: 'Legal-Tech Mastery',
    description: 'Work with the industry\'s most advanced AI and eDiscovery technical infrastructure.',
  },
  {
    icon: Globe,
    title: 'Global Exposure',
    description: 'Direct collaboration with elite international law firms and corporate departments.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Ethics',
    description: 'A commitment to the highest standards of confidentiality and legal stewardship.',
  },
  {
    icon: Clock,
    title: 'Balanced Performance',
    description: 'Flexible schedules that respect intellectual recovery and professional focus.',
  },
  {
    icon: Zap,
    title: 'Strategic Impact',
    description: 'See the direct result of your precision on high-stakes global litigation and contracts.',
  },
];

export function CareersBenefits() {
  return (
    <section id="careers-benefits" className="py-20 sm:py-32 bg-secondary/30 rounded-[4rem] my-20 overflow-hidden">
        <div className="mx-auto w-full px-6">
            <SlideIn className="text-center mb-20">
                <div className="inline-flex items-center gap-4 px-4 py-2 rounded-full bg-white/50 border border-black/5 backdrop-blur-xl mb-6">
                    <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px]">The Lexocrates Experience</p>
                </div>
                <h2 className="font-lato text-4xl sm:text-5xl font-black text-primary tracking-tight">
                    Why Elite Minds <span className="text-accent">Join Us</span>
                </h2>
                <p className="mt-6 text-xl text-foreground/60 font-medium max-w-2xl mx-auto text-center">
                    We provide the resources, technology, and mentorship required to excel in the global legal arena.
                </p>
            </SlideIn>

            <StaggerFadeIn className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                    <Card key={index} className="bg-background border-black/5 rounded-[2.5rem] p-10 hover:border-accent/50 hover:shadow-2xl transition-all duration-500 group">
                        <CardContent className="p-0">
                            <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-8 group-hover:bg-accent transition-colors duration-500">
                                <benefit.icon className="w-8 h-8 text-accent group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h3 className="font-roboto text-2xl font-black text-primary mb-4 tracking-tight">
                                {benefit.title}
                            </h3>
                            <p className="text-foreground/60 font-medium leading-relaxed">{benefit.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </StaggerFadeIn>
        </div>
    </section>
  );
}
