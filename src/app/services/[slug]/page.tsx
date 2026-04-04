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

  return (
    <main className="bg-background">
      <ServiceDetailHero service={service!} />
      <ServiceDetailContent service={service!} />
    </main>
  );
}
