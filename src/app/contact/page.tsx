
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="bg-background">
      <section className="relative bg-primary text-primary-foreground pt-36 pb-20 sm:pt-48 sm:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="font-headline text-6xl md:text-7xl font-bold">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            We're here to help. Reach out to us for a free consultation.
          </p>
        </div>
      </section>

      <section id="contact-form" className="py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <Input placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Input placeholder="Subject" />
                <Textarea placeholder="Your Message" rows={6} />
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </div>
            <div>
              <h2 className="font-headline text-4xl font-bold text-primary mb-6">Contact Information</h2>
              <div className="space-y-6 text-foreground/80">
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary">Email</h3>
                    <p>contact@northmanlaw.com</p>
                    <p>support@northmanlaw.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary">Phone</h3>
                    <p>(555) 123-4567</p>
                    <p>Mon-Fri: 9am - 5pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary">Office Address</h3>
                    <p>123 Law Street, Justice City, 10101</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
