import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { useLeetCode } from '../../hooks/useLeetCode';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import { staggerContainer, staggerItem, fadeInUp } from '../../utils/animations';
import { FaCode, FaTrophy, FaFire, FaCheckCircle } from 'react-icons/fa';

export const LeetCode = () => {
  // Read username from env, default to 'kritikhatri'
  const username = import.meta.env.VITE_LEETCODE_USERNAME || 'kritikhatri';
  const { data, loading, error } = useLeetCode(username);

  // Prepare chart data if analytics loaded
  const chartData = data ? [
    { name: 'Easy', value: data.easySolved, color: '#06b6d4' }, // cyan
    { name: 'Medium', value: data.mediumSolved, color: '#7c3aed' }, // violet
    { name: 'Hard', value: data.hardSolved, color: '#ec4899' } // pink
  ] : [];

  return (
    <section id="leetcode" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Algorithm Analytics"
          subtitle="LeetCode Statistics"
          alignment="center"
        />

        {loading ? (
          <div className="flex flex-col justify-center items-center py-16 gap-3">
            <svg className="animate-spin h-8 w-8 text-primary-violet" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">Querying LeetCode API...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Donut Chart & Counters (Left 7 Cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="lg:col-span-7"
            >
              <GlassCard className="h-full flex flex-col justify-between hover:border-primary-cyan/35" glowColor="rgba(6, 182, 212, 0.1)">
                <div>
                  <h3 className="font-display font-extrabold text-xl mb-6 text-slate-100 flex items-center gap-2">
                    <FaCode className="text-primary-cyan text-lg" />
                    <span>Problem Breakdown</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Donut Chart visual */}
                    <div className="md:col-span-6 h-56 relative flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={65}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                          >
                            {chartData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              background: 'rgba(10, 10, 15, 0.95)',
                              border: '1px solid rgba(255,255,255,0.08)',
                              borderRadius: '12px',
                              fontFamily: 'Space Grotesk'
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>

                      {/* Absolute center label */}
                      <div className="absolute flex flex-col items-center justify-center select-none">
                        <span className="font-display font-extrabold text-3xl text-slate-100">{data.totalSolved}</span>
                        <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">Solved</span>
                      </div>
                    </div>

                    {/* Numeric stats sidebar */}
                    <div className="md:col-span-6 space-y-4">
                      {chartData.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                          <div className="flex items-center gap-2.5">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="font-display font-bold text-sm text-slate-200">{item.name}</span>
                          </div>
                          <span className="font-mono text-sm font-semibold text-slate-100">{item.value} solved</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Acceptance rate & streak */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/5 pt-6 mt-6 text-center">
                  {[
                    { icon: FaFire, val: `${data.streak} Days`, label: "Streak", color: "text-orange-500" },
                    { icon: FaTrophy, val: `#${data.ranking.toLocaleString()}`, label: "Ranking", color: "text-yellow-500" },
                    { icon: FaCheckCircle, val: `${data.acceptanceRate}%`, label: "Acceptance", color: "text-emerald-500" }
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center">
                        <Icon className={`text-lg mb-1 ${stat.color}`} />
                        <span className="font-display font-bold text-sm sm:text-base text-slate-100">{stat.val}</span>
                        <span className="font-mono text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">{stat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </motion.div>

            {/* Recent Submissions list (Right 5 Cols) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="lg:col-span-5"
            >
              <GlassCard className="h-full flex flex-col justify-between hover:border-primary-violet/35" glowColor="rgba(124, 58, 237, 0.1)">
                <div>
                  <h3 className="font-display font-extrabold text-xl mb-6 text-slate-100 flex items-center gap-2">
                    <FaFire className="text-primary-pink text-lg" />
                    <span>Recent Submissions</span>
                  </h3>

                  <div className="space-y-3.5">
                    {data.recentSubmissions.map((sub, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between gap-3 hover:bg-white/10 transition-colors"
                      >
                        <div className="space-y-1">
                          <h4 className="font-display font-bold text-xs text-slate-200">
                            {sub.title}
                          </h4>
                          <div className="flex items-center gap-2 text-slate-400 text-[10px] font-mono">
                            <span className="text-cyan-400">{sub.lang}</span>
                            <span>&bull;</span>
                            <span>{sub.time}</span>
                          </div>
                        </div>
                        
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {sub.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-slate-500 mt-6 pt-4 border-t border-white/5 flex justify-between">
                  <span>Registry: Hacker Rank</span>
                  <a href={`https://leetcode.com/u/${username}`} target="_blank" rel="noopener noreferrer" className="text-primary-cyan hover:underline">
                    View Profile &rarr;
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
