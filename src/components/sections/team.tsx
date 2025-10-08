
'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Facebook, Linkedin, Twitter } from 'lucide-react';
import { StaggerFadeIn } from '@/components/animations/stagger-fade-in';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';

const teamMembers = [
  {
    name: 'Laitman Harry',
    title: 'Head of Corporate Solutions',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-4'),
    slug: 'laitman-harry',
  },
  {
    name: 'Nada Geomorgant',
    title: 'Lead, Contract Management',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-2'),
    slug: 'nada-geomorgant',
  },
  {
    name: 'Desy Willy',
    title: 'Director of Compliance',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-3'),
    slug: 'desy-willy',
  },
  {
    name: 'Hernando Jully',
    title: 'Senior Legal Researcher',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-5'),
    slug: 'hernando-jully',
  },
   {
    name: 'Lydia Dary',
    title: 'Document Review Specialist',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-6'),
    slug: 'lydia-dary',
  },
  {
    name: 'Smilly Ilani',
    title: 'Founder & CEO',
    image: PlaceHolderImages.find(img => img.id === 'lawyer-1'),
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
                  <div className="relative h-96 w-full overflow-hidden">
                      {member.image && (
                          <Image
                          src={member.image.imageUrl}
                          alt={`Portrait of ${member.name}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={member.image.imageHint}
                          />
                      )}
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
