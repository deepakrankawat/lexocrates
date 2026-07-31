"use client"

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { usePathname } from 'next/navigation';

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
