import React from 'react';
import { useScrollProgress } from '../../hooks/useScrollProgress';

export const ScrollProgress = () => {
  const scrollProgress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-50 pointer-events-none bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-primary-pink via-primary-violet to-primary-cyan transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
