import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { achievementsData } from '../../data/achievements';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { FaCode, FaCertificate, FaGraduationCap, FaUsers, FaAward } from 'react-icons/fa';

const iconMap = {
  FaCode,
  FaCertificate,
  FaGraduationCap,
  FaUsers
};

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Milestones Achieved"
          subtitle="Honors & Credentials"
          alignment="center"
        />

        {/* Asymmetric Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {achievementsData.map((item) => {
            const Icon = iconMap[item.icon];
            
            return (
              <motion.div
                key={item.id}
                variants={staggerItem}
                className={item.size}
              >
                <GlassCard
                  className={`h-full flex flex-col justify-between border ${item.color} hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
                  glowColor="rgba(124, 58, 237, 0.15)"
                >
                  <div className="space-y-4">
                    {/* Header: icon & category badge */}
                    <div className="flex justify-between items-center">
                      <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-100 flex items-center justify-center shadow-md">
                        {Icon && <Icon className="text-xl" />}
                      </div>
                      
                      <Badge variant={
                        item.category === 'Coding' ? 'orange' :
                        item.category === 'Certifications' ? 'blue' :
                        item.category === 'Academic' ? 'violet' : 'pink'
                      }>
                        {item.badge}
                      </Badge>
                    </div>

                    {/* Details content */}
                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-xl text-slate-100">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Visual anchor bar */}
                  <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-6 pt-4 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <FaAward /> Verified Milestone
                    </span>
                    <span className="uppercase tracking-wider font-semibold text-primary-cyan">{item.category}</span>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
