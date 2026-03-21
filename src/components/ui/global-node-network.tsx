'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function GlobalNodeNetwork() {
  const primaryColor = "hsl(var(--primary))";
  const accentColor = "hsl(var(--accent))";

  // Clean, simplified node positions
  const nodes = [
    { id: 'jaipur', x: 750, y: 250, name: 'Jaipur Hub', isHub: true },
    { id: 'canada', x: 200, y: 150, name: 'Canada' },
    { id: 'usa', x: 180, y: 350, name: 'USA' },
    { id: 'uk', x: 450, y: 100, name: 'UK' }
  ];

  const connections = [
    { from: 'jaipur', to: 'canada' },
    { from: 'jaipur', to: 'usa' },
    { from: 'jaipur', to: 'uk' }
  ];

  const getNode = (id: string) => nodes.find(n => n.id === id)!;

  return (
    <div className="w-full h-full flex items-center justify-center p-8 lg:p-12">
      <svg viewBox="0 0 1000 500" className="w-full h-full overflow-visible">
        {/* Simple Connection Arcs */}
        {connections.map((conn, i) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          const path = `M ${from.x} ${from.y} Q ${(from.x + to.x) / 2} ${(from.y + to.y) / 2 - 80} ${to.x} ${to.y}`;

          return (
            <motion.path
              key={i}
              d={path}
              stroke={accentColor}
              strokeWidth="2"
              fill="none"
              strokeDasharray="6 6"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 1.5, delay: i * 0.2 }}
            />
          );
        })}

        {/* Clean Jurisdictional Nodes */}
        {nodes.map((node, i) => (
          <g key={node.id}>
            {/* Minimal Pulse for the Hub */}
            {node.isHub && (
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="30"
                fill={accentColor}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.1, 0, 0.1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            )}
            
            <circle
              cx={node.x}
              cy={node.y}
              r={node.isHub ? 10 : 6}
              fill={node.isHub ? accentColor : primaryColor}
              className="shadow-xl"
            />
            
            <text
              x={node.x}
              y={node.y + (node.isHub ? 40 : 30)}
              textAnchor="middle"
              className="font-montserrat font-bold uppercase tracking-[0.2em] fill-primary/60"
              style={{ fontSize: '12px' }}
            >
              {node.name}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
