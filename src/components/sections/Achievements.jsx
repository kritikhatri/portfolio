import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { achievements } from '../../data/achievements';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Achievements = () => {
  // Bento grid size mappings: large: col-span-2, medium: col-span-1/2, small: col-span-1
  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-1 md:row-span-2",
    small: "md:col-span-1 md:row-span-1"
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden z-10">
      
      {/* Background neon soft blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-secondary/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Achievements & Honors" subtitle="My major milestones" align="center" />

        {/* Bento Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[160px] max-w-5xl mx-auto"
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((item) => {
            const Icon = item.icon;
            const sizeClass = sizeClasses[item.size] || "md:col-span-1";

            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                className={`${sizeClass} h-full`}
              >
                <GlassCard
                  className="h-full flex flex-col justify-between hover:border-white/20 transition-all duration-300 relative group"
                  hoverGlow={true}
                  glowColor={item.glowColor}
                >
                  {/* Category overlay */}
                  <div className="flex items-center justify-between gap-3 mb-2 shrink-0">
                    <span className="text-[9px] font-mono tracking-widest text-accent uppercase font-bold">
                      // {item.category}
                    </span>
                    <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Centered stat metrics if exists */}
                  <div className="my-auto grow flex flex-col justify-center">
                    <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-gradient-secondary">
                      {item.metric}
                    </h3>
                    <p className="text-[10px] font-mono text-slate-400 uppercase mt-0.5">
                      {item.sub}
                    </p>
                  </div>

                  {/* Card Description */}
                  <div className="mt-4 shrink-0">
                    <h4 className="font-display font-bold text-sm text-slate-200 truncate">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 font-body leading-relaxed mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Corner light reflection */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
