'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Globe2, Zap, ShieldCheck } from 'lucide-react';

export function StrategicBridge() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1000 1000" className="w-full h-full text-primary">
          {[...Array(20)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 50}
              x2="1000"
              y2={i * 50}
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
          {[...Array(20)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="1000"
              stroke="currentColor"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-2xl aspect-[1.5/1] flex items-center justify-between px-6 sm:px-12">
        
        {/* Jaipur Hub */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative p-6 sm:p-8 rounded-[2rem] bg-primary text-white shadow-2xl"
          >
            <Globe2 className="w-8 h-8 sm:w-12 sm:h-12 text-accent" />
            <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center">
              <div className="w-1.5 h-1.5 sm:w-2 h-2 rounded-full bg-white animate-ping" />
            </div>
          </motion.div>
          <div className="text-center">
            <p className="font-lato font-black text-accent uppercase tracking-widest text-[8px] sm:text-[10px]">Operations Hub</p>
            <h4 className="font-montserrat font-black text-primary text-sm sm:text-lg">Jaipur, India</h4>
          </div>
        </div>

        {/* The Bridge (Connecting Line) */}
        <div className="flex-grow relative h-px mx-2 sm:mx-4">
          {/* Static Base Line */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20 h-px" />
          
          {/* Animated "Data Stream" */}
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] bg-accent shadow-[0_0_15px_rgba(184,134,11,0.8)]"
            initial={{ width: "0%", left: "0%" }}
            animate={{ 
              width: ["0%", "40%", "0%"],
              left: ["0%", "60%", "100%"]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Floating Data Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-[-15px] sm:top-[-20px] left-0 text-accent/30"
              animate={{ left: "100%", opacity: [0, 1, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 1 }}
            >
              <div className="w-1 h-1 bg-accent rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Global Markets Hub */}
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative p-6 sm:p-8 rounded-[2rem] bg-secondary border border-black/5 text-primary shadow-xl"
          >
            <Landmark className="w-8 h-8 sm:w-12 sm:h-12 text-accent" />
          </motion.div>
          <div className="text-center">
            <p className="font-lato font-black text-accent uppercase tracking-widest text-[8px] sm:text-[10px]">Global Delivery</p>
            <h4 className="font-montserrat font-black text-primary text-sm sm:text-lg">US • UK • Canada</h4>
          </div>
        </div>

      </div>
    </div>
  );
}
