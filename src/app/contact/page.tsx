

'use client';

import { Mail, Phone, MapPin, Linkedin, Clock, Train, Bus, Car, LifeBuoy, CheckCircle, Headset, User } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import Link from "next/link";
import { SimpleContactForm } from "@/components/forms/SimpleContactForm";

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-contact');
  const jaipurAddress = "B-1402 Mangalam The Grand Residency, Near Teoler School, Sirsi Road, Jaipur, Rajasthan, India. Pin 302041";
  const jaipurMapQuery = "B-1402 Mangalam The Grand Residency, Sirsi Road, Jaipur, Rajasthan, 302041";

  return (
    <main className="bg-background">
      <section className="relative text-white pt-32 pb-12 sm:pt-36 sm:pb-16">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                We're here to help. Reach out to us for any inquiries or to schedule a consultation with our expert team.
            </p>
        </div>
      </section>

      <section id="contact-form" className="py-12 sm:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
             <SimpleContactForm />
          </div>
        </div>
      </section>

      <section id="headquarters" className="py-12 sm:py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-lato font-bold text-accent uppercase tracking-wider">Our Main Office</p>
            <h2 className="mt-4 font-lato text-4xl md:text-5xl font-bold text-primary">Jaipur Headquarters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(jaipurMapQuery)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">Address</h3>
                      <p className="text-foreground/80 group-hover:text-accent font-lato">{jaipurAddress}</p>
                  </div>
              </Link>
              <Link href="mailto:Support@lexocrates.com" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                      <Headset className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">Support</h3>
                      <p className="text-foreground/80 group-hover:text-accent font-lato">Support@lexocrates.com</p>
                  </div>
              </Link>
               <Link href="mailto:Sales@Lexocrates.com" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">Sales</h3>
                      <p className="text-foreground/80 group-hover:text-accent font-lato">Sales@Lexocrates.com</p>
                  </div>
              </Link>
               <Link href="mailto:HR@lexocrates.com" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                      <User className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">HR</h3>
                      <p className="text-foreground/80 group-hover:text-accent font-lato">HR@lexocrates.com</p>
                  </div>
              </Link>
              <Link href="#" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0">
                      <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent font-roboto">LinkedIn</h3>
                      <p className="text-foreground/80 group-hover:text-accent font-lato">Follow us on LinkedIn</p>
                  </div>
              </Link>
              <div>
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-4 font-roboto">
                  <div className="bg-accent/10 p-3 rounded-full flex-shrink-0"><Clock className="h-6 w-6 text-accent" /></div>
                  Office Hours
                </h3>
                <div className="ml-0 sm:ml-16 text-foreground/80 space-y-2 font-lato">
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM IST</p>
                    <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
              <div>
                  <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-4 font-roboto">
                    <div className="bg-accent/10 p-3 rounded-full flex-shrink-0"><Car className="h-6 w-6 text-accent" /></div>
                    Getting Here
                  </h3>
                  <div className="ml-0 sm:ml-16 text-foreground/80 space-y-4 font-lato">
                      <div className="flex items-start gap-3"><Train className="h-5 w-5 text-accent flex-shrink-0 mt-1 sm:mt-0" /> <strong>By Train:</strong> Jaipur Junction Railway Station (15 min drive)</div>
                      <div className="flex items-start gap-3"><Bus className="h-5 w-5 text-accent flex-shrink-0 mt-1 sm:mt-0" /> <strong>By Bus:</strong> Sirsi Road Bus Stop (5 min walk)</div>
                      <div className="flex items-start gap-3"><Car className="h-5 w-5 text-accent flex-shrink-0 mt-1 sm:mt-0" /> <strong>By Car:</strong> Parking available in building</div>
                  </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full w-full overflow-hidden rounded-lg">
              <iframe
                src={`https://maps.google.com/maps?q=${encodeURIComponent(jaipurMapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <Cta />
    </main>
  );
}
