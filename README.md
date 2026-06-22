# 🌌 Kritika Khatri — Cyberpunk Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3-cyan?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.3-purple?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.3-pink?style=for-the-badge&logo=framer)](https://framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](https://opensource.org/licenses/MIT)

A complete, production-ready developer portfolio website designed from scratch for **Kritika Khatri**. Leveraging a high-fidelity **Dark-first Glassmorphism & Cyberpunk-Futuristic** aesthetic, this codebase integrates live metrics (GitHub & LeetCode APIs), micro-animations, theme managers, and contact triggers to stand out in technical recruiting loops.

---

## ✨ Features Breakdown

1. **Space Grid Overlay Background & connected Particles** driven by high-performance `@tsparticles/slim` engine.
2. **Cursor Glow Effect** follow physics utilizing Framer Motion spring engines (disabled on touch viewports).
3. **SVG Monogram Loader** drawing path logo transitions on site initialization.
4. **Command Console Palette** triggered by `⌘K` / `Ctrl+K` for seamless navigation, external profiles, and theme cycles.
5. **Interactive Skills Tab system** showing tech stack indicators with level meters.
6. **Feature Projects Dashboard** with search strings, filter tags, and detailed modally-displayed breakdowns.
7. **APIs Stats Trackers** fetching real-time repository cards from GitHub and donut-chart breakdowns from LeetCode.
8. **Contact System** bound to EmailJS with client-side validation checks and sliding confirmation toast alerts.
9. **Multi-theme Toggle Widget** supporting Cosmic Dark, Midnight Blue, and Light Mode.

---

## 🛠️ Technology Stack

- **Core Framework:** React 18 & Vite 5
- **Styling:** Tailwind CSS 3 (JIT Mode) & PostCSS
- **Animations:** Framer Motion 11
- **Icons:** React Icons 5
- **Forms Handling:** EmailJS `@emailjs/browser`
- **Charts Engine:** Recharts
- **HTTP Client:** Axios
- **Typewriter FX:** `react-type-animation`

---

## 📁 File Structure

```text
kritikhatriportfolio/
├── public/
│   ├── favicon.svg          ← hex monogram icon
│   ├── resume.pdf          ← placeholder resume
│   └── og-image.png        ← Open Graph preview thumbnail
├── src/
│   ├── main.jsx            ← React standard mount point
│   ├── App.jsx             ← main router and lazy loader wrapper
│   ├── index.css           ← global variables, directives, and themes
│   ├── data/               ← centralized mock & metadata assets
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── timeline.js
│   │   └── achievements.js
│   ├── hooks/              ← custom hooks for data fetching & theme state
│   │   ├── useScrollProgress.js
│   │   ├── useGitHub.js
│   │   ├── useLeetCode.js
│   │   └── useTheme.js
│   ├── utils/
│   │   └── animations.js   ← framer motion spring & slide presets
│   ├── components/
│   │   ├── layout/         ← navigation & footer
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── ui/             ← interactive layout modules
│   │   │   ├── Button.jsx
│   │   │   ├── GlassCard.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   ├── CursorGlow.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── ParticleBackground.jsx
│   │   │   ├── CommandPalette.jsx
│   │   │   └── ThemeSwitcher.jsx
│   │   └── sections/       ← scroll sections
│   │       ├── Hero.jsx
│   │       ├── About.jsx
│   │       ├── Skills.jsx
│   │       ├── Projects.jsx
│   │       ├── ProjectModal.jsx
│   │       ├── Experience.jsx
│   │       ├── GitHub.jsx
│   │       ├── LeetCode.jsx
│   │       ├── Achievements.jsx
│   │       ├── Timeline.jsx
│   │       ├── Testimonials.jsx
│   │       ├── Blog.jsx
│   │       └── Contact.jsx
├── .env.example
├── .gitignore
├── index.html
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone & Install Dependencies
Navigate into your directory and run:
```bash
npm install
```

### 2. Configure Environment Keys
Duplicate `.env.example` to create a `.env` file:
```bash
cp .env.example .env
```
Provide your actual GitHub/LeetCode usernames and EmailJS service parameters.

### 3. Run Locally
Launch the Vite development server:
```bash
npm run dev
```
Open `http://localhost:3000` in your web browser.

### 4. Build for Production
Compile optimized build bundles:
```bash
npm run build
```
Verify compilation output in the generated `dist/` directory.

---

## 🎨 Theme Details

Custom variables are processed inside `src/index.css`. To adjust color codes:
- **Cosmic Dark (Base):** Deep Space Violet (#7c3aed) and Cyber Cyan (#06b6d4) accents on rich black background.
- **Midnight Blue:** Sleek dark blue (#020817) background with Neon Pink (#ec4899) and Royal Blue (#2563eb) accents.
- **Light Mode:** Modern soft slate background (#f8fafc) with Indigo (#4f46e5) and Teal highlights.

---

## 📄 License
This project is open-source under the [MIT License](LICENSE).
