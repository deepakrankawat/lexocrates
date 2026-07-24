'use client';

import { Button } from '@/components/ui/button';
import { SlideIn } from '@/components/animations/slide-in';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const practiceAreas = [
  'Legal Research & Writing',
  'Litigation Support Services',
  'Contract Lifecycle Management',
  'eDiscovery & Document Review',
  'Compliance & Regulatory Support',
  'Paralegal & Legal Operations Support',
];

export function CareersPositions() {
  return (
    <section id="careers-portal" className="py-16 sm:py-24">
      <div className="container-balanced space-y-20">
        {/* WHAT YOU'LL WORK ON */}
        <div>
          <SlideIn className="mb-10">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-xs mb-3">
              WHAT YOU&apos;LL WORK ON
            </p>
            <h2 className="font-lato text-3xl sm:text-5xl font-black text-primary leading-tight tracking-tight">
              Practical Legal Work Across Multiple Practice Areas
            </h2>
          </SlideIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {practiceAreas.map((area, idx) => (
              <Card key={idx} className="p-6 bg-secondary/20 border-black/5 rounded-2xl flex items-center gap-4">
                <div className="p-2 bg-accent/10 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-accent" />
                </div>
                <span className="font-bold text-primary text-base">{area}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* WHO WE'RE LOOKING FOR */}
        <div className="border-t border-black/5 pt-16">
          <SlideIn className="max-w-4xl">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-xs mb-3">
              WHO WE&apos;RE LOOKING FOR
            </p>
            <h2 className="font-lato text-3xl sm:text-5xl font-black text-primary leading-tight tracking-tight mb-6">
              The People Who Do Well Here
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 font-medium leading-relaxed">
              We look for people who are naturally curious and genuinely detail-oriented — the kind of people who&apos;d rather double-check something than assume it&apos;s right. We value strong research and analytical abilities, attention to detail, professionalism, and a genuine willingness to learn and grow.
            </p>
          </SlideIn>
        </div>

        {/* FUTURE OPPORTUNITIES */}
        <div className="border-t border-black/5 pt-16">
          <SlideIn className="max-w-4xl">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-xs mb-3">
              FUTURE OPPORTUNITIES
            </p>
            <h2 className="font-lato text-3xl sm:text-5xl font-black text-primary leading-tight tracking-tight mb-6">
              No Current Openings? We Still Want to Hear from You
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 font-medium leading-relaxed mb-8">
              We&apos;re always interested in connecting with strong legal talent, even when a specific role isn&apos;t open right now. Submit your resume and we&apos;ll reach out when an opportunity that fits your background becomes available.
            </p>
            <Button asChild size="xl" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/95 font-montserrat font-black text-xs uppercase tracking-[0.2em] px-8 sm:px-10 rounded-full">
              <Link href="/contact">Submit Your Resume</Link>
            </Button>
          </SlideIn>
        </div>

        {/* EQUAL OPPORTUNITY */}
        <div className="border-t border-black/5 pt-16">
          <SlideIn className="max-w-4xl">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-xs mb-3">
              EQUAL OPPORTUNITY
            </p>
            <h2 className="font-lato text-3xl sm:text-5xl font-black text-primary leading-tight tracking-tight mb-6">
              Equal Opportunity
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 font-medium leading-relaxed">
              Lexocrates is committed to building an inclusive workplace where every individual is evaluated on their skills, professionalism, potential, and commitment to excellence.
            </p>
          </SlideIn>
        </div>

        {/* READY TO BUILD YOUR CAREER */}
        <div className="border-t border-black/5 pt-16">
          <div className="bg-primary rounded-3xl p-5 sm:p-12 text-white">
            <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-xs mb-4">
              READY TO BUILD YOUR CAREER WITH LEXOCRATES?
            </p>
            <p className="text-base sm:text-xl text-white/80 font-medium leading-relaxed mb-8 max-w-3xl">
              Tell us about your background, your interests, and your career aspirations. We review every application with care and will be in touch when an opportunity aligns with your experience and our future hiring needs.
            </p>
            <Button asChild size="xl" className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-white hover:text-primary font-montserrat font-black text-xs uppercase tracking-[0.2em] px-8 sm:px-10 rounded-full">
              <Link href="/contact">Submit Your Resume</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
