'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function FlatMap() {
  const primaryColor = "hsl(var(--primary))";
  const accentColor = "hsl(var(--accent))";

  // Approximate SVG coordinates for a 1000x500 viewbox
  const locations = {
    jaipur: { x: 710, y: 280, name: "Jaipur, IN" },
    canada: { x: 230, y: 160, name: "Canada" },
    usa: { x: 210, y: 220, name: "USA" },
    uk: { x: 485, y: 155, name: "UK" }
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
        {/* Simplified World Map Silhouette */}
        <path
          d="M150,150 Q200,100 300,120 T450,150 T600,120 T750,150 T900,180 V400 H100 Z"
          fill={primaryColor}
          fillOpacity="0.05"
        />
        
        {/* Connection Paths */}
        {connectionPaths.map((d, i) => (
          <React.Fragment key={i}>
            <motion.path
              d={d}
              stroke={accentColor}
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{ duration: 2, delay: i * 0.5, ease: "easeInOut" }}
            />
            {/* Animated Stream Particle */}
            <motion.path
              d={d}
              stroke={accentColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0.1, pathOffset: 0, opacity: 0 }}
              animate={{ pathOffset: 1.1, opacity: [0, 1, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "linear",
              }}
            />
          </React.Fragment>
        ))}

        {/* Location Markers */}
        {Object.values(locations).map((loc, i) => (
          <g key={i}>
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r="12"
              fill={accentColor}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.1, 0.2] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <circle
              cx={loc.x}
              cy={loc.y}
              r="4"
              fill={loc.name === "Jaipur, IN" ? accentColor : "white"}
              className="filter drop-shadow-md"
            />
            <text
              x={loc.x}
              y={loc.y + 20}
              textAnchor="middle"
              className="text-[10px] font-black uppercase tracking-widest fill-primary/40"
              style={{ fontSize: '10px' }}
            >
              {loc.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
