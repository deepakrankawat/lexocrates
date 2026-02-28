
'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/images/logo-light.svg"
        alt="Lexocrates Logo"
        width={240}
        height={70}
        className="h-full w-auto object-contain brightness-0"
        priority
      />
    </div>
  );
}
