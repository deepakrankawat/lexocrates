"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Gavel, Scale, Landmark, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services: { title: string; content: string; icon: LucideIcon }[] = [
  {
    title: 'Corporate Law',
    content: 'We provide comprehensive legal services for businesses, from formation and governance to mergers and acquisitions. Our team ensures your corporate structure is sound and your transactions are seamless.',
    icon: Gavel,
  },
  {
    title: 'Family Law',
    content: 'Navigating family legal matters requires sensitivity and expertise. We handle cases involving divorce, child custody, and adoption with the utmost care and professionalism to protect your family\'s interests.',
    icon: Shield,
  },
  {
    title: 'Real Estate Law',
    content: 'Our firm assists with all aspects of real estate transactions, including purchases, sales, leasing, and zoning. We work to safeguard your property rights and investments.',
    icon: Landmark,
  },
  {
    title: 'Intellectual Property',
    content: 'Protect your creative and innovative works with our intellectual property services. We handle patents, trademarks, and copyrights to ensure your ideas remain yours.',
    icon: Scale,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center">
            <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
              Our Areas of Expertise
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              We offer a wide range of legal services tailored to meet the unique needs of each client. Our commitment is to provide strategic advice and effective representation.
            </p>
            <p className="mt-4 text-lg text-foreground/80">
              Explore our primary practice areas to see how we can assist you.
            </p>
          </div>
          <div>
            <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
              {services.map((service, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-primary/10">
                  <AccordionTrigger className="py-6 text-left font-headline text-lg hover:no-underline">
                    <div className="flex items-center gap-4">
                      <service.icon className="h-6 w-6 text-accent" />
                      {service.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base text-foreground/80">
                    {service.content}
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
