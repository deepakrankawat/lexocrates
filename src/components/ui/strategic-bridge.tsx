
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Globe2, Lock, Target } from 'lucide-react';

export function StrategicBridge() {
  const primaryColor = "hsl(var(--primary))";
  const accentColor = "hsl(var(--accent))";

  const locations = [
    { x: 750, y: 280, label: "Jaipur Hub", isHub: true },
    { x: 250, y: 180, label: "Global Markets", isHub: false }
  ];

  const protocols = [
    { icon: Lock, label: "Security", detail: "Bank-Level" },
    { icon: Target, label: "Precision", detail: "Expertise" },
    { icon: Zap, label: "Sync", detail: "24/7 Flow" }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4 overflow-hidden group">
      {/* 1. Architectural Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="archGrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#archGrid)" />
        </svg>
      </div>

      {/* 2. Central Connectivity Orb & Map */}
      <div className="relative z-10 w-full max-w-4xl aspect-video lg:aspect-[2/1] flex items-center justify-center">
        <svg viewBox="0 0 1000 500" className="w-full h-full drop-shadow-2xl overflow-visible">
          {/* World Silhouette */}
          <motion.path
            d="M150,200 Q300,100 500,200 T850,200 V400 H150 Z"
            fill={primaryColor}
            fillOpacity="0.02"
            stroke={primaryColor}
            strokeWidth="1"
            strokeOpacity="0.1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Connection Arc */}
          <motion.path
            d="M 750 280 Q 500 100 250 180"
            stroke={accentColor}
            strokeWidth="2"
            fill="none"
            strokeDasharray="5 10"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.3 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Pulsing Data Stream */}
          <motion.path
            d="M 750 280 Q 500 100 250 180"
            stroke={accentColor}
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
            animate={{ 
              pathOffset: [0, 1], 
              opacity: [0, 1, 0] 
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Location Nodes */}
          {locations.map((loc, i) => (
            <g key={i}>
              <motion.circle
                cx={loc.x}
                cy={loc.y}
                r={loc.isHub ? "30" : "20"}
                fill={loc.isHub ? primaryColor : "white"}
                stroke={accentColor}
                strokeWidth="2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: i * 0.3 }}
              />
              {loc.isHub && (
                <motion.circle
                  cx={loc.x}
                  cy={loc.y}
                  r="45"
                  fill="none"
                  stroke={accentColor}
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
              )}
              <text
                x={loc.x}
                y={loc.y + (loc.isHub ? 55 : 40)}
                textAnchor="middle"
                className="font-montserrat font-black uppercase tracking-[0.2em] fill-primary/60"
                style={{ fontSize: '12px' }}
              >
                {loc.label}
              </text>
            </g>
          ))}
        </svg>

        {/* 3. Strategic Protocol Overlay - Responsive Stack */}
        <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 pointer-events-none">
          {protocols.map((p, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="bg-white/80 backdrop-blur-xl border border-black/5 p-4 rounded-2xl shadow-xl flex items-center gap-4 group/card hover:bg-white transition-all duration-500 pointer-events-auto"
            >
              <div className="p-2 bg-accent/10 rounded-lg group-hover/card:bg-accent transition-colors">
                <p.icon className="w-5 h-5 text-accent group-hover/card:text-white" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary">{p.label}</p>
                <p className="text-[9px] font-bold text-foreground/40 whitespace-nowrap">{p.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. Bottom Identity Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-8 px-6 py-2 rounded-full bg-primary text-white flex items-center gap-3 shadow-2xl"
      >
        <div className="flex h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
        <span className="font-montserrat font-black text-[10px] uppercase tracking-[0.3em]">Operational Intelligence Network</span>
      </motion.div>
    </div>
  );
}
