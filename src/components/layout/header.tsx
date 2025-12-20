
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';


// Data for navigation links, now with submenus
const navLinks = [
  { href: '/', label: 'Home' },
  { 
    href: '/about', 
    label: 'About',
    submenu: [
      { href: '/about#our-story', label: 'Our Story' },
      { href: '/about#vision-mission', label: 'Vision & Mission' },
      { href: '/lawyer', label: 'Our Team' },
    ]
  },
  { 
    href: '/services', 
    label: 'Services',
    submenu: [
      { href: '/services/contract-management', label: 'Contract Management' },
      { href: '/services/legal-research', label: 'Legal Research' },
      { 
        href: '/services/corporate-solutions', 
        label: 'Corporate Solutions',
        // Nested submenu example
        submenu: [
            { href: '/services/corporate-solutions#entity-management', label: 'Entity Management' },
            { href: '/services/corporate-solutions#commercial-contracts', label: 'Commercial Contracts' },
        ]
      },
       { href: '/services/regulatory-compliance', label: 'Regulatory Compliance' },
    ]
  },
  { 
    href: '/lawyer', 
    label: 'Team',
    submenu: [
      { href: '/lawyer/yashvardhan-singh', label: 'Yashvardhan Singh' },
      { href: '/lawyer/geetanjali', label: 'Geetanjali' },
      { href: '/lawyer/hameer-singh', label: 'Hameer Singh' },
      { href: '/lawyer/sam-panwar', label: 'Sam Panwar' },
    ]
  },
  { 
    href: '/careers', 
    label: 'Careers',
    submenu: [
      { href: '/careers#open-positions', label: 'Open Positions' },
      { href: '/careers#our-culture', label: 'Our Culture'},
    ]
  },
  { 
    href: '/blog', 
    label: 'Blog'
  },
  { 
    href: '/contact', 
    label: 'Contact'
  },
];


function MobileNav({ closeSheet }: { closeSheet: () => void }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="flex flex-col gap-2 font-roboto text-lg font-medium text-primary-foreground">
      <Accordion type="multiple" className="w-full">
        {navLinks.map((link) => 
          link.submenu ? (
            <AccordionItem key={link.href} value={link.label} className="border-b border-primary-foreground/20">
              <AccordionTrigger className="py-4 hover:no-underline text-left">
                {link.label}
              </AccordionTrigger>
              <AccordionContent className="pl-4">
                <div className="flex flex-col gap-4 mt-2">
                  {link.submenu.map((sublink) => (
                    <Collapsible key={sublink.href}>
                      <div className="flex flex-col gap-4">
                        {sublink.submenu ? (
                          <>
                            <CollapsibleTrigger className='flex items-center justify-between text-base text-primary-foreground/80 hover:text-accent'>
                              {sublink.label} <ChevronRight className="h-4 w-4" />
                            </CollapsibleTrigger>
                            <CollapsibleContent className="pl-4">
                              <div className="flex flex-col gap-4 mt-2">
                                {sublink.submenu.map(nestedLink => (
                                  <Link
                                    key={nestedLink.href}
                                    href={nestedLink.href}
                                    onClick={closeSheet}
                                    className="text-sm text-primary-foreground/70 hover:text-accent"
                                  >
                                    {nestedLink.label}
                                  </Link>
                                ))}
                              </div>
                            </CollapsibleContent>
                          </>
                        ) : (
                          <Link
                            href={sublink.href}
                            onClick={closeSheet}
                            className="text-base text-primary-foreground/80 hover:text-accent"
                          >
                            {sublink.label}
                          </Link>
                        )}
                      </div>
                    </Collapsible>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeSheet}
              className={cn(
                "py-4 border-b border-primary-foreground/20 hover:text-accent",
                isActive(link.href) ? "text-accent" : ""
              )}
            >
              {link.label}
            </Link>
          )
        )}
      </Accordion>
    </nav>
  );
}


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

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className={headerClasses}>
      <div className="flex h-28 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <div className="flex flex-col items-center">
            <Logo className="w-72" />
            <p className="text-xs text-white/80 transition-colors hidden sm:block">
              Precision in Law, Rooted in Philosophy
            </p>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:items-center lg:gap-8 font-roboto text-base font-medium">
          {navLinks.map((link) => (
            <div key={link.href} className="group relative">
              <Link 
                href={link.href} 
                className={cn(
                  "flex items-center gap-1 relative transition-colors text-white/80 hover:text-white",
                  isActive(link.href) && "text-white font-semibold",
                )}
              >
                {link.label}
                {link.submenu && <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />}
                <span className={cn(
                  "absolute -bottom-2 left-0 h-0.5 w-full bg-accent rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out",
                  isActive(link.href) ? "scale-x-100" : ""
                )} />
              </Link>

              {/* Desktop Submenu */}
              {link.submenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white text-primary shadow-lg rounded-md w-56">
                    <ul className="py-2">
                      {link.submenu.map((sublink) => (
                        <li key={sublink.href} className="relative group/sub">
                           <Link href={sublink.href} className="flex items-center justify-between px-4 py-2 hover:bg-secondary">
                            {sublink.label}
                            {sublink.submenu && <ChevronRight className="h-4 w-4" />}
                          </Link>
                          
                          {/* Nested Submenu */}
                          {sublink.submenu && (
                              <div className="absolute top-0 left-full ml-1 opacity-0 group-hover/sub:opacity-100 transition-opacity duration-300 pointer-events-none group-hover/sub:pointer-events-auto">
                                <div className="bg-white text-primary shadow-lg rounded-md w-56">
                                  <ul className="py-2">
                                    {sublink.submenu.map(nestedLink => (
                                        <li key={nestedLink.href}>
                                          <Link href={nestedLink.href} className="block px-4 py-2 hover:bg-secondary">
                                            {nestedLink.label}
                                          </Link>
                                        </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
        
        {/* Mobile Navigation Trigger */}
        <div className="lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <Button variant="ghost" size="icon" className="text-white hover:bg-transparent hover:text-white/80" onClick={() => setIsOpen(true)}>
              <Menu className="h-8 w-8" />
              <span className="sr-only">Open menu</span>
            </Button>
            <SheetContent side="right" className="w-full bg-primary border-l-0 overflow-y-auto">
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
              <div className="mt-8">
                <MobileNav closeSheet={() => setIsOpen(false)} />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
