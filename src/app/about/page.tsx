import { AboutHero } from '@/components/sections/about-hero';
import { AboutIntro } from '@/components/sections/about-intro';
import { VisionMission } from '@/components/sections/vision-mission';
import { Award } from '@/components/sections/award';
import { Partners } from '@/components/sections/partners';
import { Welcome } from '@/components/sections/welcome';
import { Cta } from '@/components/sections/cta';
import { Testimonials } from '@/components/sections/testimonials';


export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <AboutIntro />
      <Partners />
      <Welcome />
      <Cta />
      <VisionMission />
      <Award />
      <Testimonials />
    </main>
  );
}
