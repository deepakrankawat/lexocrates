
'use client';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { servicesList } from '@/lib/services-data';

export function Footer() {
  const footerServices = servicesList;

  return (
    <footer className="bg-primary text-primary-foreground font-lato">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="text-center sm:text-left">
            <div className="flex justify-center sm:justify-start mb-6">
                <Link href="/" className="flex items-center gap-2">
                <Logo className="h-14 w-auto text-background" />
                </Link>
            </div>
            <p className="max-w-xs mx-auto sm:mx-0 text-primary-foreground/80">
              Subscribe to our newsletter for the latest insights on legal outsourcing.
            </p>
            <form className="mt-6 flex w-full max-w-xs mx-auto sm:mx-0 flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Enter your email" className="bg-transparent border-primary-foreground/30 placeholder:text-primary-foreground/60 focus:border-accent" />
              <Button type="submit" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90 font-lato font-bold">Subscribe</Button>
            </form>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-roboto font-medium text-lg text-primary-foreground">Services</h3>
            <ul className="mt-6 space-y-4 text-sm">
              {footerServices.slice(0, 5).map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left pl-14">
            <h3 className="font-roboto font-medium text-lg text-primary-foreground">Company</h3>
            <ul className="mt-6 space-y-4 text-sm">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/lawyer" className="text-primary-foreground/80 hover:text-accent transition-colors">Team</Link></li>
              <li><Link href="/careers" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-roboto font-medium text-lg text-primary-foreground">Contact Info</h3>
            <ul className="mt-6 space-y-4 text-sm text-primary-foreground/80">
              <li><p>B-1402 Mangalam The Grand Residency, Sirsi Road, Jaipur, Rajasthan</p></li>
              <li><p className="break-all">Support@lexocrates.com</p></li>
              <li><p>Mon - Sat: 9:00 am - 6:00 pm IST</p></li>
               <li className="flex items-center gap-2 justify-center sm:justify-start">
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Follow us on LinkedIn
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-primary-foreground/60 font-roboto">
            Copyright &copy; {new Date().getFullYear()} Lexocrates. All Rights Reserved.
          </p>
          <p className="text-xs text-primary-foreground/50 max-w-3xl">
            By using this website, you agree to our <Link href="/terms-and-conditions" className="underline hover:text-accent">Terms &amp; Conditions</Link> and acknowledge our <Link href="/privacy-policy" className="underline hover:text-accent">Privacy Policy</Link> and <Link href="/cookies-policy" className="underline hover:text-accent">Cookies Policy</Link>. We use cookies to enhance user experience and analyze site usage.
          </p>
        </div>
      </div>
    </footer>
  );
}
