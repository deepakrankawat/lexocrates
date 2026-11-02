import { Metadata } from 'next';
import { PricingHero } from '@/components/sections/pricing-hero';
import { PricingSection } from '@/components/sections/pricing-section';
import { LexPackWorkflowSection } from '@/components/sections/lexpack-workflow';
import { PayPerAssignmentSection } from '@/components/sections/pay-per-assignment';
import { Faq } from '@/components/sections/faq';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com').replace(/\/+$/, '');

export const metadata: Metadata = {
  title: 'LexPack™ Prepaid Legal Capacity & Lextimator™ | Lexocrates Legal LPO',
  description: 'Estimate legal work with Lextimator™ AI-powered estimation engine, or choose LexPack™ prepaid legal capacity with a 7%–28% pricing advantage for ongoing legal requirements.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'LexPack™ Prepaid Legal Capacity & Lextimator™ | Lexocrates Legal LPO',
    description: 'Estimate legal work with Lextimator™ AI-powered estimation engine, or choose LexPack™ prepaid legal capacity with a 7%–28% pricing advantage for ongoing legal requirements.',
    url: `${siteUrl}/pricing`,
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
};

export default function PricingPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pricing & LexPack™',
        item: `${siteUrl}/pricing`,
      },
    ],
  };

  return (
    <main className="bg-background min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PricingHero />
      <PayPerAssignmentSection />
      <PricingSection />
      <LexPackWorkflowSection />
      <section id="faq" className="bg-white text-slate-900 border-t border-black/5">
        <Faq />
      </section>
    </main>
  );
}

