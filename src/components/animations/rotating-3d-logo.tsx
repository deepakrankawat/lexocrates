'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Rotating3dLogo() {
  return (
    <div className="relative flex items-center justify-center p-4">
      {/* Soft Ambient Glow Aura */}
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl animate-pulse pointer-events-none" />

      {/* 3D Perspective Canvas Container */}
      <div className="relative w-44 h-24 sm:w-64 sm:h-32 [perspective:1200px] flex items-center justify-center">
        {/* Continuous 3D Y-Axis Rotating Group */}
        <motion.div
          className="relative w-full h-full flex items-center justify-center [transform-style:preserve-3d] cursor-pointer"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ scale: 1.08 }}
        >
          {/* Front Face - Crisp Single Layer with 3D Lighting Filter (Zero Line Artifacts) */}
          <div
            className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
            style={{ transform: 'translateZ(4px)' }}
          >
            <Image
              src="/images/logo-dark.svg"
              alt="Lexocrates Official Logo"
              width={400}
              height={160}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Back Face - Flipped Single Layer for 100% Seamless 360 Rotation */}
          <div
            className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden] filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
            style={{ transform: 'translateZ(-4px) rotateY(180deg)' }}
          >
            <Image
              src="/images/logo-dark.svg"
              alt="Lexocrates Official Logo"
              width={400}
              height={160}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
