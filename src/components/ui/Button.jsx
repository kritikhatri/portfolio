import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '', 
  type = 'button',
  disabled = false,
  ...props 
}) => {
  const baseStyle = "px-6 py-3 rounded-full font-display font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-neon-violet hover:scale-[1.03] active:scale-[0.98] border border-white/10",
    secondary: "glass-panel text-slate-200 border-white/10 hover:bg-white/10 hover:border-white/20 active:scale-[0.98]",
    accent: "bg-accent hover:bg-accent-light text-white shadow-md hover:shadow-neon-pink hover:scale-[1.03] active:scale-[0.98]",
    ghost: "bg-transparent text-slate-400 hover:text-white hover:bg-white/5"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};
