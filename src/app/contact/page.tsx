
'use client';

import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { SimpleContactForm } from "@/components/forms/SimpleContactForm";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactDetails } from "@/components/sections/contact-details";

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-contact');
  const jaipurMapQuery = "B-1402 Mangalam The Grand Residency, Sirsi Road, Jaipur, Rajasthan, 302041";

  return (
    <main className="bg-background">
      <section className="relative text-white pt-32 pb-12 sm:pt-36 sm:pb-16">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={heroImage.width}
                height={heroImage.height}
                sizes="100vw"
                className="object-cover absolute inset-0 w-full h-full"
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
            <ContactDetails />
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
