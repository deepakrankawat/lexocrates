"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Scale, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isLightHeader = pathname === '/about';

  const textColor = isLightHeader ? 'text-primary-foreground' : 'text-primary';
  const hoverTextColor = isLightHeader ? 'text-primary-foreground/80' : 'text-primary/80';
  const buttonHoverBg = isLightHeader ? 'hover:bg-primary-foreground/10' : 'hover:bg-accent hover:text-accent-foreground';
  const buttonBorderColor = isLightHeader ? 'border-primary-foreground' : 'border-accent';
  const buttonTextColor = isLightHeader ? 'text-primary-foreground' : 'text-accent';


  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className={cn("flex items-center gap-2", textColor)}>
          <Scale className="h-7 w-7" />
          <span className="font-headline text-xl font-bold">Northman Law</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors", textColor, hoverTextColor)}>
              {link.label}
            </Link>
          ))}
          <Button variant="outline" size="sm" className={cn(buttonBorderColor, buttonTextColor, buttonHoverBg, {
            'hover:text-primary': !isLightHeader,
            'hover:text-accent-foreground': isLightHeader
          })}>
            Free Consultation
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(textColor, 'hover:'+textColor)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col">
                <div className="mb-6 flex items-center justify-between">
                  <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <Scale className="h-6 w-6 text-primary" />
                    <span className="font-headline text-lg font-bold text-primary">Northman Law</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <Button variant="outline" size="sm" className="mt-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Free Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
