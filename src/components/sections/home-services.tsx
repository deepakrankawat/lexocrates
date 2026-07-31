'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const pdfServices = [
  {
    title: 'Legal Research & Writing',
    description:
      'Accurate, well-researched legal drafting, built around your specific requirements — not generic templates.',
    href: '/services/legal-research-writing',
  },
  {
    title: 'Litigation Support Services',
    description:
      'Structured support from discovery through trial preparation, so your team stays focused on strategy.',
    href: '/services/litigation-support',
  },
  {
    title: 'Contract Lifecycle Management',
    description:
      'Drafting, review, negotiation, and ongoing administration — handled consistently, matter after matter.',
    href: '/services/contract-review-management',
  },
  {
    title: 'eDiscovery & Document Review',
    description:
      'Technology-enabled review, backed by experienced legal professionals and quality controls that catch what matters.',
    href: '/services/ediscovery-document-review',
  },
  {
    title: 'Compliance & Regulatory Support',
    description:
      'Practical, jurisdiction-aware compliance support that keeps pace with evolving regulatory requirements.',
    href: '/services/compliance-regulatory-support',
  },
  {
    title: 'Paralegal & Virtual Operations',
    description:
      'Dependable operational support for the routine legal and administrative work that still needs to get done right.',
    href: '/services/paralegal-virtual-operations',
  },
];

export function HomeServices() {
  return (
    <section id="our-services" className="bg-background text-foreground py-16 sm:py-24 border-b border-black/5 overflow-hidden">
      <div className="container-balanced">
        <SlideIn className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
          <p className="font-lato font-bold text-accent uppercase tracking-[0.3em] mb-3 text-xs sm:text-sm">
            OUR SERVICES
          </p>
          <h2 className="font-lato text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-primary mb-4 tracking-tight">
            Legal Process Outsourcing Solutions, End to End
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 font-medium leading-relaxed max-w-3xl mx-auto">
            Comprehensive, high-performance legal support solutions tailored for law firms and corporate legal departments.
          </p>
        </SlideIn>

        {/* Responsive Grid of Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {pdfServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-black/5 hover:border-accent/40 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-montserrat font-black text-accent text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                    0{idx + 1}
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:scale-125 transition-all duration-300" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  <Link href={service.href} className="hover:underline">
                    {service.title}
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-foreground/75 font-medium leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>
              <Link
                href={service.href}
                className="relative z-20 text-accent hover:text-white font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-all duration-300 mt-auto group/link px-4 py-2 rounded-full bg-accent/10 border border-accent/30 hover:bg-accent hover:shadow-lg w-fit"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="xl"
            className="bg-primary text-white hover:bg-primary/95 font-montserrat font-black text-xs uppercase tracking-[0.25em] px-10 rounded-full shadow-lg transition-all duration-300"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

