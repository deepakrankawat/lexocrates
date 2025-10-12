import { ServiceDetailHero } from '@/components/sections/service-detail-hero';
import { ServiceDetailContent } from '@/components/sections/service-detail-content';
import { LegalProcess } from '@/components/sections/legal-process';
import { Team } from '@/components/sections/team';
import { Cta } from '@/components/sections/cta';
import { servicesList } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Experience } from '@/components/sections/experience';
import { ServiceKeyAreas } from '@/components/sections/service-key-areas';

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesList.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-background">
      <ServiceDetailHero service={service} />
      <ServiceDetailContent service={service} />
      <ServiceKeyAreas service={service} />
      <LegalProcess />
      <Team />
      <Experience />
      <Cta />
    </main>
  );
}
