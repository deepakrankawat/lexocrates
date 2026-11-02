import { Metadata } from 'next';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { LegalProcess } from '@/components/sections/legal-process';
import { Cta } from '@/components/sections/cta';
import { HomeServices } from '@/components/sections/home-services';

export const metadata: Metadata = {
  title: 'Legal Process Outsourcing | Lexocrates',
  description:
    'Lexocrates partners with law firms and corporate legal departments in Canada, the UK, and the USA, managing process-intensive legal work.',
  alternates: {
    canonical: '/',
  },
};

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com').replace(/\/+$/, '');

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Lexocrates Legal Process Outsourcing',
    alternateName: 'Lexocrates',
    description:
      'Lexocrates provides Legal Process Outsourcing (LPO) for global law firms, specializing in eDiscovery, contract drafting, and multi-jurisdictional legal research.',
    url: siteUrl,
    logo: `${siteUrl}/images/logo-dark.svg`,
    image: `${siteUrl}/images/og-image.jpg`,
    priceRange: '$$',
    currenciesAccepted: 'USD, GBP, CAD',
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Canada' },
    ],
    serviceType: [
      'Legal Research and Writing',
      'Contract Lifecycle Management',
      'eDiscovery and Document Review',
      'Litigation Support',
      'Compliance and Regulatory Support',
    ],
    provider: {
      '@type': 'Organization',
      name: 'Lexocrates',
      url: siteUrl,
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
    </main>
  );
}

