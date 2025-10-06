import Link from 'next/link';
import { ArrowRight, Briefcase, Users, Home, Brain, Shield, Landmark } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const servicesList = [
  { name: 'Corporate Law', slug: 'corporate-law', icon: Briefcase, description: "Expert guidance on business formation, contracts, and corporate governance." },
  { name: 'Family Law', slug: 'family-law', icon: Users, description: "Compassionate handling of divorce, custody, and adoption cases." },
  { name: 'Real Estate Law', slug: 'real-estate-law', icon: Home, description: "Seamless transactions for residential and commercial properties." },
  { name: 'Intellectual Property', slug: 'intellectual-property', icon: Brain, description: "Protecting your patents, trademarks, and creative works." },
  { name: 'Criminal Defense', slug: 'criminal-defense', icon: Shield, description: "Vigorous defense to protect your rights and freedom." },
  { name: 'Immigration Law', slug: 'immigration-law', icon: Landmark, description: "Navigating complex immigration laws for visas and citizenship." },
];

export function Services() {
  return (
    <section id="services" className="bg-background text-foreground py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Our Practice Areas</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold leading-tight text-primary">
                Comprehensive Legal Solutions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-foreground/80">
                We offer a wide range of legal services to meet the diverse needs of our clients. Our team is prepared to handle your case with the utmost professionalism.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <Link key={service.slug} href={`/services/detail`} className="group">
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-transparent hover:border-accent">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <service.icon className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="font-headline text-xl text-primary group-hover:text-accent transition-colors">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{service.description}</p>
                   <div className="mt-4 flex items-center text-accent font-bold group-hover:underline">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                   </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
