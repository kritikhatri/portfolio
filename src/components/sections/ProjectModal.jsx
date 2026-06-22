import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const ProjectModal = ({ project, onClose }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const slides = [
    { label: "Dashboard / Home", gradient: "from-primary-violet to-purple-800" },
    { label: "Settings / Analytics Panel", gradient: "from-purple-800 to-indigo-800" },
    { label: "Integrations / Output UI", gradient: "from-indigo-800 to-primary-cyan" }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop Close overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal content body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", stiffness: 150, damping: 18 }}
          className="glass-panel w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl relative border border-white/10 z-10 max-h-[90vh] flex flex-col"
        >
          {/* Close button in top corner */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 border border-white/10 hover:border-primary-pink/50 flex items-center justify-center text-slate-400 hover:text-white transition-all focus:outline-none"
          >
            <FaTimes />
          </button>

          {/* Scrollable contents wrapper */}
          <div className="overflow-y-auto max-h-[90vh]">
            {/* Screenshot Carousel Container */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden select-none bg-background-cosmic">
              <div className="absolute inset-0 bg-grid-overlay opacity-15" />
              
              {/* Dynamic slide render */}
              <div className={`w-full h-full bg-gradient-to-br ${slides[activeSlide].gradient} flex flex-col items-center justify-center text-white px-8`}>
                <div className="w-12 h-12 rounded-xl bg-black/30 border border-white/10 flex items-center justify-center text-lg mb-3">
                  {activeSlide + 1}
                </div>
                <span className="font-display font-bold text-lg text-slate-100 tracking-wider">
                  {project.title} Screenshot
                </span>
                <span className="font-mono text-xs text-slate-300 mt-1 uppercase tracking-widest bg-black/25 px-2 py-0.5 rounded">
                  {slides[activeSlide].label}
                </span>
              </div>

              {/* Slider Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/5 hover:border-white/20 hover:bg-black/85 flex items-center justify-center text-slate-300 hover:text-white transition-all focus:outline-none"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 border border-white/5 hover:border-white/20 hover:bg-black/85 flex items-center justify-center text-slate-300 hover:text-white transition-all focus:outline-none"
              >
                <FaChevronRight className="text-xs" />
              </button>

              {/* Slider Dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-15">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${activeSlide === idx ? 'bg-primary-cyan w-4 shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'bg-white/30'}`}
                  />
                ))}
              </div>
            </div>

            {/* Project Details Content */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Category, Title & Badges */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant="cyan">{project.category}</Badge>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Interactive System</span>
                </div>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl bg-gradient-to-r from-primary-violet to-primary-cyan bg-clip-text text-transparent">
                  {project.title}
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
                  Project Description
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed font-sans">
                  {project.fullDescription}
                </p>
              </div>

              {/* Complete Tech Stack pills list */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-xs uppercase tracking-widest text-slate-400">
                  Technologies Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} variant="violet">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Action Buttons footer */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5 items-center justify-end">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => window.open(project.githubLink, '_blank')}
                  className="flex items-center gap-2 text-xs"
                >
                  <FaGithub className="text-sm" /> Source Code
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => window.open(project.liveLink, '_blank')}
                  className="flex items-center gap-2 text-xs"
                >
                  Launch Live Demo <FaExternalLinkAlt className="text-[10px]" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
