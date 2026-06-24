import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Navbar offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/kritikakhatri", label: "GitHub" },
    { icon: FaLinkedin, url: "https://linkedin.com/in/kritikakhatri", label: "LinkedIn" },
    { icon: FaTwitter, url: "https://twitter.com/kritikakhatri", label: "Twitter" },
    { icon: FaCode, url: "https://leetcode.com/u/kritikakhatri", label: "LeetCode" }
  ];

  return (
    <footer className="relative bg-background border-t border-white/5 pt-16 pb-8 overflow-hidden z-10">
      {/* Background radial fade */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-primary/5 rounded-full filter blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        {/* Left Column: Logo & Tagline */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-sm">
              K
            </div>
            <span className="font-display font-bold text-base tracking-wider text-slate-100">
              KRITIKA KHATRI
            </span>
          </div>
          <p className="text-xs text-slate-400 font-body leading-relaxed max-w-sm">
            B.Tech Computer Science student at Newton School of Technology. Aspiring Software Engineer building impactful digital products that make a difference.
          </p>
        </div>

        {/* Center Column: Navigation Link grids */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-sm font-bold text-slate-200 tracking-wide uppercase">
            Quick Navigation
          </h4>
          <ul className="grid grid-cols-2 gap-2 text-xs font-mono">
            {["home", "about", "skills", "projects", "experience", "achievements", "contact"].map((id) => (
              <li key={id}>
                <button
                  onClick={() => handleNavClick(id)}
                  className="text-slate-400 hover:text-accent transition-colors capitalize cursor-pointer"
                >
                  // {id}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Social Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-sm font-bold text-slate-200 tracking-wide uppercase">
            Let's Connect
          </h4>
          <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
            Interested in hiring, collaborating on open-source, or just grabbing a virtual coffee? Drop a message!
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2.5 rounded-full glass-panel border-white/5 hover:border-white/20 hover:text-accent transition-all duration-300 shadow-glass-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[10px] font-mono text-slate-500">
          © {currentYear} KRITIKA KHATRI. ALL RIGHTS RESERVED.
        </span>
        <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5">
          Built with <span className="text-accent">❤️</span> using React, Tailwind & Framer Motion
        </span>
      </div>
    </footer>
  );
};
