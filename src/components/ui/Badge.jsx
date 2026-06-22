import React from 'react';

export const Badge = ({
  children,
  variant = 'cyan', // cyan, violet, pink, green, orange, slate
  className = '',
  ...props
}) => {
  const variants = {
    cyan: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.1)]",
    violet: "bg-violet-500/10 text-violet-400 border-violet-500/20 shadow-[0_0_10px_rgba(124,58,237,0.1)]",
    pink: "bg-pink-500/10 text-pink-400 border-pink-500/20 shadow-[0_0_10px_rgba(236,72,153,0.1)]",
    green: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]",
    orange: "bg-amber-500/10 text-amber-400 border-amber-500/20 shadow-[0_0_10px_rgba(245,158,11,0.1)]",
    slate: "bg-slate-500/10 text-slate-400 border-slate-500/20"
  };

  return (
    <span
      className={`
        inline-flex 
        items-center 
        px-3 
        py-1 
        rounded-full 
        text-xs 
        font-mono 
        font-semibold 
        border 
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
    </span>
  );
};
