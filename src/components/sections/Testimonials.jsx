import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { fadeInUp } from '../../utils/animations';

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Rajeev Sen",
      role: "Professor of Computer Science, NST",
      text: "Kritika exhibits a rare blend of algorithmic curiosity and front-end craftsmanship. She is always eager to take on hard problems and shows exceptional skill in building clean systems.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      name: "Aditya Sharma",
      role: "Hackathon Teammate & Peer Student",
      text: "Collaborating with Kritika in hackathons is a absolute breeze. She translates abstract wireframes into responsive React components and manages state beautifully, under high-pressure scenarios.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      name: "Priya Nair",
      role: "Engineering Mentor & Senior SWE",
      text: "Kritika's commitment to open-source software and solidifying her understanding of complex algorithms is inspiring. She is an exceptionally high-potential student ready to add value to any engineering team.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000); // 5s slide swap
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden z-10">
      
      {/* Background neon orb */}
      <div className="absolute top-1/2 left-0 w-[350px] h-[350px] bg-secondary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle title="Peers & Faculty Words" subtitle="Testimonials" align="center" />

        {/* Carousel Container */}
        <div 
          className="relative max-w-2xl mx-auto flex items-center justify-center min-h-[250px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Arrow Left */}
          <button 
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute left-[-20px] md:left-[-60px] p-3.5 rounded-full glass-panel border-white/5 hover:border-white/15 text-slate-400 hover:text-white transition-all cursor-pointer z-20 shadow-glass-sm"
          >
            <FaChevronLeft className="w-3 h-3" />
          </button>

          {/* Testimonial Active Slide */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <GlassCard className="text-center p-8 border-white/5 relative" hoverGlow={true}>
                {/* Quote Icon overlay */}
                <FaQuoteLeft className="text-primary/10 w-16 h-16 absolute top-5 left-5 pointer-events-none" />

                <div className="flex flex-col items-center gap-6 relative z-10">
                  <p className="text-slate-300 font-body text-sm sm:text-base leading-relaxed italic max-w-lg">
                    "{testimonials[activeIndex].text}"
                  </p>
                  
                  {/* Reviewer Meta info */}
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary/30 to-secondary/30 border border-white/10 flex items-center justify-center font-display font-bold text-xs text-white uppercase shrink-0 shadow-glass-sm">
                      {testimonials[activeIndex].name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-100">
                        {testimonials[activeIndex].name}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500">
                        {testimonials[activeIndex].role}
                      </span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </AnimatePresence>

          {/* Arrow Right */}
          <button 
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute right-[-20px] md:right-[-60px] p-3.5 rounded-full glass-panel border-white/5 hover:border-white/15 text-slate-400 hover:text-white transition-all cursor-pointer z-20 shadow-glass-sm"
          >
            <FaChevronRight className="w-3 h-3" />
          </button>
        </div>

        {/* Carousel indicators dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${activeIndex === index ? 'bg-accent w-6 shadow-[0_0_8px_rgba(236,72,153,0.4)]' : 'bg-slate-700 hover:bg-slate-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
