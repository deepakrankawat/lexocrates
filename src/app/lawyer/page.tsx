
import { Team } from '@/components/sections/team';
import { Cta } from '@/components/sections/cta';
import { LawyerHero } from '@/components/sections/lawyer-hero';

export default function LawyerPage() {
  return (
    <main className="bg-background">
      <LawyerHero />
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-full laptop:max-w-[1200px] fhd:max-w-[1400px] qhd:max-w-[1600px] uhd:max-w-[1800px]">
        <Team />
      </div>
    </main>
  );
}
