
'use client';

import { motion, type Variants } from 'framer-motion';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  [key: string]: any;
};

export function FadeIn({
  children,
  className,
  duration = 0.5,
  delay = 0.2,
  ...props
}: FadeInProps) {
  const variants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: 'easeInOut',
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
