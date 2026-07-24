'use client';

import { SlideIn } from '@/components/animations/slide-in';
import { FadeIn } from '@/components/animations/fade-in';
import { motion } from 'framer-motion';
import { BookOpen, Target, Globe2, Cpu, Scale, Users, Sparkles } from 'lucide-react';

const storyMilestones = [
  {
    year: 'THE BEGINNING',
    icon: BookOpen,
    title: 'A Vision That Became Lexocrates',
    description:
      'Lexocrates was founded by Yashvardhan Singh, whose years within the legal profession made clear a recurring gap—capable teams stretched thin by growing workloads, with process rarely given the attention it deserved. He set out to build an organisation that paired legal expertise with genuine operational discipline, allowing law firms and corporate legal departments to manage more without compromising on quality.\n\nThat founding idea has since grown into a trusted Legal Process Outsourcing (LPO) partner, built on a foundation of confidentiality, consistency, and long-term client relationships across jurisdictions.',
  },
  {
    year: 'OUR MISSION',
    icon: Target,
    title: 'Strengthening Legal Teams Through Trusted Partnerships',
    description:
      'Our mission is to support law firms and corporate legal departments by managing process-intensive, high-volume work so that their teams can focus on matters requiring legal judgment and strategic input. Every engagement is carried out by experienced professionals within workflows designed for accuracy and confidentiality. Over time, this approach allows us to function less as an external service provider and more as a dependable extension of our clients\' own teams.',
  },
  {
    year: 'THE APPROACH',
    icon: Scale,
    title: 'Built on Precision, Driven by Partnership',
    description:
      'Every engagement begins with a clear understanding of a client\'s objectives, existing workflows, and expectations. From there, we assemble the right professionals, adapt our processes to fit theirs, and apply quality controls designed to identify issues before they reach the client. The result is a working relationship that functions less like a transaction and more like an ongoing partnership—one built on collaboration, accuracy, and confidentiality.',
  },
  {
    year: 'THE INNOVATION',
    icon: Cpu,
    title: 'Technology That Enhances Legal Expertise',
    description:
      'We regard technology as a means of strengthening legal expertise, not replacing it. AI-enabled tools are integrated thoughtfully into our workflows to improve efficiency, support accuracy, and streamline routine processes. The assessment of legal risk, nuance, and strategic judgment remains the responsibility of our legal professionals. This balance—technology in service of judgment, rather than in place of it—is central to how we work.',
  },
  {
    year: 'THE SCALE',
    icon: Users,
    title: 'Growing with Our Clients',
    description:
      'As client needs continue to evolve, Lexocrates continues to grow alongside them. We invest deliberately in our people, our processes, and our long-term client relationships, expanding our capabilities in step with demand rather than ahead of it. This measured approach allows us to maintain the quality, confidentiality, and consistency our clients have come to expect as we take on new engagements.',
  },
  {
    year: 'THE FUTURE',
    icon: Globe2,
    title: 'Building the Future of Legal Process Outsourcing',
    description:
      'As the legal industry continues to evolve, so does Lexocrates. We remain committed to expanding our capabilities and strengthening our expertise in support of law firms and corporate legal departments across Canada, the United Kingdom, and the United States. Our objective has remained unchanged since our founding: to build lasting client partnerships and deliver legal process outsourcing solutions that evolve with the needs of modern legal teams.',
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
            <h2 className="font-lato text-2xl sm:text-4xl lg:text-6xl font-black text-primary leading-[1.15] sm:leading-[1.1] tracking-tight mb-6">
              The <span className="text-accent">Lexocrates</span> Story
            </h2>
          </SlideIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-xl text-foreground/70 font-medium leading-relaxed max-w-3xl mx-auto">
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
