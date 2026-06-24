import React, { useState, useEffect, useRef } from 'react';

export const AnimatedCounter = ({ value, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let observer;
    let startTimestamp = null;
    
    // Extract numerical value
    const match = String(value).match(/\d+/);
    const end = match ? parseInt(match[0], 10) : 0;
    const suffix = String(value).replace(/\d+/, '');

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = Math.floor(progress * end);
      setCount(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [value, duration]);

  // Merge the animation number with any suffixes (like +)
  const displaySuffix = String(value).replace(/\d+/, '');
  
  return (
    <span ref={ref} className="font-display font-bold">
      {count}
      {displaySuffix}
    </span>
  );
};
