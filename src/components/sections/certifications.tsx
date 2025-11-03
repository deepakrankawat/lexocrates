
'use client';

import { ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SlideIn } from "../animations/slide-in";
import { StaggerFadeIn } from "../animations/stagger-fade-in";

const certifications = [
    {
        icon: ShieldCheck,
        title: 'ISO 27001',
        description: 'Information Security Management System certification ensuring data protection.',
    },
];

export function Certifications() {
  return (
    <section className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-16">
          <p className="font-lato font-bold text-accent uppercase tracking-wider">Certifications & Accreditations</p>
          <h2 className="mt-4 font-lato text-4xl md:text-5xl font-bold text-primary">
            Quality standards we maintain
          </h2>
        </SlideIn>
        <div className="max-w-md mx-auto">
            <StaggerFadeIn>
                {certifications.map((cert) => (
                    <Card key={cert.title} className="bg-background text-center">
                        <CardHeader className="items-center">
                        <div className="p-4 bg-primary text-primary-foreground rounded-full mb-4">
                            <cert.icon className="h-8 w-8" />
                        </div>
                        <CardTitle className="font-roboto text-3xl font-medium text-primary">{cert.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        <p className="text-foreground/80">
                            {cert.description}
                        </p>
                        </CardContent>
                    </Card>
                ))}
            </StaggerFadeIn>
        </div>
      </div>
    </section>
  );
}
