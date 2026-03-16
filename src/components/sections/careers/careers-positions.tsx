'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
    <section className="bg-secondary/30 text-foreground py-12 sm:py-20 rounded-[3rem] my-12">
        <SlideIn className="text-center mb-12">
          <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-[10px]">Open Positions</p>
          <h2 className="font-lato text-3xl md:text-4xl font-black text-primary tracking-tight">
            Find Your Next Opportunity
          </h2>
        </SlideIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-12">
          {openPositions.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <Card className="h-full bg-background flex flex-col border border-black/5 shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all duration-500 rounded-[2.5rem] overflow-hidden group">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-primary group-hover:text-accent transition-colors duration-300 font-montserrat font-black text-2xl tracking-tight leading-tight">
                    {position.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-8 pt-0">
                  <p className="text-[10px] text-accent font-black uppercase tracking-[0.2em] mb-10">{position.department}</p>
                  <div className="mt-auto">
                    <Button asChild className="w-full bg-primary hover:bg-accent text-white font-montserrat font-black text-[11px] uppercase tracking-[0.2em] py-7 rounded-full shadow-xl shadow-primary/10 transition-all duration-500 hover:scale-105 active:scale-95">
                       <Link href="/contact">Apply Now</Link>
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
