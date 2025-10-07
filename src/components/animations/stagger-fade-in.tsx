
'use client';

import { motion, type Variants } from 'framer-motion';
import React from 'react';

type StaggerFadeInProps = {
  children: React.ReactNode;
  staggerDelay?: number;
  childClassName?: string;
  [key: string]: any;
};

export function StaggerFadeIn({
  children,
  staggerDelay = 0.1,
  childClassName,
  ...props
}: StaggerFadeInProps) {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={childVariants} className={childClassName}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
