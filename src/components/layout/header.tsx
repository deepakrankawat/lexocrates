"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/team', label: 'Team' },
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
      'fixed top-0 z-50 w-full transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-black/5',
      isScrolled ? 'py-4 sm:py-5 shadow-md' : 'py-6 sm:py-8'
    )}>
      <div className="mx-auto flex items-center justify-between px-6 sm:px-12 lg:px-20 max-w-[1920px]">
        
        <div className="flex-shrink-0">
          <Link href="/" className="group block transition-transform duration-300 hover:scale-105">
            <Logo variant="dark" className="w-auto h-12 sm:h-20 lg:h-24" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-sm xl:text-base font-black uppercase tracking-[0.25em] transition-all duration-300 py-2 relative group",
                    isActive(link.href) ? "text-accent" : "text-primary/70 hover:text-primary"
                  )}
                >
                  {link.label}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-accent transition-transform duration-300 origin-left",
                    isActive(link.href) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-6">
          <Button asChild className="hidden lg:flex h-14 bg-primary hover:bg-accent text-white font-montserrat font-black text-sm uppercase tracking-[0.2em] px-10 rounded-full shadow-xl shadow-primary/20 transition-all duration-300 hover:scale-105 active:scale-95">
            <Link href="/contact">Get Started</Link>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary hover:bg-black/5 rounded-full h-14 w-14">
                <Menu className="h-8 w-8" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white border-0 p-0">
              <SheetHeader className="p-8 flex flex-row items-center justify-between border-b border-black/5">
                <Logo variant="dark" className="h-12 w-auto" />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-black/5 rounded-full h-12 w-12">
                    <X className="h-6 w-6" />
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
                      "text-2xl font-black tracking-tighter transition-colors uppercase",
                      isActive(link.href) ? "text-accent" : "text-primary/70 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-6 bg-primary text-white font-black text-lg py-7 rounded-2xl shadow-xl shadow-primary/10" onClick={() => setIsOpen(false)}>
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
