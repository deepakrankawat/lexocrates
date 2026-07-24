'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Lock, Award, CheckCircle2, Scale, Terminal, UserCheck, FileCheck2, ShieldAlert } from 'lucide-react';

const trustConsoleModes = [
  {
    id: 'jurisdiction',
    label: 'Canadian Focus',
    icon: Scale,
    title: 'Canadian Legal & Procedural Practice',
    items: [
      { tag: '🇨🇦 Federal & Provincial', desc: 'Ontario, BC, Alberta & Supreme Court of Canada precedents' },
      { tag: '🇨🇦 CanLII Research', desc: 'Source-backed research using CanLII & Canadian legal databases' },
      { tag: '🌐 International Scope', desc: 'Operational familiarity with US & UK common law frameworks' },
    ],
    metric: 'Canadian Expertise',
  },
  {
    id: 'security',
    label: 'Data & Privacy Safeguards',
    icon: Lock,
    title: 'Confidentiality & Data Protection Protocols',
    items: [
      { tag: 'Strict NDA Safeguards', desc: 'Comprehensive non-disclosure agreements for all legal engagements' },
      { tag: 'Segregated Workspaces', desc: 'Need-to-know access control & encrypted file transfer' },
      { tag: 'Zero Data Training', desc: 'Client documents are never stored or used to train external AI' },
    ],
    metric: 'Strict Privacy',
  },
  {
    id: 'quality',
    label: 'Attorney Oversight',
    icon: UserCheck,
    title: 'Quality Control & Attorney Supervision',
    items: [
      { tag: 'Multi-Tier Review', desc: 'Structured quality control check before work is delivered' },
      { tag: 'Citation Verification', desc: 'Double-checked statutory references & case law citations' },
      { tag: 'Counsel Strategy', desc: 'Counsel retains 100% control over strategy & legal advice' },
    ],
    metric: 'Quality Verified',
  },
];

export function LegalHologramConsole() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeModeId, setActiveModeId] = useState('jurisdiction');
  const activeMode = trustConsoleModes.find((m) => m.id === activeModeId) || trustConsoleModes[0];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let rotation = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const render = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.36;

      ctx.clearRect(0, 0, width, height);
      rotation += 0.008;

      // 3D Sphere Latitude Rings
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.22)';
      for (let i = -3; i <= 3; i++) {
        ctx.beginPath();
        const r = Math.sqrt(Math.max(0, radius * radius - (i * 24) * (i * 24)));
        ctx.ellipse(centerX, centerY + i * 20, r, r * 0.32, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3D Rotating Longitude Lines
      for (let i = 0; i < 8; i++) {
        const angle = rotation + (i * Math.PI) / 4;
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius * Math.abs(Math.cos(angle)), radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 + Math.abs(Math.sin(angle)) * 0.25})`;
        ctx.stroke();
      }

      // Active Telemetry Orbit Nodes
      const nodeCount = 6;
      for (let i = 0; i < nodeCount; i++) {
        const nodeAngle = rotation * 1.4 + (i * Math.PI * 2) / nodeCount;
        const nx = centerX + Math.cos(nodeAngle) * radius * 0.85;
        const ny = centerY + Math.sin(nodeAngle) * radius * 0.42;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.15)';
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nx, ny, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#d4af37';
        ctx.shadowColor = '#d4af37';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Glowing Center Core
      ctx.beginPath();
      ctx.arc(centerX, centerY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.shadowColor = '#d4af37';
      ctx.shadowBlur = 15;
      ctx.fill();
      ctx.shadowBlur = 0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] sm:min-h-[500px] rounded-[2.5rem] bg-primary p-6 sm:p-8 flex flex-col justify-between border border-white/10 overflow-hidden shadow-2xl">
      {/* Decorative Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(230,183,56,0.15),transparent_70%)] pointer-events-none" />

      {/* Top Console Bar */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-accent/20">
          <Terminal className="h-3.5 w-3.5 text-accent animate-pulse" />
          <span className="text-[10px] font-montserrat font-black uppercase tracking-[0.25em] text-accent">TRUST & SAFEGUARDS HUD</span>
        </div>
        <span className="flex items-center gap-1.5 text-[10px] font-montserrat font-bold text-accent">
          <span className="h-2 w-2 rounded-full bg-accent animate-ping" />
          Operational Protection
        </span>
      </div>

      {/* 3D Wireframe Canvas */}
      <div className="relative z-10 my-auto flex flex-col items-center justify-center">
        <div className="relative w-full h-44 sm:h-52 flex items-center justify-center">
          <canvas ref={canvasRef} className="w-full h-full" />
          
          <div className="absolute pointer-events-none flex items-center justify-center h-14 w-14 rounded-2xl bg-accent/15 border border-accent/40 backdrop-blur-md text-accent shadow-[0_0_30px_rgba(230,183,56,0.25)]">
            <ShieldCheck className="h-7 w-7 text-accent" />
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-1 w-full">
          {trustConsoleModes.map((mode) => {
            const Icon = mode.icon;
            const isSelected = activeModeId === mode.id;
            return (
              <motion.button
                key={mode.id}
                onClick={() => setActiveModeId(mode.id)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`px-3 py-2 rounded-xl text-[10px] sm:text-xs font-montserrat font-black flex items-center gap-1.5 border transition-all duration-300 ${
                  isSelected
                    ? 'bg-accent text-primary border-white shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{mode.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Active Mode Output Telemetry */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMode.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/15 text-left"
        >
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-montserrat font-black text-xs sm:text-sm text-white flex items-center gap-2">
              <activeMode.icon className="h-4 w-4 text-accent" />
              <span>{activeMode.title}</span>
            </h4>
            <span className="text-[9px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-md">
              {activeMode.metric}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">
            {activeMode.items.map((item) => (
              <div key={item.tag} className="bg-black/25 p-2 rounded-xl border border-white/5 text-[10px]">
                <span className="font-bold text-accent block mb-0.5">{item.tag}</span>
                <span className="text-white/70 leading-snug block">{item.desc}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
