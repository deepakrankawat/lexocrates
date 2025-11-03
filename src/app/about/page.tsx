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
      <AboutIntro />
      <Certifications />
      <Welcome />
      <Cta />
      <VisionMission />
    </main>
  );
}
