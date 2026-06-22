import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const LoadingScreen = ({ onFinished }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinished) {
        // Delay callback slightly to allow exit animation to complete
        setTimeout(onFinished, 500);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background-cosmic select-none"
        >
          {/* Subtle Cyber Grid Background in Loader */}
          <div className="absolute inset-0 bg-grid-overlay opacity-25 pointer-events-none" />

          <div className="relative flex flex-col items-center gap-6">
            {/* Hexagon Outline + Monogram drawing */}
            <svg
              width="120"
              height="120"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="filter drop-shadow-[0_0_15px_rgba(124,58,237,0.6)]"
            >
              {/* Hexagon Frame */}
              <motion.polygon
                points="50,5 90,28 90,72 50,95 10,72 10,28"
                stroke="url(#gradient-stroke)"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
              />

              {/* Stylized Monogram KK */}
              {/* Left Vertical Bar of K */}
              <motion.path
                d="M 33 28 L 33 72"
                stroke="#f1f5f9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
              />
              {/* Left Diagonals of K */}
              <motion.path
                d="M 52 28 L 34 50 L 52 72"
                stroke="#f1f5f9"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
              />

              {/* Right K */}
              {/* Right Vertical Bar of K */}
              <motion.path
                d="M 55 28 L 55 72"
                stroke="url(#gradient-accent)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              />
              {/* Right Diagonals of K */}
              <motion.path
                d="M 74 28 L 56 50 L 74 72"
                stroke="url(#gradient-accent)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.4, delay: 1.0, ease: "easeOut" }}
              />

              <defs>
                <linearGradient id="gradient-stroke" x1="0" y1="0" x2="100" y2="100">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <linearGradient id="gradient-accent" x1="0" y1="0" x2="100" y2="100">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Text Intro */}
            <div className="flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="font-display text-lg tracking-[0.3em] font-bold text-slate-100 uppercase"
              >
                Kritika Khatri
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="font-mono text-[10px] tracking-[0.2em] text-cyan-400 uppercase mt-1"
              >
                Initializing Core Systems...
              </motion.p>
            </div>
            
            {/* Loading progress bar */}
            <div className="w-40 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary-violet to-primary-cyan"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
