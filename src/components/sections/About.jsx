import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedCounter } from './AnimatedCounters';
import { FaRocket, FaLightbulb, FaBookOpen } from 'react-icons/fa';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

export const About = () => {
  const values = [
    {
      icon: FaRocket,
      title: "Impact-Driven Build",
      description: "My ultimate goal is to architect tech solutions that streamline workflows, solve societal friction, and impact millions.",
      color: "text-cyan-400"
    },
    {
      icon: FaLightbulb,
      title: "First-Principles Thinking",
      description: "Breaking down complex data structures and architecture challenges to core foundations before planning optimizations.",
      color: "text-primary-pink"
    },
    {
      icon: FaBookOpen,
      title: "Lifelong Open learning",
      description: "Constantly expanding knowledge across frameworks, tools, and algorithms through documentation and community dialogue.",
      color: "text-primary-violet"
    }
  ];

  const learningSkills = [
    { name: "React / Frontend Dev", percentage: 75, color: "from-cyan-500 to-blue-500" },
    { name: "JavaScript / ES6+", percentage: 80, color: "from-yellow-500 to-amber-500" },
    { name: "Data Structures & Algorithms", percentage: 60, color: "from-purple-500 to-violet-500" },
    { name: "Python / Data Analysis", percentage: 70, color: "from-emerald-500 to-teal-500" }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="About Me"
          subtitle="My Story & Drivers"
          alignment="center"
        />

        {/* 3-Column Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16"
        >
          {/* Col 1: Story Paragraph */}
          <motion.div variants={staggerItem} className="lg:col-span-4 flex flex-col justify-between">
            <GlassCard className="h-full flex flex-col justify-center">
              <h3 className="font-display font-bold text-xl mb-4 text-primary-cyan flex items-center gap-2">
                <span>//</span> My Story
              </h3>
              <div className="text-slate-400 text-sm leading-relaxed space-y-4">
                <p>
                  I am a B.Tech Computer Science & Engineering student at Newton School of Technology (Class of 2029). My programming journey sparked in early 2024, when I wrote my first line of Python and fell in love with logic and building things from scratch.
                </p>
                <p>
                  Since then, I have transitioned into web development, focusing on React and Javascript ecosystems while sharpening my analytical skills through Data Structures & Algorithms.
                </p>
                <p>
                  I enjoy dissecting real-world problems and creating clean, accessible interfaces. Outside of lectures, you'll find me building open-source projects, participating in sprints, and reading up on startup ecosystems.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Col 2: What Drives Me */}
          <motion.div variants={staggerItem} className="lg:col-span-4 flex flex-col gap-4">
            {values.map((v, index) => {
              const Icon = v.icon;
              return (
                <GlassCard key={index} className="flex-1 py-4 px-5">
                  <div className="flex gap-4 items-start">
                    <div className={`p-2.5 rounded-xl bg-white/5 border border-white/5 shrink-0 ${v.color}`}>
                      <Icon className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-display font-semibold text-sm text-slate-100 mb-1">
                        {v.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              );
            })}
          </motion.div>

          {/* Col 3: Currently Learning */}
          <motion.div variants={staggerItem} className="lg:col-span-4">
            <GlassCard className="h-full flex flex-col justify-center">
              <h3 className="font-display font-bold text-xl mb-6 text-primary-pink flex items-center gap-2">
                <span>//</span> Active Mastery
              </h3>
              
              <div className="space-y-5">
                {learningSkills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-slate-300 font-semibold">{skill.name}</span>
                      <span className="text-slate-400">{skill.percentage}%</span>
                    </div>
                    {/* Progress Bar Track */}
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </motion.div>

        {/* Bottom Facts Strip with Counters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <GlassCard className="py-8 px-6 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {[
              { target: 6, suffix: "+", label: "Projects Completed" },
              { target: 312, suffix: "+", label: "DSA Problems Solved" },
              { target: 2, suffix: "+", label: "Hackathons Attended" },
              { target: 1, suffix: " Year", label: "Coding Journey" }
            ].map((fact, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="font-display font-extrabold text-3xl md:text-5xl bg-gradient-to-r from-primary-violet to-primary-cyan bg-clip-text text-transparent text-glow">
                  <AnimatedCounter target={fact.target} suffix={fact.suffix} />
                </span>
                <span className="font-mono text-[10px] sm:text-xs tracking-wider text-slate-500 uppercase mt-2 font-semibold">
                  {fact.label}
                </span>
              </div>
            ))}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
