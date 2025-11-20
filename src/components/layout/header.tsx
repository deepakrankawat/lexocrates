
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
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
    
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    isScrolled 
      ? 'bg-primary shadow-md' 
      : 'bg-transparent'
  );
  
  const navLinkClasses = (href: string) => cn(
    "relative transition-colors text-white/80 hover:text-white",
    isActive(href) && "text-white font-semibold",
  );

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="flex flex-col items-start">
            <Logo className="w-48" />
            <p className="text-xs -mt-1 text-white/80 transition-colors hidden sm:block">
              Precision in Law, Rooted in Philosophy
            </p>
          </div>
        </Link>
        <nav className="hidden lg:flex lg:items-center lg:gap-8 font-roboto text-base font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={navLinkClasses(link.href)}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-0.5 w-6 bg-accent rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button variant="ghost" size="icon" className="text-white hover:bg-transparent hover:text-white/80" onClick={() => setIsOpen(true)}>
              <Menu className="h-8 w-8" />
              <span className="sr-only">Open menu</span>
            </Button>
            <SheetContent side="right" className="w-full bg-primary border-l-0">
              <SheetHeader className="flex flex-row items-center justify-between">
                 <Link href="/" onClick={() => setIsOpen(false)} className="w-48">
                    <Logo className="text-primary-foreground" />
                  </Link>
                 <SheetTitle className="sr-only">Main Menu</SheetTitle>
                 <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                      <X className="h-8 w-8" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
              </SheetHeader>
              <div className="mt-8 flex h-full flex-col">
                <nav className="flex flex-col gap-6 font-roboto text-xl font-medium">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href} 
                      onClick={() => setIsOpen(false)} 
                      className={cn(
                        "hover:text-accent",
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
