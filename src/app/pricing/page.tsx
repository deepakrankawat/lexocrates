import { Metadata } from 'next';
import { PricingHero } from '@/components/sections/pricing-hero';
import { PricingSection } from '@/components/sections/pricing-section';
import { LexPackWorkflowSection } from '@/components/sections/lexpack-workflow';
import { PayPerAssignmentSection } from '@/components/sections/pay-per-assignment';
import { Faq } from '@/components/sections/faq';

export const metadata: Metadata = {
  title: 'LexPack™ Prepaid Legal Capacity & Lextimator™ | Lexocrates Legal LPO',
  description: 'Estimate legal work with Lextimator™ AI-powered estimation engine, or choose LexPack™ prepaid legal capacity with a 7%–28% pricing advantage for ongoing legal requirements.',
};

export default function PricingPage() {
  return (
    <main className="bg-background min-h-screen">
      <PricingHero />
      <PricingSection />
      <PayPerAssignmentSection />
      <LexPackWorkflowSection />
      <section id="faq" className="bg-white text-slate-900 border-t border-black/5">
        <Faq />
      </section>
    </main>
  );
}

