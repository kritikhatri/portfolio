import React from 'react';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-[#F2D9D9] selection:text-[#3a3a3a]">
      {/* Soft Blurred Background Blobs */}
      <div className="blur-blob w-[450px] h-[450px] top-[-100px] left-[-150px] bg-[#D9D4F0]" />
      <div className="blur-blob w-[500px] h-[500px] bottom-[-200px] right-[-200px] bg-[#D9D4F0]" />
      <div className="blur-blob w-[350px] h-[350px] top-[40%] left-[60%] bg-[#F2D9D9]/40" />

      {/* Main Single Page Layout */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-32 flex flex-col gap-32">
        <Hero />
        <Projects />
        
        {/* Minimalist Footer */}
        <footer className="mt-16 pt-8 border-t border-[#3a3a3a]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#3a3a3a]/50">
          <span>© {new Date().getFullYear()} KRITIKA KHATRI. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4">
            <a href="https://github.com/kritikakhatri" target="_blank" rel="noopener noreferrer" className="hover:text-[#3a3a3a] transition-colors">GITHUB</a>
            <a href="https://linkedin.com/in/kritikakhatri" target="_blank" rel="noopener noreferrer" className="hover:text-[#3a3a3a] transition-colors">LINKEDIN</a>
            <a href="https://leetcode.com/u/kritikakhatri" target="_blank" rel="noopener noreferrer" className="hover:text-[#3a3a3a] transition-colors">LEETCODE</a>
          </div>
        </footer>
      </main>
    </div>
  );
}
