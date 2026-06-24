import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaStar, FaCodeBranch, FaUsers, FaBook, FaExclamationTriangle } from 'react-icons/fa';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { useGitHub } from '../../hooks/useGitHub';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const GitHub = () => {
  // Use user's github name, falls back to mock if rate-limited or not set
  const { profile, repos, loading, error, isFallback } = useGitHub('kritikakhatri');

  // Generate a static matrix representation of contribution squares (7 rows x 35 columns)
  const renderContributionGrid = () => {
    const rows = 7;
    const cols = 40;
    const grid = [];
    
    // Theme shades from deep space to bright cyan
    const shades = [
      'bg-slate-900', // 0 contributions
      'bg-primary/20', // light
      'bg-primary/45', // medium
      'bg-secondary/60', // high
      'bg-secondary' // intense
    ];

    for (let r = 0; r < rows; r++) {
      const rowSquares = [];
      for (let c = 0; c < cols; c++) {
        // Randomly select shade to simulate github pattern
        const intensity = Math.floor(Math.random() * shades.length);
        rowSquares.push(
          <div 
            key={`${r}-${c}`} 
            className={`w-[10px] h-[10px] rounded-sm ${shades[intensity]} transition-colors duration-300 hover:scale-125 hover:z-10`}
          />
        );
      }
      grid.push(
        <div key={r} className="flex gap-[4px]">
          {rowSquares}
        </div>
      );
    }

    return grid;
  };

  return (
    <section id="github" className="py-24 relative overflow-hidden z-10">
      
      {/* Background soft lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-secondary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Open Source & GitHub Analytics" subtitle="Live integrations" align="center" />

        {loading ? (
          <div className="text-center py-20 font-mono text-xs text-slate-500 uppercase tracking-widest animate-pulse">
            Establishing Link to GitHub APIs...
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {/* API Fallback warning status */}
            {isFallback && (
              <div className="max-w-xl mx-auto w-full">
                <Badge variant="warning" className="w-full flex items-center justify-center gap-2 py-2.5">
                  <FaExclamationTriangle />
                  <span>Simulated/Fallback Mode: GitHub rate limits or credentials. Update username in configurations.</span>
                </Badge>
              </div>
            )}

            {/* Profile Summary Card */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <GlassCard className="max-w-4xl mx-auto hover:border-white/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Left avatar photo */}
                  <div className="relative shrink-0">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center border-2 border-white/10 shadow-neon-violet">
                      <FaGithub className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Right stats and bios */}
                  <div className="flex flex-col grow text-center md:text-left">
                    <h3 className="font-display text-xl font-bold text-slate-100 flex flex-wrap items-center justify-center md:justify-start gap-3">
                      <span>{profile?.name || 'Kritika Khatri'}</span>
                      <a 
                        href={profile?.html_url || 'https://github.com/kritikakhatri'} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-normal text-slate-400 hover:text-white"
                      >
                        @{profile?.login || 'kritikakhatri'} ↗
                      </a>
                    </h3>
                    <p className="text-xs text-slate-400 font-body leading-relaxed mt-2 max-w-xl">
                      {profile?.bio}
                    </p>

                    {/* Stats pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                      <div className="glass-panel p-2 rounded-xl text-center border-white/5">
                        <span className="font-display font-extrabold text-sm block text-slate-200">{profile?.public_repos}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase flex items-center justify-center gap-1 mt-1">
                          <FaBook className="w-2.5 h-2.5" /> Repos
                        </span>
                      </div>
                      <div className="glass-panel p-2 rounded-xl text-center border-white/5">
                        <span className="font-display font-extrabold text-sm block text-slate-200">{profile?.total_stars}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase flex items-center justify-center gap-1 mt-1">
                          <FaStar className="w-2.5 h-2.5 text-amber-500" /> Stars
                        </span>
                      </div>
                      <div className="glass-panel p-2 rounded-xl text-center border-white/5">
                        <span className="font-display font-extrabold text-sm block text-slate-200">{profile?.followers}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase flex items-center justify-center gap-1 mt-1">
                          <FaUsers className="w-2.5 h-2.5" /> Followers
                        </span>
                      </div>
                      <div className="glass-panel p-2 rounded-xl text-center border-white/5">
                        <span className="font-display font-extrabold text-sm block text-slate-200">{profile?.following}</span>
                        <span className="text-[9px] font-mono text-slate-500 uppercase flex items-center justify-center gap-1 mt-1">
                          <FaUsers className="w-2.5 h-2.5" /> Following
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>

            {/* Repositories Cards Grid */}
            <div className="flex flex-col gap-5">
              <h4 className="font-display font-bold text-sm text-slate-300 uppercase tracking-widest text-center">
                // Top Repositories
              </h4>
              
              <motion.div
                variants={staggerContainer(0.08, 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {repos.map((repo) => (
                  <motion.div key={repo.id} variants={fadeInUp} className="h-full">
                    <GlassCard 
                      className="p-5 flex flex-col h-full hover:border-white/15 transition-all duration-300 relative group overflow-hidden border-white/5"
                      hoverGlow={true}
                      glowColor="rgba(124, 58, 237, 0.15)"
                    >
                      <h5 className="font-display font-bold text-sm text-slate-200 group-hover:text-accent truncate">
                        {repo.name}
                      </h5>
                      <p className="text-[11px] text-slate-400 font-body leading-relaxed mt-2 grow line-clamp-3">
                        {repo.description || "No description provided for this repository project."}
                      </p>

                      <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/5 text-[10px] font-mono text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_6px_rgba(6,182,212,0.4)]" />
                          {repo.language || "JavaScript"}
                        </span>
                        
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1 hover:text-amber-400 transition-colors">
                            <FaStar className="w-2.5 h-2.5" /> {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1 hover:text-white transition-colors">
                            <FaCodeBranch className="w-2.5 h-2.5" /> {repo.forks_count}
                          </span>
                        </div>
                      </div>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10"
                        aria-label={`Open repository ${repo.name}`}
                      />
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Heatmap Section */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto w-full"
            >
              <GlassCard className="border-white/5">
                <h4 className="font-display font-bold text-xs text-slate-300 uppercase tracking-widest mb-4">
                  // Contributions Matrix
                </h4>
                <div className="overflow-x-auto pb-2 scrollbar-thin">
                  <div className="flex flex-col gap-[4px] min-w-[500px] justify-center items-center">
                    {renderContributionGrid()}
                  </div>
                </div>
                <div className="flex items-center justify-between text-[9px] font-mono text-slate-500 mt-4 px-2 max-w-sm mx-auto">
                  <span>Less contributions</span>
                  <div className="flex gap-[4px]">
                    <div className="w-[10px] h-[10px] bg-slate-900 rounded-sm" />
                    <div className="w-[10px] h-[10px] bg-primary/20 rounded-sm" />
                    <div className="w-[10px] h-[10px] bg-primary/45 rounded-sm" />
                    <div className="w-[10px] h-[10px] bg-secondary/60 rounded-sm" />
                    <div className="w-[10px] h-[10px] bg-secondary rounded-sm" />
                  </div>
                  <span>More contributions</span>
                </div>
              </GlassCard>
            </motion.div>

          </div>
        )}
      </div>
    </section>
  );
};
