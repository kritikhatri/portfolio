import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { experienceData } from '../../data/experience';
import { staggerContainer, staggerItem, fadeInUp } from '../../utils/animations';
import { FaGithub, FaTrophy, FaBriefcase, FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

const iconMap = {
  FaGithub,
  FaTrophy,
  FaBriefcase,
  FaCertificate
};

export const Experience = () => {
  const { openSource, hackathons, internships, certifications } = experienceData;

  const mainCategories = [
    { ...openSource, key: "OS" },
    { ...hackathons, key: "HK" },
    { ...internships, key: "IT" }
  ];

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Experience & Achievements"
          subtitle="My Technical Milestones"
          alignment="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Experience Cards Column (Left 7 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6"
          >
            {mainCategories.map((item, idx) => {
              const Icon = iconMap[item.icon];
              return (
                <motion.div key={idx} variants={staggerItem}>
                  <GlassCard className="hover:border-primary-cyan/40" glowColor="rgba(6, 182, 212, 0.15)">
                    <div className="flex flex-col sm:flex-row gap-4 items-start">
                      {/* Left: Glowing Icon container */}
                      <div className={`p-4 rounded-2xl bg-gradient-to-tr ${item.color} text-white shrink-0 shadow-lg`}>
                        <Icon className="text-2xl" />
                      </div>
                      
                      {/* Right: details */}
                      <div className="space-y-3 w-full">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-display font-extrabold text-xl text-slate-100">
                            {item.title}
                          </h3>
                          <Badge variant={idx === 1 ? 'pink' : idx === 2 ? 'cyan' : 'violet'}>
                            {item.key}
                          </Badge>
                        </div>
                        <p className="font-mono text-xs text-primary-cyan font-semibold">
                          {item.description}
                        </p>
                        
                        <hr className="border-white/5 my-2" />
                        
                        {/* Bulleted details list */}
                        <ul className="space-y-2 text-slate-400 text-xs leading-relaxed font-sans list-disc list-inside">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="marker:text-primary-cyan">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Certifications & Badges Panel (Right 5 Cols) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="lg:col-span-5"
          >
            <GlassCard className="h-full flex flex-col justify-between hover:border-primary-pink/40" glowColor="rgba(236, 72, 153, 0.15)">
              <div>
                <h3 className="font-display font-extrabold text-xl mb-6 text-slate-100 flex items-center gap-2">
                  <FaAward className="text-primary-pink text-lg" />
                  <span>Certifications</span>
                </h3>

                <div className="space-y-4">
                  {certifications.map((cert, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 flex items-start justify-between gap-3 group"
                    >
                      <div className="space-y-1">
                        <h4 className="font-display font-bold text-sm text-slate-200 group-hover:text-white transition-colors">
                          {cert.title}
                        </h4>
                        <div className="flex items-center gap-2 text-slate-400 text-xs">
                          <span>{cert.issuer}</span>
                          <span>&bull;</span>
                          <span className="font-mono text-[10px]">{cert.date}</span>
                        </div>
                      </div>
                      
                      {/* Anchor link to credential */}
                      <a
                        href={cert.credentialUrl}
                        className="p-2 rounded-lg bg-white/5 text-slate-400 hover:text-primary-cyan hover:bg-white/10 transition-all"
                        title="Verify Credential"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Badge footer */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-slate-500 text-[10px] font-mono">
                <span>Total Verifications: {certifications.length}</span>
                <span className="text-primary-pink font-semibold uppercase tracking-wider">Credential Center</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
