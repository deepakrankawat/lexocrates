'use client';

import { Button } from '@/components/ui/button';
import { SlideIn } from '@/components/animations/slide-in';
import Link from 'next/link';
import { Briefcase, Users, Zap, ArrowRight } from 'lucide-react';
import { ActionCard } from '@/components/ui/action-card';
import { Card } from '@/components/ui/card';

const portalFeatures = [
  {
    icon: Users,
    title: "Global Network",
    description: "Join an elite community of legal professionals across three continents."
  },
  {
    icon: Zap,
    title: "Priority Review",
    description: "Talent pool members are the first to be contacted when new positions open."
  },
  {
    icon: Briefcase,
    title: "Strategic Fit",
    description: "We match your specific jurisdictional expertise with upcoming global projects."
  }
];

export function CareersPositions() {
  return (
    <section id="careers-portal" className="py-14 sm:py-24 lg:py-32">
        <SlideIn className="text-center mb-20">
          <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-accent/5 border border-accent/10 backdrop-blur-2xl mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px]">Future Talent</p>
          </div>
          <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-tight tracking-tight mb-8">
            Strategic <span className="text-accent">Talent Portal</span>
          </h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-medium leading-relaxed">
            While we are currently at full operational capacity, we are always looking to connect with the world's most brilliant legal minds.
          </p>
        </SlideIn>
        
        <div className="grid lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
            <div className="lg:col-span-2">
                <ActionCard 
                    title={<>Join Our Global <br /><span className="text-accent">Growth Network</span></>}
                    description="We invite common-law trained lawyers, paralegals, and legal tech innovators to share their credentials for upcoming strategic expansions."
                    buttonText="Submit Credentials"
                    buttonHref="/contact"
                />
            </div>

            <div className="grid grid-cols-1 gap-6">
                {portalFeatures.map((feature, index) => (
                    <SlideIn key={index} direction="right" delay={0.2 * index} className="h-full">
                        <Card className="bg-secondary/30 border-black/5 rounded-[2.5rem] p-8 hover:bg-white hover:shadow-xl transition-all duration-500 group h-full flex flex-col justify-center">
                            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                                <feature.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-500" />
                            </div>
                            <h4 className="font-roboto text-xl font-black text-primary mb-3">{feature.title}</h4>
                            <p className="text-foreground/60 font-medium text-sm leading-relaxed">{feature.description}</p>
                        </Card>
                    </SlideIn>
                ))}
            </div>
        </div>
    </section>
  );
}
