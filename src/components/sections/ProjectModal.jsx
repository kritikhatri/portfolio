import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaTools, FaInfoCircle } from 'react-icons/fa';
import { Badge } from '../ui/Badge';

export const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);

  // Esc key closes modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // Lock background scroll

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  const ProjectIcon = project.icon;

  return (
    <div 
      onClick={handleBackdropClick}
      className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.95, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="w-full max-w-2xl glass-panel bg-background/95 border border-white/10 rounded-2xl overflow-hidden shadow-glass-lg relative flex flex-col my-8"
      >
        {/* Close Button top corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full glass-panel border-white/5 hover:border-white/15 text-slate-400 hover:text-white transition-all cursor-pointer z-30"
          aria-label="Close details"
        >
          <FaTimes className="w-3.5 h-3.5" />
        </button>

        {/* Carousel / Banner image placeholder */}
        <div className="w-full h-64 bg-slate-900 border-b border-white/5 relative overflow-hidden flex items-center justify-center shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 via-accent/5 to-secondary/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-slate-950/20 to-slate-950/10" />
          <div className="z-10 text-center flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-accent shadow-lg animate-float-slow">
              <ProjectIcon className="w-8 h-8" />
            </div>
            <h2 className="font-display text-2xl font-bold tracking-wide text-slate-100 uppercase">
              {project.title}
            </h2>
            <Badge variant="primary" className="mt-1">{project.category}</Badge>
          </div>
        </div>

        {/* Modal Info Content (Scrollable if height exceeds) */}
        <div className="p-6 overflow-y-auto max-h-[50vh] flex flex-col gap-6 scrollbar-thin">
          
          {/* Detailed Paragraph */}
          <div className="flex flex-col gap-2">
            <h3 className="text-xs font-mono font-bold tracking-widest text-accent uppercase flex items-center gap-1.5">
              <FaInfoCircle /> // Project Overview
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-body">
              {project.description}
            </p>
          </div>

          {/* Full Tech Stack */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-mono font-bold tracking-widest text-accent uppercase flex items-center gap-1.5">
              <FaTools /> // Stack & Architecture
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <Badge key={i} variant="secondary" className="py-1 px-3">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

        </div>

        {/* Modal footer action buttons */}
        <div className="bg-black/40 border-t border-white/5 px-6 py-4 flex items-center justify-between shrink-0">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel hover:bg-white/5 border-white/10 hover:border-white/20 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-300 transition-all flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4" />
            <span>GitHub Repository</span>
          </a>

          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-neon-violet hover:scale-[1.02] px-5 py-2.5 rounded-xl text-xs font-display font-semibold text-white transition-all flex items-center gap-2"
          >
            <span>Launch Live App</span>
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
