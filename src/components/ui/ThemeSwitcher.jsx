import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPalette, FaCheck } from 'react-icons/fa';

export const ThemeSwitcher = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const themesList = [
    { id: 'theme-cosmic', name: 'Cosmic Dark', desc: 'Space black & violet glow', colorBg: 'bg-[#0a0a0f]', border: 'border-violet-500' },
    { id: 'theme-midnight', name: 'Midnight Blue', desc: 'Deep blue ocean aura', colorBg: 'bg-[#050b14]', border: 'border-blue-500' },
    { id: 'theme-light', name: 'Light Slate', desc: 'Clean paper aesthetics', colorBg: 'bg-[#f8fafc]', border: 'border-indigo-600' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [isOpen]);

  const selectTheme = (themeId) => {
    onThemeChange(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change Theme"
        className="p-2.5 rounded-full glass-panel hover:text-accent border-white/10 hover:border-white/20 transition-all flex items-center justify-center cursor-pointer shadow-glass-sm"
      >
        <FaPalette className="w-4 h-4" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-3 w-64 glass-panel bg-background/95 rounded-xl border border-white/10 p-2 z-50 shadow-glass-lg"
          >
            <div className="px-3 py-2 text-xs font-mono font-bold tracking-wider text-accent border-b border-white/5 uppercase">
              // Interface Theme
            </div>
            
            <div className="mt-1 flex flex-col gap-1">
              {themesList.map((item) => {
                const isActive = currentTheme === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => selectTheme(item.id)}
                    className={`w-full text-left p-2 rounded-lg flex items-center gap-3 hover:bg-white/5 transition-all text-xs cursor-pointer ${isActive ? 'bg-white/5' : ''}`}
                  >
                    {/* Circle Indicator */}
                    <div className={`w-6 h-6 rounded-full border border-white/10 ${item.colorBg} shrink-0 flex items-center justify-center`}>
                      {isActive && <FaCheck className={`w-2.5 h-2.5 ${item.id === 'theme-light' ? 'text-slate-800' : 'text-accent'}`} />}
                    </div>
                    {/* Label */}
                    <div className="flex flex-col">
                      <span className="font-display font-semibold text-slate-100">{item.name}</span>
                      <span className="text-[10px] text-slate-500 font-mono mt-0.5">{item.desc}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
