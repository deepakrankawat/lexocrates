import { Metadata } from 'next';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { Team } from '@/components/sections/team';
import { Blog } from '@/components/sections/blog';
import { Hero } from '@/components/sections/hero';

export const metadata: Metadata = {
  title: 'Lexocrates | Top AI-Powered Legal Process Outsourcing (LPO)',
  description: 'Scale your law firm with Lexocrates. We integrate elite human legal talent with cutting-edge AI for research, contract lifecycle, and eDiscovery outsourcing.',
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
