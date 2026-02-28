import { AboutHero } from '@/components/sections/about-hero';
import { AboutIntro } from '@/components/sections/about-intro';
import { VisionMission } from '@/components/sections/vision-mission';
import { Welcome } from '@/components/sections/welcome';
import { Certifications } from '@/components/sections/certifications';

export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <AboutIntro />
        <Certifications />
        <Welcome />
        <VisionMission />
      </div>
    </main>
  );
}
