import { Metadata } from 'next';
import { ServicesHero } from '@/components/sections/services-hero';
import { Services } from '@/components/sections/services';
import { Experience } from '@/components/sections/experience';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { WorkflowSupport } from '@/components/sections/workflow-support';
import { CostCalculator } from '@/components/sections/cost-calculator';
import { Cta } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'AI LPO Services | eDiscovery & Contract Automation',
  description: 'Explore Lexocrates elite AI-powered LPO services, including predictive legal research, automated contract lifecycle management, and tech-assisted litigation support for global law firms.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <ServicesHero />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <Services />
        <WorkflowSupport />
        <CostCalculator />
        <WhyChooseUs />
        <Experience />
      </div>
      <Cta />
    </main>
  );
}
