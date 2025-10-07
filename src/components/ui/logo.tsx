import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 40"
      fill="none"
      className={cn("h-8 w-auto", className)}
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="Cormorant Garamond, serif"
        fontSize="30"
        fontWeight="700"
        fill="currentColor"
        className="path-northman"
      >
        LEXOCRATES
      </text>
      <style>
        {`
            .dark .path-northman {
                fill: #F5F5DC;
            }
        `}
      </style>
    </svg>
  );
}
