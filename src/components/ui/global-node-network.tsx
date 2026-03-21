'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function GlobalNodeNetwork() {
  const primaryColor = "hsl(var(--primary))";
  const accentColor = "hsl(var(--accent))";

  // Jurisdictional locations on a stylized circular globe
  const locations = [
    { id: 'jaipur', x: 380, y: 260, name: 'JAIPUR HUB', isHub: true },
    { id: 'canada', x: 120, y: 180, name: 'CANADA' },
    { id: 'usa', x: 100, y: 240, name: 'USA' },
    { id: 'uk', x: 260, y: 160, name: 'UK' }
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="relative w-full max-w-[550px] aspect-square flex items-center justify-center">
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="globeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor={primaryColor} stopOpacity="0.02" />
              <stop offset="100%" stopColor={primaryColor} stopOpacity="0.1" />
            </radialGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* 1. Stylized Globe Core */}
          <circle cx="250" cy="250" r="200" fill="url(#globeGrad)" stroke={primaryColor} strokeWidth="1" strokeOpacity="0.1" />
          
          {/* Latitude & Longitude Graticules */}
          <ellipse cx="250" cy="250" rx="200" ry="60" stroke={primaryColor} strokeWidth="0.5" strokeOpacity="0.05" />
          <ellipse cx="250" cy="250" rx="200" ry="120" stroke={primaryColor} strokeWidth="0.5" strokeOpacity="0.05" />
          <ellipse cx="250" cy="250" rx="60" ry="200" stroke={primaryColor} strokeWidth="0.5" strokeOpacity="0.05" />
          <ellipse cx="250" cy="250" rx="120" ry="200" stroke={primaryColor} strokeWidth="0.5" strokeOpacity="0.05" />

          {/* Simplified Continent Silhouettes */}
          <motion.path
            d="M120,180 Q150,140 200,150 T280,130 T350,160 T400,220 T380,300 T300,350 T200,320 T120,250 Z"
            fill={primaryColor}
            fillOpacity="0.02"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />

          {/* 2. Connection Arcs (Real-time Sync) */}
          {locations.filter(l => !l.isHub).map((loc, i) => {
            const hub = locations.find(l => l.isHub)!;
            // Arc path logic
            const path = `M ${hub.x} ${hub.y} Q ${(hub.x + loc.x) / 2} ${(hub.y + loc.y) / 2 - 70} ${loc.x} ${loc.y}`;
            
            return (
              <React.Fragment key={loc.id}>
                {/* Static dashed path */}
                <motion.path
                  d={path}
                  stroke={accentColor}
                  strokeWidth="1.5"
                  strokeDasharray="5 8"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.2 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                />
                {/* High-speed data pulse */}
                <motion.path
                  d={path}
                  stroke={accentColor}
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
                  animate={{ 
                    pathOffset: [0, 1], 
                    opacity: [0, 1, 0] 
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut",
                  }}
                />
              </React.Fragment>
            );
          })}

          {/* 3. Jurisdictional Nodes & Labels */}
          {locations.map((loc, i) => (
            <g key={loc.id}>
              {/* Outer Pulse for Hub */}
              {loc.isHub && (
                <motion.circle
                  cx={loc.x}
                  cy={loc.y}
                  r="30"
                  fill={accentColor}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0, 0.15] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              )}
              
              {/* Core Node Marker */}
              <motion.circle
                cx={loc.x}
                cy={loc.y}
                r={loc.isHub ? 10 : 6}
                fill={loc.isHub ? accentColor : "white"}
                stroke={accentColor}
                strokeWidth="2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.5 + i * 0.1 }}
              />

              {/* Jurisdictional Label (Increased Size) */}
              <g transform={`translate(${loc.x}, ${loc.y + (loc.isHub ? 40 : 30)})`}>
                <text
                  textAnchor="middle"
                  className="font-montserrat font-black uppercase tracking-[0.3em] fill-primary"
                  style={{ fontSize: '14px' }}
                >
                  {loc.name}
                </text>
              </g>
            </g>
          ))}
        </svg>

        {/* Outer orbital rings for "logo" feel */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[440px] h-[420px] rounded-[50%] border border-accent/5 rotate-12" />
          <div className="w-[420px] h-[440px] rounded-[50%] border border-accent/5 -rotate-12" />
        </div>
      </div>
    </div>
  );
}
