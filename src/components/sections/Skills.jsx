import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { skillsData } from '../../data/skills';
import { staggerContainer, staggerItem } from '../../utils/animations';

// Import required React Icons dynamically
import * as SiIcons from 'react-icons/si';

const SkillIcon = ({ name, className }) => {
  const IconComponent = SiIcons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export const Skills = () => {
  const tabs = Object.keys(skillsData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Skills Showcase"
          subtitle="My Technical Weaponry"
          alignment="center"
        />

        {/* Tab Switcher Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 border focus:outline-none
                ${activeTab === tab 
                  ? 'bg-gradient-to-r from-primary-violet to-primary-cyan text-white border-transparent shadow-[0_0_15px_rgba(124,58,237,0.4)]' 
                  : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Skill Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          >
            {skillsData[activeTab].map((skill, idx) => (
              <motion.div
                key={skill.name}
                variants={staggerItem}
                className="group"
              >
                <GlassCard
                  hoverEffect={true}
                  className="py-6 px-4 flex flex-col items-center justify-center text-center h-full group-hover:border-primary-cyan/40"
                  glowColor="rgba(6, 182, 212, 0.15)"
                >
                  {/* Glowing Icon */}
                  <div className={`p-4 rounded-2xl bg-white/5 border border-white/5 mb-4 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300 ${skill.color}`}>
                    <SkillIcon name={skill.icon} className="text-3xl filter drop-shadow-[0_0_8px_currentColor]" />
                  </div>

                  {/* Name */}
                  <span className="font-display font-bold text-sm text-slate-100 mb-3 group-hover:text-primary-cyan transition-colors">
                    {skill.name}
                  </span>

                  {/* Proficiency dots */}
                  <div className="flex gap-1.5 items-center justify-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className={`
                          w-1.5 h-1.5 rounded-full transition-all duration-300
                          ${i < skill.level 
                            ? 'bg-primary-cyan group-hover:shadow-[0_0_8px_rgba(6,182,212,0.8)]' 
                            : 'bg-white/10'}
                        `}
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
