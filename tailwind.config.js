/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          cosmic: "#110107", // Darkest wine bordeaux
          midnight: "#020617",
          light: "#faf9f6",
        },
        primary: {
          DEFAULT: "#eab308", // Champagne gold
          violet: "#d97706", // Amber gold
          cyan: "#fde047", // Light yellow gold
          pink: "#ffffff", // Pure white
        },
        cyber: {
          bg: "#110107",
          card: "rgba(0, 0, 0, 0.25)",
          border: "rgba(255, 255, 255, 0.08)",
          grid: "transparent",
        }
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out infinite 4s",
        "pulse-slow": "pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        "glow-pulse": {
          "0%, 100%": { opacity: 0.25 },
          "50%": { opacity: 0.45 }
        }
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
}
