'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function FlatMap() {
  const primaryColor = "hsl(var(--primary))";
  const accentColor = "hsl(var(--accent))";

  // Approximate SVG coordinates for a 1000x500 viewbox
  const locations = {
    jaipur: { x: 710, y: 280, name: "Jaipur, IN", isHub: true },
    canada: { x: 230, y: 160, name: "Canada", isHub: false },
    usa: { x: 210, y: 220, name: "USA", isHub: false },
    uk: { x: 485, y: 155, name: "UK", isHub: false }
  };

  const connectionPaths = [
    `M ${locations.jaipur.x} ${locations.jaipur.y} Q 470 100 ${locations.canada.x} ${locations.canada.y}`,
    `M ${locations.jaipur.x} ${locations.jaipur.y} Q 470 150 ${locations.usa.x} ${locations.usa.y}`,
    `M ${locations.jaipur.x} ${locations.jaipur.y} Q 600 180 ${locations.uk.x} ${locations.uk.y}`,
  ];

  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <svg
        viewBox="0 0 1000 500"
        className="w-full h-auto drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Technical Grid Background */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke={primaryColor} strokeWidth="0.5" strokeOpacity="0.1" />
          </pattern>
        </defs>
        <rect width="1000" height="500" fill="url(#grid)" />

        {/* Minimalist World Silhouette */}
        <path
          d="M120,150 C150,120 250,100 350,130 C450,160 550,130 650,110 C750,90 850,140 920,180 V420 H80 Z"
          fill={primaryColor}
          fillOpacity="0.03"
          stroke={primaryColor}
          strokeWidth="0.5"
          strokeOpacity="0.1"
        />
        
        {/* Connection Paths */}
        {connectionPaths.map((d, i) => (
          <React.Fragment key={i}>
            {/* Background static dashed line */}
            <motion.path
              d={d}
              stroke={accentColor}
              strokeWidth="1"
              strokeDasharray="2 6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: i * 0.3 }}
            />
            {/* High-speed pulse animation */}
            <motion.path
              d={d}
              stroke={accentColor}
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0.05, pathOffset: 0, opacity: 0 }}
              animate={{ 
                pathOffset: [0, 1], 
                opacity: [0, 1, 0] 
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut",
              }}
            />
          </React.Fragment>
        ))}

        {/* Location Markers */}
        {Object.entries(locations).map(([key, loc], i) => (
          <g key={key}>
            {/* Pulsing ring */}
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isHub ? "16" : "10"}
              fill={accentColor}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 2, 1], opacity: [0.15, 0, 0.15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
            />
            {/* Core point */}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={loc.isHub ? "5" : "3"}
              fill={loc.isHub ? accentColor : "white"}
              stroke={accentColor}
              strokeWidth="1"
            />
            {/* Technical Label */}
            <g transform={`translate(${loc.x}, ${loc.y + (loc.isHub ? 25 : 20)})`}>
              <rect
                x="-40"
                y="-8"
                width="80"
                height="16"
                rx="4"
                fill={primaryColor}
                fillOpacity="0.05"
              />
              <text
                textAnchor="middle"
                className="text-[8px] font-black uppercase tracking-[0.2em] fill-primary/60"
                dominantBaseline="middle"
                style={{ fontSize: '9px' }}
              >
                {loc.name}
              </text>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}