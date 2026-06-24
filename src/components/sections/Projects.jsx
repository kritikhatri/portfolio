import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import { SectionTitle } from '../ui/SectionTitle';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { projects } from '../../data/projects';
import { ProjectModal } from './ProjectModal';
import { staggerContainer, scaleUp } from '../../utils/animations';

export const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Web', 'AI/ML', 'Clone', 'Open Source'];

  // Filter & Search logic
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === 'All' || project.category === filter;
    
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden z-10">
      
      {/* Background radial fade */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Featured Projects" subtitle="My creations" align="center" />

        {/* Search & Filter bar row */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full font-display text-xs font-semibold tracking-wider transition-all border cursor-pointer ${filter === cat ? 'bg-secondary text-white border-secondary/20 shadow-neon-cyan' : 'glass-panel text-slate-400 border-white/5 hover:text-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar input */}
          <div className="relative w-full md:w-64 max-w-xs">
            <input
              type="text"
              placeholder="Search projects or stacks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass-panel bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-primary/50 text-slate-200 placeholder-slate-500 rounded-full py-2 pl-4 pr-10 text-xs font-mono outline-none transition-all focus:ring-0"
            />
            <FaSearch className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-3 h-3" />
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div
          layout
          variants={staggerContainer(0.1, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const ProjectIcon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  layout
                  variants={scaleUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  className="h-full"
                >
                  <GlassCard 
                    className="flex flex-col h-full hover:shadow-neon-violet border-white/5 hover:border-white/10 group select-none relative overflow-hidden"
                    hoverGlow={true}
                    glowColor="rgba(124, 58, 237, 0.1)"
                  >
                    {/* Project Header Image placeholder with overlay icon */}
                    <div className="w-full h-44 rounded-xl relative overflow-hidden bg-slate-900 border border-white/5 mb-5 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/5 to-secondary/20 group-hover:scale-105 transition-transform duration-500" />
                      <div className="z-10 w-16 h-16 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-slate-200 group-hover:scale-110 group-hover:text-accent transition-all duration-300">
                        <ProjectIcon className="w-8 h-8" />
                      </div>
                      
                      {/* Hover action overlay */}
                      <div 
                        onClick={() => setSelectedProject(project)}
                        className="absolute inset-0 bg-black/75 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 cursor-pointer z-20"
                      >
                        <FaEye className="w-7 h-7 text-accent animate-pulse" />
                        <span className="font-display font-semibold text-xs text-white uppercase tracking-wider">
                          View Details
                        </span>
                      </div>
                    </div>

                    {/* Title and Category */}
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <h3 className="font-display font-bold text-base text-slate-100 truncate">
                        {project.title}
                      </h3>
                      <Badge variant="primary">{project.category}</Badge>
                    </div>

                    {/* Description (clamp to 3 lines) */}
                    <p className="text-xs text-slate-400 leading-relaxed font-body mb-5 grow line-clamp-3">
                      {project.shortDescription}
                    </p>

                    {/* Tech stack badges (max 4 shown + "+N more") */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="text-[10px] py-0.5">
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 4 && (
                        <Badge variant="secondary" className="text-[10px] py-0.5 opacity-60">
                          +{project.techStack.length - 4} more
                        </Badge>
                      )}
                    </div>

                    {/* Button actions row */}
                    <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-white/5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-medium text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono font-medium text-secondary hover:text-secondary-light flex items-center gap-1.5 transition-colors"
                      >
                        <span>Live Demo</span>
                        <FaExternalLinkAlt className="w-3 h-3" />
                      </a>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500 font-mono text-xs uppercase tracking-wider">
            No projects matched your search criteria.
          </div>
        )}
      </div>

      {/* Project details modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
