
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
      <Services />
      <CostCalculator />
      <LegalProcess />
      <WhyChooseUs />
      <Experience />
      <Cta />
    </main>
  );
}
