'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Globe2, Lock, Cpu, RefreshCcw } from 'lucide-react';

export function StrategicBridge() {
  const protocols = [
    { icon: Lock, label: "Encrypted", sub: "Bank-Level" },
    { icon: Cpu, label: "Precision", sub: "Common Law" },
    { icon: RefreshCcw, label: "Sync", sub: "24/7 Flow" }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      {/* Architectural Blueprint Grid */}
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

      {/* Main Bridge Architecture */}
      <div className="relative z-10 w-full max-w-6xl flex flex-row items-center justify-between px-2 sm:px-8 lg:px-12">
        
        {/* Source: Intelligence Hub (Jaipur) */}
        <div className="flex flex-col items-center gap-3 sm:gap-6 shrink-0 group">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative p-4 sm:p-8 lg:p-14 rounded-[1.5rem] sm:rounded-[2.5rem] bg-primary text-white shadow-2xl border border-white/10 overflow-hidden"
          >
            <div className="absolute inset-0 border-4 border-accent/20 rounded-[1.5rem] sm:rounded-[2.5rem] animate-pulse" />
            <Globe2 className="w-8 h-8 sm:w-12 lg:w-16 text-accent" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-8 sm:h-8 rounded-full bg-accent flex items-center justify-center border-2 sm:border-4 border-white">
              <div className="w-1 h-1 sm:w-2 sm:h-2 rounded-full bg-white animate-ping" />
            </div>
          </motion.div>
          <div className="text-center">
            <p className="font-lato font-black text-accent uppercase tracking-[0.2em] text-[7px] sm:text-[10px] mb-1">Intelligence Hub</p>
            <h4 className="font-montserrat font-black text-primary text-[10px] sm:text-lg lg:text-2xl">Jaipur, India</h4>
          </div>
        </div>

        {/* The Synchronicity Path (Central Connector) */}
        <div className="flex-grow relative h-20 sm:h-48 mx-2 sm:mx-8 lg:mx-12">
          {/* Static Background Connector */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] sm:h-[2px] bg-gradient-to-r from-primary/10 via-accent/40 to-primary/10 -translate-y-1/2" />
          
          {/* Distributed Protocols */}
          <div className="absolute inset-0 flex items-center justify-around px-1 sm:px-4">
            {protocols.map((protocol, i) => (
              <motion.div 
                key={i}
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                className="flex flex-col items-center group cursor-help"
              >
                <div className="relative p-1.5 sm:p-4 lg:p-5 rounded-lg sm:rounded-2xl bg-white shadow-xl border border-black/5 mb-1 sm:mb-2 group-hover:border-accent transition-all duration-500 hover:scale-110">
                  <protocol.icon className="w-3 h-3 sm:w-6 lg:w-8 text-accent" />
                  <div className="absolute top-0 right-0 w-1 sm:w-2 h-1 sm:h-2 border-t border-r border-accent/20" />
                  <div className="absolute bottom-0 left-0 w-1 sm:w-2 h-1 sm:h-2 border-b border-l border-accent/20" />
                </div>
                
                <div className="text-center hidden sm:block">
                  <p className="text-[8px] lg:text-[10px] font-black text-primary uppercase tracking-tight leading-none mb-0.5">{protocol.label}</p>
                  <p className="text-[6px] lg:text-[8px] font-medium text-foreground/40 uppercase tracking-widest">{protocol.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dynamic Data Stream Animation */}
          <motion.div
            className="absolute top-1/2 left-0 h-[2px] sm:h-[3px] bg-accent shadow-[0_0_20px_rgba(184,134,11,1)] z-20 rounded-full"
            initial={{ width: "0%", left: "0%" }}
            animate={{ 
              width: ["0%", "25%", "0%"],
              left: ["0%", "75%", "100%"]
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Micro-Particles (Operational Continuity) */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-0"
              animate={{ 
                left: "100%", 
                opacity: [0, 0.6, 0],
                y: [Math.sin(i) * 15, Math.cos(i) * -15, Math.sin(i) * 15] 
              }}
              transition={{ 
                duration: 1.4 + (i * 0.2), 
                repeat: Infinity, 
                ease: "linear", 
                delay: i * 0.3 
              }}
            >
              <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-accent/30 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Destination: Global Markets */}
        <div className="flex flex-col items-center gap-3 sm:gap-6 shrink-0 relative">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative p-4 sm:p-8 lg:p-14 rounded-[1.5rem] sm:rounded-[2.5rem] bg-secondary border border-black/5 text-primary shadow-2xl hover:border-accent/50 transition-colors duration-700"
          >
            <Landmark className="w-8 h-8 sm:w-12 lg:w-16 text-accent transition-transform duration-500 group-hover:scale-110" />
            <motion.div 
              animate={{ top: ["0%", "100%", "0%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-0.5 bg-accent/5 pointer-events-none" 
            />
          </motion.div>
          <div className="text-center">
            <p className="font-lato font-black text-accent uppercase tracking-[0.2em] text-[7px] sm:text-[10px] mb-1">Global Delivery</p>
            <h4 className="font-montserrat font-black text-primary text-[10px] sm:text-lg lg:text-2xl">US • UK • Canada</h4>
          </div>
        </div>

      </div>
    </div>
  );
}
