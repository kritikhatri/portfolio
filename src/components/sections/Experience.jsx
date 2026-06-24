import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { experiences } from '../../data/experience';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden z-10">
      
      {/* Background soft light */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Experience & Activities" subtitle="My achievements & goals" align="center" />

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/5 md:border-l-0 md:before:absolute md:before:left-1/2 md:before:top-0 md:before:h-full md:before:w-[2px] md:before:bg-white/10 md:before:-translate-x-1/2 pl-6 md:pl-0 flex flex-col gap-12">
          
          {experiences.map((exp, idx) => {
            const Icon = exp.icon;
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row w-full md:items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Timeline Center Node icon */}
                <div className="absolute left-[-35px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-slate-700 flex items-center justify-center text-accent z-20 shadow-neon-pink">
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Card Container wrapper (desktop moves left/right) */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                  <GlassCard 
                    className="hover:border-white/20 transition-all duration-300"
                    hoverGlow={true}
                    glowColor="rgba(124, 58, 237, 0.1)"
                  >
                    <div className="flex flex-col gap-3">
                      {/* Top Header */}
                      <div className="flex items-center gap-3">
                        <div className={`px-2.5 py-2.5 rounded-xl bg-gradient-to-r ${exp.color} text-white shrink-0 shadow-md`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-sm sm:text-base text-slate-100">
                            {exp.title}
                          </h3>
                          <span className="text-[10px] font-mono text-accent uppercase tracking-wider">
                            {exp.category}
                          </span>
                        </div>
                      </div>

                      {/* Short summary */}
                      <p className="text-xs text-slate-200 font-medium font-body italic leading-relaxed border-l-2 border-secondary/40 pl-3.5">
                        {exp.description}
                      </p>

                      {/* Detail points */}
                      <ul className="flex flex-col gap-2 pl-4 list-disc text-slate-400 text-[11px] leading-relaxed">
                        {exp.details.map((detail, idx) => (
                          <li key={idx}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
