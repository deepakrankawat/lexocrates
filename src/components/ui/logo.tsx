
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.svg"
      alt="Northman Law Logo"
      width={176}
      height={50}
      className={cn("h-auto w-full object-contain", className)}
      priority
    />
  );
}
