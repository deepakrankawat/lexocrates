'use client';

import { Faq } from "@/components/sections/faq";
import { SimpleContactForm } from "@/components/forms/SimpleContactForm";
import { ContactDetails } from "@/components/sections/contact-details";
import { FadeIn } from "@/components/animations/fade-in";
import { SlideIn } from "@/components/animations/slide-in";
import { ContactProcess } from "@/components/sections/contact-process";

export default function ContactPage() {
  const jaipurMapQuery = "Floor 1 , E-block, E-103 , Ganpati Enclave Jaipur Rajasthan, India. Pin 302041";

  return (
    <main className="bg-background">
      {/* Refined Contact Hero */}
      <section className="relative min-h-[50vh] fhd:min-h-[60vh] flex items-center justify-center overflow-hidden bg-primary pt-10 pb-16 lg:pt-14">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] opacity-[0.05] pointer-events-none">
            <svg viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
              <circle cx="500" cy="500" r="100" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="500" cy="500" r="200" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="500" cy="500" r="300" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
              <path d="M500 0V1000M0 500H1000" stroke="currentColor" strokeWidth="0.1" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 fhd:px-32 max-w-[1800px] text-center">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-8 shadow-xl">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                </span>
                <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                  Connect With Us
                </p>
              </div>
            </FadeIn>
            <SlideIn direction="up" delay={0.4}>
              <h1 className="font-montserrat text-5xl sm:text-7xl fhd:text-8xl font-black leading-tight text-white mb-8 tracking-tighter">
                Get In <span className="text-accent">Touch</span>
              </h1>
            </SlideIn>
            <FadeIn delay={0.6}>
              <p className="text-xl fhd:text-2xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
                Reach out to discuss how our strategic legal operations can drive efficiency for your practice.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
          {/* Main Interaction Area */}
          <section id="contact-form" className="py-20 sm:py-32">
            <div className="grid lg:grid-cols-2 gap-20 items-start">
              <SlideIn direction="left">
                <div className="space-y-12">
                  <div>
                    <h2 className="font-lato text-4xl sm:text-5xl font-black text-primary tracking-tight mb-8">
                      Let&apos;s Start a <span className="text-accent">Conversation</span>
                    </h2>
                    <p className="text-xl text-foreground/60 font-medium leading-relaxed border-l-4 border-accent/10 pl-8">
                      Whether you have a specific project in mind or just want to learn more about our global capabilities, we are ready to assist.
                    </p>
                  </div>
                  <ContactDetails />
                </div>
              </SlideIn>
              
              <SlideIn direction="right">
                <div className="bg-secondary/30 p-10 sm:p-12 rounded-[3rem] border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                  <SimpleContactForm />
                </div>
              </SlideIn>
            </div>
          </section>

          {/* Process Stepper */}
          <section className="py-16">
            <div className="bg-primary rounded-[3rem] p-12 sm:p-20 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-all duration-700 group-hover:scale-110" />
                <ContactProcess />
            </div>
          </section>

          {/* Map Section */}
          <section id="headquarters" className="py-20 sm:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
                <div className="lg:col-span-1">
                   <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Presence</p>
                   <h2 className="font-lato text-4xl font-black text-primary tracking-tight mb-6">Jaipur <br /><span className="text-accent">Headquarters</span></h2>
                   <p className="text-lg text-foreground/60 font-medium leading-relaxed mb-8">
                      Located in the strategic hub of Jaipur, our operations center serves as the core of our global legal delivery network.
                   </p>
                   <div className="p-8 bg-secondary rounded-3xl border border-black/5">
                      <p className="text-sm font-black text-primary uppercase tracking-widest mb-4">Visit Us At</p>
                      <p className="text-foreground/70 font-medium leading-relaxed">
                        Floor 1, E-block, E-103,<br />
                        Ganpati Enclave, Sirsi Road,<br />
                        Jaipur, Rajasthan, 302041
                      </p>
                   </div>
                </div>
                <div className="lg:col-span-2">
                  <div className="relative h-[400px] sm:h-[600px] w-full overflow-hidden rounded-[3rem] shadow-2xl border-8 border-secondary/50 group">
                    <iframe
                      src={`https://maps.google.com/maps?q=${encodeURIComponent(jaipurMapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                      className="grayscale group-hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                  </div>
                </div>
              </div>
          </section>

          <Faq />
      </div>
    </main>
  );
}