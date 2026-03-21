'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Globe2, ShieldCheck, Cpu, Lock, RefreshCcw } from 'lucide-react';

export function StrategicBridge() {
  const protocols = [
    { icon: Lock, label: "Encrypted", sub: "Bank-Level" },
    { icon: Cpu, label: "Precision", sub: "Common Law" },
    { icon: RefreshCcw, label: "Sync", sub: "24/7 Flow" }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* 
        ARCHITECTURAL BACKGROUND 
        Layer 1: Subtle Grid
        Layer 2: Technical Crosshairs
      */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 1000 1000" className="w-full h-full text-primary" preserveAspectRatio="none">
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <line x1="0" y1={i * 100} x2="1000" y2={i * 100} stroke="currentColor" strokeWidth="1" />
              <line x1={i * 100} y1="0" x2={i * 100} y2="1000" stroke="currentColor" strokeWidth="1" />
            </React.Fragment>
          ))}
        </svg>
      </div>

      {/* THE MAIN INTERFACE BRIDGE */}
      <div className="relative z-10 w-full max-w-6xl flex items-center justify-between px-4 sm:px-12 lg:px-20">
        
        {/* JAIPUR HUB (SOURCE) */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 relative group">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative p-6 sm:p-10 lg:p-14 rounded-[2.5rem] bg-primary text-white shadow-2xl border border-white/10 overflow-hidden"
          >
            {/* Pulsing Status Ring */}
            <div className="absolute inset-0 border-4 border-accent/20 rounded-[2.5rem] animate-pulse" />
            <Globe2 className="w-10 h-10 sm:w-14 lg:w-16 text-accent" />
            
            <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center border-2 sm:border-4 border-white">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white animate-ping" />
            </div>
          </motion.div>
          <div className="text-center">
            <p className="font-lato font-black text-accent uppercase tracking-[0.2em] text-[8px] sm:text-[10px] mb-1">Intelligence Hub</p>
            <h4 className="font-montserrat font-black text-primary text-xs sm:text-xl lg:text-2xl">Jaipur, India</h4>
          </div>
        </div>

        {/* THE SYNCHRONICITY PATH */}
        <div className="flex-grow relative h-32 sm:h-48 mx-4 sm:mx-12">
          {/* Central Connecting Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/10 via-accent/40 to-primary/10 -translate-y-1/2" />
          
          {/* Protocol Visualization - Responsive Stack */}
          <div className="absolute inset-0 flex items-center justify-around">
            {protocols.map((protocol, i) => (
              <motion.div 
                key={i}
                initial={{ y: 15, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + (i * 0.15) }}
                className="flex flex-col items-center group cursor-help"
              >
                {/* Protocol Icon Card */}
                <div className="relative p-2.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white shadow-xl border border-black/5 mb-2 group-hover:border-accent transition-all duration-500 hover:scale-110">
                  <protocol.icon className="w-4 h-4 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-accent" />
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent/20" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-accent/20" />
                </div>
                
                {/* Desktop Labels */}
                <div className="text-center hidden sm:block">
                  <p className="text-[9px] font-black text-primary uppercase tracking-tight leading-none mb-0.5">{protocol.label}</p>
                  <p className="text-[7px] font-medium text-foreground/40 uppercase tracking-widest">{protocol.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DYNAMIC DATA FLOW ANIMATION */}
          <motion.div
            className="absolute top-1/2 left-0 h-[3px] bg-accent shadow-[0_0_25px_rgba(184,134,11,1)] z-20 rounded-full"
            initial={{ width: "0%", left: "0%" }}
            animate={{ 
              width: ["0%", "20%", "0%"],
              left: ["0%", "80%", "100%"]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* High-Speed Particles (Operational Continuity) */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-0"
              animate={{ 
                left: "100%", 
                opacity: [0, 1, 0],
                y: [Math.sin(i) * 20, Math.cos(i) * -20, Math.sin(i) * 20] 
              }}
              transition={{ 
                duration: 1.5 + (i * 0.3), 
                repeat: Infinity, 
                ease: "linear", 
                delay: i * 0.25 
              }}
            >
              <div className="w-1 h-1 bg-accent/30 rounded-full blur-[1px]" />
            </motion.div>
          ))}
        </div>

        {/* GLOBAL MARKETS HUB (DESTINATION) */}
        <div className="flex flex-col items-center gap-4 sm:gap-6 relative">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative p-6 sm:p-10 lg:p-14 rounded-[2.5rem] bg-secondary border border-black/5 text-primary shadow-2xl hover:border-accent/50 transition-colors duration-700"
          >
            <Landmark className="w-10 h-10 sm:w-14 lg:w-16 text-accent transition-transform duration-500 group-hover:scale-110" />
            {/* Technical scanner effect */}
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-0.5 bg-accent/10 pointer-events-none" 
            />
          </motion.div>
          <div className="text-center">
            <p className="font-lato font-black text-accent uppercase tracking-[0.2em] text-[8px] sm:text-[10px] mb-1">Global Delivery</p>
            <h4 className="font-montserrat font-black text-primary text-xs sm:text-xl lg:text-2xl">US • UK • Canada</h4>
          </div>
        </div>

      </div>
    </div>
  );
}
