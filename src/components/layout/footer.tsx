import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Scale } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-accent" />
              <span className="font-headline text-2xl font-bold">Northman Law</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Your trusted partner in navigating the complexities of the legal world.
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
          
          <div className="mt-8 grid grid-cols-2 gap-8 md:col-span-3 md:mt-0">
            <div>
              <h3 className="font-headline font-semibold uppercase tracking-wider text-primary-foreground/90">Solutions</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#services" className="text-sm text-primary-foreground/80 hover:text-accent">Corporate Law</Link></li>
                <li><Link href="#services" className="text-sm text-primary-foreground/80 hover:text-accent">Family Law</Link></li>
                <li><Link href="#services" className="text-sm text-primary-foreground/80 hover:text-accent">Real Estate</Link></li>
                <li><Link href="#services" className="text-sm text-primary-foreground/80 hover:text-accent">Intellectual Property</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold uppercase tracking-wider text-primary-foreground/90">Contact Us</h3>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                <li>123 Law Street, Justice City, 10101</li>
                <li>(555) 123-4567</li>
                <li>contact@northmanlaw.com</li>
                <li>Mon-Fri: 9am - 5pm</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Northman Law. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
