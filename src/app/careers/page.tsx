
import { CareersHero } from '@/components/sections/careers/careers-hero';
import { CareersAbout } from '@/components/sections/careers/careers-about';
import { CareersPositions } from '@/components/sections/careers/careers-positions';
import { CareersBenefits } from '@/components/sections/careers/careers-benefits';
import { Cta } from '@/components/sections/cta';
import { CareersValues } from '@/components/sections/careers/careers-values';

export default function CareersPage() {
  return (
    <main className="bg-background">
      <CareersHero />
      <CareersAbout />
      <CareersValues />
      <CareersPositions />
      <CareersBenefits />
      <Cta />
    </main>
  );
}
