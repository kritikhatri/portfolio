import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { CursorGlow } from './components/ui/CursorGlow';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { ParticleBackground } from './components/ui/ParticleBackground';
import { CommandPalette } from './components/ui/CommandPalette';
import { useTheme } from './hooks/useTheme';

// Lazy-loaded portfolio sections for bundle performance
const Hero = lazy(() => import('./components/sections/Hero').then(m => ({ default: m.Hero })));
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Experience = lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const GitHub = lazy(() => import('./components/sections/GitHub').then(m => ({ default: m.GitHub })));
const LeetCode = lazy(() => import('./components/sections/LeetCode').then(m => ({ default: m.LeetCode })));
const Achievements = lazy(() => import('./components/sections/Achievements').then(m => ({ default: m.Achievements })));
const Timeline = lazy(() => import('./components/sections/Timeline').then(m => ({ default: m.Timeline })));
const Testimonials = lazy(() => import('./components/sections/Testimonials').then(m => ({ default: m.Testimonials })));
const Blog = lazy(() => import('./components/sections/Blog').then(m => ({ default: m.Blog })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));

// Interactive section fallback loader
const SectionLoader = () => (
  <div className="w-full py-16 flex justify-center items-center">
    <div className="w-6 h-6 rounded-full border-2 border-primary-cyan/10 border-t-primary-cyan animate-spin" />
  </div>
);

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Set initial scroll offset
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* 2.5s SVG Drawing Loading Screen */}
      <LoadingScreen onFinished={() => setIsLoading(false)} />

      {!isLoading && (
        <div className="relative min-h-screen flex flex-col justify-between">
          {/* Scroll progress bar overlay */}
          <ScrollProgress />

          {/* Mouse follow glowing cursor ring */}
          <CursorGlow />

          {/* High-performance connected particle space */}
          <ParticleBackground theme={theme} />



          {/* Ambient Aurora Light Spheres */}
          <div className="fixed top-[-10%] left-[-15%] w-[60vw] h-[60vw] bg-primary-violet/10 aurora-bg-sphere animate-aurora-1" />
          <div className="fixed bottom-[-15%] right-[-15%] w-[70vw] h-[70vw] bg-primary-cyan/10 aurora-bg-sphere animate-aurora-2" />
          <div className="fixed top-[30%] right-[5%] w-[45vw] h-[45vw] bg-primary-pink/5 aurora-bg-sphere animate-aurora-1" style={{ animationDelay: "-8s" }} />

          {/* Core Sticky Navbar */}
          <Navbar theme={theme} onThemeChange={toggleTheme} />

          {/* Page contents wrapping sections */}
          <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-10 overflow-hidden">
            <Suspense fallback={<SectionLoader />}>
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
            </Suspense>
          </main>

          {/* Command Console modal palette (⌘K) */}
          <CommandPalette theme={theme} onThemeChange={toggleTheme} />

          {/* Shared Footer component */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
