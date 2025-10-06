import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from '@/components/ui/logo';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-1 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-accent">
              <Logo className="h-7 w-auto" />
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molesti.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
            <div>
              <h3 className="font-headline font-semibold uppercase tracking-wider text-primary-foreground/90">Services</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/services/detail" className="text-sm text-primary-foreground/80 hover:text-accent">Business Law</Link></li>
                <li><Link href="/services/detail" className="text-sm text-primary-foreground/80 hover:text-accent">Education Law</Link></li>
                <li><Link href="/services/detail" className="text-sm text-primary-foreground/80 hover:text-accent">Legal Consultan</Link></li>
                <li><Link href="/services/detail" className="text-sm text-primary-foreground/80 hover:text-accent">General Lawyer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold uppercase tracking-wider text-primary-foreground/90">Page</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/lawyer" className="text-sm text-primary-foreground/80 hover:text-accent">Lawyer</Link></li>
                <li><Link href="/free-consultation" className="text-sm text-primary-foreground/80 hover:text-accent">Appointment</Link></li>
                <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-accent">Documentation</Link></li>
                <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-accent">Cases</Link></li>
                <li><Link href="#" className="text-sm text-primary-foreground/80 hover:text-accent">News</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold uppercase tracking-wider text-primary-foreground/90">Contact Us</h3>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-1 shrink-0" />
                  <span>+22 7272 8282</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-1 shrink-0" />
                  <span>7889 Mechanic Rd. Miami, FL 33125</span>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-1 shrink-0" />
                  <span>contact@lexocrates.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>Copyright &copy; {new Date().getFullYear()} Lexocrates. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
