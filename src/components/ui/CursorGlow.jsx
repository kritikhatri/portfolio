import React, { useState, useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const glowRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Check if device supports touch
    const touchCheck = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    setIsTouchDevice(touchCheck);
    
    if (touchCheck) return; // Exit if mobile/tablet

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      
      const glow = glowRef.current;
      if (glow) {
        // Center the glow circle on the cursor
        const x = e.clientX - 150;
        const y = e.clientY - 150;
        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <div
      ref={glowRef}
      className={`fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-40 mix-blend-screen transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.05) 50%, rgba(0,0,0,0) 70%)',
        willChange: 'transform',
      }}
    />
  );
};
