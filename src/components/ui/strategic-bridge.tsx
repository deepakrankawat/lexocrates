'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ShieldCheck, Zap, Globe2, Target, Lock } from 'lucide-react';

export function StrategicBridge() {
  const features = [
    { icon: Lock, title: "Security", desc: "Bank-Level Encryption" },
    { icon: Target, title: "Precision", desc: "Common Law Accuracy" },
    { icon: Zap, title: "Sync", desc: "24/7 Global Flow" }
  ];

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Visual Core - 7 columns on desktop */}
        <div className="lg:col-span-7 relative flex items-center justify-center py-8">
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 fhd:w-80 fhd:h-80 transition-all duration-500">
            {/* Animated Glow Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-accent/20 rounded-full"
                animate={{ 
                  scale: [1, 1.25, 1],
                  opacity: [0.1, 0.25, 0.1],
                  rotate: i % 2 === 0 ? 360 : -360
                }}
                transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "linear" }}
              />
            ))}

            {/* Central Hub Card */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full p-6 sm:p-10 lg:p-14 bg-primary rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border border-white/10 group overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Cpu className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-accent mb-3 sm:mb-4 relative z-10" />
                <div className="text-center relative z-10">
                  <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[7px] sm:text-[9px] mb-1">Intelligence Hub</p>
                  <h4 className="font-montserrat font-black text-white text-xs sm:text-lg lg:text-xl tracking-tighter">Jaipur, India</h4>
                </div>
                
                {/* Data flow particles animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-slide-right" />
              </div>
            </motion.div>

            {/* Satellite Node (US/UK/CA) */}
            <motion.div 
              className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 p-3 bg-white rounded-xl shadow-xl border border-black/5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Globe2 className="w-4 h-4 sm:w-6 sm:h-6 text-primary" />
            </motion.div>
          </div>
        </div>

        {/* Technical Features Column - 5 columns on desktop */}
        <div className="lg:col-span-5 flex flex-col gap-3 sm:gap-4 lg:gap-6 w-full">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-4 sm:gap-5 p-4 sm:p-5 lg:p-6 bg-white/50 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] border border-black/5 hover:border-accent/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="p-2.5 sm:p-3 bg-accent/10 text-accent rounded-xl group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 sm:h-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h5 className="font-montserrat font-black text-primary text-[10px] sm:text-xs lg:text-sm uppercase tracking-widest truncate">{feature.title}</h5>
                <p className="font-lato font-medium text-foreground/60 text-[9px] sm:text-[10px] lg:text-xs break-words">{feature.desc}</p>
              </div>
              <motion.div 
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent/20 shrink-0"
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
              />
            </motion.div>
          ))}
        </div>

      </div>

      <style jsx global>{`
        @keyframes slide-right {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide-right {
          animation: slide-right 3s linear infinite;
        }
      `}</style>
    </div>
  );
}