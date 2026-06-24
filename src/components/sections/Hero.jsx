import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-start justify-center min-h-[45vh] text-[#3a3a3a] select-none z-10">
      
      {/* Decorative Drifting Rings/Shapes in 3D canvas */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-[#D9D4F0] animate-slow-drift pointer-events-none opacity-40 z-0" />
      <div className="absolute right-20 top-1/4 w-32 h-32 rounded-xl border border-[#F2D9D9] animate-slow-drift pointer-events-none opacity-30 z-0" style={{ animationDelay: '-10s' }} />

      <div className="relative z-10 max-w-2xl flex flex-col gap-6">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-mono text-[10px] tracking-[0.25em] text-[#3a3a3a]/55 uppercase"
        >
          // portfolio core
        </motion.span>
        
        <h1 className="text-6xl sm:text-8xl font-light tracking-tight text-[#3a3a3a] leading-none font-display">
          Kritika Khatri
        </h1>

        <p className="text-lg sm:text-2xl font-light text-[#3a3a3a]/75 tracking-wide">
          CS Student <span className="text-[#D9D4F0] mx-1.5">•</span> Building things that matter.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-2 flex gap-4 text-xs font-mono text-[#3a3a3a]/45"
        >
          <span>Targeting Internships</span>
          <span>·</span>
          <span>B.Tech CSE 2029</span>
        </motion.div>
      </div>
    </section>
  );
};
