import { Metadata } from 'next';
import { CareersHero } from '@/components/sections/careers/careers-hero';
import { CareersValues } from '@/components/sections/careers/careers-values';
import { CareersAbout } from '@/components/sections/careers/careers-about';
import { CareersPositions } from '@/components/sections/careers/careers-positions';

export const metadata: Metadata = {
  title: 'Careers | Build Your Career With Lexocrates',
  description:
    'Develop practical experience supporting law firms and corporate legal departments across Canada, the UK, and the USA with Lexocrates.',
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersPage() {
  return (
    <main className="bg-background">
      <CareersHero />
      <div className="container-balanced">
        <CareersValues />
        <CareersAbout />
        <CareersPositions />
      </div>
    </main>
  );
}
