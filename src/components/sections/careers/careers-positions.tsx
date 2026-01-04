

'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SlideIn } from '@/components/animations/slide-in';
import Link from 'next/link';

const openPositions = [
  {
    title: 'Senior Legal Researcher',
    department: 'Legal Research & Analysis',
  },
  {
    title: 'Contract Management Specialist',
    department: 'Contract Lifecycle Management',
  },
  {
    title: 'Compliance Analyst (GDPR)',
    department: 'Regulatory Compliance',
  },
  {
    title: 'E-Discovery Project Manager',
    department: 'Document Review',
  },
];

export function CareersPositions() {
  return (
    <section className="bg-secondary text-foreground py-12 sm:py-16">
        <SlideIn className="text-center mb-12">
          <p className="font-lato font-bold text-accent uppercase tracking-wider">Open Positions</p>
          <h2 className="mt-4 font-lato text-3xl md:text-4xl font-bold text-primary">
            Find Your Next Opportunity
          </h2>
        </SlideIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {openPositions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              className="h-full"
            >
              <Card className="h-full bg-background flex flex-col">
                <CardHeader>
                  <CardTitle className="text-primary group-hover:text-accent transition-colors font-opensans font-semibold text-2xl">{position.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-sm text-accent font-bold">{position.department}</p>
                  <div className="mt-auto pt-6">
                    <Button asChild className="w-full font-montserrat font-bold">
                       <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
    </section>
  );
}
