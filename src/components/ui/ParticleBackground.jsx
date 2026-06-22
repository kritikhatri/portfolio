import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export const ParticleBackground = ({ theme = 'cosmic-dark' }) => {
  const [init, setInit] = useState(false);

  // Initialize tsparticles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Set particle properties depending on theme
  const getParticleColors = () => {
    if (theme === 'light-mode') {
      return ["#4f46e5", "#0891b2"]; // indigo and cyan
    }
    if (theme === 'midnight-blue') {
      return ["#2563eb", "#ec4899"]; // blue and pink
    }
    return ["#7c3aed", "#06b6d4"]; // cosmic: violet and cyan (default)
  };

  const options = {
    background: {
      color: "transparent",
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.12,
          },
        },
        push: {
          quantity: 2,
        },
      },
    },
    particles: {
      color: {
        value: getParticleColors(),
      },
      links: {
        color: theme === 'light-mode' ? "#4f46e5" : "#7c3aed",
        distance: 125,
        enable: true,
        opacity: theme === 'light-mode' ? 0.06 : 0.08,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 1.0,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 900,
        },
        value: 60,
      },
      opacity: {
        value: theme === 'light-mode' ? 0.15 : 0.22,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 2.5 },
      },
    },
    detectRetina: true,
  };

  if (!init) return null;

  return (
    <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
      <Particles id="tsparticles" options={options} className="w-full h-full" />
    </div>
  );
};
