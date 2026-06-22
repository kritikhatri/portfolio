import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // primary, secondary, outline, danger
  size = 'md', // sm, md, lg
  className = '',
  disabled = false,
  isLoading = false,
  ...props
}) => {
  const baseStyle = "relative inline-flex items-center justify-center font-display font-medium rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:pointer-events-none";
  
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  };

  const variants = {
    primary: "bg-gradient-to-r from-primary-violet to-primary-cyan text-white hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] border border-transparent",
    secondary: "glass-panel text-slate-200 hover:text-white hover:border-primary-cyan/40 hover:bg-white/10",
    outline: "border border-slate-700 bg-transparent text-slate-300 hover:border-primary-violet hover:text-white hover:shadow-[0_0_15px_rgba(124,58,237,0.3)]",
    pink: "bg-gradient-to-r from-primary-pink to-primary-violet text-white hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] border border-transparent",
    danger: "bg-red-600/20 border border-red-500/30 text-red-200 hover:bg-red-600/40 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      ) : children}
    </motion.button>
  );
};
