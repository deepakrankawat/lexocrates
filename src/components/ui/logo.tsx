import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo-light.svg"
      alt="Lexocrates Logo"
      width={140}
      height={38}
      className={cn('w-auto', className)}
      priority
    />
  );
}
