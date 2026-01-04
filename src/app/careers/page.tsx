

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
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-full laptop:max-w-[1200px] fhd:max-w-[1400px] qhd:max-w-[1600px] uhd:max-w-[1800px]">
        <CareersAbout />
        <CareersValues />
        <CareersPositions />
        <CareersBenefits />
      </div>
    </main>
  );
}
