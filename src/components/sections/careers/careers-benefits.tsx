
'use client';
import { Globe, GraduationCap, Laptop, Clock } from "lucide-react";
import { StaggerFadeIn } from "@/components/animations/stagger-fade-in";
import { SlideIn } from "@/components/animations/slide-in";

const benefits = [
    {
        icon: Globe,
        title: 'Remote Work',
        description: 'Enjoy the flexibility of working from anywhere in the world.'
    },
    {
        icon: GraduationCap,
        title: 'Learning & Growth',
        description: 'We invest in your professional development with continuous training.'
    },
    {
        icon: Laptop,
        title: 'Legal Tech Exposure',
        description: 'Work with cutting-edge technology that is shaping the future of law.'
    },
    {
        icon: Clock,
        title: 'Flexible Hours',
        description: 'We offer flexible work schedules to promote a healthy work-life balance.'
    }
]

export function CareersBenefits() {
    return (
        <section className="bg-background text-foreground py-16 sm:py-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SlideIn>
                    <div className="text-center mb-16">
                        <p className="font-lato font-bold text-accent uppercase tracking-wider">Perks & Benefits</p>
                        <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary">
                            Why Work With Us
                        </h2>
                    </div>
                </SlideIn>
                <StaggerFadeIn className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((benefit) => (
                        <div key={benefit.title} className="text-center p-6">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-accent/10 rounded-full">
                                    <benefit.icon className="h-10 w-10 text-accent" />
                                </div>
                            </div>
                            <h3 className="font-roboto text-2xl font-medium text-primary">{benefit.title}</h3>
                            <p className="text-foreground/80 mt-2">{benefit.description}</p>
                        </div>
                    ))}
                </StaggerFadeIn>
            </div>
        </section>
    )
}
