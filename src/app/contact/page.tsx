'use client';

import { Faq } from "@/components/sections/faq";
import { SimpleContactForm } from "@/components/forms/SimpleContactForm";
import { ContactDetails } from "@/components/sections/contact-details";
import { FadeIn } from "@/components/animations/fade-in";
import { ContactProcess } from "@/components/sections/contact-process";

export default function ContactPage() {
  const jaipurMapQuery = "Floor 1 , E-block, E-103 , Ganpati Enclave Jaipur Rajasthan, India. Pin 302041";

  return (
    <main className="bg-background">
      {/* Refined Contact Hero */}
      <section className="relative min-h-[40vh] sm:min-h-[45vh] flex items-center justify-center overflow-hidden bg-primary py-16 sm:py-24">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(184,134,11,0.1)_0%,transparent_50%)]" />
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
        </div>

        <div className="relative z-10 mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px] text-center">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl mb-8 shadow-xl">
                <span className="flex h-1.5 w-1.5 rounded-full bg-accent relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                </span>
                <p className="font-lato font-black text-accent uppercase tracking-[0.4em] text-[10px] sm:text-xs">
                  Connect With Us
                </p>
              </div>
              <h1 className="font-montserrat text-4xl sm:text-6xl lg:text-7xl font-black leading-tight text-white mb-6 lg:mb-8 tracking-tighter">
                Get In <span className="text-accent">Touch</span>
              </h1>
              <p className="text-base sm:text-xl lg:text-2xl text-white/70 font-medium leading-relaxed max-w-2xl mx-auto">
                Reach out to discuss how our strategic legal operations can drive efficiency for your practice.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1400px] fhd:max-w-[1600px] qhd:max-w-[1800px]">
          {/* Main Interaction Area */}
          <section id="contact-form" className="py-16 md:py-24 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div className="space-y-12 sm:space-y-16">
                <div className="text-center lg:text-left">
                  <h2 className="font-lato text-3xl sm:text-5xl font-black text-primary tracking-tight mb-6 sm:mb-8">
                    Let&apos;s Start a <span className="text-accent">Conversation</span>
                  </h2>
                  <p className="text-base sm:text-xl text-foreground/60 font-medium leading-relaxed border-l-0 lg:border-l-4 border-accent/10 lg:pl-8">
                    Whether you have a specific project in mind or just want to learn more about our global capabilities, we are ready to assist.
                  </p>
                </div>
                <ContactDetails />
              </div>
              
              <div className="bg-secondary/30 p-6 sm:p-10 lg:p-12 rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3.5rem] border border-black/5 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <SimpleContactForm />
              </div>
            </div>
          </section>

          {/* Process Stepper */}
          <section className="py-8 lg:py-16">
            <div className="bg-primary rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[4rem] p-8 sm:p-16 lg:p-20 overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -mr-48 -mt-48 transition-all duration-700 group-hover:scale-110" />
                <ContactProcess />
            </div>
          </section>

          {/* Map Section */}
          <section id="headquarters" className="py-16 md:py-24 lg:py-32">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-1 text-center lg:text-left">
                   <p className="font-lato font-black text-accent uppercase tracking-[0.3em] mb-4 text-sm">Our Presence</p>
                   <h2 className="font-lato text-3xl sm:text-4xl font-black text-primary tracking-tight mb-6">Jaipur <br className="hidden lg:block" /><span className="text-accent">Headquarters</span></h2>
                   <p className="text-base sm:text-lg text-foreground/60 font-medium leading-relaxed mb-8">
                      Located in the strategic hub of Jaipur, our operations center serves as the core of our global legal delivery network.
                   </p>
                   <div className="p-6 sm:p-8 bg-secondary rounded-2xl sm:rounded-[2rem] border border-black/5 block text-left">
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">Visit Us At</p>
                      <address className="text-foreground/70 font-medium not-italic leading-relaxed text-sm sm:text-base">
                        Floor 1, E-block, E-103,<br />
                        Ganpati Enclave, Sirsi Road,<br />
                        Jaipur, Rajasthan, 302041
                      </address>
                   </div>
                </div>
                <div className="lg:col-span-2 w-full">
                  <div className="relative h-[300px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden rounded-[2rem] lg:rounded-[3.5rem] shadow-2xl border-2 sm:border-4 lg:border-8 border-secondary/50 group">
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
