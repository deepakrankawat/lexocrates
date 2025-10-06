
import { FreeConsultationHero } from '@/components/sections/free-consultation-hero';
import { AppointmentForm } from '@/components/sections/appointment-form';
import { Cta } from '@/components/sections/cta';
import { Testimonials } from '@/components/sections/testimonials';

export default function FreeConsultationPage() {
  return (
    <main className="bg-background">
      <FreeConsultationHero />
      <AppointmentForm />
      <Cta />
      <Testimonials />
    </main>
  );
}
