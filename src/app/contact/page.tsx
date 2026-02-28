
'use client';

import { Faq } from "@/components/sections/faq";
import { SimpleContactForm } from "@/components/forms/SimpleContactForm";
import { ContactDetails } from "@/components/sections/contact-details";
import { FadeIn } from "@/components/animations/fade-in";
import { SlideIn } from "@/components/animations/slide-in";

export default function ContactPage() {
  const jaipurMapQuery = "B-1402 Mangalam The Grand Residency, Sirsi Road, Jaipur, Rajasthan, 302041";

  return (
    <main className="bg-background">
      <section className="relative min-h-[50vh] fhd:min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-20">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.05] pointer-events-none">
            <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
              <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="0.5" />
              <path d="M500 0V1000M0 500H1000" stroke="currentColor" strokeWidth="0.5" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1800px] text-center">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs fhd:text-sm mb-8">
                Connect With Us
              </p>
            </FadeIn>
            <SlideIn direction="up" delay={0.4}>
              <h1 className="font-montserrat text-5xl sm:text-7xl fhd:text-8xl font-black leading-tight text-white mb-8 tracking-tighter">
                Get In <span className="text-accent">Touch</span>
              </h1>
            </SlideIn>
            <FadeIn delay={0.6}>
              <p className="text-xl fhd:text-2xl text-white/70 font-medium leading-relaxed">
                Reach out to discuss how our strategic legal operations can drive efficiency for your practice.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
          <section id="contact-form" className="py-24 sm:py-32 bg-background">
            <div className="max-w-4xl mx-auto">
              <SimpleContactForm />
            </div>
          </section>

          <section id="headquarters" className="py-24 sm:py-32 bg-secondary rounded-[3rem] px-8 sm:px-16 overflow-hidden">
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
