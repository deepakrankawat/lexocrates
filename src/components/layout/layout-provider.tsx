
'use client';

import { PageTransition } from '@/components/animations/page-transition';
import { usePathname } from 'next/navigation';
import { Header } from '@/components/layout/header';

export function LayoutProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <PageTransition key={pathname}>
        <div className="bg-white shadow-2xl">{children}</div>
      </PageTransition>
    </>
  );
}
