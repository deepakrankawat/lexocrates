
'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

type CounterProps = {
  from: number;
  to: number;
  duration?: number;
  className?: string;
};

export function Counter({ from, to, duration = 1.5, className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toLocaleString();
          }
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return <span ref={ref} className={className} />;
}
