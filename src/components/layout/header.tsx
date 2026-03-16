
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
      'fixed top-0 z-50 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-black/5',
      isScrolled ? 'py-2' : 'py-3'
    )}>
      <div className="mx-auto flex items-center justify-between px-6 sm:px-12 lg:px-20 max-w-[1920px]">
        
        <div className="flex-shrink-0">
          <Link href="/" className="group block transition-transform duration-300 hover:scale-105">
            <Logo variant="dark" className="w-auto h-8 sm:h-10 lg:h-11" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-[10px] xl:text-xs font-black uppercase tracking-[0.2em] transition-all duration-300 py-1",
                    isActive(link.href) ? "text-accent" : "text-primary/70 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden lg:flex h-9 bg-primary hover:bg-accent text-white font-montserrat font-black text-[9px] uppercase tracking-[0.2em] px-6 rounded-full shadow-lg shadow-primary/10 transition-all duration-300 hover:scale-105">
            <Link href="/contact">Get Started</Link>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary hover:bg-black/5 rounded-full h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white border-0 p-0">
              <SheetHeader className="p-6 flex flex-row items-center justify-between border-b border-black/5">
                <Logo variant="dark" className="h-8 w-auto" />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-black/5 rounded-full h-9 w-9">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col p-6 gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-xl font-black tracking-tighter transition-colors uppercase",
                      isActive(link.href) ? "text-accent" : "text-primary/70 hover:text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 bg-primary text-white font-black text-sm py-5 rounded-xl" onClick={() => setIsOpen(false)}>
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
