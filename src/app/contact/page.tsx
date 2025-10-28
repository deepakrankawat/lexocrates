

'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Clock, Train, Bus, Car, LifeBuoy, CheckCircle } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import Link from "next/link";
import { AppImage } from "@/components/ui/app-image";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-contact');
  const image1 = PlaceHolderImages.find(img => img.id === 'service-detail-1');
  const image2 = PlaceHolderImages.find(img => img.id === 'service-detail-2');
  const jaipurAddress = "B-1402 Mangalam The Grand Residency, Near Teoler School, Sirsi Road, Jaipur, Rajasthan, India. Pin 302041";
  const jaipurMapQuery = "B-1402 Mangalam The Grand Residency, Sirsi Road, Jaipur, Rajasthan, 302041";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="bg-background">
      <section className="relative bg-primary text-primary-foreground pt-36 pb-20 sm:pt-48 sm:pb-32">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-10"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="font-headline text-5xl md:text-6xl font-bold">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                We're here to help. Reach out to us for any inquiries or to schedule a consultation with our expert team.
            </p>
        </div>
      </section>

      <section id="contact-form" className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Get In Touch</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">Send Us a Message</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-secondary p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                    <h3 className="font-headline text-2xl font-bold text-primary mb-2">Form Submitted!</h3>
                    <p className="text-foreground/80">Thank you for your message. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                        <Label htmlFor="first-name">First Name*</Label>
                        <Input id="first-name" placeholder="John" required/>
                        </div>
                        <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name*</Label>
                        <Input id="last-name" placeholder="Doe" required/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Your Email*</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="How can we help you?" rows={5} />
                    </div>
                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Send Message
                    </Button>
                  </form>
                )}
            </div>
            <div className="space-y-8">
               <Link href="mailto:Support@lexocrates.com" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full">
                      <LifeBuoy className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent">Support</h3>
                      <p className="text-foreground/80 group-hover:text-accent">Support@lexocrates.com</p>
                  </div>
              </Link>
              <Link href="mailto:Sales@Lexocrates.com" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent">Sales</h3>
                      <p className="text-foreground/80 group-hover:text-accent">Sales@Lexocrates.com</p>
                  </div>
              </Link>
              <Link href="mailto:HR@lexocrates.com" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent">HR</h3>
                      <p className="text-foreground/80 group-hovertext-accent">HR@lexocrates.com</p>
                  </div>
              </Link>
              <Link href="#" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full">
                      <Linkedin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent">LinkedIn</h3>
                      <p className="text-foreground/80 group-hover:text-accent">Follow us on LinkedIn</p>
                  </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary pb-20 sm:pb-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
                {image1 && (
                    <div className="relative h-96">
                        <AppImage
                            src={image1.imageUrl}
                            alt={image1.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image1.imageHint}
                        />
                    </div>
                )}
                {image2 && (
                    <div className="relative h-96">
                        <AppImage
                            src={image2.imageUrl}
                            alt={image2.description}
                            fill
                            className="object-cover"
                            data-ai-hint={image2.imageHint}
                        />
                    </div>
                )}
            </div>
        </div>
      </section>

      <section id="headquarters" className="py-20 sm:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-body font-bold text-accent uppercase tracking-wider">Our Main Office</p>
            <h2 className="mt-4 font-headline text-4xl md:text-5xl font-bold text-primary">Jaipur Headquarters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(jaipurMapQuery)}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="bg-accent/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent">Address</h3>
                      <p className="text-foreground/80 group-hover:text-accent">{jaipurAddress}</p>
                  </div>
              </Link>
              <div>
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-full"><Clock className="h-6 w-6 text-accent" /></div>
                  Office Hours
                </h3>
                <div className="ml-16 text-foreground/80 space-y-2">
                    <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM IST</p>
                    <p><strong>Saturday:</strong> 9:00 AM - 1:00 PM IST</p>
                    <p><strong>Sunday:</strong> Closed</p>
                </div>
              </div>
              <div>
                  <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-4">
                    <div className="bg-accent/10 p-3 rounded-full"><Car className="h-6 w-6 text-accent" /></div>
                    Getting Here
                  </h3>
                  <div className="ml-16 text-foreground/80 space-y-4">
                      <div className="flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-accent"><path d="M19 12H5"/><path d="M16 19l-7-7 7-7"/></svg> <strong>By Metro:</strong> Chandpole Metro Station (10 min walk)</div>
                      <div className="flex items-center gap-3"><Train className="h-5 w-5 text-accent" /> <strong>By Train:</strong> Jaipur Junction Railway Station (15 min drive)</div>
                      <div className="flex items-center gap-3"><Bus className="h-5 w-5 text-accent" /> <strong>By Bus:</strong> Sirsi Road Bus Stop (5 min walk)</div>
                      <div className="flex items-center gap-3"><Car className="h-5 w-5 text-accent" /> <strong>By Car:</strong> Parking available in building</div>
                  </div>
              </div>
            </div>
            <div className="relative h-96 md:h-full w-full overflow-hidden">
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

    