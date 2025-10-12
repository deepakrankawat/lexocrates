import { Team } from '@/components/sections/team';
import { Cta } from '@/components/sections/cta';
import { LawyerHero } from '@/components/sections/lawyer-hero';

export default function LawyerPage() {
  return (
    <main className="bg-background">
      <LawyerHero />
      <Team />
      <Cta />
    </main>
  );
}
