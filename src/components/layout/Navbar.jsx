import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaKeyboard } from 'react-icons/fa';
import { ThemeSwitcher } from '../ui/ThemeSwitcher';

export const Navbar = ({ theme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ];

  // Track window scroll for background transparency change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
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
      const offset = 80; // navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-40 transition-all duration-300
        ${isScrolled 
          ? 'bg-background-cosmic/75 backdrop-blur-md border-b border-white/10 py-3' 
          : 'bg-transparent py-5'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Monogram */}
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-violet to-primary-cyan flex items-center justify-center font-display font-bold text-white text-lg shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover:scale-105 transition-transform duration-300">
            K
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-glow group-hover:text-primary-cyan transition-colors duration-300 hidden sm:block">
            KRITIKA.dev
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleNavClick(item.id)}
                  className={`
                    relative font-display text-sm font-medium transition-colors duration-200 py-1.5 focus:outline-none
                    ${activeSection === item.id ? 'text-white' : 'text-slate-400 hover:text-slate-200'}
                  `}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="active-nav-dot"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-violet to-primary-cyan rounded-full"
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Theme switcher */}
          <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeSwitcher theme={theme} onThemeChange={onThemeChange} />
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-primary-violet/30 rounded-lg bg-white/5 border border-white/5"
          >
            {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden w-full bg-background-cosmic/95 backdrop-blur-xl border-b border-white/10 overflow-hidden absolute left-0 top-full"
          >
            <ul className="flex flex-col p-6 space-y-4 font-display">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      w-full text-left py-2 px-4 rounded-xl text-base transition-colors duration-200 focus:outline-none
                      ${activeSection === item.id 
                        ? 'bg-white/5 border border-white/5 text-primary-cyan font-semibold' 
                        : 'text-slate-300 hover:text-white'}
                    `}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
