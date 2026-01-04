

import { ServicesHero } from '@/components/sections/services-hero';
import { Services } from '@/components/sections/services';
import { Experience } from '@/components/sections/experience';
import { Cta } from '@/components/sections/cta';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { LegalProcess } from '@/components/sections/legal-process';
import { CostCalculator } from '@/components/sections/cost-calculator';

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <ServicesHero />
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 max-w-full laptop:max-w-[1200px] fhd:max-w-[1400px] qhd:max-w-[1600px] uhd:max-w-[1800px]">
        <Services />
        <CostCalculator />
        <LegalProcess />
        <WhyChooseUs />
        <Experience />
      </div>
    </main>
  );
}
