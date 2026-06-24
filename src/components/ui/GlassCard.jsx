import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({ 
  children, 
  className = '', 
  hoverGlow = true,
  glowColor = 'rgba(124, 58, 237, 0.15)', // Default violet glow
  onClick,
  ...props 
}) => {
  return (
    <motion.div
      onClick={onClick}
      className={`glass-panel rounded-2xl p-6 relative overflow-hidden transition-all duration-500 ${onClick ? 'cursor-pointer' : ''} ${className}`}
      style={{
        '--glow-color': glowColor
      }}
      whileHover={onClick || hoverGlow ? { 
        y: -6, 
        borderColor: 'rgba(255, 255, 255, 0.2)',
        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 30px ${glowColor}`
      } : {}}
      {...props}
    >
      {/* Dynamic Grid Glow Highlight */}
      <div 
        className="absolute -inset-px opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(400px circle at 50% 50%, ${glowColor}, transparent 80%)`
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
};
