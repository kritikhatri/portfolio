import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedCounter } from './AnimatedCounters';
import { FaLightbulb, FaRocket, FaCodeBranch } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const About = () => {
  const valueCards = [
    {
      icon: FaLightbulb,
      title: "Impact-Driven",
      desc: "My core motivation is designing products that simplify life and directly help millions of everyday users.",
      color: "rgba(124, 58, 237, 0.2)"
    },
    {
      icon: FaRocket,
      title: "Rapid Explorer",
      desc: "Thriving in ambiguity, I enjoy picking up complex tech stacks quickly, applying logic to convert ideas into clean source code.",
      color: "rgba(6, 182, 212, 0.2)"
    },
    {
      icon: FaCodeBranch,
      title: "Community Builder",
      desc: "Believer in open source, collaborative coding environments, and technical mentorship networks.",
      color: "rgba(236, 72, 153, 0.2)"
    }
  ];

  const skillBars = [
    { name: "JavaScript / ES6+", percentage: 80, color: "from-yellow-400 to-amber-500" },
    { name: "React / Vite / Hooks", percentage: 75, color: "from-cyan-400 to-blue-500" },
    { name: "Data Structures & Algorithms", percentage: 60, color: "from-violet-500 to-purple-600" },
    { name: "Python / Data Libraries", percentage: 70, color: "from-emerald-400 to-teal-500" }
  ];

  const stats = [
    { value: "5+", label: "Completed Projects" },
    { value: "300+", label: "DSA Solved" },
    { value: "2+", label: "Hackathons Run" },
    { value: "1", label: "Year Coding Journey" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden z-10">
      
      {/* Background overlay grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionTitle title="About My Journey" subtitle="Who is Kritika?" align="center" />

        {/* 3-Column Layout */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Col 1: My Story */}
          <motion.div variants={fadeInUp} className="flex flex-col">
            <h3 className="font-display text-xl font-bold text-slate-100 mb-4 border-b border-white/5 pb-2">
              My Story
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              I am a B.Tech Computer Science student at Newton School of Technology (Class of 2029). My interest in technology sparked when I realized software could scale immediately, solving problems for people worldwide from a single laptop.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              Currently, I focus my time between solidifying computer science fundamentals—focusing heavily on Data Structures and Algorithms—and building full-stack web applications. I strive to combine neat backend business logic with high-fidelity, interactive designs.
            </p>
          </motion.div>

          {/* Col 2: What Drives Me */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-4">
            <h3 className="font-display text-xl font-bold text-slate-100 mb-4 border-b border-white/5 pb-2">
              What Drives Me
            </h3>
            {valueCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <GlassCard 
                  key={idx} 
                  hoverGlow={true} 
                  glowColor={card.color} 
                  className="p-4 flex gap-4 items-start"
                >
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-accent shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-200">{card.title}</h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed mt-1">{card.desc}</p>
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>

          {/* Col 3: Currently Learning */}
          <motion.div variants={fadeInUp} className="flex flex-col">
            <h3 className="font-display text-xl font-bold text-slate-100 mb-4 border-b border-white/5 pb-2">
              Currently Learning
            </h3>
            <p className="text-xs text-slate-400 font-mono mb-6 leading-relaxed uppercase">
              // Focus distribution & proficiency
            </p>
            
            <div className="flex flex-col gap-5">
              {skillBars.map((bar, idx) => (
                <div key={idx} className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-mono font-medium">
                    <span className="text-slate-300">{bar.name}</span>
                    <span className="text-accent">{bar.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-900 border border-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${bar.color}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: `${bar.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Fun Facts Counters Row */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-1 border-glow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer(0.1)}
        >
          {stats.map((stat, idx) => (
            <GlassCard key={idx} className="text-center py-6 hover:shadow-neon-violet transition-shadow duration-300" hoverGlow={true}>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-gradient mb-1.5">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-[10px] font-mono tracking-wider text-slate-500 uppercase">
                {stat.label}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
