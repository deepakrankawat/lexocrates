'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, Globe2, BookOpen, ShieldCheck, Zap } from 'lucide-react';

export function GlobalNodeNetwork() {
  const primaryColor = "hsl(var(--primary))";
  const accentColor = "hsl(var(--accent))";

  // Coordinates optimized for a 1000x600 viewBox
  const nodes = [
    { id: 'jaipur', x: 750, y: 350, name: 'Jaipur Hub', isHub: true, icon: Zap },
    { id: 'canada', x: 200, y: 150, name: 'Canada', isHub: false, icon: Landmark },
    { id: 'usa', x: 180, y: 280, name: 'USA', isHub: false, icon: ShieldCheck },
    { id: 'uk', x: 480, y: 120, name: 'UK', isHub: false, icon: BookOpen }
  ];

  const connections = [
    { from: 'jaipur', to: 'canada' },
    { from: 'jaipur', to: 'usa' },
    { from: 'jaipur', to: 'uk' }
  ];

  const getNode = (id: string) => nodes.find(n => n.id === id)!;

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* 1. Technical Blueprint Grid */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="networkGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#networkGrid)" />
        </svg>
      </div>

      <svg viewBox="0 0 1000 600" className="relative z-10 w-full h-full overflow-visible drop-shadow-2xl">
        {/* 2. Connection Paths (Animated) */}
        {connections.map((conn, i) => {
          const fromNode = getNode(conn.from);
          const toNode = getNode(conn.to);
          
          // Create a curved path
          const path = `M ${fromNode.x} ${fromNode.y} Q ${(fromNode.x + toNode.x) / 2} ${(fromNode.y + toNode.y) / 2 - 100} ${toNode.x} ${toNode.y}`;

          return (
            <React.Fragment key={i}>
              {/* Static background path */}
              <motion.path
                d={path}
                stroke={accentColor}
                strokeWidth="1"
                fill="none"
                strokeDasharray="4 4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 1, delay: i * 0.2 }}
              />
              
              {/* Animated pulse flow */}
              <motion.path
                d={path}
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
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
              />

              {/* Data Particles */}
              {[...Array(3)].map((_, j) => (
                <motion.circle
                  key={j}
                  r="3"
                  fill={accentColor}
                  initial={{ offsetDistance: "0%" }}
                  animate={{ offsetDistance: "100%" }}
                  style={{
                    offsetPath: `path("${path}")`,
                    offsetRotate: "auto"
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1 + j * 1.3,
                    ease: "linear"
                  }}
                />
              ))}
            </React.Fragment>
          );
        })}

        {/* 3. Jurisdictional Nodes */}
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Pulsing Outer Rings */}
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.isHub ? 60 : 40}
              fill={accentColor}
              fillOpacity="0.05"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
            />
            
            {/* Geometric Hub Frame */}
            <motion.rect
              x={node.x - (node.isHub ? 35 : 25)}
              y={node.y - (node.isHub ? 35 : 25)}
              width={node.isHub ? 70 : 50}
              height={node.isHub ? 70 : 50}
              rx={node.isHub ? 12 : 8}
              fill={node.isHub ? primaryColor : "white"}
              stroke={accentColor}
              strokeWidth="2"
              initial={{ scale: 0, rotate: -45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: i * 0.1 }}
            />

            {/* Hub Icon Placeholder (Handled by React Component elsewhere if needed, but here simple SVG) */}
            <circle cx={node.x} cy={node.y} r={2} fill={accentColor} />

            {/* Technical Label */}
            <g transform={`translate(${node.x}, ${node.y + (node.isHub ? 60 : 50)})`}>
              <rect
                x="-60"
                y="-15"
                width="120"
                height="30"
                rx="15"
                fill={primaryColor}
                fillOpacity="0.9"
                className="backdrop-blur-xl"
              />
              <text
                textAnchor="middle"
                className="font-montserrat font-black uppercase tracking-[0.2em] fill-white"
                dominantBaseline="middle"
                style={{ fontSize: '10px' }}
              >
                {node.name}
              </text>
              {node.isHub && (
                <motion.circle
                  cx="50"
                  cy="-15"
                  r="4"
                  fill="#22c55e"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </g>
          </g>
        ))}
      </svg>

      {/* Connectivity Status Overlay */}
      <div className="absolute top-10 left-10 z-20 flex items-center gap-4 bg-primary/95 border border-white/10 p-4 rounded-2xl shadow-2xl backdrop-blur-xl">
        <div className="w-3 h-3 rounded-full bg-accent animate-ping" />
        <div className="text-left">
          <p className="text-[10px] font-black uppercase tracking-widest text-accent/60">System Status</p>
          <p className="text-xs font-bold text-white uppercase tracking-tighter">Global Node Active</p>
        </div>
      </div>
    </div>
  );
}
