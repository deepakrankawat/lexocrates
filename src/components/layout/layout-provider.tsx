"use client"

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[96px] sm:pt-[100px] lg:pt-[112px] bg-background">
        <div className="mx-auto w-full px-6 sm:px-12 lg:px-24 max-w-[1800px] pt-6">
          <Breadcrumbs />
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
