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
  { href: '/lawyer', label: 'Lawyer' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isLightHeader = pathname === '/about' || pathname === '/free-consultation' || pathname === '/lawyer';

  const textColor = isLightHeader ? 'text-primary-foreground' : 'text-primary';
  const hoverTextColor = isLightHeader ? 'hover:text-primary-foreground/80' : 'hover:text-primary/80';

  return (
    <header className="absolute top-0 z-50 w-full">
      <div className="container mx-auto flex h-24 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className={cn("flex items-center gap-2", textColor)}>
          <Scale className="h-7 w-7" />
          <span className="font-headline text-xl font-bold">Lexocrates</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={cn("text-sm font-medium transition-colors", textColor, hoverTextColor)}>
              {link.label}
            </Link>
          ))}
          <Button
            variant="outline"
            size="sm"
            asChild
            className={cn(
              'transition-colors',
              isLightHeader
                ? 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary'
                : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
            )}
          >
            <Link href="/free-consultation">Free Consultation</Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn(textColor, 'hover:bg-transparent', hoverTextColor)}>
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
                    <span className="font-headline text-lg font-bold text-primary">Lexocrates</span>
                  </Link>
                </div>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-base font-medium text-foreground hover:text-primary">
                      {link.label}
                    </Link>
                  ))}
                   <Link href="/free-consultation" onClick={() => setIsOpen(false)} className="text-base font-medium text-foreground hover:text-primary">
                      Free Consultation
                    </Link>
                </nav>
                <Button asChild variant="outline" size="sm" className="mt-6 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  <Link href="/free-consultation">Free Consultation</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
