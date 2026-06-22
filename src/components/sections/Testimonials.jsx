import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Kritika shows exceptional drive and analytical skills. Her solutions in algorithms classes are always well-reasoned and thoroughly optimized. She is easily in the top tier of students in her batch.",
      author: "Professor S. Sharma",
      role: "Dean of Computer Science",
      org: "Newton School of Technology",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "Working with Kritika during HackNST was an absolute breeze. She took charge of the entire frontend architecture, designed a stunning cyberpunk interface, and implemented clean React logic within hours.",
      author: "Amit Verma",
      role: "Lead Hackathon Collaborator",
      org: "B.Tech Batchmate",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "Kritika is a dedicated learner who approaches web engineering with passion. Her collaborative attitude, readiness to absorb mentorship, and eagerness to contribute to open source sets her apart.",
      author: "Dr. R. Gupta",
      role: "Industry Lab Director",
      org: "NST Mentor",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
      5000
    );

    return () => resetTimeout();
  }, [activeIndex, testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Peer Reviews"
          subtitle="Recommendation Letters"
          alignment="center"
        />

        {/* Carousel Wrapper */}
        <div
          className="relative mt-8"
          onMouseEnter={resetTimeout}
          onMouseLeave={() => {
            resetTimeout();
            timeoutRef.current = setTimeout(
              () => setActiveIndex((prev) => (prev + 1) % testimonials.length),
              5000
            );
          }}
        >
          {/* Slider content with AnimatePresence */}
          <div className="relative h-64 sm:h-56 w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full h-full"
              >
                <GlassCard className="h-full flex flex-col justify-between py-6 px-6 sm:px-8 border border-white/10 hover:border-primary-cyan/40">
                  <div className="space-y-4">
                    <FaQuoteLeft className="text-primary-pink text-2xl opacity-35" />
                    
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base italic leading-relaxed font-sans">
                      "{testimonials[activeIndex].quote}"
                    </p>
                  </div>

                  {/* Reviewer Meta Details */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-white/10 shrink-0">
                      <img
                        src={testimonials[activeIndex].avatar}
                        alt={testimonials[activeIndex].author}
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                    
                    <div className="space-y-0.5">
                      <h4 className="font-display font-extrabold text-sm text-slate-100">
                        {testimonials[activeIndex].author}
                      </h4>
                      <div className="flex flex-wrap items-center gap-1.5 text-slate-400 text-[10px] font-mono">
                        <span>{testimonials[activeIndex].role}</span>
                        <span>&bull;</span>
                        <span className="text-cyan-400">{testimonials[activeIndex].org}</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${activeIndex === idx ? 'bg-primary-cyan w-5 shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'bg-white/20'}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:border-primary-cyan/35 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all focus:outline-none"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/5 hover:border-primary-cyan/35 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all focus:outline-none"
              >
                <FaChevronRight className="text-xs" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
