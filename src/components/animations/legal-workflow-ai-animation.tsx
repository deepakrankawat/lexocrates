
'use client';

import { motion } from 'framer-motion';
import { FileText, Cpu, UserCheck, CheckCircle2, Sparkles } from 'lucide-react';

export function LegalWorkflowAiAnimation() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.8,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: 'easeInOut' },
    },
  };

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full" />

      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Path 1: Document to AI */}
        <motion.path
          d="M100,200 L200,200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          variants={lineVariants}
        />
        
        {/* Path 2: AI to Human */}
        <motion.path
          d="M300,200 L400,200"
          stroke="url(#lineGradient)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5,5"
          variants={lineVariants}
        />

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            r="2"
            fill="hsl(var(--accent))"
            initial={{ opacity: 0, x: 100, y: 200 }}
            animate={{
              opacity: [0, 1, 0],
              x: [100, 400],
              y: [200 + (Math.random() - 0.5) * 40, 200 + (Math.random() - 0.5) * 40],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "linear"
            }}
          />
        ))}
      </svg>

      <div className="relative z-10 flex items-center justify-between w-full max-w-lg">
        
        {/* Step 1: Input */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 group">
          <div className="relative p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl group-hover:border-accent/50 transition-colors">
            <FileText className="w-8 h-8 text-white/70" />
            <motion.div variants={pulseVariants} initial="initial" animate="animate" className="absolute -inset-1 border border-accent/20 rounded-2xl" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Raw Data</p>
        </motion.div>

        {/* Step 2: AI Core */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 group">
          <div className="relative p-8 bg-accent/20 border-2 border-accent/30 rounded-full shadow-[0_0_30px_rgba(184,134,11,0.2)]">
            <Cpu className="w-12 h-12 text-accent" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-3 border border-dashed border-accent/40 rounded-full"
            />
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-accent animate-pulse" />
          </div>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-accent">AI Analysis</p>
        </motion.div>

        {/* Step 3: Human Review & Delivery */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 group">
          <div className="relative p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl group-hover:border-accent/50 transition-colors">
            <UserCheck className="w-8 h-8 text-white/70" />
            <CheckCircle2 className="absolute -bottom-2 -right-2 w-5 h-5 text-green-500 bg-white rounded-full p-0.5" />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Expert Review</p>
        </motion.div>

      </div>
    </motion.div>
  );
}
