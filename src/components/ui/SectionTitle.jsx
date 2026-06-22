import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export const SectionTitle = ({
  title,
  subtitle,
  alignment = 'center', // center, left
  className = ''
}) => {
  const alignClass = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';
  const dividerAlign = alignment === 'center' ? 'mx-auto' : 'mr-auto';

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className={`flex flex-col mb-12 ${alignClass} ${className}`}
    >
      {subtitle && (
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary-pink mb-2 font-semibold">
          {subtitle}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
        {title.split(' ').map((word, idx) => {
          const isGradient = idx === title.split(' ').length - 1; // gradient last word
          return (
            <span
              key={idx}
              className={isGradient ? "bg-gradient-to-r from-primary-violet to-primary-cyan bg-clip-text text-transparent" : "text-slate-100"}
            >
              {word}{' '}
            </span>
          );
        })}
      </h2>
      
      {/* Dynamic cyberpunk underline bar */}
      <div className={`h-1 w-20 bg-gradient-to-r from-primary-violet to-primary-cyan rounded-full mt-4 ${dividerAlign}`} />
    </motion.div>
  );
};
