
'use client';

import { motion, AnimatePresence } from 'framer-motion';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const variants = {
    initial: {
      opacity: 0,
      rotateX: 90,
      transformOrigin: 'top center',
    },
    animate: {
      opacity: 1,
      rotateX: 0,
      transformOrigin: 'top center',
    },
    exit: {
      opacity: 0,
      rotateX: -90,
      transformOrigin: 'top center',
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
