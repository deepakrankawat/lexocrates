
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
        {/* Adjusted padding-top to perfectly clear the header without excess blank space */}
        <main className="flex-grow pt-[64px] sm:pt-[72px] lg:pt-[88px]">
          {children}
        </main>
      </PageTransition>
      <Footer />
    </div>
  );
}
