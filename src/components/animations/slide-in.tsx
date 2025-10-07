
'use client';

import { motion, type Variants } from 'framer-motion';

type SlideInProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  [key: string]: any;
};

export function SlideIn({
  children,
  className,
  duration = 0.6,
  delay = 0.2,
  direction = 'up',
  ...props
}: SlideInProps) {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration,
        delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
