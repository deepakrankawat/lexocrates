
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      width="180"
      height="38"
      viewBox="0 0 180 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('w-auto', className)}
    >
      <g clipPath="url(#clip0_102_2)">
        <path d="M12.42,7.58L10,5.16l-2.42,2.42l-1.5-1.5L10,2.16l3.92,3.92L12.42,7.58z M10,24.84l-3.92-3.92l1.5-1.5l2.42,2.42 l2.42-2.42l1.5,1.5L10,24.84z M17.84,18H2.16v-2h15.68V18z" fill="currentColor"/>
        <path d="M4,15l6-10l6,10H4z M10,7.42L7.75,11h4.5L10,7.42z" fill="currentColor"/>
        <path d="M4,17l6,10l6-10H4z M10,24.58L7.75,21h4.5L10,24.58z" fill="currentColor"/>
      </g>
      <text
        x="30"
        y="28"
        fontFamily="Playfair Display, serif"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        Northman Law
      </text>
      <defs>
        <clipPath id="clip0_102_2">
          <rect width="20" height="28" fill="white" transform="translate(0 2)"/>
        </clipPath>
      </defs>
    </svg>
  );
}
