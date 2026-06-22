import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaArrowRight, FaKeyboard, FaTimes } from 'react-icons/fa';

export const CommandPalette = ({ theme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const commands = [
    { id: 'sec-hero', name: 'Go to Home / Intro', category: 'Navigation', action: () => scrollToSection('hero') },
    { id: 'sec-about', name: 'Go to About Me', category: 'Navigation', action: () => scrollToSection('about') },
    { id: 'sec-skills', name: 'Go to Skills Tab', category: 'Navigation', action: () => scrollToSection('skills') },
    { id: 'sec-projects', name: 'Go to Projects Showcase', category: 'Navigation', action: () => scrollToSection('projects') },
    { id: 'sec-experience', name: 'Go to Experience & Education', category: 'Navigation', action: () => scrollToSection('experience') },
    { id: 'sec-github', name: 'Go to GitHub Repositories', category: 'Navigation', action: () => scrollToSection('github') },
    { id: 'sec-leetcode', name: 'Go to LeetCode Stats', category: 'Navigation', action: () => scrollToSection('leetcode') },
    { id: 'sec-achievements', name: 'Go to Achievements Grid', category: 'Navigation', action: () => scrollToSection('achievements') },
    { id: 'sec-timeline', name: 'Go to Career Timeline', category: 'Navigation', action: () => scrollToSection('timeline') },
    { id: 'sec-contact', name: 'Go to Contact Form', category: 'Navigation', action: () => scrollToSection('contact') },
    
    { id: 'theme-cosmic', name: 'Set Theme: Cosmic Dark', category: 'Theme', action: () => onThemeChange('cosmic-dark') },
    { id: 'theme-midnight', name: 'Set Theme: Midnight Blue', category: 'Theme', action: () => onThemeChange('midnight-blue') },
    { id: 'theme-light', name: 'Set Theme: Light Mode', category: 'Theme', action: () => onThemeChange('light-mode') },
    
    { id: 'act-github', name: 'Open GitHub Profile', category: 'External Link', action: () => window.open('https://github.com/kritika-khatri', '_blank') },
    { id: 'act-linkedin', name: 'Open LinkedIn Profile', category: 'External Link', action: () => window.open('https://linkedin.com/in/kritika-khatri', '_blank') },
    { id: 'act-resume', name: 'Download PDF Resume', category: 'Action', action: () => window.open('/resume.pdf', '_blank') },
  ];

  // Open with Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Reset index and auto focus search
  useEffect(() => {
    if (isOpen) {
      setSearch('');
      setSelectedIndex(0);
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // nav height offset
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

  const filteredCommands = commands.filter(cmd => 
    cmd.name.toLowerCase().includes(search.toLowerCase()) || 
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (cmd) => {
    cmd.action();
    setIsOpen(false);
  };

  // Keyboard navigation inside list
  const handleListKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        handleSelect(filteredCommands[selectedIndex]);
      }
    }
  };

  // Sync scroll on key nav
  useEffect(() => {
    const activeEl = listRef.current?.children[selectedIndex];
    if (activeEl) {
      activeEl.scrollIntoView({ block: 'nearest' });
    }
  }, [selectedIndex]);

  return (
    <>
      {/* Shortcut Indicator in corner (helps prompt user to try command palette) */}
      <div className="fixed bottom-4 left-4 z-40 hidden md:block">
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Command Console"
          className="glass-panel px-3 py-1.5 rounded-full flex items-center gap-2 hover:border-primary-cyan/40 hover:shadow-[0_0_15px_var(--glow-color)] transition-all duration-300 text-xs font-mono text-slate-400 hover:text-white"
        >
          <FaKeyboard className="text-sm" />
          <span>Press</span>
          <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] border border-white/10">⌘</kbd>
          <span>+</span>
          <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px] border border-white/10">K</kbd>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Console Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="glass-panel w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 mx-4"
            >
              {/* Input header */}
              <div className="flex items-center gap-3 px-4 border-b border-white/5 py-4">
                <FaSearch className="text-slate-400 text-lg shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a command or search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleListKeyDown}
                  className="w-full bg-transparent border-none text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-0 text-sm font-sans"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Suggestions List */}
              <div 
                ref={listRef}
                className="max-h-[300px] overflow-y-auto p-2 space-y-1 scrollbar-thin"
              >
                {filteredCommands.length > 0 ? (
                  filteredCommands.map((cmd, idx) => {
                    const isSelected = idx === selectedIndex;
                    return (
                      <div
                        key={cmd.id}
                        onClick={() => handleSelect(cmd)}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`
                          flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-all duration-150
                          ${isSelected ? 'bg-gradient-to-r from-primary-violet/20 to-primary-cyan/20 border border-primary-cyan/25' : 'border border-transparent hover:bg-white/5'}
                        `}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/5">
                            {cmd.category}
                          </span>
                          <span className={`text-sm ${isSelected ? 'text-white font-medium' : 'text-slate-300'}`}>
                            {cmd.name}
                          </span>
                        </div>
                        {isSelected && (
                          <motion.span
                            layoutId="palette-arrow"
                            className="text-primary-cyan text-xs flex items-center gap-1"
                          >
                            <span>Enter</span>
                            <FaArrowRight />
                          </motion.span>
                        )}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-slate-500 text-sm">
                    No results found for "{search}"
                  </div>
                )}
              </div>

              {/* Instructions footer */}
              <div className="bg-white/[0.02] border-t border-white/5 px-4 py-3 flex justify-between items-center text-[10px] font-mono text-slate-500">
                <div className="flex gap-4">
                  <span><kbd className="bg-white/5 px-1 rounded">↑↓</kbd> Navigate</span>
                  <span><kbd className="bg-white/5 px-1 rounded">Enter</kbd> Select</span>
                </div>
                <span>ESC to Close</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
