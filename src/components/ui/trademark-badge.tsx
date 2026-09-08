import React from 'react';
import { cn } from '@/lib/utils';

export interface TrademarkBadgeProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number | string;
}

/**
 * Circled TM (Trade Mark) symbol badge matching official Lexocrates trademark styling.
 */
export function TrademarkBadge({ className, size, ...props }: TrademarkBadgeProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      fill="none"
      aria-label="Trademark"
      role="img"
      className={cn("inline-block shrink-0 align-middle", className)}
      style={size ? { width: size, height: size } : undefined}
      {...props}
    >
      {/* Outer circular boundary */}
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="5.5" fill="none" />
      {/* Letter 'T' */}
      <path d="M 21 34.5 h 22.5 v 5.2 h -8.6 v 26.3 h -5.3 v -26.3 h -8.6 z" fill="currentColor" />
      {/* Letter 'M' */}
      <path d="M 48 34.5 h 6.2 l 9.8 22 l 9.8 -22 h 6.2 v 31.5 h -5.2 v -23.2 l -8.8 19.8 h -4 l -8.8 -19.8 v 23.2 h -5.2 z" fill="currentColor" />
    </svg>
  );
}

export default TrademarkBadge;
