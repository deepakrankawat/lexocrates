import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Logo className="h-8 w-auto text-background" />
            </Link>
            <p className="mt-6 max-w-sm text-primary-foreground/80">
              Join our mailing list to stay up to date and get notices about our new releases.
            </p>
             <form className="mt-6 flex gap-2">
              <input type="email" placeholder="Enter your email" className="w-full rounded-md border-gray-700 bg-gray-800 p-3 text-white focus:ring-accent" />
              <Button type="submit" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </form>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
            <div>
              <h3 className="font-headline font-bold text-lg text-primary-foreground">Services</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="/services/detail" className="text-primary-foreground/80 hover:text-accent transition-colors">Business Law</Link></li>
                <li><Link href="/services/detail" className="text-primary-foreground/80 hover:text-accent transition-colors">Education Law</Link></li>
                <li><Link href="/services/detail" className="text-primary-foreground/80 hover:text-accent transition-colors">Legal Consultant</Link></li>
                <li><Link href="/services/detail" className="text-primary-foreground/80 hover:text-accent transition-colors">General Lawyer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-primary-foreground">About</h3>
              <ul className="mt-6 space-y-4 text-sm">
                <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
                <li><Link href="/lawyer" className="text-primary-foreground/80 hover:text-accent transition-colors">Lawyers</Link></li>
                 <li><Link href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Cases</Link></li>
                <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-bold text-lg text-primary-foreground">Contact Info</h3>
              <ul className="mt-6 space-y-4 text-sm text-primary-foreground/80">
                <li><p>7889 Mechanic Rd. Miami, FL 33125</p></li>
                <li><p>+22 7272 8282</p></li>
                <li><p>contact@northmanlaw.com</p></li>
                <li><p>Mon - Fri: 8:00 am - 5:00 pm</p></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            Copyright &copy; {new Date().getFullYear()} Northman Law. All Rights Reserved.
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
    </footer>
  );
}
