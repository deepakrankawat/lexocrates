import { AboutHero } from '@/components/sections/about-hero';
import { AboutIntro } from '@/components/sections/about-intro';
import { VisionMission } from '@/components/sections/vision-mission';
import { Partners } from '@/components/sections/partners';
import { Welcome } from '@/components/sections/welcome';
import { Cta } from '@/components/sections/cta';
import { Certifications } from '@/components/sections/certifications';


export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <AboutIntro />
      <Partners />
      <Certifications />
      <Welcome />
      <Cta />
      <VisionMission />
    </main>
  );
}
