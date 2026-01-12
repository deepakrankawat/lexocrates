
import { AboutHero } from '@/components/sections/about-hero';
import { AboutIntro } from '@/components/sections/about-intro';
import { VisionMission } from '@/components/sections/vision-mission';
import { Welcome } from '@/components/sections/welcome';
import { Cta } from '@/components/sections/cta';
import { Certifications } from '@/components/sections/certifications';


export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-full laptop:max-w-[1200px] fhd:max-w-[1400px] qhd:max-w-[1600px] uhd:max-w-[1800px]">
        <AboutIntro />
        <Certifications />
        <Welcome />
        <VisionMission />
      </div>
    </main>
  );
}
