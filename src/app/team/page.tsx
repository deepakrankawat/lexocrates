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
  title: 'Our Expert Team | International Legal Leadership',
  description: 'Meet the visionaries behind Lexocrates. Our leadership team combines deep common law expertise with advanced technical strategy.',
  alternates: {
    canonical: '/team',
  },
};

export default function TeamPage() {
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
