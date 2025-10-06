import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const contactDetails = [
  {
    icon: MapPin,
    title: 'Our Office',
    lines: ['123 Law Street', 'Justice City, JC 10101'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['(555) 123-4567'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@northmanlaw.com'],
  },
  {
    icon: Clock,
    title: 'Hours of Operation',
    lines: ['Mon - Fri: 9:00 AM - 5:00 PM', 'Sat - Sun: Closed'],
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-headline text-4xl font-bold text-primary md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/80">
            We are here to help. Reach out to us for a consultation or any inquiries.
          </p>
        </div>
        <div className="mt-16 grid max-w-4xl mx-auto gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {contactDetails.map((detail) => (
            <Card key={detail.title} className="text-center">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-3 rounded-full">
                  <detail.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4">{detail.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {detail.lines.map((line, index) => (
                  <p key={index} className="text-foreground/80">{line}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
