import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaChevronDown, FaReact, FaPython, FaJs, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { Button } from '../ui/Button';

export const Hero = () => {
  const name = "Kritika Khatri";

  // Framer motion variants for character-by-character name entry
  const nameContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 10 }
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/kritikakhatri", label: "GitHub", color: "hover:text-slate-100 hover:shadow-white/20" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/kritikakhatri", label: "LinkedIn", color: "hover:text-blue-400 hover:shadow-blue-500/20" },
    { icon: FaTwitter, url: "https://twitter.com/kritikakhatri", label: "Twitter", color: "hover:text-cyan-400 hover:shadow-cyan-500/20" },
    { icon: FaCode, url: "https://leetcode.com/u/kritikakhatri", label: "LeetCode", color: "hover:text-amber-400 hover:shadow-amber-500/20" }
  ];

  const handleConnect = () => {
    const contact = document.getElementById('contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden z-10">
      
      {/* Background soft lighting orbs */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-primary/10 rounded-full filter blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-secondary/10 rounded-full filter blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Grid: Bio and descriptions */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          
          <motion.span 
            className="text-xs font-mono font-bold tracking-widest text-accent uppercase mb-3 block"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            // Welcome to my digital space
          </motion.span>

          {/* Character-by-character greeting */}
          <h1 className="text-4xl sm:text-6xl font-display font-bold text-slate-100 leading-none tracking-tight mb-4 flex flex-wrap gap-x-2">
            <span>Hi, I'm</span>
            <motion.span 
              variants={nameContainer}
              initial="hidden"
              animate="visible"
              className="text-gradient inline-flex"
            >
              {name.split("").map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={charVariants}
                  className={char === " " ? "w-3" : ""}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          {/* Cycling Typewriter */}
          <div className="h-10 sm:h-12 flex items-center text-lg sm:text-2xl font-mono text-slate-300 mb-6">
            <span className="text-secondary mr-2">{'>'}</span>
            <TypeAnimation
              sequence={[
                "Software Developer", 1800,
                "AI/ML Enthusiast", 1800,
                "Open Source Contributor", 1800,
                "Future Tech Founder", 1800,
                "DSA Explorer", 1800,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="cursor-blink font-semibold text-slate-100"
            />
          </div>

          <motion.p 
            className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            I am a B.Tech Computer Science student at Newton School of Technology, driven by a core goal to build tech products that impact millions of people worldwide. Currently diving deep into React, modern web development, and algorithms.
          </motion.p>

          {/* CTA Row */}
          <motion.div 
            className="flex flex-wrap gap-4 items-center mb-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.5 }}
          >
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">
                Download Resume
              </Button>
            </a>
            <Button variant="secondary" onClick={handleConnect}>
              Let's Connect
            </Button>
          </motion.div>

          {/* Social Row */}
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 0.5 }}
          >
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mr-2">Locate Me:</span>
            {socialLinks.map((link, idx) => {
              const Icon = link.icon;
              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`p-2.5 rounded-full glass-panel border-white/5 text-slate-400 hover:scale-105 active:scale-95 transition-all duration-300 ${link.color}`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </motion.div>
        </div>

        {/* Right Grid: Circular Avatar Placeholder & Orbiting Icons */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div 
            className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.8, type: "spring" }}
          >
            {/* Outer Rotating Gradient Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary animate-rotate-gradient p-[4px] opacity-75">
              <div className="w-full h-full rounded-full bg-background-dark" />
            </div>

            {/* Inner avatar background circle */}
            <div className="w-[85%] h-[85%] rounded-full overflow-hidden bg-slate-900 border-2 border-white/10 relative z-10 flex items-center justify-center flex-col shadow-inner">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-secondary mb-2" fill="none" stroke="currentColor">
                <path d="M35 30 L20 50 L35 70" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M65 30 L80 50 L65 70" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M45 65 L55 35" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
              </svg>
              <span className="font-display font-semibold text-xs text-slate-400 tracking-wider mt-2">// CORE DEVS</span>
            </div>

            {/* Orbiting / Floating Tech Icons around avatar */}
            <div className="absolute top-0 right-4 w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-secondary border-white/10 animate-float-slow z-20 shadow-glass-sm">
              <FaReact className="w-5 h-5 animate-spin" style={{ animationDuration: '8s' }} />
            </div>

            <div className="absolute bottom-4 left-0 w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-primary border-white/10 animate-float-medium z-20 shadow-glass-sm" style={{ animationDelay: '1.5s' }}>
              <FaPython className="w-5 h-5" />
            </div>

            <div className="absolute top-1/2 left-[-20px] -translate-y-1/2 w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-yellow-400 border-white/10 animate-float-fast z-20 shadow-glass-sm" style={{ animationDelay: '0.8s' }}>
              <FaJs className="w-5 h-5" />
            </div>

            <div className="absolute bottom-6 right-0 w-11 h-11 rounded-xl glass-panel flex items-center justify-center text-emerald-400 border-white/10 animate-float-slow z-20 shadow-glass-sm" style={{ animationDelay: '2.2s' }}>
              <FaNodeJs className="w-5 h-5" />
            </div>

            <div className="absolute top-4 left-8 w-10 h-10 rounded-xl glass-panel flex items-center justify-center text-orange-500 border-white/10 animate-float-medium z-20 shadow-glass-sm" style={{ animationDelay: '3s' }}>
              <FaGitAlt className="w-4 h-4" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator bounce */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={() => {
            const about = document.getElementById('about');
            if (about) {
              const yOffset = -80;
              const y = about.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          aria-label="Scroll to About Section"
          className="text-slate-500 hover:text-white p-2 rounded-full cursor-pointer animate-bounce transition-colors duration-300"
        >
          <FaChevronDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};
