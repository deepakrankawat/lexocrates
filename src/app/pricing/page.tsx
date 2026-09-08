import { Metadata } from 'next';
import { PricingSection } from '@/components/sections/pricing-section';
import { Faq } from '@/components/sections/faq';

export const metadata: Metadata = {
  title: 'LexPack™ Bundles (CAD, USD, GBP) | Lexocrates Legal LPO',
  description: 'Explore multi-currency LexPack bundles for Lexocrates Legal Process Outsourcing. Dedicated paralegals, legal research, and litigation support with zero recurring retainers.',
};

export default function PricingPage() {
  return (
    <div className="bg-[#0B1736] min-h-screen">
      <PricingSection />
      <div className="bg-white text-slate-900">
        <Faq />
      </div>
    </div>
  );
}
