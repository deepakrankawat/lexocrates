import { Metadata } from 'next';
import { Team } from '@/components/sections/team';
import { LawyerHero } from '@/components/sections/lawyer-hero';
import { Experience } from '@/components/sections/experience';
import { CoreValues } from '@/components/sections/core-values';
import { Jurisdictions } from '@/components/sections/jurisdictions';
import { Welcome } from '@/components/sections/welcome';
import { Cta } from '@/components/sections/cta';
import { LeadershipPhilosophy } from '@/components/sections/leadership-philosophy';
import { StrategicMethodology } from '@/components/sections/strategic-methodology';
import { EmployeeTestimonials } from '@/components/sections/careers/employee-testimonials';

export const metadata: Metadata = {
  title: 'Lawyers | Lexocrates Legal Leadership',
  description: 'Meet the lawyers and legal strategists guiding Lexocrates across US, UK, and Canada practices.',
  alternates: { canonical: '/lawyer' },
};

export default function LawyerPage() {
  return (
    <main className="bg-background">
      <LawyerHero />
      <div className="container-balanced">
        <Welcome />
        <LeadershipPhilosophy />
        <Experience />
        <Team />
        <StrategicMethodology />
        <CoreValues />
        <EmployeeTestimonials />
        <Jurisdictions />
      </div>
      <Cta />
    </main>
  );
}
