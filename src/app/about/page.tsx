
import { AboutHero } from '@/components/sections/about-hero';
import { VisionMission } from '@/components/sections/vision-mission';
import { Welcome } from '@/components/sections/welcome';
import { Certifications } from '@/components/sections/certifications';
import { CoreValues } from '@/components/sections/core-values';
import { Jurisdictions } from '@/components/sections/jurisdictions';
import { Experience } from '@/components/sections/experience';

export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <Experience />
        <CoreValues />
        <Welcome />
        <Jurisdictions />
        <VisionMission />
        <Certifications />
      </div>
    </main>
  );
}
