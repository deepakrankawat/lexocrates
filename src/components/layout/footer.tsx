
'use client';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { servicesList } from '@/lib/services-data';
import { Input } from '@/components/ui/input';
import { FadeIn } from '../animations/fade-in';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ];

  const footerServices = servicesList.slice(0, 4);

  return (
    <footer className="bg-primary text-primary-foreground">
      <FadeIn>
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <Logo className="h-12 w-auto text-background" />
              </Link>
              <p className="mt-6 max-w-sm text-primary-foreground/80">
                Subscribe to our newsletter for the latest insights on legal outsourcing and industry trends.
              </p>
              <form className="mt-6 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-transparent border-primary-foreground/30 placeholder:text-primary-foreground/60 focus:border-accent" />
                <Button type="submit" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
              </form>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
              <div>
                <h3 className="font-headline font-bold text-lg text-primary-foreground">Services</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  {footerServices.map(service => (
                    <li key={service.slug}>
                      <Link href={`/services/${service.slug}`} className="text-primary-foreground/80 hover:text-accent transition-colors">
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-primary-foreground">Company</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
                  <li><Link href="/lawyer" className="text-primary-foreground/80 hover:text-accent transition-colors">Our Team</Link></li>
                  <li><Link href="/careers" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</Link></li>
                  <li><Link href="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">Blog</Link></li>
                  <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-headline font-bold text-lg text-primary-foreground">Contact Info</h3>
                <ul className="mt-6 space-y-4 text-sm text-primary-foreground/80">
                  <li><p>7889 Mechanic Rd. Miami, FL 33125</p></li>
                  <li><p>+22 7272 8282</p></li>
                  <li><p>contact@lexocrates.com</p></li>
                  <li><p>Mon - Fri: 9:00 am - 6:00 pm EST</p></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-primary-foreground/60">
              Copyright &copy; {new Date().getFullYear()} Lexocrates. All Rights Reserved.
            </p>
            <div className="mt-4 sm:mt-0 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
