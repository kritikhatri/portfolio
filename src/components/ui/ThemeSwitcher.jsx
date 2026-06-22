import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaSpaceShuttle } from 'react-icons/fa';

export const ThemeSwitcher = ({ theme, onThemeChange }) => {
  const themes = [
    { id: 'cosmic-dark', name: 'Cosmic', icon: FaSpaceShuttle, tooltip: 'Cosmic Dark', color: 'text-purple-400 border-purple-500/20' },
    { id: 'midnight-blue', name: 'Midnight', icon: FaMoon, tooltip: 'Midnight Blue', color: 'text-blue-400 border-blue-500/20' },
    { id: 'light-mode', name: 'Light', icon: FaSun, tooltip: 'Light Mode', color: 'text-yellow-500 border-yellow-500/20' }
  ];

  return (
    <div className="glass-panel p-1.5 rounded-full flex gap-1 items-center border border-white/10 shadow-lg select-none">
      {themes.map((t) => {
        const Icon = t.icon;
        const isActive = theme === t.id;
        
        return (
          <button
            key={t.id}
            onClick={() => onThemeChange(t.id)}
            title={t.tooltip}
            aria-label={`Switch theme to ${t.name}`}
            className={`
              relative p-2.5 rounded-full transition-all duration-300 group
              ${isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-slate-200'}
            `}
          >
            {/* Pulsing glow background for active icon */}
            {isActive && (
              <motion.div
                layoutId="active-theme-bg"
                className="absolute inset-0 bg-gradient-to-r from-primary-violet/20 to-primary-cyan/20 rounded-full border border-white/10 -z-10 shadow-[0_0_12px_rgba(124,58,237,0.3)]"
                transition={{ type: "spring", stiffness: 150, damping: 18 }}
              />
            )}
            <Icon className="text-sm md:text-base relative z-10" />
            
            {/* Custom Tooltip */}
            <span className="absolute bottom-full right-1/2 translate-x-1/2 mb-2 px-2 py-1 text-[10px] font-mono font-medium text-slate-100 bg-black/80 border border-white/10 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              {t.tooltip}
            </span>
          </button>
        );
      })}
    </div>
  );
};
