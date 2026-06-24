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
        <span className="text-xs font-mono tracking-widest text-[#3a3a3a]/45 uppercase mb-2 block">
          // {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-display font-light text-[#3a3a3a] pb-2 relative inline-block">
        {title}
      </h2>
      <div className="h-[2px] w-16 bg-[#D9D4F0] mt-4 rounded-full" />
    </motion.div>
  );
};
