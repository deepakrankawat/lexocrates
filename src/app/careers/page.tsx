import { CareersHero } from '@/components/sections/careers/careers-hero';
import { CareersAbout } from '@/components/sections/careers/careers-about';
import { CareersPositions } from '@/components/sections/careers/careers-positions';
import { CareersBenefits } from '@/components/sections/careers/careers-benefits';
import { CareersValues } from '@/components/sections/careers/careers-values';

export default function CareersPage() {
  return (
    <main className="bg-background">
      <CareersHero />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <CareersAbout />
        <CareersValues />
        <CareersPositions />
        <CareersBenefits />
      </div>
    </main>
  );
}
