"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetClose, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [isHoveringContact, setIsHoveringContact] = useState(false);
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
      isScrolled ? 'py-1 shadow-md' : 'py-2'
    )}>
      <div className="mx-auto flex items-center justify-between px-4 sm:px-12 lg:px-20 max-w-[1920px]">
        
        <div className="flex-shrink-0">
          <Link href="/" className="group block transition-transform duration-300 hover:scale-105">
            <Logo variant="dark" className="w-auto h-12 sm:h-20 lg:h-28" />
          </Link>
        </div>
        
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-[11px] xl:text-[13px] font-black uppercase tracking-[0.3em] transition-all duration-300 py-2 relative group",
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

        <div className="flex items-center gap-4">
          <div className="relative group">
            <Button 
              asChild 
              onMouseEnter={() => setIsHoveringContact(true)}
              onMouseLeave={() => setIsHoveringContact(false)}
              className="hidden lg:flex h-12 bg-primary hover:bg-primary/90 text-white font-montserrat font-black text-[11px] uppercase tracking-[0.2em] px-8 rounded-full shadow-lg shadow-primary/20 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden group/btn"
            >
              <Link href="/contact" className="relative z-10 flex items-center gap-3">
                <motion.div
                  animate={{ rotate: isHoveringContact ? [0, -10, 10, 0] : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Scale className="w-4 h-4 text-accent" />
                </motion.div>
                <span>Contact Us</span>
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%]"
                  animate={{ translateX: ["-200%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                />
              </Link>
            </Button>
            
            <div className="absolute -inset-1 border border-accent/20 rounded-full animate-pulse-glow pointer-events-none hidden lg:block" />
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary hover:bg-black/5 rounded-full h-10 w-10 sm:h-12 sm:w-12">
                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white border-0 p-0">
              <SheetHeader className="p-6 flex flex-row items-center justify-between border-b border-black/5">
                <Logo variant="dark" className="h-10 w-auto" />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-black/5 rounded-full h-10 w-10">
                    <X className="h-6 w-6" />
                  </Button>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col p-8 gap-6">
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
                <Button asChild className="mt-4 bg-primary text-white font-black text-base py-6 rounded-xl shadow-lg shadow-primary/10" onClick={() => setIsOpen(false)}>
                  <Link href="/contact" className="flex items-center justify-center gap-3">
                    <Scale className="w-5 h-5 text-accent" />
                    Contact Us
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}