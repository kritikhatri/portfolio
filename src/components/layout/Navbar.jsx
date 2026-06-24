import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaFileDownload, FaSearch } from 'react-icons/fa';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';

export const Navbar = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" }
  ];

  // Handle scroll background changes and active sections highlights
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking
      const scrollPos = window.scrollY + 100;
      for (let i = 0; i < navLinks.length; i++) {
        const link = navLinks[i];
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Navbar height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-white/5' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Monogram */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-display font-bold text-white text-base shadow-md group-hover:shadow-neon-violet transition-shadow duration-300">
            K
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-slate-100 hidden sm:block">
            KRITIKA<span className="text-secondary font-mono">.</span>
          </span>
        </button>

        {/* Desktop Menu links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id)}
                  className={`relative font-display text-sm font-medium tracking-wide transition-colors py-1.5 cursor-pointer ${activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-secondary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="w-[1px] h-6 bg-white/10" />

          {/* Action Row */}
          <div className="flex items-center gap-3">
            {/* Theme switcher */}
            <ThemeSwitcher currentTheme={currentTheme} onThemeChange={onThemeChange} />
            
            {/* Resume button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel hover:bg-white/5 px-4 py-2 rounded-full border-white/10 hover:border-white/20 text-xs font-mono font-medium text-slate-200 transition-all flex items-center gap-1.5 shadow-glass-sm"
            >
              <FaFileDownload className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Mobile controls & toggle button */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeSwitcher currentTheme={currentTheme} onThemeChange={onThemeChange} />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-slate-400 hover:text-white glass-panel"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-6 shadow-glass-lg"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full text-left font-display text-base font-semibold py-1.5 border-b border-white/5 cursor-pointer ${activeSection === link.id ? 'text-accent' : 'text-slate-300'}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-primary to-secondary py-3 rounded-xl text-center text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-md"
              >
                <FaFileDownload />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
