
'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContactPage() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-background-lady-justice');
  const mapImage = PlaceHolderImages.find(img => img.id === 'contact-map');

  return (
    <main className="bg-background">
      <section className="relative bg-primary text-primary-foreground pt-36 pb-20 sm:pt-48 sm:pb-32">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover opacity-20"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <h1 className="font-headline text-6xl md:text-7xl font-bold">Contact us</h1>
              <div className="flex items-center gap-8">
                  <div className="w-px h-24 bg-primary-foreground/50 hidden md:block"></div>
                  <p className="max-w-2xl text-lg text-primary-foreground/80">
                      Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida
                  </p>
              </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-20 sm:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-headline text-5xl font-bold text-primary mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name*</Label>
                  <Input id="first-name" placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name*</Label>
                  <Input id="last-name" placeholder="Enter last name" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="phone">Your Phone*</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email*</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message <span className="text-muted-foreground">(optional)</span></Label>
                <Textarea id="message" placeholder="Enter message" rows={6} />
              </div>
              <Button type="submit" size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Send Message
              </Button>
            </form>
            <div className="relative h-full min-h-[400px]">
              {mapImage && (
                <Image
                  src={mapImage.imageUrl}
                  alt={mapImage.description}
                  fill
                  className="object-cover"
                  data-ai-hint={mapImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="flex items-center justify-center gap-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <p>+22 7272 8282</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <MapPin className="h-6 w-6 text-primary" />
                    <p>7889 Mechanic Rd. Miami, FL 33125</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <p>contact@lexocrates.com</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                    <Clock className="h-6 w-6 text-primary" />
                    <p>07.00 am - 09.00 pm</p>
                </div>
            </div>
        </div>
      </section>
    </main>
  );
}
