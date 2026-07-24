import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about-hero';
import { OurStory } from '@/components/sections/our-story';
import { CoreValues } from '@/components/sections/core-values';
import { Jurisdictions } from '@/components/sections/jurisdictions';
import { VisionMission } from '@/components/sections/vision-mission';
import { Cta } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'About Us | The Lexocrates Story',
  description:
    'Learn about Lexocrates, a trusted Legal Process Outsourcing partner delivering quality, innovation, and dependable legal support.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <main className="bg-background">
      <AboutHero />
      <div className="container-balanced">
        <OurStory />
        <CoreValues />
        <Jurisdictions />
        <VisionMission />
      </div>
      <Cta />
    </main>
  );
}
