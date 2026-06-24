import React from 'react';
import { motion } from 'framer-motion';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip 
} from 'recharts';
import { 
  FaCode, 
  FaAward, 
  FaFire, 
  FaCheckCircle, 
  FaChartLine,
  FaExclamationTriangle
} from 'react-icons/fa';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { useLeetCode } from '../../hooks/useLeetCode';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const LeetCode = () => {
  // Use user's leetcode username, falls back to pre-defined stats on fail
  const { stats, loading, isFallback } = useLeetCode('kritikakhatri');

  // Chart data formatting
  const chartData = stats ? [
    { name: 'Easy', value: stats.easySolved, color: '#10b981' },
    { name: 'Medium', value: stats.mediumSolved, color: '#06b6d4' },
    { name: 'Hard', value: stats.hardSolved, color: '#ec4899' }
  ] : [];

  return (
    <section id="leetcode" className="py-24 relative overflow-hidden z-10">
      
      {/* Background radial soft light */}
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="LeetCode Analytics" subtitle="Problem solving metrics" align="center" />

        {loading ? (
          <div className="text-center py-20 font-mono text-xs text-slate-500 uppercase tracking-widest animate-pulse">
            Syncing LeetCode solve records...
          </div>
        ) : (
          <div className="flex flex-col gap-10">
            {/* Warning when fallback */}
            {isFallback && (
              <div className="max-w-xl mx-auto w-full">
                <Badge variant="warning" className="w-full flex items-center justify-center gap-2 py-2.5">
                  <FaExclamationTriangle />
                  <span>Simulated/Fallback Mode: LeetCode profile CORS. Configured for Kritikakhatri.</span>
                </Badge>
              </div>
            )}

            {/* Main Stats Blocks */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto w-full">
              
              {/* Left Column: Donut Chart Solve Distribution */}
              <motion.div 
                className="lg:col-span-5 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <GlassCard className="w-full h-80 flex flex-col items-center justify-center relative border-white/5" hoverGlow={true}>
                  <h4 className="font-display font-bold text-xs text-slate-400 uppercase tracking-widest absolute top-5 left-5">
                    // Difficulty Split
                  </h4>

                  {/* Donut Chart Container */}
                  <div className="w-full h-48 relative flex items-center justify-center mt-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={chartData}
                          cx="50%"
                          cy="50%"
                          innerRadius={65}
                          outerRadius={80}
                          paddingAngle={4}
                          dataKey="value"
                        >
                          {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip 
                          contentStyle={{ 
                            background: '#0a0a0f', 
                            borderColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '8px',
                            color: '#e2e8f0',
                            fontSize: '11px',
                            fontFamily: 'monospace'
                          }} 
                        />
                      </PieChart>
                    </ResponsiveContainer>

                    {/* Inside donut content text */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <span className="font-display font-extrabold text-3xl text-slate-100">{stats.totalSolved}</span>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-0.5">Total Solved</span>
                    </div>
                  </div>

                  {/* Chart Legends Row */}
                  <div className="flex gap-6 mt-2 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                      <span className="text-slate-400">Easy: <strong className="text-slate-200">{stats.easySolved}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.4)]" />
                      <span className="text-slate-400">Med: <strong className="text-slate-200">{stats.mediumSolved}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.4)]" />
                      <span className="text-slate-400">Hard: <strong className="text-slate-200">{stats.hardSolved}</strong></span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>

              {/* Right Column: Cards info grid */}
              <motion.div 
                className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full"
                variants={staggerContainer(0.1, 0.05)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Ranking Card */}
                <motion.div variants={fadeInUp}>
                  <GlassCard className="p-5 flex items-center gap-4 border-white/5" hoverGlow={true}>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-secondary">
                      <FaChartLine className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">Global Ranking</span>
                      <span className="font-display font-extrabold text-lg text-slate-100 block mt-1">
                        #{stats.ranking.toLocaleString()}
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Acceptance rate card */}
                <motion.div variants={fadeInUp}>
                  <GlassCard className="p-5 flex items-center gap-4 border-white/5" hoverGlow={true}>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                      <FaCheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">Acceptance Rate</span>
                      <span className="font-display font-extrabold text-lg text-slate-100 block mt-1">
                        {stats.acceptanceRate}%
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Active Daily Streak */}
                <motion.div variants={fadeInUp}>
                  <GlassCard className="p-5 flex items-center gap-4 border-white/5" hoverGlow={true}>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-accent">
                      <FaFire className="w-5 h-5 text-accent shadow-neon-pink" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">Active Daily Streak</span>
                      <span className="font-display font-extrabold text-lg text-slate-100 block mt-1">
                        {stats.streak} Days
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* DSA Platform */}
                <motion.div variants={fadeInUp}>
                  <GlassCard className="p-5 flex items-center gap-4 border-white/5" hoverGlow={true}>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-primary">
                      <FaCode className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider">Target Profile</span>
                      <span className="font-display font-extrabold text-lg text-slate-100 block mt-1">
                        LeetCode Master
                      </span>
                    </div>
                  </GlassCard>
                </motion.div>
              </motion.div>
            </div>

            {/* Recent Submissions Row */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto w-full mt-6"
            >
              <GlassCard className="border-white/5">
                <h4 className="font-display font-bold text-xs text-slate-300 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <FaAward className="text-accent" /> // Recent Submissions
                </h4>
                <div className="flex flex-col gap-3 font-mono">
                  {stats.recentSubmissions.map((sub) => {
                    const diffColors = {
                      Easy: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
                      Medium: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
                      Hard: 'text-pink-400 bg-pink-500/10 border-pink-500/20'
                    };
                    return (
                      <div 
                        key={sub.id} 
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all gap-3"
                      >
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold border uppercase shrink-0 ${diffColors[sub.difficulty]}`}>
                            {sub.difficulty}
                          </span>
                          <span className="text-xs text-slate-200 font-medium font-body truncate max-w-xs sm:max-w-md">
                            {sub.title}
                          </span>
                        </div>
                        <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                          <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/5 px-2 py-0.5 rounded border border-emerald-500/10 uppercase">
                            {sub.status}
                          </span>
                          <span className="text-[10px] text-slate-500">
                            {sub.time}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
