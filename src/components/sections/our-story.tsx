'use client';

import { SlideIn } from '@/components/animations/slide-in';
import { FadeIn } from '@/components/animations/fade-in';
import { motion } from 'framer-motion';
import { BookOpen, Target, Globe2, Cpu, Scale, Users, Sparkles } from 'lucide-react';

const storyMilestones = [
  {
    year: 'The Beginning',
    icon: BookOpen,
    title: 'Born from a Vision of Justice',
    description:
      'Lexocrates was founded by Yashvardhan Singh, a seasoned public interest litigator with extensive experience in the Supreme Court of India. Driven by the Socratic principle that "the unexamined life is not worth living," he envisioned a firm that would bring the same intellectual rigor to legal process outsourcing as to courtroom advocacy.',
  },
  {
    year: 'The Mission',
    icon: Target,
    title: 'Bridging Global Legal Gaps',
    description:
      'Recognizing that law firms across the US, UK, and Canada needed more than just cost savings—they needed a trusted strategic partner—Lexocrates was built to serve as a seamless, high-fidelity extension of international legal teams, delivering work that meets the exacting standards of every jurisdiction we serve.',
  },
  {
    year: 'The Approach',
    icon: Scale,
    title: 'Precision Meets Ethics',
    description:
      'From the outset, we embedded a culture of jurisdictional precision and ethical excellence into every workflow. Our teams are trained in US federal and state law, UK common law, and Canadian legal frameworks—ensuring every deliverable reflects deep domain expertise, not just mechanical output.',
  },
  {
    year: 'The Innovation',
    icon: Cpu,
    title: 'AI-Augmented Legal Intelligence',
    description:
      'As the legal industry evolved, so did we. We pioneered the integration of advanced AI tools—predictive analytics, intelligent document review, and NLP-powered research—into our workflows, dramatically increasing speed and accuracy while our human experts focus on nuance and strategy.',
  },
  {
    year: 'The Scale',
    icon: Users,
    title: 'A Team of Elite Specialists',
    description:
      'Today, Lexocrates is home to over 50 legal professionals—attorneys, paralegals, legal analysts, and technology specialists—all working in ISO 27001 certified, secure environments. We operate around the clock, leveraging the US-India time zone advantage to deliver overnight turnarounds.',
  },
  {
    year: 'The Future',
    icon: Globe2,
    title: 'Redefining Legal Operations Globally',
    description:
      'Our journey is far from over. We continue to expand our capabilities, deepen our jurisdictional expertise, and push the boundaries of what legal process outsourcing can achieve—transforming from a service provider into a true strategic partner for the world\'s leading law firms.',
  },
];

export function OurStory() {
  return (
    <section id="our-story" className="bg-background text-foreground py-16 sm:py-24 overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <SlideIn direction="up">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent/40" />
              <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-xs">
                Our Journey
              </p>
              <div className="w-12 h-px bg-accent/40" />
            </div>
          </SlideIn>
          <SlideIn direction="up" delay={0.1}>
            <h2 className="font-lato text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-[1.1] tracking-tighter mb-6">
              The <span className="text-accent">Lexocrates</span> Story
            </h2>
          </SlideIn>
          <FadeIn delay={0.2}>
            <p className="text-lg sm:text-xl text-foreground/60 font-medium leading-relaxed max-w-3xl mx-auto">
              From a single founder&apos;s conviction that legal excellence should know no borders, 
              to a global operation redefining how law firms work—this is our story.
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Timeline Line — Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-6 sm:left-8 top-0 bottom-0 w-px">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-accent/0 via-accent/20 to-accent/0"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-0">
            {storyMilestones.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const Icon = milestone.icon;

              return (
                <div key={index} className="relative lg:mb-16 last:lg:mb-0">
                  {/* Desktop Layout — Alternating sides */}
                  <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Left Content (for even items) / Empty (for odd items) */}
                    <div className={isEven ? 'pr-16' : ''}>
                      {isEven && (
                        <SlideIn direction="right" delay={0.1 * index}>
                          <div className="group p-8 xl:p-10 rounded-[2rem] bg-secondary/30 border border-black/5 hover:border-accent/20 hover:bg-secondary/60 transition-all duration-700 shadow-sm hover:shadow-lg">
                            <div className="flex items-center gap-4 mb-5">
                              <span className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px]">
                                {milestone.year}
                              </span>
                              <div className="flex-1 h-px bg-accent/10" />
                              <Sparkles className="w-4 h-4 text-accent/30 group-hover:text-accent/60 transition-colors" />
                            </div>
                            <h3 className="font-montserrat text-2xl xl:text-3xl font-black text-primary tracking-tight mb-4 group-hover:text-accent transition-colors duration-500">
                              {milestone.title}
                            </h3>
                            <p className="text-foreground/60 font-medium leading-relaxed text-base xl:text-lg">
                              {milestone.description}
                            </p>
                          </div>
                        </SlideIn>
                      )}
                    </div>

                    {/* Right Content (for odd items) / Empty (for even items) */}
                    <div className={!isEven ? 'pl-16' : ''}>
                      {!isEven && (
                        <SlideIn direction="left" delay={0.1 * index}>
                          <div className="group p-8 xl:p-10 rounded-[2rem] bg-secondary/30 border border-black/5 hover:border-accent/20 hover:bg-secondary/60 transition-all duration-700 shadow-sm hover:shadow-lg">
                            <div className="flex items-center gap-4 mb-5">
                              <Sparkles className="w-4 h-4 text-accent/30 group-hover:text-accent/60 transition-colors" />
                              <div className="flex-1 h-px bg-accent/10" />
                              <span className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px]">
                                {milestone.year}
                              </span>
                            </div>
                            <h3 className="font-montserrat text-2xl xl:text-3xl font-black text-primary tracking-tight mb-4 group-hover:text-accent transition-colors duration-500">
                              {milestone.title}
                            </h3>
                            <p className="text-foreground/60 font-medium leading-relaxed text-base xl:text-lg">
                              {milestone.description}
                            </p>
                          </div>
                        </SlideIn>
                      )}
                    </div>
                  </div>

                  {/* Desktop Center Node */}
                  <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <FadeIn delay={0.15 * index}>
                      <motion.div
                        className="w-14 h-14 rounded-2xl bg-primary border-4 border-background shadow-xl flex items-center justify-center"
                        whileHover={{ scale: 1.15 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <Icon className="w-6 h-6 text-accent" />
                      </motion.div>
                    </FadeIn>
                  </div>

                  {/* Mobile Layout */}
                  <div className="lg:hidden flex gap-6 sm:gap-8">
                    {/* Mobile Node */}
                    <div className="flex-shrink-0 relative z-10">
                      <FadeIn delay={0.1 * index}>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary shadow-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                        </div>
                      </FadeIn>
                    </div>

                    {/* Mobile Content */}
                    <SlideIn direction="left" delay={0.1 * index} className="flex-1 pb-2">
                      <div className="group p-6 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-secondary/30 border border-black/5 hover:border-accent/20 transition-all duration-500">
                        <span className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[10px] mb-3 block">
                          {milestone.year}
                        </span>
                        <h3 className="font-montserrat text-xl sm:text-2xl font-black text-primary tracking-tight mb-3 group-hover:text-accent transition-colors duration-500">
                          {milestone.title}
                        </h3>
                        <p className="text-foreground/60 font-medium leading-relaxed text-sm sm:text-base">
                          {milestone.description}
                        </p>
                      </div>
                    </SlideIn>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
