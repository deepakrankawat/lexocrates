'use client';

import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';
import { SlideIn } from '@/components/animations/slide-in';
import { Globe2, BookOpen, Users, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const values = [
  {
    icon: Globe2,
    title: 'International Legal Exposure',
    description: 'Contribute to legal work supporting law firms and corporate legal departments across Canada, the United Kingdom, and the United States, while gaining practical exposure to international legal operations.'
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'Develop practical legal and operational expertise through structured workflows, mentorship, and hands-on experience across multiple practice areas.'
  },
  {
    icon: Users,
    title: 'A Collaborative Environment',
    description: 'Work alongside experienced legal professionals who are invested in getting the work right, not just getting it done.'
  },
  {
    icon: Cpu,
    title: 'Technology-Enabled Legal Practice',
    description: 'Build fluency with modern legal technology and AI-enabled tools, used the way they\'re meant to be used — to support your judgment, not replace it.'
  }
];

export function CareersValues() {
  return (
    <section id="careers-values" className="py-16 sm:py-24 overflow-hidden border-b border-black/5">
      <div className="mx-auto w-full px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SlideIn direction="left">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent/30" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs">WHY JOIN LEXOCRATES</p>
            </div>
            <h2 className="font-lato text-3xl sm:text-5xl font-black text-primary leading-tight tracking-tight mb-6">
              Grow With a Team <br /><span className="text-accent">That Values Excellence</span>
            </h2>
          </SlideIn>

          <StaggerFadeIn className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-secondary/30 border-black/5 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 group">
                <CardContent className="p-0">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-500">
                    <value.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-roboto text-lg font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground/70 font-medium text-xs leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </StaggerFadeIn>
        </div>
      </div>
    </section>
  );
}
