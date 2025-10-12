
import { CareersHero } from '@/components/sections/careers/careers-hero';
import { CareersAbout } from '@/components/sections/careers/careers-about';
import { CareersPositions } from '@/components/sections/careers/careers-positions';
import { CareersBenefits } from '@/components/sections/careers/careers-benefits';
import { Cta } from '@/components/sections/cta';
import { CareersValues } from '@/components/sections/careers/careers-values';
import { EmployeeTestimonials } from '@/components/sections/careers/employee-testimonials';
import { LifeAtLexocrates } from '@/components/sections/careers/life-at-lexocrates';

export default function CareersPage() {
  return (
    <main className="bg-background">
      <CareersHero />
      <CareersAbout />
      <CareersValues />
      <CareersPositions />
      <LifeAtLexocrates />
      <CareersBenefits />
      <EmployeeTestimonials />
      <Cta />
    </main>
  );
}
