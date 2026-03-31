
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
      className="relative w-full h-[250px] sm:h-[320px] lg:h-[500px] flex items-center justify-center"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-accent/5 blur-[60px] lg:blur-[100px] rounded-full" />

      {/* SVG Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
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

        {/* Floating Particles — Hidden on small mobile for performance */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            r="2"
            fill="hsl(var(--accent))"
            className="hidden sm:block"
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

      <div className="relative z-10 flex items-center justify-between w-full max-w-[280px] sm:max-w-sm lg:max-w-lg px-2 sm:px-0">
        
        {/* Step 1: Input */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4 group">
          <div className="relative p-3 sm:p-4 lg:p-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-xl group-hover:border-accent/50 transition-colors">
            <FileText className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white/70" />
            <motion.div variants={pulseVariants} initial="initial" animate="animate" className="absolute -inset-1 border border-accent/20 rounded-xl sm:rounded-2xl" />
          </div>
          <p className="text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40">Raw Data</p>
        </motion.div>

        {/* Step 2: AI Core */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4 group">
          <div className="relative p-4 sm:p-6 lg:p-8 bg-accent/20 border-2 border-accent/30 rounded-full shadow-[0_0_20px_rgba(184,134,11,0.15)] sm:shadow-[0_0_30px_rgba(184,134,11,0.2)]">
            <Cpu className="w-7 h-7 sm:w-9 sm:h-9 lg:w-12 lg:h-12 text-accent" />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-2 sm:-inset-3 border border-dashed border-accent/40 rounded-full"
            />
            <Sparkles className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-accent animate-pulse" />
          </div>
          <p className="text-[9px] sm:text-[10px] lg:text-[11px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-accent">AI Analysis</p>
        </motion.div>

        {/* Step 3: Human Review & Delivery */}
        <motion.div variants={itemVariants} className="flex flex-col items-center gap-2 sm:gap-3 lg:gap-4 group">
          <div className="relative p-3 sm:p-4 lg:p-5 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl backdrop-blur-xl group-hover:border-accent/50 transition-colors">
            <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white/70" />
            <CheckCircle2 className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-4 h-4 sm:w-5 sm:h-5 text-green-500 bg-white rounded-full p-0.5" />
          </div>
          <p className="text-[8px] sm:text-[9px] lg:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40">Expert Review</p>
        </motion.div>

      </div>
    </motion.div>
  );
}
