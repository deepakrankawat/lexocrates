'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === '/') return null;

  const pathSegments = pathname.split('/').filter((segment) => segment !== '');

  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
        <li className="flex items-center">
          <Link
            href="/"
            className="text-foreground/40 hover:text-accent transition-colors flex items-center gap-1"
          >
            <Home className="h-3 w-3" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const label = segment.replace(/-/g, ' ');

          return (
            <li key={href} className="flex items-center gap-2">
              <ChevronRight className="h-3 w-3 text-foreground/20" />
              {isLast ? (
                <span className="text-accent" aria-current="page">
                  {label}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-foreground/40 hover:text-accent transition-colors"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
