import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaSearch, 
  FaCompass, 
  FaPalette, 
  FaGithub, 
  FaFileDownload,
  FaTimes
} from 'react-icons/fa';

export const CommandPalette = ({ themeSwitcher }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const inputRef = useRef(null);
  const paletteRef = useRef(null);

  // Toggle palette open/close with Cmd+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
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

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setSearch('');
    }
  }, [isOpen]);

  // Close palette if user clicks outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (paletteRef.current && !paletteRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Navigate to element
  const navigateTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Navbar offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const commands = [
    // Navigation Commands
    { category: "Navigation", label: "Go to Home", action: () => navigateTo('home'), icon: FaCompass },
    { category: "Navigation", label: "Go to About", action: () => navigateTo('about'), icon: FaCompass },
    { category: "Navigation", label: "Go to Skills", action: () => navigateTo('skills'), icon: FaCompass },
    { category: "Navigation", label: "Go to Projects", action: () => navigateTo('projects'), icon: FaCompass },
    { category: "Navigation", label: "Go to Experience", action: () => navigateTo('experience'), icon: FaCompass },
    { category: "Navigation", label: "Go to GitHub Analytics", action: () => navigateTo('github'), icon: FaCompass },
    { category: "Navigation", label: "Go to LeetCode Stats", action: () => navigateTo('leetcode'), icon: FaCompass },
    { category: "Navigation", label: "Go to Achievements", action: () => navigateTo('achievements'), icon: FaCompass },
    { category: "Navigation", label: "Go to Timeline Journey", action: () => navigateTo('timeline'), icon: FaCompass },
    { category: "Navigation", label: "Go to Testimonials", action: () => navigateTo('testimonials'), icon: FaCompass },
    { category: "Navigation", label: "Go to Blog & Newsletter", action: () => navigateTo('blog'), icon: FaCompass },
    { category: "Navigation", label: "Go to Contact", action: () => navigateTo('contact'), icon: FaCompass },
    
    // Theme Commands
    { category: "Themes", label: "Switch to Cosmic Dark theme", action: () => { themeSwitcher('theme-cosmic'); setIsOpen(false); }, icon: FaPalette },
    { category: "Themes", label: "Switch to Midnight Blue theme", action: () => { themeSwitcher('theme-midnight'); setIsOpen(false); }, icon: FaPalette },
    { category: "Themes", label: "Switch to Light Mode theme", action: () => { themeSwitcher('theme-light'); setIsOpen(false); }, icon: FaPalette },

    // External Shortcuts
    { category: "Links", label: "Open GitHub Profile", action: () => { window.open('https://github.com/kritikakhatri', '_blank'); setIsOpen(false); }, icon: FaGithub },
    { category: "Links", label: "Download Resume PDF", action: () => { window.open('/resume.pdf', '_blank'); setIsOpen(false); }, icon: FaFileDownload },
  ];

  // Filter commands based on input
  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase()) ||
    cmd.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Keyboard Shortcut Indicator Tip in Footer or Top */}
      <div className="fixed bottom-5 right-5 z-30 hidden md:block">
        <button 
          onClick={() => setIsOpen(true)}
          className="glass-panel text-xs text-slate-400 px-3 py-2 rounded-full flex items-center gap-1.5 hover:text-white transition-all cursor-pointer shadow-glass-sm"
        >
          <span>Press</span>
          <kbd className="bg-slate-800 border border-slate-700 rounded px-1 text-[10px] font-mono font-semibold">⌘K</kbd>
          <span>to explore</span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-start justify-center pt-[15vh] px-4">
            <motion.div
              ref={paletteRef}
              initial={{ scale: 0.95, opacity: 0, y: -20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-xl glass-panel bg-background/90 rounded-2xl overflow-hidden border border-white/10 shadow-glass-lg"
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                <FaSearch className="text-slate-400 w-4 h-4 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search commands, navigate or select themes..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-transparent text-slate-100 placeholder-slate-500 w-full text-sm outline-none border-none focus:ring-0"
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-white p-1"
                >
                  <FaTimes className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Commands List */}
              <div className="max-h-[350px] overflow-y-auto p-2 scrollbar-thin">
                {filteredCommands.length > 0 ? (
                  // Group by categories
                  ["Navigation", "Themes", "Links"].map((cat) => {
                    const catCmds = filteredCommands.filter(c => c.category === cat);
                    if (catCmds.length === 0) return null;
                    return (
                      <div key={cat} className="mb-2">
                        <div className="text-[10px] font-mono tracking-wider text-accent font-semibold px-3 py-1 uppercase opacity-75">
                          {cat}
                        </div>
                        {catCmds.map((cmd, index) => {
                          const Icon = cmd.icon;
                          return (
                            <button
                              key={index}
                              onClick={cmd.action}
                              className="w-full text-left px-3 py-2.5 rounded-lg flex items-center gap-3 text-sm text-slate-300 hover:bg-white/5 hover:text-white transition-all duration-150 cursor-pointer"
                            >
                              <Icon className="text-slate-400 w-3.5 h-3.5" />
                              <span>{cmd.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    );
                  })
                ) : (
                  <div className="text-center py-8 text-sm text-slate-500 font-mono">
                    No commands matched your query.
                  </div>
                )}
              </div>

              {/* Footer Info */}
              <div className="bg-black/40 px-4 py-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Use <kbd className="bg-slate-900 px-1 py-0.5 rounded border border-white/5 font-mono text-[9px]">↑↓</kbd> or click to execute</span>
                <span>ESC to exit</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
