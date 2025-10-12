
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="images/logo-light.svg"
      alt="Lexocrates Logo"
      width={240}
      height={65}
      className={cn("h-auto w-full object-contain", className)}
      priority
    />
  );
}
