import { Metadata } from 'next';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Team } from '@/components/sections/team';
import { Blog } from '@/components/sections/blog';
import { Hero } from '@/components/sections/hero';

export const metadata: Metadata = {
  title: 'Legal Process Outsourcing & AI Automation for USA, UK, Canada | LexoCrates',
  description:
    'AI-assisted legal process outsourcing for US, UK, and Canadian law firms: contract review, eDiscovery automation, legal research, and paralegal support with compliance-first controls.',
  keywords: [
    'legal process outsourcing USA',
    'legal process outsourcing UK',
    'legal process outsourcing Canada',
    'AI contract review',
    'ediscovery automation',
    'outsourced paralegal services',
  ],
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Lexocrates AI Legal Process Outsourcing',
    description: 'Lexocrates provides AI-accelerated Legal Process Outsourcing (LPO) for global law firms, specializing in eDiscovery, contract drafting, and multi-jurisdictional legal research.',
    url: 'https://lexocrates.vercel.app',
    areaServed: ['US', 'UK', 'Canada'],
    knowsAbout: ['Legal Research', 'AI eDiscovery', 'Contract Management', 'Intellectual Property Outsourcing', 'Litigation Support'],
    provider: {
      '@type': 'Organization',
      name: 'Lexocrates',
    }
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Team />
      <Blog />
    </main>
  );
}
