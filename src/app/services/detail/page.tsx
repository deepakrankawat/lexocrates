import { ServiceDetailHero } from '@/components/sections/service-detail-hero';
import { ServiceDetailContent } from '@/components/sections/service-detail-content';
import { LegalProcess } from '@/components/sections/legal-process';
import { Team } from '@/components/sections/team';
import { Cta } from '@/components/sections/cta';
import { Testimonials } from '@/components/sections/testimonials';


export default function ServiceDetailPage() {
  return (
    <main className="bg-background">
      <ServiceDetailHero />
      <ServiceDetailContent />
      <LegalProcess />
      <Team />
      <Cta />
      <Testimonials />
    </main>
  );
}
