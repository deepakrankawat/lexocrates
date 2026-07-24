import { Metadata } from 'next';
import { LawyerHero } from '@/components/sections/lawyer-hero';
import { Welcome } from '@/components/sections/welcome';
import { LeadershipPhilosophy } from '@/components/sections/leadership-philosophy';
import { Team } from '@/components/sections/team';
import { StrategicMethodology } from '@/components/sections/strategic-methodology';
import { Cta } from '@/components/sections/cta';

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
        <Team />
        <StrategicMethodology />
      </div>
      <Cta />
    </main>
  );
}
