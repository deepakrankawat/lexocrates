import { Metadata } from 'next';
import { CareersHero } from '@/components/sections/careers/careers-hero';
import { CareersAbout } from '@/components/sections/careers/careers-about';
import { CareersPositions } from '@/components/sections/careers/careers-positions';
import { CareersBenefits } from '@/components/sections/careers/careers-benefits';
import { CareersValues } from '@/components/sections/careers/careers-values';

export const metadata: Metadata = {
  title: 'Careers | Join Our Global Legal Network',
  description: 'Join an elite community of legal professionals. Explore career opportunities in LPO and legal technology at Lexocrates.',
  alternates: {
    canonical: '/careers',
  },
};

export default function CareersPage() {
  return (
    <main className="bg-background">
      <CareersHero />
      <div className="container-balanced">
        <CareersAbout />
        <CareersValues />
        <CareersPositions />
        <CareersBenefits />
      </div>
    </main>
  );
}
