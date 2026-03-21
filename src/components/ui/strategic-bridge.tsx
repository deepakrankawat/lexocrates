'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Globe2, Zap, ShieldCheck, Cpu, Lock, RefreshCcw } from 'lucide-react';

export function StrategicBridge() {
  const protocols = [
    { icon: Lock, label: "Encrypted Corridors", sub: "Bank-Level Security" },
    { icon: Cpu, label: "Jurisdictional Precision", sub: "Common Law Mastery" },
    { icon: RefreshCcw, label: "Instant Synchronization", sub: "24/7 Continuity" }
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden py-12">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1000 1000" className="w-full h-full text-primary" preserveAspectRatio="none">
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

      <div className="relative z-10 w-full max-w-5xl flex items-center justify-between px-4 sm:px-12">
        
        {/* Jaipur Hub */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 flex-shrink-0">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative p-5 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-primary text-white shadow-2xl group border border-white/5"
          >
            <Globe2 className="w-8 h-8 sm:w-12 lg:w-14 text-accent transition-transform duration-500 group-hover:rotate-12" />
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center border-2 sm:border-4 border-white shadow-lg">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-ping" />
            </div>
          </motion.div>
          <div className="text-center">
            <p className="font-lato font-black text-accent uppercase tracking-widest text-[7px] sm:text-[10px] mb-1">Intelligence Hub</p>
            <h4 className="font-montserrat font-black text-primary text-xs sm:text-lg lg:text-xl">Jaipur, India</h4>
          </div>
        </div>

        {/* The Enhanced Technical Bridge */}
        <div className="flex-grow relative h-24 sm:h-40 mx-2 sm:mx-8">
          {/* Static Base Line */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-primary/20 via-accent/40 to-primary/20" />
          
          {/* Central Technical Protocols */}
          <div className="absolute inset-0 flex items-center justify-around gap-2">
            {protocols.map((protocol, i) => (
              <motion.div 
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.2) }}
                className="flex flex-col items-center group cursor-default"
              >
                <div className="p-2 sm:p-4 rounded-lg sm:rounded-xl bg-white shadow-lg sm:shadow-xl border border-black/5 mb-2 sm:mb-3 group-hover:border-accent transition-all duration-500 group-hover:scale-110">
                  <protocol.icon className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <div className="text-center hidden lg:block">
                  <p className="text-[9px] font-black text-primary uppercase tracking-tight">{protocol.label}</p>
                  <p className="text-[7px] font-medium text-foreground/40 uppercase tracking-widest">{protocol.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Animated "Data Stream" */}
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] bg-accent shadow-[0_0_20px_rgba(184,134,11,1)] z-20"
            initial={{ width: "0%", left: "0%" }}
            animate={{ 
              width: ["0%", "30%", "0%"],
              left: ["0%", "70%", "100%"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* High-Speed Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-0"
              animate={{ 
                left: "100%", 
                opacity: [0, 1, 0],
                y: [Math.sin(i) * 30, Math.cos(i) * -30, Math.sin(i) * 30] 
              }}
              transition={{ 
                duration: 2 + (i * 0.5), 
                repeat: Infinity, 
                ease: "linear", 
                delay: i * 0.4 
              }}
            >
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-accent/40 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Global Markets Hub */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 flex-shrink-0">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative p-5 sm:p-8 lg:p-10 rounded-[2rem] sm:rounded-[2.5rem] bg-secondary border border-black/5 text-primary shadow-xl group hover:border-accent transition-colors duration-500"
          >
            <Landmark className="w-8 h-8 sm:w-12 lg:w-14 text-accent transition-all duration-500 group-hover:scale-110" />
          </motion.div>
          <div className="text-center">
            <p className="font-lato font-black text-accent uppercase tracking-widest text-[7px] sm:text-[10px] mb-1">Global Delivery</p>
            <h4 className="font-montserrat font-black text-primary text-xs sm:text-lg lg:text-xl">US • UK • Canada</h4>
          </div>
        </div>

      </div>
    </div>
  );
}
