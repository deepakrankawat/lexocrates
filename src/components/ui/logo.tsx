
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
      height={40}
      className={cn("object-contain", className)}
      priority
    />
  );
}
