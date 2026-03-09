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
      'fixed top-0 z-50 w-full transition-all duration-500 bg-white border-b border-black/5 shadow-sm',
      isScrolled ? 'py-3' : 'py-5'
    )}>
      <div className="mx-auto flex items-center justify-between px-6 sm:px-12 lg:px-20 fhd:px-20 max-w-[1920px]">
        
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link href="/" className="group block transition-transform duration-300 hover:scale-105">
            <Logo className="w-auto h-10 sm:h-12 fhd:h-14" />
          </Link>
        </div>
        
        {/* Centered Navigation */}
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-xs xl:text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 py-2",
                    isActive(link.href) ? "text-accent" : "text-primary/70 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Action Button & Mobile Menu Trigger */}
        <div className="flex items-center gap-6">
          <Button asChild className="hidden lg:flex bg-primary hover:bg-accent text-white font-montserrat font-black text-xs uppercase tracking-[0.2em] px-8 py-6 rounded-full shadow-lg shadow-primary/20 transition-all duration-500 hover:scale-105 active:scale-95">
            <Link href="/contact">Get Started</Link>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button variant="ghost" size="icon" className="lg:hidden text-primary hover:bg-black/5 rounded-full h-12 w-12" onClick={() => setIsOpen(true)}>
              <Menu className="h-8 w-8" />
              <span className="sr-only">Open menu</span>
            </Button>
            <SheetContent side="right" className="w-full bg-white border-0 p-0">
              <SheetHeader className="p-8 flex flex-row items-center justify-between border-b border-black/5">
                <Logo className="h-10 w-auto" />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-black/5 rounded-full h-12 w-12">
                    <X className="h-8 w-8" />
                  </Button>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col p-8 gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-3xl font-black tracking-tighter transition-colors uppercase",
                      isActive(link.href) ? "text-accent" : "text-primary/70 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-8 bg-primary text-white font-black text-lg py-8 rounded-2xl" onClick={() => setIsOpen(false)}>
                  <Link href="/contact">Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}