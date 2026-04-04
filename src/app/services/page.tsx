import { Metadata } from 'next';
import { ServicesHero } from '@/components/sections/services-hero';
import { Services } from '@/components/sections/services';
import { Experience } from '@/components/sections/experience';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { WorkflowSupport } from '@/components/sections/workflow-support';
import { CostCalculator } from '@/components/sections/cost-calculator';
import { Cta } from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'AI LPO Services | Contract Review & eDiscovery Automation | LexoCrates',
  description:
    'Explore AI-powered LPO services for US, UK, and Canada: contract review automation, eDiscovery, legal research, and outsourced paralegal support with SOC 2, HIPAA, GDPR, and PIPEDA alignment.',
  keywords: [
    'AI LPO services',
    'contract review automation',
    'ediscovery automation',
    'outsourced paralegal services',
    'HIPAA compliant LPO',
    'GDPR legal outsourcing',
    'PIPEDA legal outsourcing',
  ],
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-background">
      <ServicesHero />
      <div className="container-balanced">
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
