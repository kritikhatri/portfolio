import React, { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { FaEnvelope, FaPenNib, FaClock, FaBookOpen } from 'react-icons/fa';

export const Blog = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const posts = [
    {
      id: 1,
      title: "Understanding React Render Cycles",
      category: "Frontend",
      readTime: "5 min read",
      date: "Feb 2025",
      desc: "An exploration of component reconcilers, virtual DOM diffing, and how React 18 manages state concurrency.",
      gradient: "from-purple-600/30 to-violet-900/30 border-purple-500/20"
    },
    {
      id: 2,
      title: "Demystifying Graph Traversals in Web UI",
      category: "DSA / UI",
      readTime: "7 min read",
      date: "Jan 2025",
      desc: "Visualizing BFS, DFS, and shortest path algorithms step-by-step using Framer Motion animations in React.",
      gradient: "from-cyan-600/30 to-blue-900/30 border-cyan-500/20"
    },
    {
      id: 3,
      title: "Transitioning from Python to JavaScript",
      category: "Ecosystems",
      readTime: "4 min read",
      date: "Nov 2024",
      desc: "A comparative guide highlighting prototype inheritance, event loop async handling, and syntactic comparisons.",
      gradient: "from-pink-600/30 to-rose-900/30 border-pink-500/20"
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Tech Chronicles"
          subtitle="Blog & Tutorials"
          alignment="center"
        />

        {/* Coming Soon & Newsletter banner */}
        <div className="mb-16">
          <GlassCard className="max-w-3xl mx-auto text-center border-primary-cyan/30 p-8" glowColor="rgba(6, 182, 212, 0.15)">
            <Badge variant="cyan" className="mb-4">COMING SOON</Badge>
            <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-100 mb-3">
              Writing Systems Tutorials
            </h3>
            <p className="text-slate-400 text-sm max-w-lg mx-auto mb-6 leading-relaxed">
              I am drafting articles focused on React performance, DSA visualization patterns, and beginner open-source setup guides. Subscribe to get notified on launch!
            </p>

            {subscribed ? (
              <div className="font-mono text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 rounded-full py-3 px-6 max-w-sm mx-auto shadow-sm">
                SUCCESS: Added to waitlist database. Thank you!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto items-stretch">
                <div className="relative flex-1">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                  <input
                    type="email"
                    required
                    placeholder="Enter email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary-cyan/50 focus:ring-1 focus:ring-primary-cyan/20 transition-all text-xs font-sans"
                  />
                </div>
                <Button variant="primary" type="submit" className="text-xs shrink-0 py-3 sm:py-0">
                  Notify Me
                </Button>
              </form>
            )}
          </GlassCard>
        </div>

        {/* Articles Preview Mock Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <GlassCard key={post.id} className={`flex flex-col justify-between border ${post.gradient}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-slate-500 text-[10px] font-mono">
                  <div className="flex items-center gap-1">
                    <FaClock /> {post.readTime}
                  </div>
                  <span>{post.date}</span>
                </div>

                <Badge variant="slate" className="w-fit">{post.category}</Badge>
                
                <h4 className="font-display font-extrabold text-base text-slate-200">
                  {post.title}
                </h4>
                
                <p className="text-slate-400 text-xs leading-relaxed font-sans line-clamp-3">
                  {post.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-slate-500 text-[10px] font-mono">
                <span className="flex items-center gap-1.5">
                  <FaPenNib /> Kritika Khatri
                </span>
                <span className="text-primary-pink flex items-center gap-1 select-none">
                  Draft <FaBookOpen />
                </span>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
