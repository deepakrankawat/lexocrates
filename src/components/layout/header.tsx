
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
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/lawyer', label: 'Our Team' },
  { href: '/careers', label: 'Careers' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Set initial state after mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    isScrolled 
      ? 'bg-primary shadow-md text-primary-foreground' 
      : 'bg-transparent text-white'
  );

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-28 md:h-32 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="flex flex-col items-start">
            <Logo className="w-48 md:w-64" />
            <p className={cn("text-sm -mt-2 transition-colors hidden md:block", isScrolled ? "text-primary-foreground/80" : "text-white/80")}>
              Precision in Law, Rooted in Philosophy
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={cn(
                "relative text-base font-bold transition-colors hover:text-white/80",
                !isActive(link.href) && "text-white/80",
                isScrolled && "hover:text-primary-foreground/80",
                isScrolled && !isActive(link.href) && "text-primary-foreground/60",
                isActive(link.href) && "text-white",
                isActive(link.href) && isScrolled && "text-primary-foreground",
              )}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button variant="ghost" size="icon" className="text-white hover:bg-transparent" onClick={() => setIsOpen(true)}>
              <Menu className="h-12 w-12" />
              <span className="sr-only">Open menu</span>
            </Button>
            <SheetContent side="right" className="w-full bg-primary">
              <SheetHeader className="flex flex-row items-center justify-between">
                 <Link href="/" onClick={() => setIsOpen(false)} className="w-48">
                    <Logo className="text-primary-foreground" />
                  </Link>
                 <SheetTitle className="sr-only">Main Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 flex h-full flex-col">
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className={cn(
                        "text-xl font-bold text-primary-foreground hover:text-accent",
                        isActive(link.href) ? "text-accent" : "text-primary-foreground"
                      )}
                    >
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
