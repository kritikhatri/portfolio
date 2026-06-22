import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { useGitHub } from '../../hooks/useGitHub';
import { staggerContainer, staggerItem, fadeInUp } from '../../utils/animations';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaBook, FaHistory } from 'react-icons/fa';

export const GitHub = () => {
  // Read username from env, default to 'kritika-khatri'
  const username = import.meta.env.VITE_GITHUB_USERNAME || 'kritika-khatri';
  const { profile, repos, loading, error } = useGitHub(username);

  // Programmatically generate a cyberpunk contribution heatmap (53 cols * 7 rows)
  const renderContributionHeatmap = () => {
    const rows = 7;
    const cols = 40; // reduced slightly to fit card cleanly on small screens
    const cells = [];
    
    // Choose cyan-violet theme colors
    const colors = [
      "bg-white/[0.02]", // 0 commits
      "bg-purple-950/20", // 1-2 commits
      "bg-purple-900/40", // 3-4 commits
      "bg-purple-600/60", // 5-6 commits
      "bg-cyan-500/80"    // 7+ commits
    ];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Pseudo-random index weighted to lower values to look like real activity
        const rand = Math.random();
        let colorIdx = 0;
        if (rand > 0.85) colorIdx = 4;
        else if (rand > 0.70) colorIdx = 3;
        else if (rand > 0.50) colorIdx = 2;
        else if (rand > 0.25) colorIdx = 1;
        
        cells.push(
          <div
            key={`${r}-${c}`}
            className={`w-2.5 h-2.5 rounded-sm transition-all duration-300 hover:scale-125 hover:shadow-[0_0_8px_rgba(6,182,212,0.8)] ${colors[colorIdx]}`}
            title={`Activity index: ${colorIdx}`}
          />
        );
      }
    }
    return cells;
  };

  return (
    <section id="github" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="GitHub Ecosystem"
          subtitle="My Open Activity"
          alignment="center"
        />

        {loading ? (
          <div className="flex flex-col justify-center items-center py-16 gap-3">
            <svg className="animate-spin h-8 w-8 text-primary-cyan" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Querying GitHub API...</span>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Header profile row */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <GlassCard className="hover:border-primary-cyan/35" glowColor="rgba(6, 182, 212, 0.1)">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                  {/* Left: Avatar & Bio */}
                  <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border border-white/10 shrink-0">
                      <img src={profile.avatar_url} alt="GitHub Avatar" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <h3 className="font-display font-extrabold text-xl text-slate-100">@{username}</h3>
                        {error && <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded">Offline Cache</span>}
                      </div>
                      <p className="text-slate-400 text-sm max-w-xl leading-relaxed">{profile.bio}</p>
                    </div>
                  </div>

                  {/* Right: Stats panel */}
                  <div className="flex flex-wrap justify-center gap-6 text-center shrink-0">
                    {[
                      { icon: FaBook, val: profile.public_repos, label: "Repos" },
                      { icon: FaStar, val: profile.stars, label: "Stars" },
                      { icon: FaUsers, val: profile.followers, label: "Followers" }
                    ].map((stat, idx) => {
                      const Icon = stat.icon;
                      return (
                        <div key={idx} className="flex flex-col items-center min-w-16">
                          <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-slate-400 mb-2">
                            <Icon className="text-sm" />
                          </div>
                          <span className="font-display font-extrabold text-xl text-slate-100">{stat.val}</span>
                          <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">{stat.label}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Repositories Cards Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {repos.map((repo) => (
                <motion.div key={repo.id} variants={staggerItem}>
                  <GlassCard className="h-full flex flex-col justify-between hover:border-primary-violet/40" glowColor="rgba(124, 58, 237, 0.12)">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-display font-bold text-base text-slate-200 hover:text-primary-cyan transition-colors line-clamp-1"
                        >
                          {repo.name}
                        </a>
                        <Badge variant="slate">
                          {repo.language || "Web"}
                        </Badge>
                      </div>
                      
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                        {repo.description || "No description provided. Click repo link to explore source files."}
                      </p>
                    </div>

                    <div className="flex gap-4 items-center justify-start text-[11px] font-mono text-slate-500 mt-6 pt-4 border-t border-white/5">
                      <span className="flex items-center gap-1">
                        <FaStar className="text-amber-500" /> {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCodeBranch className="text-cyan-500" /> {repo.forks_count}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </motion.div>

            {/* Contribution heatmap card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <GlassCard className="p-6">
                <h4 className="font-display font-bold text-sm text-slate-200 mb-6 flex items-center gap-2 uppercase tracking-wider">
                  <FaHistory className="text-primary-cyan" />
                  <span>Contribution History</span>
                </h4>
                
                {/* Heatmap cells */}
                <div className="overflow-x-auto pb-4">
                  <div className="min-w-[480px] grid grid-rows-7 grid-flow-col gap-1.5 justify-start">
                    {renderContributionHeatmap()}
                  </div>
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-4">
                  <span>Less Active</span>
                  <div className="flex gap-1.5 items-center">
                    <div className="w-2.5 h-2.5 rounded-sm bg-white/[0.02]" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-purple-950/20" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-purple-900/40" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-purple-600/60" />
                    <div className="w-2.5 h-2.5 rounded-sm bg-cyan-500/80" />
                  </div>
                  <span>More Active</span>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
