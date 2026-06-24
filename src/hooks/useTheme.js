import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    return saved || 'theme-cosmic'; // default theme is theme-cosmic (dark space)
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove other theme classes
    root.classList.remove('theme-cosmic', 'theme-midnight', 'theme-light');
    
    // Add current theme class
    root.classList.add(theme);
    
    // Save to local storage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return { theme, toggleTheme };
};
