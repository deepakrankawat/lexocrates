
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/lawyer', label: 'Lawyer' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    isScrolled ? 'bg-primary text-primary-foreground shadow-md' : 'bg-transparent text-primary-foreground'
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Logo className="h-7 w-auto" />
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-bold transition-colors hover:text-primary-foreground/80">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-transparent" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
            <SheetContent side="right" className="w-full bg-primary">
              <SheetHeader className="flex flex-row items-center justify-between">
                 <Link href="/" onClick={() => setIsOpen(false)}>
                    <Logo className="h-7 w-auto text-primary-foreground" />
                  </Link>
                 <SheetTitle className="sr-only">Main Menu</SheetTitle>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="text-primary-foreground">
                  <X className="h-6 w-6" />
                </Button>
              </SheetHeader>
              <div className="mt-8 flex h-full flex-col">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-primary-foreground hover:text-accent">
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
