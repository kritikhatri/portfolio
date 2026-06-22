import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter, FaCode, FaArrowDown } from 'react-icons/fa';
import { SiReact, SiJavascript, SiPython, SiCplusplus, SiGit, SiTailwindcss } from 'react-icons/si';
import { Button } from '../ui/Button';
import { springTransition } from '../../utils/animations';

export const Hero = () => {
  const name = "Kritika Khatri";

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/kritika-khatri", color: "hover:text-slate-100 hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/kritika-khatri", color: "hover:text-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/kritika-khatri", color: "hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]", label: "Twitter" },
    { icon: FaCode, url: "https://leetcode.com/u/kritika-khatri/", color: "hover:text-amber-500 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)]", label: "LeetCode" }
  ];

  // Orbiting Tech Icons config
  const orbitingIcons = [
    { icon: SiReact, className: "text-cyan-400 animate-orbit-slow", delay: "0s", pos: "top-0 left-1/2 -ml-6" },
    { icon: SiJavascript, className: "text-yellow-400 animate-orbit-medium", delay: "-2s", pos: "right-0 top-1/2 -mt-6" },
    { icon: SiPython, className: "text-blue-500 animate-orbit-fast", delay: "-4s", pos: "bottom-0 left-1/2 -ml-6" },
    { icon: SiCplusplus, className: "text-indigo-500 animate-orbit-slow", delay: "-6s", pos: "left-0 top-1/2 -mt-6" },
    { icon: SiGit, className: "text-orange-500 animate-orbit-medium", delay: "-1s", pos: "top-12 right-12" },
    { icon: SiTailwindcss, className: "text-teal-400 animate-orbit-fast", delay: "-3s", pos: "bottom-12 left-12" }
  ];

  const characterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.05,
        ...springTransition
      }
    })
  };

  const handleConnect = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Col - Introduction */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-sm tracking-[0.25em] text-primary-pink font-semibold uppercase mb-4"
          >
            Hi, I'm
          </motion.span>
          
          {/* Animated Name */}
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4 select-none">
            {name.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={characterVariants}
                className={char === " " ? "inline-block w-4" : "inline-block bg-gradient-to-r from-primary-violet via-primary-pink to-primary-cyan bg-clip-text text-transparent text-glow"}
              >
                {char}
              </motion.span>
            ))}
          </h1>

          {/* Cycling Typewriter */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <span className="font-mono text-slate-400 text-lg sm:text-2xl mr-2 font-medium">I am a</span>
            <span className="font-display text-primary-cyan text-lg sm:text-2xl font-bold">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  1500,
                  'AI/ML Enthusiast',
                  1500,
                  'Open Source Contributor',
                  1500,
                  'Future Tech Founder',
                  1500,
                  'DSA Explorer',
                  1500
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </div>

          {/* Subtext Compelling bio */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-slate-400 text-sm sm:text-base md:text-lg mb-8 max-w-xl leading-relaxed font-sans"
          >
            Engineering robust systems and crafting premium digital experiences. 
            Currently diving deep into DSA, full-stack application development, and open-source frameworks to build products that impact millions.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4 items-center mb-10 w-full"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download Resume
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleConnect}
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Social Row with custom hover glows */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1.0, delay: 1.4 }}
            className="flex items-center gap-5"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] text-slate-500 uppercase">Registry:</span>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className={`
                      w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 
                      transition-all duration-300 ${link.color} hover:bg-white/10 hover:-translate-y-1
                    `}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Right Col - Visual Avatar Orbit */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, delay: 0.5, type: 'spring' }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center select-none"
          >
            {/* Pulsing glow background */}
            <div className="absolute inset-0 bg-primary-violet/10 rounded-full blur-3xl animate-pulse-slow -z-10" />

            {/* Rotating gradient ring */}
            <div className="absolute inset-2 rounded-full border-2 border-dashed border-primary-cyan/40 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary-violet border-b-primary-pink animate-[spin_15s_linear_infinite]" />

            {/* Avatar Circle Container */}
            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full p-1 bg-gradient-to-tr from-primary-violet via-primary-pink to-primary-cyan relative z-10 shadow-[0_0_40px_rgba(124,58,237,0.4)] overflow-hidden">
              <div className="w-full h-full rounded-full bg-background-cosmic flex items-center justify-center overflow-hidden">
                {/* Mock recruiter-friendly illustration avatar */}
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                  alt="Kritika Khatri Avatar"
                  className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* Orbiting Tech Icons */}
            {orbitingIcons.map((item, index) => {
              const TechIcon = item.icon;
              return (
                <div
                  key={index}
                  className={`absolute w-12 h-12 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg transition-transform hover:scale-110 z-20 ${item.pos}`}
                  style={{
                    animation: `float 4s ease-in-out infinite`,
                    animationDelay: item.delay
                  }}
                >
                  <TechIcon className="text-2xl" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Bouncing Scroll Indicator Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10 cursor-pointer text-slate-500 hover:text-white transition-colors duration-200">
        <span className="font-mono text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <FaArrowDown className="text-xs" />
        </motion.div>
      </div>
    </section>
  );
};
