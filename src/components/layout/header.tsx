"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/ui/logo';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

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
];

function MobileNav({ closeSheet }: { closeSheet: () => void }) {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

  const mobileLinks = [...navLinks, { href: '/contact', label: 'Contact' }];

  return (
    <nav className="flex flex-col gap-2 text-xl font-semibold text-primary-foreground font-roboto p-4">
      {mobileLinks.map((link) => (
        <div key={link.href} className="border-b border-primary-foreground/10 last:border-0">
          {!link.submenu ? (
            <Link
              href={link.href}
              onClick={closeSheet}
              className={cn(
                "block w-full py-5 text-left hover:text-accent transition-colors",
                isActive(link.href) ? "text-accent" : ""
              )}
            >
              {link.label}
            </Link>
          ) : (
            <Collapsible key={link.href} className="w-full">
              <CollapsibleTrigger className="flex w-full items-center justify-between py-5 text-left hover:text-accent [&[data-state=open]>svg]:rotate-180 transition-colors">
                <span>{link.label}</span>
                <ChevronDown className="h-5 w-5 transition-transform duration-300" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4 pb-4">
                <div className="flex flex-col gap-4 mt-2">
                  {link.submenu.map((sublink) => (
                    <div key={sublink.href}>
                      {!sublink.submenu ? (
                        <Link
                          href={sublink.href}
                          onClick={closeSheet}
                          className="block text-lg font-medium text-primary-foreground/80 hover:text-accent transition-colors"
                        >
                          {sublink.label}
                        </Link>
                      ) : (
                        <Collapsible key={sublink.href}>
                          <CollapsibleTrigger className="flex w-full items-center justify-between text-left text-lg font-medium text-primary-foreground/80 hover:text-accent [&[data-state=open]>svg]:rotate-90 transition-colors">
                            <span>{sublink.label}</span>
                            <ChevronRight className="h-5 w-5 transition-transform duration-300" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-4">
                            <div className="flex flex-col gap-4 mt-2 border-l border-white/10 pl-4">
                              {sublink.submenu.map((nestedLink) => (
                                <Link
                                  key={nestedLink.href}
                                  href={nestedLink.href}
                                  onClick={closeSheet}
                                  className="block text-base text-primary-foreground/70 hover:text-accent transition-colors"
                                >
                                  {nestedLink.label}
                                </Link>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      )}
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          )}
        </div>
      ))}
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
    'fixed top-0 z-50 w-full transition-all duration-500',
    isScrolled 
      ? 'bg-primary/95 backdrop-blur-md py-2 shadow-2xl' 
      : 'bg-transparent py-4'
  );

  const isActive = (href: string) => {
    if (href === '/') return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header className={headerClasses}>
      <div className="mx-auto flex h-16 items-center justify-between px-6 sm:px-8 lg:px-12 max-w-[1800px] transition-all duration-500">
        
        <div className="w-1/4 flex items-center">
          <Link href="/" className="group flex flex-col justify-center items-center transition-transform duration-300 hover:scale-105">
            <Logo className="w-auto h-12 laptop:h-14 fhd:h-16 transition-all" />
          </Link>
        </div>
        
        <div className="hidden lg:flex flex-1 justify-center items-center">
          <nav className="flex items-center gap-10 font-roboto text-lg font-semibold tracking-wide">
            {navLinks.map((link) => (
              <div key={link.href} className="group relative">
                <Link 
                  href={link.href} 
                  className={cn(
                    "flex items-center gap-1 relative transition-all duration-300 text-white/70 hover:text-white whitespace-nowrap py-2",
                    isActive(link.href) && "text-white",
                  )}
                >
                  {link.label}
                  {link.submenu && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                  <span className={cn(
                    "absolute -bottom-1 left-0 h-0.5 bg-accent rounded-full transition-all duration-500 ease-out",
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>

                {link.submenu && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-white text-primary shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl w-64 border border-black/5 overflow-hidden">
                      <ul className="py-3">
                        {link.submenu.map((sublink) => (
                          <li key={sublink.href} className="relative group/sub">
                            <Link href={sublink.href} className="flex items-center justify-between px-6 py-3 hover:bg-secondary text-base font-medium transition-colors">
                              {sublink.label}
                              {sublink.submenu && <ChevronRight className="h-4 w-4" />}
                            </Link>
                            
                            {sublink.submenu && (
                                <div className="absolute top-0 left-full ml-1 opacity-0 group-hover/sub:opacity-100 transition-all duration-300 pointer-events-none group-hover/sub:pointer-events-auto transform -translate-x-2 group-hover/sub:translate-x-0">
                                  <div className="bg-white text-primary shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-2xl w-64 border border-black/5 overflow-hidden">
                                    <ul className="py-3">
                                      {sublink.submenu.map(nestedLink => (
                                          <li key={nestedLink.href}>
                                            <Link href={nestedLink.href} className="block px-6 py-3 hover:bg-secondary text-sm font-medium transition-colors">
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
        </div>

        <div className="w-1/4 flex items-center justify-end gap-6">
          <Button asChild className="hidden lg:flex bg-accent hover:bg-accent/90 text-white font-montserrat font-extrabold px-8 py-6 rounded-full shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105 active:scale-95">
            <Link href="/contact">Contact Us</Link>
          </Button>
          
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white rounded-full h-12 w-12" onClick={() => setIsOpen(true)}>
                <Menu className="h-8 w-8" />
                <span className="sr-only">Open menu</span>
              </Button>
              <SheetContent side="right" className="w-full bg-primary border-0 p-0 overflow-y-auto">
                <SheetHeader className="p-6 flex flex-row items-center justify-between border-b border-white/10">
                   <Link href="/" onClick={() => setIsOpen(false)} className="w-40 transition-transform duration-300 hover:scale-105">
                      <Logo className="text-primary-foreground h-10 w-auto" />
                    </Link>
                   <SheetTitle className="sr-only">Main Menu</SheetTitle>
                   <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-white/10 rounded-full h-12 w-12">
                        <X className="h-8 w-8" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetClose>
                </SheetHeader>
                <div className="mt-4">
                  <MobileNav closeSheet={() => setIsOpen(false)} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}