
import { Team } from '@/components/sections/team';
import { LawyerHero } from '@/components/sections/lawyer-hero';
import { Experience } from '@/components/sections/experience';
import { CoreValues } from '@/components/sections/core-values';
import { Jurisdictions } from '@/components/sections/jurisdictions';
import { Welcome } from '@/components/sections/welcome';
import { Cta } from '@/components/sections/cta';
import { LeadershipPhilosophy } from '@/components/sections/leadership-philosophy';
import { GlobalAdvisors } from '@/components/sections/global-advisors';
import { EmployeeTestimonials } from '@/components/sections/careers/employee-testimonials';

export default function TeamPage() {
  return (
    <main className="bg-background">
      <LawyerHero />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <Welcome />
        <LeadershipPhilosophy />
        <Experience />
        <Team />
        <GlobalAdvisors />
        <CoreValues />
        <EmployeeTestimonials />
        <Jurisdictions />
      </div>
      <Cta />
    </main>
  );
}
