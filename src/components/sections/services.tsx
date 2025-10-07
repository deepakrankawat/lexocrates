import Link from 'next/link';
import Image from 'next/image';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { servicesList } from '@/lib/services-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function Services() {
  const servicesImage = PlaceHolderImages.find(img => img.id === 'gavel-book');

  return (
    <section id="services" className="bg-secondary text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[32rem] w-full">
            {servicesImage && (
              <Image
                src={servicesImage.imageUrl}
                alt={servicesImage.description}
                fill
                className="object-cover"
                data-ai-hint={servicesImage.imageHint}
              />
            )}
          </div>
          <div className="flex flex-col">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              Professional Services Prepared To Be Your Lawyer Firm
            </h2>
            <p className="mt-4 text-foreground/80">
              We offer a wide range of legal services to meet the diverse needs of our clients. Our team is prepared to handle your case with the utmost professionalism.
            </p>
            <Accordion type="single" collapsible className="w-full mt-8">
              {servicesList.slice(0, 4).map((service) => (
                <AccordionItem key={service.slug} value={service.slug}>
                  <AccordionTrigger className="font-headline text-xl text-primary hover:no-underline">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-6 w-6 text-accent" />
                      {service.name}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 pl-12">
                    {service.description}
                    <Link href={`/services/${service.slug}`} className="mt-2 flex items-center text-accent font-bold hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
