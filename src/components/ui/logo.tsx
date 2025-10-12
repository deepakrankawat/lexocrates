import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      width="140"
      height="38"
      viewBox="0 0 140 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-auto', className)}
    >
      <text
        x="0"
        y="28"
        fontFamily="Playfair Display, serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        Lexocrates
      </text>
    </svg>
  );
}
