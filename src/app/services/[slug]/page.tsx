import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { servicesList } from '@/lib/services-data';
import { ServiceDetailHero } from '@/components/sections/service-detail-hero';
import { ServiceDetailContent } from '@/components/sections/service-detail-content';
import { buildMeta } from '@/lib/seo';

type Params = { slug: string };

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.lexocrates.com';

export function generateStaticParams() {
  return servicesList.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);
  if (!service) return {};

  return buildMeta({
    title: `${service.name} | Lexocrates Services`,
    description: service.description,
    canonical: `${siteUrl}/services/${service.slug}`,
    keywords: [
      service.name,
      `${service.name} USA`,
      `${service.name} UK`,
      `${service.name} Canada`,
      'legal process outsourcing',
      'AI automation for law firms',
    ],
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = servicesList.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: 'Legal Process Outsourcing',
    url: `${siteUrl}/services/${service.slug}`,
    provider: {
      '@type': 'LegalService',
      name: 'Lexocrates',
      url: siteUrl,
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Country', name: 'Canada' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.name} Deliverables`,
      itemListElement: service.deliverables?.map((item, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item,
        },
        position: idx + 1,
      })),
    },
  };

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
        name: 'Services',
        item: `${siteUrl}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.name,
        item: `${siteUrl}/services/${service.slug}`,
      },
    ],
  };

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ServiceDetailHero service={service!} />
      <ServiceDetailContent service={service!} />
    </main>
  );
}
