import { ServiceDetailHero } from '@/components/sections/service-detail-hero';
import { LegalProcess } from '@/components/sections/legal-process';
import { Team } from '@/components/sections/team';
import { servicesList } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import { Experience } from '@/components/sections/experience';
import { ServiceFeatureItem } from '@/components/sections/service-feature-item';
import { WorkflowSupport } from '@/components/sections/workflow-support';

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const awaitedParams = await params;
  const serviceIndex = servicesList.findIndex(s => s.slug === awaitedParams.slug);
  const service = servicesList[serviceIndex];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-background">
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
