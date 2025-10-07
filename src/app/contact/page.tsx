'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
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
                className="object-cover opacity-10"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="font-headline text-5xl md:text-6xl font-bold">Contact Us</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                We're here to help. Reach out to us for any legal inquiries or to schedule a consultation with our expert team.
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
            <div className="bg-secondary p-8 rounded-lg">
                <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                    <Label htmlFor="first-name">First Name*</Label>
                    <Input id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name*</Label>
                    <Input id="last-name" placeholder="Doe" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Your Email*</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="How can we help you?" rows={5} />
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                </Button>
                </form>
            </div>
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-primary">Our Office</h3>
                        <p className="text-foreground/80">7889 Mechanic Rd. Miami, FL 33125</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-primary">Phone</h3>
                        <p className="text-foreground/80">+22 7272 8282</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-primary">Email</h3>
                        <p className="text-foreground/80">contact@northmanlaw.com</p>
                    </div>
                </div>
                <div className="relative h-80 w-full rounded-lg overflow-hidden mt-8">
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
        </div>
      </section>
    </main>
  );
}
