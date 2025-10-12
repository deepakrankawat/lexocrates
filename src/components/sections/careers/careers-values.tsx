
'use client';
import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { Heart, Users, Lightbulb, TrendingUp } from 'lucide-react';

const values = [
    {
        icon: Users,
        title: 'Client-Centric',
        description: 'Our clients are at the heart of everything we do. We succeed when they succeed.'
    },
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'We constantly seek better ways to deliver legal services through technology and process improvement.'
    },
    {
        icon: Heart,
        title: 'Integrity',
        description: 'We uphold the highest standards of professional ethics and confidentiality.'
    },
    {
        icon: TrendingUp,
        title: 'Excellence',
        description: 'We are committed to delivering the highest quality work and exceeding expectations.'
    }
];

export function CareersValues() {
    return (
        <section className="bg-secondary text-foreground py-20 sm:py-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SlideIn>
                    <div className="text-center mb-16">
                        <p className="font-body font-bold text-accent uppercase tracking-wider">Our Core Values</p>
                        <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">
                            The Principles That Guide Us
                        </h2>
                    </div>
                </SlideIn>
                <StaggerFadeIn className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value) => (
                        <div key={value.title} className="text-center p-6 bg-background">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-accent/10 rounded-full">
                                    <value.icon className="h-10 w-10 text-accent" />
                                </div>
                            </div>
                            <h3 className="font-headline text-2xl font-bold text-primary">{value.title}</h3>
                            <p className="text-foreground/80 mt-2">{value.description}</p>
                        </div>
                    ))}
                </StaggerFadeIn>
            </div>
        </section>
    );
}
