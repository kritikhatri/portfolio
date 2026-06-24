import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment progress counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300); // Small pause at 100%
          return 100;
        }
        return prev + 4; // Fast loader
      });
    }, 80);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-background-dark z-50 flex flex-col items-center justify-center pointer-events-auto"
      exit={{ 
        opacity: 0,
        y: -100,
        transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
      }}
    >
      {/* Space Grid Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />

      {/* Center SVG logo */}
      <div className="w-32 h-32 relative flex items-center justify-center">
        <svg 
          viewBox="0 0 100 100" 
          className="w-full h-full text-primary"
          fill="none" 
          stroke="currentColor"
        >
          {/* Outer futuristic hexagon wrapper */}
          <polygon 
            points="50,5 90,28 90,72 50,95 10,72 10,28" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="animate-draw-svg"
            style={{
              strokeDasharray: 300,
              strokeDashoffset: 300,
            }}
          />
          {/* Inner monogram K */}
          <path 
            d="M38 30 V70 M38 50 L58 30 M38 50 L58 70" 
            stroke="#06b6d4" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="animate-draw-svg"
            style={{
              strokeDasharray: 100,
              strokeDashoffset: 100,
              animationDelay: '0.8s'
            }}
          />
        </svg>

        {/* Glow point */}
        <div className="absolute inset-0 bg-primary/20 rounded-full filter blur-xl animate-pulse" />
      </div>

      {/* Brand Name */}
      <motion.div 
        className="mt-8 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <h1 className="font-display text-2xl font-bold tracking-widest text-slate-100 uppercase">
          Kritika Khatri
        </h1>
        <p className="font-mono text-xs text-accent mt-1 tracking-wider">
          Initializing Portfolio Core v1.0.0
        </p>
      </motion.div>

      {/* Progress counter bar */}
      <div className="w-64 h-[2px] bg-slate-800 rounded-full mt-10 overflow-hidden relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-primary to-secondary"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
      </div>

      <div className="mt-2 font-mono text-[10px] text-slate-500 w-64 flex justify-between">
        <span>ESTABLISHING SOCKETS</span>
        <span>{progress}%</span>
      </div>
    </motion.div>
  );
};
