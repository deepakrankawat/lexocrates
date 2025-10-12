
'use client';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { User } from 'lucide-react';
import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';

const teamMembers = [
  {
    name: 'Rajesh Kumar',
    title: 'Chief Executive Officer',
    slug: 'rajesh-kumar',
  },
  {
    name: 'Priya Sharma',
    title: 'Chief Operating Officer',
    slug: 'priya-sharma',
  },
  {
    name: 'Arun Patel',
    title: 'Head of Legal Services',
    slug: 'arun-patel',
  },
  {
    name: 'Meera Reddy',
    title: 'Head of Technology',
    slug: 'meera-reddy',
  },
];

export function Team() {
  return (
    <section id="team" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Our Experts</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
                Our Leadership Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
              Experienced professionals leading our mission
            </p>
        </SlideIn>
        <StaggerFadeIn className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ y: -5, scale: 1.03, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.3 }}
            >
              <Card className="group overflow-hidden text-center h-full">
                  <div className="relative h-96 w-full overflow-hidden bg-secondary flex items-center justify-center">
                    <User className="h-24 w-24 text-primary/10" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                      <Link href={`/lawyer/${member.slug}`}>
                          <h3 className="font-headline text-2xl font-bold text-primary group-hover:text-accent transition-colors">{member.name}</h3>
                      </Link>
                      <p className="text-accent font-bold mt-1">{member.title}</p>
                  </CardContent>
              </Card>
            </motion.div>
          ))}
        </StaggerFadeIn>
      </div>
    </section>
  );
}
