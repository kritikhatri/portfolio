import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';

export const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/kritika-khatri", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/kritika-khatri", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/kritika-khatri", label: "Twitter" },
    { icon: FaCode, url: "https://leetcode.com/u/kritika-khatri/", label: "LeetCode" }
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-background-cosmic/40 backdrop-blur-md">
      <div className="absolute inset-0 bg-grid-overlay opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-violet to-primary-cyan flex items-center justify-center font-display font-bold text-white text-sm">
                K
              </div>
              <span className="font-display font-bold text-base tracking-wider text-white">
                Kritika Khatri
              </span>
            </div>
            <p className="text-slate-400 text-xs mt-1 max-w-xs leading-relaxed">
              Aspiring Software Engineer focused on building modern web systems, solving algorithmic puzzles, and pursuing open-source tech.
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-col items-center gap-3">
            <h3 className="font-display font-semibold text-xs tracking-[0.2em] text-cyan-400 uppercase">
              Quick Navigation
            </h3>
            <ul className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-400">
              {['hero', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavClick(item)}
                    className="hover:text-white capitalize transition-colors duration-200"
                  >
                    {item === 'hero' ? 'Home' : item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Row */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <h3 className="font-display font-semibold text-xs tracking-[0.2em] text-primary-pink uppercase">
              Connect With Me
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-primary-cyan/40 hover:bg-white/10 hover:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition-all duration-300"
                  >
                    <Icon className="text-sm" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-white/5" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-slate-500 text-[11px] font-mono gap-4 text-center sm:text-left">
          <span>&copy; {new Date().getFullYear()} Kritika Khatri. All Rights Reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with <span className="text-red-500 animate-pulse">❤️</span> using React, Vite & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};
