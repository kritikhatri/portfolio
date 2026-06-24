/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0a0a0f',
          dark: '#0a0a0f',
          midnight: '#050b14',
          light: '#f8fafc',
        },
        primary: {
          DEFAULT: '#7c3aed', // Electric violet
          light: '#a78bfa',
          dark: '#5b21b6',
        },
        secondary: {
          DEFAULT: '#06b6d4', // Cyan
          light: '#22d3ee',
          dark: '#0891b2',
        },
        accent: {
          DEFAULT: '#ec4899', // Neon pink
          light: '#f472b6',
          dark: '#be185d',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          glow: 'rgba(124, 58, 237, 0.15)',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'orbit': 'orbit 20s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'rotate-gradient': 'rotateGradient 8s linear infinite',
        'draw-svg': 'drawSvg 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.3', filter: 'drop-shadow(0 0 5px rgba(124, 58, 237, 0.3))' },
          '50%': { opacity: '0.8', filter: 'drop-shadow(0 0 20px rgba(6, 182, 212, 0.6))' },
        },
        rotateGradient: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        drawSvg: {
          '0%': { strokeDashoffset: '1000', fill: 'transparent' },
          '70%': { strokeDashoffset: '0', fill: 'transparent' },
          '100%': { strokeDashoffset: '0', fill: 'currentColor' },
        }
      },
      backdropBlur: {
        xl: '20px',
        '2xl': '40px',
      },
      boxShadow: {
        'glass-sm': '0 2px 10px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
        'glass-md': '0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.08)',
        'glass-lg': '0 12px 48px rgba(0, 0, 0, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.1)',
        'neon-violet': '0 0 15px rgba(124, 58, 237, 0.4), 0 0 30px rgba(124, 58, 237, 0.2)',
        'neon-cyan': '0 0 15px rgba(6, 182, 212, 0.4), 0 0 30px rgba(6, 182, 212, 0.2)',
        'neon-pink': '0 0 15px rgba(236, 72, 153, 0.4), 0 0 30px rgba(236, 72, 153, 0.2)',
      }
    },
  },
  plugins: [],
}
