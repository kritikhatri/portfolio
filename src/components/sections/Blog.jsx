import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { FaPaperPlane, FaBookOpen } from 'react-icons/fa';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const Blog = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const posts = [
    {
      id: 1,
      title: "Mastering React 18: Beyond the Basics",
      desc: "Understanding concurrent features, transitions hooks, and automated state batching updates to scale frontend projects.",
      date: "May 12, 2026",
      readTime: "5 min read",
      gradient: "from-purple-600 to-indigo-600"
    },
    {
      id: 2,
      title: "A Student's Guide to Cracking DSA Interviews",
      desc: "Detailed study roadmap highlighting common patterns like sliding windows, slow-fast pointers, and recursion trees.",
      date: "June 05, 2026",
      readTime: "8 min read",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 3,
      title: "Creating Cyberpunk Interfaces: Glassmorphism Hacks",
      desc: "A tutorial demonstrating HSL coloring, custom backdrop filters, box shadow glows, and smooth SVG layouts.",
      date: "June 20, 2026",
      readTime: "4 min read",
      gradient: "from-pink-500 to-rose-600"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section id="blog" className="py-24 relative overflow-hidden z-10">
      
      {/* Background neon soft blur */}
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Technical Blog & Articles" subtitle="Sharing what I learn" align="center" />

        {/* Blog Post cards list */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={fadeInUp} className="h-full">
              <GlassCard 
                className="flex flex-col h-full hover:border-white/15 transition-all duration-300 relative group overflow-hidden border-white/5"
                hoverGlow={true}
                glowColor="rgba(124, 58, 237, 0.12)"
              >
                {/* Gradient Thumbnail cover */}
                <div className={`w-full h-36 rounded-xl bg-gradient-to-tr ${post.gradient} mb-5 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FaBookOpen className="text-white/40 w-12 h-12 group-hover:scale-110 group-hover:text-white transition-all duration-300" />
                </div>

                {/* Date & Read time details */}
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-3 uppercase">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title and Short Overview */}
                <h3 className="font-display font-bold text-sm text-slate-200 group-hover:text-accent transition-colors leading-snug mb-3">
                  {post.title}
                </h3>
                <p className="text-xs text-slate-400 font-body leading-relaxed grow line-clamp-3 mb-6">
                  {post.desc}
                </p>

                {/* Hover overlay read card action */}
                <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest flex items-center gap-1.5 cursor-pointer mt-auto">
                  Read Article ↗
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup form */}
        <motion.div
          className="max-w-xl mx-auto text-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GlassCard className="p-8 border-white/5">
            <span className="text-xs font-mono font-bold tracking-widest text-accent uppercase block mb-2">
              // Coming Soon: Newsletter
            </span>
            <h4 className="font-display text-lg font-bold text-slate-200 mb-3">
              Subscribe to My Tech Log
            </h4>
            <p className="text-xs text-slate-400 font-body leading-relaxed max-w-sm mx-auto mb-6">
              Get notified immediately when I post deep-dives about React engineering, DSA problem strategies, and UI configurations.
            </p>

            {subscribed ? (
              <motion.div 
                className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 py-3 rounded-xl uppercase tracking-wider"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                Thank you! You've been added to the newsletter loop.
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="grow glass-panel bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-primary/50 text-slate-200 placeholder-slate-500 rounded-xl px-4 py-3 text-xs font-mono outline-none transition-all focus:ring-0"
                />
                <Button variant="primary" type="submit" className="shrink-0 rounded-xl px-5">
                  <FaPaperPlane className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </Button>
              </form>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
