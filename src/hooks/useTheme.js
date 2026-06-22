import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'cosmic-dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    
    // Remove all theme classes
    root.classList.remove('theme-midnight', 'theme-light', 'dark');
    body.classList.remove('theme-midnight', 'theme-light');

    // Add selected theme class
    if (theme === 'midnight-blue') {
      root.classList.add('theme-midnight', 'dark');
      body.classList.add('theme-midnight');
    } else if (theme === 'light-mode') {
      root.classList.add('theme-light');
      body.classList.add('theme-light');
    } else {
      // cosmic-dark is default
      root.classList.add('dark');
    }

    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return { theme, toggleTheme };
};
