import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { timelineEvents } from '../../data/timeline';
import { fadeInUp } from '../../utils/animations';

export const Timeline = () => {
  return (
    <section id="timeline" className="py-24 relative overflow-hidden z-10">
      
      {/* Background space glow */}
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Timeline Journey" subtitle="My engineering roadmap" align="center" />

        {/* Timeline Path */}
        <div className="relative border-l-2 border-white/5 ml-4 md:ml-6 flex flex-col gap-10">
          
          {timelineEvents.map((event) => (
            <motion.div
              key={event.id}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="relative pl-10 group"
            >
              {/* Pulsing indicator node */}
              <div className="absolute left-[-15px] top-1.5 w-7 h-7 rounded-full bg-background border border-slate-700 flex items-center justify-center text-xs group-hover:border-accent group-hover:shadow-neon-pink transition-all duration-300 z-10">
                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-accent/20 opacity-75" />
                <span>{event.icon}</span>
              </div>

              {/* Event Card Content */}
              <GlassCard 
                className="hover:border-white/15 transition-all duration-300 relative border-white/5"
                hoverGlow={true}
                glowColor="rgba(6, 182, 212, 0.08)"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display font-extrabold text-sm sm:text-base text-slate-100 uppercase tracking-wide">
                      {event.title}
                    </h3>
                    <span className="text-[10px] font-mono text-slate-400">
                      {event.subtitle}
                    </span>
                  </div>
                  
                  {/* Date badge */}
                  <span className="px-3 py-1 text-[10px] font-mono font-bold rounded-full bg-primary/10 border border-primary/20 text-primary-light shrink-0 self-start sm:self-center">
                    {event.date}
                  </span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed font-body">
                  {event.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
