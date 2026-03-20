'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  variant?: 'light' | 'dark';
};

export function Logo({ className, variant = 'dark' }: LogoProps) {
  return (
    <div className={cn("relative flex items-center justify-center", className)}>
      <Image
        src="/images/logo-light.svg"
        alt="Lexocrates - Legal Process Outsourcing"
        width={800}
        height={240}
        className={cn(
          "h-full w-auto object-contain transition-all duration-300",
          variant === 'dark' ? "brightness-0" : ""
        )}
        priority // Critical for LCP performance
      />
    </div>
  );
}
