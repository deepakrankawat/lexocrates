import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-8 w-auto", className)}
      {...props}
    >
      <g fill="currentColor">
        <path d="M18,17h-2v-4c0-2.209,1.791-4,4-4h2v2h-2c-1.105,0-2,0.895-2,2V17z" />
        <path d="M12,19c-1.105,0-2,0.895-2,2v17h20V21c0-1.105-0.895-2-2-2H12z M12,36V21h18v15H12z" />
        <path d="M40,13h-2v-2h2c1.105,0,2-0.895,2-2v-2c0-1.105-0.895-2-2-2h-7c-1.105,0-2,0.895-2,2v2h2v-2h5v2  C38,12.105,38.895,13,40,13z" />
        <path d="M28,15c0,1.105,0.895,2,2,2h7c1.105,0,2-0.895,2-2v-2c0-1.105-0.895-2-2-2h-2v2h2v2h-5v-2c0-1.105-0.895-2-2-2h-2V15z" />
        <rect x="6" y="24" width="2" height="8" />
        <rect x="40" y="24" width="2" height="8" />
        <rect x="4" y="22" width="6" height="2" />
        <rect x="38" y="22" width="6" height="2" />
        <rect x="23" y="19" width="2" height="19" />
      </g>
    </svg>
  );
}