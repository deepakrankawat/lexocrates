import { Team } from '@/components/sections/team';
import { LawyerHero } from '@/components/sections/lawyer-hero';

export default function LawyerPage() {
  return (
    <main className="bg-background">
      <LawyerHero />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <Team />
      </div>
    </main>
  );
}
