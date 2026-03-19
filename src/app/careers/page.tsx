import { CareersHero } from '@/components/sections/careers/careers-hero';
import { CareersAbout } from '@/components/sections/careers/careers-about';
import { CareersPositions } from '@/components/sections/careers/careers-positions';
import { CareersBenefits } from '@/components/sections/careers/careers-benefits';
import { CareersValues } from '@/components/sections/careers/careers-values';

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
