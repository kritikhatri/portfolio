import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/animations';

export const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center' 
}) => {
  const alignment = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end'
  };

  return (
    <motion.div 
      className={`flex flex-col mb-16 ${alignment[align]}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
    >
      {subtitle && (
        <span className="text-xs font-mono tracking-widest text-accent uppercase mb-2 block font-semibold">
          // {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display font-bold text-gradient pb-2 relative inline-block">
        {title}
      </h2>
      <div className="h-[3px] w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
    </motion.div>
  );
};
