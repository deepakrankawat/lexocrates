
'use client';

import { PageTransition } from '@/components/animations/page-transition';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/header';

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageTransition key={pathname}>
        <div className="flex-grow">{children}</div>
      </PageTransition>
    </div>
  );
}
