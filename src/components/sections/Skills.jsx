import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { skills } from '../../data/skills';
import { staggerContainer, scaleUp } from '../../utils/animations';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools' },
    { id: 'aiml', label: 'AI / ML' }
  ];

  // Helper for proficiency color dots
  const getProficiencyStyle = (level) => {
    switch (level) {
      case 'Advanced':
        return { color: 'bg-emerald-400', shadow: 'shadow-emerald-400/50' };
      case 'Intermediate':
        return { color: 'bg-cyan-400', shadow: 'shadow-cyan-400/50' };
      case 'Beginner':
      default:
        return { color: 'bg-amber-400', shadow: 'shadow-amber-400/50' };
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden z-10">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Skills & Arsenal" subtitle="Technical capabilities" align="center" />

        {/* Tab switch bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full font-display text-xs font-semibold tracking-wide transition-all border cursor-pointer ${isActive ? 'bg-gradient-to-r from-primary to-secondary text-white border-white/10 shadow-neon-violet' : 'glass-panel text-slate-400 border-white/5 hover:text-slate-200 hover:border-white/10'}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={staggerContainer(0.08, 0.05)}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {skills[activeTab].map((skill, index) => {
              const Icon = skill.icon;
              const { color, shadow } = getProficiencyStyle(skill.level);
              
              return (
                <motion.div 
                  key={index} 
                  variants={scaleUp}
                  className="h-full"
                >
                  <GlassCard 
                    className="p-5 flex items-center gap-4 h-full hover:shadow-neon-violet hover:border-white/20 transition-all duration-300"
                    hoverGlow={true}
                    glowColor="rgba(124, 58, 237, 0.1)"
                  >
                    {/* Icon container */}
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-secondary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Skill Info */}
                    <div className="flex flex-col grow min-w-0">
                      <span className="font-display font-bold text-slate-200 text-sm truncate">
                        {skill.name}
                      </span>
                      
                      {/* Proficiency Indicator */}
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${color} shadow-[0_0_8px_var(--tw-shadow-color)] ${shadow} animate-pulse`} />
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
