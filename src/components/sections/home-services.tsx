'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SlideIn } from '../animations/slide-in';
import { StaggerFadeIn } from '../animations/stagger-fade-in';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { GltfLogoViewer } from '../animations/gltf-logo-viewer';

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
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const leftServices = pdfServices.slice(0, 3);
  const rightServices = pdfServices.slice(3, 6);

  return (
    <section id="our-services" className="bg-background text-foreground py-16 sm:py-24 border-b border-black/5 overflow-hidden">
      <div className="container-balanced">
        <SlideIn className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
          <p className="font-lato font-bold text-accent uppercase tracking-[0.3em] mb-3 text-xs sm:text-sm">
            OUR SERVICES & 3D INTERACTIVE ECOSYSTEM
          </p>
          <h2 className="font-lato text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-primary mb-4 tracking-tight">
            Legal Process Outsourcing Solutions, End to End
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 font-medium leading-relaxed max-w-3xl mx-auto">
            Hover over any service card below to interactively rotate and focus our 3D model towards that solution point.
          </p>
        </SlideIn>

        {/* Full-Section 3D Stage Container */}
        <div className="relative w-full min-h-[700px] lg:min-h-[850px] flex items-center justify-center mb-16 [perspective:1400px]">
          
          {/* Full-Background 3D Model Stage */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center z-0 pointer-events-auto">
            <GltfLogoViewer activeCardIndex={hoveredCardIndex} />
          </div>

          {/* Interactive Floating Hotspot Status Bar */}
          <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/90 backdrop-blur-xl border border-accent/30 shadow-xl text-[11px] font-black uppercase tracking-[0.25em] text-accent animate-pulse">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              {hoveredCardIndex !== null
                ? `Active Focus: Service 0${hoveredCardIndex + 1}`
                : 'Full 3D Interactive Ecosystem'}
            </span>
          </div>

          {/* Service Cards Floating Overlay - Distributed across Left & Right Areas */}
          <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-center pointer-events-none px-2 sm:px-4">
            
            {/* Left Area - 3 Cards (Top Left, Center Left, Bottom Left) */}
            <div className="lg:col-span-4 space-y-6 sm:space-y-8 pointer-events-auto">
              {leftServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  onMouseEnter={() => setHoveredCardIndex(idx)}
                  onMouseLeave={() => setHoveredCardIndex(null)}
                  initial={{
                    opacity: 0,
                    x: -60,
                    rotateY: 15,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotateY: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 0.8,
                    delay: idx * 0.15,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                  whileHover={{
                    y: -8,
                    rotateY: 8,
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                  className={`p-6 sm:p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 group relative [transform-style:preserve-3d] cursor-pointer ${
                    hoveredCardIndex === idx
                      ? 'bg-white/95 border-2 border-accent shadow-[0_30px_60px_-15px_rgba(184,134,11,0.3)]'
                      : 'bg-white/80 border border-black/5 hover:bg-white/95 shadow-lg'
                  }`}
                >
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-montserrat font-black text-accent text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                        0{idx + 1}
                      </span>
                      <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        hoveredCardIndex === idx ? 'bg-accent scale-150 shadow-[0_0_12px_#d4af37]' : 'bg-accent/40'
                      }`} />
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
                    className="relative z-20 text-accent hover:text-white font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-all duration-300 mt-auto group/link px-4 py-2 rounded-full bg-accent/10 border border-accent/30 hover:bg-accent hover:shadow-lg"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Middle Spacer - Leaves 3D Model Fully Visible in Center */}
            <div className="hidden lg:block lg:col-span-4 min-h-[300px] pointer-events-none" />

            {/* Right Area - 3 Cards (Top Right, Center Right, Bottom Right) */}
            <div className="lg:col-span-4 space-y-6 sm:space-y-8 pointer-events-auto">
              {rightServices.map((service, idx) => {
                const actualIdx = idx + 3;
                return (
                  <motion.div
                    key={actualIdx}
                    onMouseEnter={() => setHoveredCardIndex(actualIdx)}
                    onMouseLeave={() => setHoveredCardIndex(null)}
                    initial={{
                      opacity: 0,
                      x: 60,
                      rotateY: -15,
                      scale: 0.9,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      rotateY: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.15,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                    whileHover={{
                      y: -8,
                      rotateY: -8,
                      scale: 1.03,
                      transition: { duration: 0.3 },
                    }}
                    className={`p-6 sm:p-8 rounded-3xl backdrop-blur-xl transition-all duration-500 group relative [transform-style:preserve-3d] cursor-pointer ${
                      hoveredCardIndex === actualIdx
                        ? 'bg-white/95 border-2 border-accent shadow-[0_30px_60px_-15px_rgba(184,134,11,0.3)]'
                        : 'bg-white/80 border border-black/5 hover:bg-white/95 shadow-lg'
                    }`}
                  >
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-montserrat font-black text-accent text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                          0{actualIdx + 1}
                        </span>
                        <span className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          hoveredCardIndex === actualIdx ? 'bg-accent scale-150 shadow-[0_0_12px_#d4af37]' : 'bg-accent/40'
                        }`} />
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
                      className="relative z-20 text-accent hover:text-white font-montserrat font-bold text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 transition-all duration-300 mt-auto group/link px-4 py-2 rounded-full bg-accent/10 border border-accent/30 hover:bg-accent hover:shadow-lg"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </div>

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
