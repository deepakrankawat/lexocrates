import { Metadata } from 'next';
import { LawyerHero } from '@/components/sections/lawyer-hero';
import { Welcome } from '@/components/sections/welcome';
import { LeadershipPhilosophy } from '@/components/sections/leadership-philosophy';
import { Team } from '@/components/sections/team';
import { StrategicMethodology } from '@/components/sections/strategic-methodology';
import { Cta } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'Our Team | The People Behind Lexocrates',
  description:
    'Lexocrates is led by professionals who combine legal expertise, operational discipline, and technology to support law firms and corporate legal departments across jurisdictions.',
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
        <Team />
        <StrategicMethodology />
      </div>
      <Cta />
    </main>
  );
}
