import { ServiceDetailHero } from '@/components/sections/service-detail-hero';
import { LegalProcess } from '@/components/sections/legal-process';
import { Team } from '@/components/sections/team';
import { servicesList } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Experience } from '@/components/sections/experience';
import { ServiceFeatureItem } from '@/components/sections/service-feature-item';
import { WorkflowSupport } from '@/components/sections/workflow-support';
import { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesList.find((s) => s.slug === params.slug);
  
  if (!service) return {};

  return {
    title: service.name,
    description: service.description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.name,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const awaitedParams = await params;
  const serviceIndex = servicesList.findIndex(s => s.slug === awaitedParams.slug);
  const service = servicesList[serviceIndex];

  if (!service) {
    notFound();
  }

  // JSON-LD Service Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.longDescription,
    provider: {
      '@type': 'Organization',
      name: 'Lexocrates',
    },
    areaServed: ['US', 'GB', 'CA'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Legal Support Services',
      itemListElement: service.keyAreas.map((area) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: area,
        },
      })),
    },
  };

  return (
    <main className="bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetailHero service={service} />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px] py-24">
        <ServiceFeatureItem 
          service={service} 
          index={serviceIndex} 
          showLink={false}
        />
        <WorkflowSupport />
        <LegalProcess />
        <Team />
        <Experience />
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}
