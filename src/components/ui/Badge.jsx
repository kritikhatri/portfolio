import React from 'react';

export const Badge = ({ 
  children, 
  variant = 'primary', 
  className = '' 
}) => {
  const baseStyle = "px-3 py-1 text-xs font-mono font-medium rounded-full tracking-wide inline-flex items-center gap-1.5 border backdrop-blur-sm transition-all duration-300";
  
  const variants = {
    primary: "bg-primary/10 border-primary/20 text-primary-light hover:bg-primary/25",
    secondary: "bg-secondary/10 border-secondary/20 text-secondary-light hover:bg-secondary/25",
    accent: "bg-accent/10 border-accent/20 text-accent-light hover:bg-accent/25",
    success: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    warning: "bg-amber-500/10 border-amber-500/20 text-amber-400"
  };

  return (
    <span className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};
