
"use client"

import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[64px] sm:pt-[96px] lg:pt-[128px] bg-background">
        {children}
      </main>
      <Footer />
    </div>
  );
}
