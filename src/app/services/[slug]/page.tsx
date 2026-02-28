import { ServiceDetailHero } from '@/components/sections/service-detail-hero';
import { ServiceDetailContent } from '@/components/sections/service-detail-content';
import { LegalProcess } from '@/components/sections/legal-process';
import { Team } from '@/components/sections/team';
import { servicesList } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Experience } from '@/components/sections/experience';
import { ServiceKeyAreas } from '@/components/sections/service-key-areas';

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const service = servicesList.find(s => s.slug === awaitedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-background">
      <ServiceDetailHero service={service} />
      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
        <ServiceDetailContent service={service} />
        <ServiceKeyAreas service={service} />
        <LegalProcess />
        <Team />
        <Experience />
      </div>
    </main>
  );
}
