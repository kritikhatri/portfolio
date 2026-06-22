import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { ProjectModal } from './ProjectModal';
import { projects } from '../../data/projects';
import { staggerContainer, staggerItem } from '../../utils/animations';
import { FaSearch, FaGithub, FaExternalLinkAlt, FaSpotify, FaPlay, FaRobot, FaLaptopCode, FaCodeBranch, FaCloudSun, FaArrowRight } from 'react-icons/fa';

// Map icon string names to components
const iconMap = {
  FaSpotify,
  FaPlay,
  FaRobot,
  FaLaptopCode,
  FaCodeBranch,
  FaCloudSun
};

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web', 'AI/ML', 'Clone', 'Open Source'];

  // Filter projects based on category and search query
  const filteredProjects = projects.filter(p => {
    const matchesCategory = filter === 'All' || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Featured Projects"
          subtitle="My Creative Sandbox"
          alignment="center"
        />

        {/* Filter and Search Bar Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`
                  px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 border focus:outline-none
                  ${filter === cat 
                    ? 'bg-gradient-to-r from-primary-violet to-primary-cyan text-white border-transparent shadow-[0_0_12px_rgba(6,182,212,0.3)]' 
                    : 'bg-white/5 text-slate-400 border-white/5 hover:text-white hover:bg-white/10'}
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80 order-1 md:order-2">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
            <input
              type="text"
              placeholder="Search by title or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-primary-cyan/50 focus:ring-1 focus:ring-primary-cyan/20 transition-all text-xs font-sans"
            />
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div
          layout
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = iconMap[project.icon];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  variants={staggerItem}
                  className="h-full"
                >
                  <GlassCard 
                    className="flex flex-col justify-between h-full group p-0 relative overflow-hidden cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div>
                      {/* Gradient placeholder header with floating icon */}
                      <div className={`h-48 w-full bg-gradient-to-tr ${project.accentColor} relative flex items-center justify-center overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 bg-grid-overlay opacity-15" />
                        
                        {/* Hover Overlay "View Details" */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-10">
                          <span className="font-display font-semibold text-xs tracking-wider uppercase text-cyan-400 border border-cyan-400/40 rounded-full px-4 py-2 flex items-center gap-1.5 hover:bg-cyan-500 hover:text-black hover:border-transparent transition-all">
                            View Details <FaArrowRight />
                          </span>
                        </div>

                        {/* Floating Tech Icon */}
                        {ProjectIcon && (
                          <div className="w-16 h-16 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-0">
                            <ProjectIcon />
                          </div>
                        )}
                      </div>

                      {/* Content details */}
                      <div className="p-6">
                        <div className="flex justify-between items-center gap-2 mb-3">
                          <Badge variant="cyan">{project.category}</Badge>
                          <span className="text-[10px] font-mono text-slate-500 uppercase">#{project.id}</span>
                        </div>
                        <h3 className="font-display font-bold text-xl text-slate-100 mb-2 group-hover:text-primary-cyan transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 mb-4">
                          {project.shortDescription}
                        </p>
                      </div>
                    </div>

                    {/* Tech list & CTAs */}
                    <div className="px-6 pb-6 mt-auto">
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span key={idx} className="text-[10px] font-mono font-medium text-slate-400 bg-white/5 border border-white/5 rounded px-2 py-0.5">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="text-[10px] font-mono font-medium text-slate-500 bg-white/5 border border-white/5 rounded px-1.5 py-0.5">
                            +{project.techStack.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 justify-end items-center" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                          className="p-2.5 rounded-full bg-white/5 border border-white/5 text-slate-400 hover:text-white hover:border-primary-pink/40 hover:bg-white/10 hover:shadow-[0_0_12px_rgba(236,72,153,0.3)] transition-all duration-300"
                        >
                          <FaGithub className="text-sm" />
                        </a>
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-white bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/20 hover:border-cyan-500/40 rounded-full px-4 py-2 transition-all duration-300"
                        >
                          <span>Live</span>
                          <FaExternalLinkAlt className="text-[10px]" />
                        </a>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Project Details Overlay Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
