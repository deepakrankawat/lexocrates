
import { Check } from 'lucide-react';
import { servicesList } from '@/lib/services-data';

type Service = typeof servicesList[0];

export function ServiceKeyAreas({ service }: { service: Service }) {
  if (!service.keyAreas || service.keyAreas.length === 0) {
    return null;
  }

  return (
    <section className="bg-secondary py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-lato text-3xl md:text-4xl font-bold text-primary">
            Key Areas of {service.name}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
            Our expertise within {service.name.toLowerCase()} includes, but is not limited to, the following areas:
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {service.keyAreas.map((area, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <p className="text-foreground/80">{area}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
