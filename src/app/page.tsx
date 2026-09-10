import { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { LegalProcess } from '@/components/sections/legal-process';
import { Cta } from '@/components/sections/cta';
import { HomeServices } from '@/components/sections/home-services';
import { AccountPortalPopup } from '@/components/modals/account-portal-popup';

export const metadata: Metadata = {
  title: 'Legal Process Outsourcing | Lexocrates',
  description:
    'Lexocrates partners with law firms and corporate legal departments in Canada, the UK, and the USA, managing process-intensive legal work.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Lexocrates Legal Process Outsourcing',
    description:
      'Lexocrates provides Legal Process Outsourcing (LPO) for global law firms, specializing in eDiscovery, contract drafting, and multi-jurisdictional legal research.',
    url: 'https://lexocrates.vercel.app',
    areaServed: ['US', 'UK', 'Canada'],
    provider: {
      '@type': 'Organization',
      name: 'Lexocrates',
    },
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <HomeServices />
      <WhyChooseUs />
      <LegalProcess />
      <Cta />
      <AccountPortalPopup />
    </main>
  );
}

