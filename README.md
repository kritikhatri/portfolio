# Kritika Khatri | Personal Developer Portfolio

[![React](https://img.shields.io/badge/React-18.3-blue?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.2-purple?logo=framer&logoColor=white)](https://framer.com/motion)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

A complete, production-ready, cyberpunk-futuristic developer portfolio website built from scratch. Designed with dark-first glassmorphism, dynamic animations, live third-party integrations, and professional branding strategy to stand out for software engineering applications.

---

## 🚀 Key Features

1. **Space Particle Background** — Interactive floating node systems that link lines on cursor hover using `@tsparticles/react`.
2. **Interactive Command Palette (⌘K)** — A spotlight search drawer enabling fast key navigations, theme alterations, and resume download triggers.
3. **Cursor Radial Glow** — Custom blend-mode cursor spotlight overlay following cursors on non-touch devices.
4. **Live GitHub Integration** — Live profile information stats fetcher and repository compiler, combined with a contribution square heat-matrix.
5. **Live LeetCode Charts** — Detailed pie-chart distributions and submissions tracker fetching problem solutions in real-time.
6. **Animated Counters** — Increments statistics parameters (Solved DSA, Hackathons, Projects) on viewport scroll visibility.
7. **EmailJS Contact Gateway** — Real-time validation contact forms utilizing EmailJS templates and status toast notifications.
8. **3 Custom Interfaces** — Persisted toggle schemes supporting Cosmic Dark, Midnight Blue, and Light Mode profiles.
9. **SVG Stroke Loading Animation** — 2.5s SVG drawing path welcome screen tracking loader percentages.
10. **Bento Grid Layout** — Asymmetric grid cards formatting achievements, certificates, and metrics with custom color glows.

---

## 🛠️ Stack & Architecture

- **Core**: React 18 (Vite 5 Single-page App)
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS 3 (JIT processing, custom properties mapping)
- **Animations**: Framer Motion 11 (Spring physics and tween curves)
- **Charts**: Recharts (Pie visualizer cell rendering)
- **HTTP client**: Axios
- **Form Dispatch**: `@emailjs/browser`
- **Fonts**: Space Grotesk (Headers), Inter (Body), JetBrains Mono (Codes)

---

## 📂 Project Structure

```text
kritika-portfolio/
├── public/
│   ├── favicon.svg         ← Cyberpunk monogram logo icon
│   ├── resume.pdf          ← Add your PDF CV file here
│   └── og-image.png        ← Open Graph visual preview thumbnail
├── src/
│   ├── main.jsx            ← Mount points entry
│   ├── App.jsx             ← Core router, loaders, and state controls
│   ├── index.css           ← Base themes, scrollbar and grid styles
│   ├── data/               ← Content arrays (experience, projects, etc)
│   ├── hooks/              ← Custom hooks (useGitHub, useLeetCode, useTheme)
│   ├── utils/              ← Motion animation configurations
│   ├── components/
│   │   ├── layout/         ← Sticky headers and footers
│   │   ├── ui/             ← Glass cards, buttons, palettes, and particle loaders
│   │   └── sections/       ← Page sections (Hero, About, Leetcode, Contact)
```

---

## ⚡ Setup & Run

### 1. Installation

Install Node modules and project devDependencies:

```bash
npm install
```

### 2. Local Development

Run the local Vite development server on `http://localhost:3000`:

```bash
npm run dev
```

### 3. Build Production Bundle

Verify TypeScript compilation, asset optimization, and packaging:

```bash
npm run build
```

---

## ⚙️ Post-Launch Customizations

1. **GitHub Stats**: Update the username parameter in `src/components/sections/GitHub.jsx` inside the `useGitHub('your_username')` hook call.
2. **LeetCode Stats**: Update the username parameter in `src/components/sections/LeetCode.jsx` inside the `useLeetCode('your_username')` hook call.
3. **EmailJS Contact Delivery**:
   - Create a free account at [EmailJS](https://www.emailjs.com/).
   - Set up a Mail service provider and Template.
   - Create a `.env` file from `.env.example` and input your keys:
     ```text
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
4. **Resume CV**: Save your professional resume as `resume.pdf` directly inside the `public/` directory to enable download button links.

---

## 📄 License

MIT License. Feel free to clone, edit and build your personal branding portfolios.
