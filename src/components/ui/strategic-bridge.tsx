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
    <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Visual Core */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
            {/* Animated Glow Rings */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute inset-0 border-2 border-accent/20 rounded-full"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.3, 0.1],
                  rotate: i % 2 === 0 ? 360 : -360
                }}
                transition={{ duration: 10 + i * 2, repeat: Infinity, ease: "linear" }}
              />
            ))}

            {/* Central Hub Card */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative p-8 sm:p-12 lg:p-16 bg-primary rounded-[3rem] shadow-2xl border border-white/10 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Cpu className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-accent mb-4 relative z-10 mx-auto" />
                <div className="text-center relative z-10">
                  <p className="font-lato font-black text-accent uppercase tracking-[0.3em] text-[8px] sm:text-[10px] mb-1">Intelligence Hub</p>
                  <h4 className="font-montserrat font-black text-white text-sm sm:text-xl lg:text-2xl tracking-tighter">Jaipur, India</h4>
                </div>
                
                {/* Data flow particles animation */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-slide-right" />
              </div>
            </motion.div>

            {/* Satellite Node (US/UK/CA) */}
            <motion.div 
              className="absolute -top-4 -right-4 sm:-top-8 sm:-right-8 p-4 bg-white rounded-2xl shadow-xl border border-black/5"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Globe2 className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
        </div>

        {/* Technical Features Column */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="flex items-center gap-5 p-5 sm:p-6 bg-white/50 backdrop-blur-md rounded-[2rem] border border-black/5 hover:border-accent/30 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="p-3 sm:p-4 bg-accent/10 text-accent rounded-xl group-hover:bg-accent group-hover:text-white transition-colors">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h5 className="font-montserrat font-black text-primary text-xs sm:text-sm uppercase tracking-widest">{feature.title}</h5>
                <p className="font-lato font-medium text-foreground/60 text-[10px] sm:text-xs">{feature.desc}</p>
              </div>
              <motion.div 
                className="ml-auto w-2 h-2 rounded-full bg-accent/20"
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