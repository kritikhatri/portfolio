import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { timelineData } from '../../data/timeline';
import { staggerContainer, fadeInUp } from '../../utils/animations';
import { FaCode, FaGraduationCap, FaLaptopCode, FaFire, FaHandshake, FaBriefcase, FaGlobe } from 'react-icons/fa';

const iconMap = {
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
  FaFire,
  FaHandshake,
  FaBriefcase,
  FaGlobe
};

export const Timeline = () => {
  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Career Journey"
          subtitle="Roadmap of My Growth"
          alignment="center"
        />

        {/* Timeline container */}
        <div className="relative mt-12">
          {/* Vertical central stem line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-pink via-primary-violet to-primary-cyan transform -translate-x-1/2 opacity-25" />

          {/* Staggered Timeline blocks */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-12"
          >
            {timelineData.map((event, idx) => {
              const Icon = iconMap[event.icon];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`flex flex-col md:flex-row relative items-stretch ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Central Node Dot (pulsing animation) */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10 top-6">
                    <div className="w-8 h-8 rounded-full bg-background-cosmic border-2 border-primary-cyan flex items-center justify-center shadow-[0_0_12px_rgba(6,182,212,0.6)] animate-pulse-slow">
                      {Icon && <Icon className="text-primary-cyan text-xs" />}
                    </div>
                  </div>

                  {/* Left Spacer Column (For desktop alternating layout) */}
                  <div className="hidden md:block w-1/2 px-8" />

                  {/* Content Bubble Card Column */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <motion.div
                      variants={fadeInUp}
                      className="h-full"
                    >
                      <GlassCard
                        className={`hover:border-primary-cyan/45 h-full flex flex-col justify-between`}
                        glowColor="rgba(6, 182, 212, 0.15)"
                      >
                        <div className="space-y-3">
                          {/* Date & Title */}
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="font-mono text-xs text-primary-pink font-bold">
                              {event.date}
                            </span>
                            <Badge variant="cyan">Milestone</Badge>
                          </div>
                          
                          <h3 className="font-display font-extrabold text-lg text-slate-100">
                            {event.title}
                          </h3>
                          
                          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed font-sans">
                            {event.description}
                          </p>
                        </div>
                      </GlassCard>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
