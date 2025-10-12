
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative h-10 w-44", className)}>
        <Image
        src="/logo.svg"
        alt="Northman Law Logo"
        fill
        className="object-contain"
        priority
        />
    </div>
  );
}
