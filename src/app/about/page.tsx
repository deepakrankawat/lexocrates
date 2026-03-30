import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about-hero';
import { OurStory } from '@/components/sections/our-story';
import { VisionMission } from '@/components/sections/vision-mission';
import { Welcome } from '@/components/sections/welcome';
import { CoreValues } from '@/components/sections/core-values';
import { Jurisdictions } from '@/components/sections/jurisdictions';
import { Experience } from '@/components/sections/experience';

export const metadata: Metadata = {
  title: 'About Us | Global AI Legal Vision & Leadership',
  description: 'Learn about Lexocrates, a premier AI-driven LPO firm bridging the gap between elite Indian legal expertise, predictive analytics, and law firms in the US, UK, and Canada.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <OurStory />
        <Experience />
        <CoreValues />
        <Welcome />
        <Jurisdictions />
        <VisionMission />
      </div>
    </main>
  );
}
