"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Scale, Home, Info, Briefcase, CreditCard, Users, GraduationCap, FileText, Mail, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetClose, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About', icon: Info },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/pricing', label: 'Lex Plan', icon: CreditCard },
  { href: '/team', label: 'Team', icon: Users },
  { href: '/careers', label: 'Careers', icon: GraduationCap },
  { href: '/blog', label: 'Blog', icon: FileText },
  { href: '/contact', label: 'Contact', icon: Mail },
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
      'fixed top-0 z-50 w-full transition-all duration-500 bg-white/95 backdrop-blur-md border-b border-black/5 pt-[env(safe-area-inset-top)]',
      isScrolled ? 'py-0.5 shadow-md' : 'py-1.5 lg:py-3'
    )}>
      <div className="mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-28 xl:px-36 max-w-[1920px]">
        
        <div className="flex-shrink-0">
          <Link href="/" className="group block transition-transform duration-300 hover:scale-105 active:scale-95">
            <Logo variant="dark" className={cn(
              "w-auto transition-all duration-500",
              isScrolled 
                ? "h-10 sm:h-12 lg:h-14 max-w-[190px] sm:max-w-[240px] lg:max-w-none" 
                : "h-12 sm:h-16 lg:h-20 max-w-[220px] sm:max-w-[300px] lg:max-w-none"
            )} />
          </Link>
        </div>
        
        <nav className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.filter(l => l.href !== '/contact').map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-[11px] xl:text-[12px] font-black uppercase tracking-[0.25em] transition-all duration-300 py-2 relative group flex items-center gap-1.5",
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

        <div className="flex items-center gap-3">
          <Button 
            asChild 
            onMouseEnter={() => setIsHoveringContact(true)}
            onMouseLeave={() => setIsHoveringContact(false)}
            className="hidden lg:flex h-11 bg-primary hover:bg-primary/90 text-white font-montserrat font-black text-[11px] uppercase tracking-[0.15em] px-6 rounded-full shadow-lg shadow-primary/20 transition-all duration-500 hover:scale-105 active:scale-95 overflow-hidden"
          >
            <Link href="/contact" className="relative z-10 flex items-center gap-2">
              <motion.div
                animate={{ rotate: isHoveringContact ? [0, -10, 10, 0] : 0 }}
                transition={{ duration: 0.5 }}
              >
                <Scale className="w-4 h-4 text-accent" />
              </motion.div>
              <span>Contact Us</span>
            </Link>
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary hover:bg-black/5 active:scale-90 rounded-full h-11 w-11 sm:h-12 sm:w-12 transition-transform">
                <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md bg-white border-0 p-0 flex flex-col">
              <SheetHeader className="p-5 sm:p-6 flex flex-row items-center justify-between border-b border-black/5 bg-secondary/30">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Logo variant="dark" className="h-12 sm:h-14 w-auto max-w-[220px]" />
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="text-primary hover:bg-black/5 active:scale-90 rounded-full h-10 w-10 sm:h-12 sm:w-12 transition-transform">
                    <X className="h-6 w-6 sm:h-7 sm:w-7" />
                  </Button>
                </SheetClose>
              </SheetHeader>
              <nav className="flex flex-col p-5 sm:p-6 gap-3 flex-grow overflow-y-auto">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-4 rounded-2xl transition-all duration-300 active:scale-[0.98]",
                        active 
                          ? "bg-primary text-white shadow-md shadow-primary/20 font-bold" 
                          : "bg-secondary/40 text-primary hover:bg-secondary font-semibold"
                      )}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className={cn(
                          "p-2.5 rounded-xl transition-colors",
                          active ? "bg-accent text-accent-foreground" : "bg-primary/5 text-accent"
                        )}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-base tracking-tight">{link.label}</span>
                      </div>
                      <ChevronRight className={cn(
                        "w-5 h-5 transition-transform",
                        active ? "text-accent translate-x-1" : "text-primary/30"
                      )} />
                    </Link>
                  );
                })}
              </nav>
              <div className="p-5 sm:p-6 border-t border-black/5 bg-secondary/30 space-y-3">
                <Button 
                  asChild
                  onClick={() => setIsOpen(false)}
                  className="w-full h-14 bg-accent text-accent-foreground font-black text-sm rounded-2xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2"
                >
                  <Link href="/contact">
                    <span>Contact Us</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
