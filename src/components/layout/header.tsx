"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/lawyer', label: 'Team' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => (href === '/' ? pathname === href : pathname.startsWith(href));

  return (
    <header className={cn(
      'fixed top-0 z-50 w-full transition-all duration-500',
      isScrolled ? 'bg-primary/95 backdrop-blur-xl py-4 shadow-2xl' : 'bg-transparent py-8'
    )}>
      <div className="mx-auto flex items-center justify-between px-6 sm:px-12 lg:px-24 max-w-[1800px]">
        
        <div className="flex-shrink-0">
          <Link href="/" className="group block transition-transform duration-300 hover:scale-105">
            <Logo className="w-auto h-10 sm:h-12 fhd:h-14" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-sm xl:text-base font-black uppercase tracking-[0.2em] transition-all duration-300 py-2",
                    isActive(link.href) ? "text-accent" : "text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <Button asChild className="hidden lg:flex bg-accent hover:bg-white hover:text-primary text-white font-montserrat font-black text-xs uppercase tracking-widest px-10 py-7 rounded-full shadow-2xl shadow-accent/20 transition-all duration-500 hover:scale-105">
            <Link href="/contact">Get Started</Link>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10 rounded-full h-14 w-14" onClick={() => setIsOpen(true)}>
              <Menu className="h-10 w-10" />
              <span className="sr-only">Open menu</span>
            </Button>
            <SheetContent side="right" className="w-full bg-primary border-0 p-0">
              <SheetHeader className="p-8 flex flex-row items-center justify-between border-b border-white/5">
                <Logo className="h-8 w-auto" />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-full h-12 w-12">
                    <X className="h-8 w-8" />
                  </Button>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col p-8 gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-3xl font-black tracking-tight transition-colors",
                      isActive(link.href) ? "text-accent" : "text-white/70 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-8 bg-accent text-white font-black text-lg py-8 rounded-2xl" onClick={() => setIsOpen(false)}>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
