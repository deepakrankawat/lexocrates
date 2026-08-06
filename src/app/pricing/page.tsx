import { Metadata } from 'next';
import { PricingSection } from '@/components/sections/pricing-section';
import { Faq } from '@/components/sections/faq';

export const metadata: Metadata = {
  title: 'Lex Plan & Packages (USD, GBP, CAD) | Lexocrates Legal LPO',
  description: 'Explore multi-currency pricing for Lexocrates Legal Process Outsourcing. Dedicated paralegals, legal research, and litigation support for law firms in the USA, UK, and Canada.',
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
