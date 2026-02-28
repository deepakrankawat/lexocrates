'use client';
import Link from 'next/link';
import { Linkedin } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { servicesList } from '@/lib/services-data';

export function Footer() {
  const footerServices = servicesList;

  return (
    <footer className="bg-primary text-primary-foreground font-lato">
      <div className="mx-auto px-6 py-24 sm:px-12 lg:px-24 max-w-[1800px]">
        <div className="grid grid-cols-1 gap-16 text-center sm:text-left md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <div className="flex justify-center sm:justify-start mb-8">
                <Link href="/" className="flex items-center gap-2 group">
                  <Logo className="h-16 w-auto text-background transition-transform duration-300 group-hover:scale-105" />
                </Link>
            </div>
            <p className="text-primary-foreground/60 leading-relaxed text-sm max-w-xs mx-auto sm:mx-0">
              Empowering law firms and corporate legal departments with elite Indian expertise and global technological precision.
            </p>
          </div>

          <div>
            <h3 className="font-roboto font-black uppercase tracking-[0.2em] text-xs text-accent mb-10">Our Services</h3>
            <ul className="space-y-4 text-sm">
              {footerServices.slice(0, 5).map(service => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-roboto font-black uppercase tracking-[0.2em] text-xs text-accent mb-10">Company</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">About Us</Link></li>
              <li><Link href="/lawyer" className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">Expert Team</Link></li>
              <li><Link href="/careers" className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">Careers</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">Insights</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors font-medium">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-roboto font-black uppercase tracking-[0.2em] text-xs text-accent mb-10">Global Access</h3>
            <ul className="space-y-6 text-sm text-primary-foreground/80">
              <li className="flex flex-col gap-1">
                <span className="text-accent font-bold uppercase text-[10px]">Headquarters</span>
                <p className="font-medium">B-1402 Mangalam The Grand Residency, Jaipur, India</p>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-accent font-bold uppercase text-[10px]">Email Support</span>
                <p className="font-medium break-all">Support@lexocrates.com</p>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start pt-2">
                <Link href="https://www.linkedin.com/company/lexocrates-legal-services-pvt-ltd/" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-white transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-12 flex flex-col items-center gap-6 text-center">
          <p className="text-sm text-primary-foreground/40 font-medium">
            Copyright &copy; {new Date().getFullYear()} Lexocrates Legal Services Pvt Ltd. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-primary-foreground/30">
            <Link href="/terms-and-conditions" className="hover:text-accent transition-colors">Terms &amp; Conditions</Link>
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/cookies-policy" className="hover:text-accent transition-colors">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
