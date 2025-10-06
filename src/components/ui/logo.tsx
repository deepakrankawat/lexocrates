import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 24"
      fill="none"
      className={cn("h-6 w-auto", className)}
      {...props}
    >
      <path
        d="M2.36,18.06,8.8,5.98h2.38l-4.1,8.3,4.3,7.74H8.86L4.8,14.6l-2.08,3.46H0L2.36,18.06Z"
        fill="currentColor"
      />
      <path
        d="M20.21,22V5.98h2.24V11.8c.6-.7,1.4-1.18,2.46-1.18,1.96,0,3.32,1.3,3.32,3.36v8.04H26V14c0-1.04-.6-1.7-1.48-1.7s-1.44.66-1.44,1.7v8H20.21Z"
        fill="currentColor"
      />
      <path
        d="M32.86,22,28,5.98h2.38l3.18,12.3L36.8,5.98h2.32L33.71,22H32.86Z"
        fill="currentColor"
      />
      <path
        d="M48.24,10.62c0-2.88-2.22-5.02-5.26-5.02s-5.28,2.14-5.28,5.02-2.22,5.04-5.28,5.04-5.26-2.14-5.26-5.02v-2H25V10.8c0,4,3.34,7,7.28,7s7.28-3,7.28-7,3.34-7,7.28-7,7.26,3,7.26,7v2.18h-2.18V10.62Z"
        fill="currentColor"
      />
      <path
        d="M62.6,18.06,69,5.98h2.38l-4.1,8.3,4.3,7.74H68.94L64.88,14.6l-2.08,3.46H60.28l2.32-3.92Z"
        fill="currentColor"
      />
      <path
        d="M75.21,22V5.98h2.24V11.8c.6-.7,1.4-1.18,2.46-1.18,1.96,0,3.32,1.3,3.32,3.36v8.04H81V14c0-1.04-.6-1.7-1.48-1.7s-1.44.66-1.44,1.7v8H75.21Z"
        fill="currentColor"
      />
      <path
        d="M87.86,22,83,5.98h2.38l3.18,12.3,3.24-12.3h2.32L88.71,22h-.85Z"
        fill="currentColor"
      />
      <path
        d="M99.3,22V5.98h2.24V22H99.3Z"
        fill="currentColor"
      />
    </svg>
  );
}
