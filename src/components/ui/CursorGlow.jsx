import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorGlow = () => {
  const [isMobile, setIsMobile] = useState(true);
  
  // Track raw mouse positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Setup spring physics for lag-follow effect
  const springConfig = { stiffness: 120, damping: 20, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if the device is mobile/touch-only
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 150); // half of width (300px)
      mouseY.set(e.clientY - 150); // half of height (300px)
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
      }}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-30 mix-blend-screen opacity-45 transition-opacity duration-300"
      animate={{
        background: "radial-gradient(circle, var(--glow-color) 0%, rgba(124,58,237,0) 70%)"
      }}
    />
  );
};
