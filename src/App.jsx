import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & UI
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { CursorGlow } from './components/ui/CursorGlow';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { CommandPalette } from './components/ui/CommandPalette';
import { LoadingScreen } from './components/ui/LoadingScreen';

// Sections
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { GitHub } from './components/sections/GitHub';
import { LeetCode } from './components/sections/LeetCode';
import { Achievements } from './components/sections/Achievements';
import { Timeline } from './components/sections/Timeline';
import { Testimonials } from './components/sections/Testimonials';
import { Blog } from './components/sections/Blog';
import { Contact } from './components/sections/Contact';

// Hooks
import { useTheme } from './hooks/useTheme';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen relative overflow-hidden font-body bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-500`}>
      {/* 2.5s Loading Animation Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Scroll progress gradient bar */}
          <ScrollProgress />

          {/* Interactive mouse radial glow cursor */}
          <CursorGlow />

          {/* Canvas particle background overlay */}
          <ParticleBackground />

          {/* Cmd+K spot search palette command options */}
          <CommandPalette themeSwitcher={toggleTheme} />

          {/* Responsive header navigation bar */}
          <Navbar currentTheme={theme} onThemeChange={toggleTheme} />

          {/* Page Sections layout wrapper */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <GitHub />
            <LeetCode />
            <Achievements />
            <Timeline />
            <Testimonials />
            <Blog />
            <Contact />
          </main>

          {/* Page footer links */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
      </Routes>
    </Router>
  );
}
