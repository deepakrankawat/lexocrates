'use client';

import { Faq } from "@/components/sections/faq";
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
        <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] relative text-center">
            <h1 className="font-montserrat text-4xl sm:text-5xl md:text-6xl font-bold">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
                We're here to help. Reach out to us for any inquiries or to schedule a consultation with our expert team.
            </p>
        </div>
      </section>

      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
          <section id="contact-form" className="py-12 sm:py-24 bg-background">
            <div className="max-w-4xl mx-auto">
              <SimpleContactForm />
            </div>
          </section>

          <section id="headquarters" className="py-12 sm:py-24 bg-secondary rounded-[3rem] px-8 sm:px-16 overflow-hidden">
              <div className="text-center mb-16">
                <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-xs">Our Main Office</p>
                <h2 className="mt-4 font-lato text-4xl md:text-5xl font-black text-primary">Jaipur Headquarters</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                <ContactDetails />
                <div className="relative h-96 md:h-full w-full overflow-hidden rounded-3xl shadow-xl">
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
          </section>

          <Faq />
      </div>
    </main>
  );
}
