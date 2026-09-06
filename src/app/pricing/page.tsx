import { Metadata } from 'next';
import { PricingSection } from '@/components/sections/pricing-section';
import { Faq } from '@/components/sections/faq';

export const metadata: Metadata = {
  title: 'Lex Plan & Packages (CAD, USD, GBP) | Lexocrates Legal LPO',
  description: 'Explore multi-currency pricing for Lexocrates Legal Process Outsourcing. Dedicated paralegals, legal research, and litigation support for law firms in Canada, the USA, and UK.',
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
