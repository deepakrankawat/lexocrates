"use client"

import { PageTransition } from '@/components/animations/page-transition';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageTransition key={pathname}>
        <main className="flex-grow pt-[84px] sm:pt-[108px] lg:pt-[140px] bg-background">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
