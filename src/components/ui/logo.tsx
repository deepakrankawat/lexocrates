
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
      width={180}
      height={38}
      className={cn('w-auto', className)}
      priority
    />
  );
}
