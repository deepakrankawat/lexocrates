
'use client';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Linkedin, Twitter, User } from 'lucide-react';
import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';

const teamMembers = [
  {
    name: 'Laitman Harry',
    title: 'Head of Corporate Solutions',
    slug: 'laitman-harry',
  },
  {
    name: 'Nada Geomorgant',
    title: 'Lead, Contract Management',
    slug: 'nada-geomorgant',
  },
  {
    name: 'Desy Willy',
    title: 'Director of Compliance',
    slug: 'desy-willy',
  },
  {
    name: 'Hernando Jully',
    title: 'Senior Legal Researcher',
    slug: 'hernando-jully',
  },
   {
    name: 'Lydia Dary',
    title: 'Document Review Specialist',
    slug: 'lydia-dary',
  },
  {
    name: 'Smilly Ilani',
    title: 'Founder & CEO',
    slug: 'smilly-ilani',
  },
];

export function Team() {
  return (
    <section id="team" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SlideIn className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Our Experts</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
                Meet Our Leadership Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
              Our leaders are highly skilled, dedicated professionals committed to delivering excellence in legal outsourcing.
            </p>
        </SlideIn>
        <StaggerFadeIn className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                      <div className="absolute bottom-4 right-4 flex gap-2">
                          <Link href="#" className="p-2 bg-background/80 rounded-full text-primary hover:bg-accent hover:text-white transition-colors">
                              <Facebook className="h-4 w-4" />
                          </Link>
                          <Link href="#" className="p-2 bg-background/80 rounded-full text-primary hover:bg-accent hover:text-white transition-colors">
                              <Twitter className="h-4 w-4" />
                          </Link>
                          <Link href="#" className="p-2 bg-background/80 rounded-full text-primary hover:bg-accent hover:text-white transition-colors">
                              <Linkedin className="h-4 w-4" />
                          </Link>
                      </div>
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
