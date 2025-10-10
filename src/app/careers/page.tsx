
import { CareersHero } from '@/components/sections/careers/careers-hero';
import { CareersAbout } from '@/components/sections/careers/careers-about';
import { CareersPositions } from '@/components/sections/careers/careers-positions';
import { CareersBenefits } from '@/components/sections/careers/careers-benefits';
import { Cta } from '@/components/sections/cta';

export default function CareersPage() {
  return (
    <main className="bg-background">
      <CareersHero />
      <CareersAbout />
      <CareersPositions />
      <CareersBenefits />
      <Cta />
    </main>
  );
}
