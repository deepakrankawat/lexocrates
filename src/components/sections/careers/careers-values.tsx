'use client';

import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { Heart, Users, Lightbulb, TrendingUp, Scale, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
    {
        icon: Scale,
        title: 'Jurisdictional Rigor',
        description: 'We respect the unique complexities of every legal system we support.'
    },
    {
        icon: Lightbulb,
        title: 'Technical Innovation',
        description: 'We use AI not to replace thought, but to empower strategic legal precision.'
    },
    {
        icon: ShieldCheck,
        title: 'Ethical Stewardship',
        description: 'Confidentiality is not just a policy; it is the foundation of our trust.'
    },
    {
        icon: Users,
        title: 'Seamless Integration',
        description: 'We act as a high-fidelity extension of our clients\' internal legal teams.'
    }
];

export function CareersValues() {
    return (
        <section id="careers-values" className="py-20 sm:py-32 overflow-hidden">
            <div className="mx-auto w-full px-6">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <SlideIn direction="left">
                        <div className="inline-flex items-center gap-4 mb-6">
                            <div className="w-12 h-px bg-accent/30" />
                            <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs">Our Protocol</p>
                        </div>
                        <h2 className="font-lato text-4xl sm:text-6xl font-black text-primary leading-tight tracking-tight mb-8">
                            The Principles That <br /><span className="text-accent">Govern Us</span>
                        </h2>
                        <p className="text-xl text-foreground/70 leading-relaxed font-medium mb-12">
                            Lexocrates is more than an LPO; it is an intellectual partnership built on a fusion of Socratic philosophy and modern engineering.
                        </p>
                    </SlideIn>

                    <StaggerFadeIn className="grid sm:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} className="bg-secondary/30 border-black/5 rounded-[2.5rem] p-10 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                                <CardContent className="p-0">
                                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                                        <value.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" />
                                    </div>
                                    <h3 className="font-roboto text-lg font-black text-primary mb-3">{value.title}</h3>
                                    <p className="text-foreground/60 font-medium text-xs leading-relaxed">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </StaggerFadeIn>
                </div>
            </div>
        </section>
    );
}
