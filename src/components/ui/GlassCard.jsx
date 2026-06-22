import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'rgba(124, 58, 237, 0.2)', // default primary violet
  onClick,
  ...props
}) => {
  const CardWrapper = onClick ? motion.div : 'div';
  const motionProps = onClick ? {
    whileHover: hoverEffect ? { y: -6, scale: 1.01 } : {},
    whileTap: { scale: 0.99 },
    onClick
  } : {};

  return (
    <CardWrapper
      className={`
        glass-panel 
        rounded-2xl 
        p-6 
        relative 
        overflow-hidden 
        transition-all 
        duration-300
        ${hoverEffect && !onClick ? 'hover:-translate-y-1.5 hover:shadow-[0_0_30px_var(--glow-color)]' : ''}
        ${onClick ? 'cursor-pointer hover:shadow-[0_0_30px_var(--glow-color)]' : ''}
        ${className}
      `}
      style={{
        '--glow-color': glowColor
      }}
      {...motionProps}
      {...props}
    >
      {/* Decorative gradient flare */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-primary-violet/10 to-primary-cyan/10 rounded-full blur-2xl pointer-events-none" />
      {children}
    </CardWrapper>
  );
};
