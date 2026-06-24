import React, { useRef } from 'react';
import { SectionTitle } from '../ui/SectionTitle';

const FloatingCard = ({ title, desc, tech, animateClass }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Calculate tilt rotations (max 10 degrees)
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)`;
  };

  return (
    <div className={`perspective-3d preserve-3d w-full ${animateClass}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full bg-[#FEFCF8] rounded-2xl p-7 shadow-lavender transition-all duration-300 ease-out preserve-3d border border-[#D9D4F0]/40 select-none cursor-pointer"
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(0deg) rotateY(0deg) scale(1) translateZ(0px)",
        }}
      >
        <div style={{ transform: "translateZ(30px)" }} className="preserve-3d flex flex-col gap-4">
          <span className="font-mono text-[9px] tracking-widest text-[#3a3a3a]/40 uppercase">// project</span>
          <h3 className="text-xl font-light text-[#3a3a3a] tracking-tight">{title}</h3>
          <p className="text-xs text-[#3a3a3a]/65 leading-relaxed font-body">{desc}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {tech.map((t, idx) => (
              <span key={idx} className="bg-[#F2D9D9] text-[#3a3a3a]/75 text-[10px] font-mono px-3 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  const projectList = [
    {
      title: "Spotify Web Player",
      desc: "A custom desktop player client integrating Spotify APIs with real-time lyric queries.",
      tech: ["React", "Node.js", "Spotify API"],
      animateClass: "animate-drift-1"
    },
    {
      title: "K-Drama Aggregator",
      desc: "Asian television aggregator featuring custom watchlists tracked with Firebase.",
      tech: ["React", "Firebase", "TMDB API"],
      animateClass: "animate-drift-2"
    },
    {
      title: "AI Chat Assistant",
      desc: "Sleek conversation workspace integrating GPT models, prompt states, and histories.",
      tech: ["React", "OpenAI API", "Socket.io"],
      animateClass: "animate-drift-3"
    },
    {
      title: "DSA Algorithms Visualizer",
      desc: "Visual simulator demonstrating tree traversals and sorting flows step by step.",
      tech: ["React", "Canvas API", "Algorithms"],
      animateClass: "animate-drift-4"
    },
    {
      title: "Weather Console Dashboard",
      desc: "Weather forecaster console rendering hourly changes and air quality metrics.",
      tech: ["React", "OpenWeather", "Chart.js"],
      animateClass: "animate-drift-5"
    }
  ];

  return (
    <section id="projects" className="relative perspective-3d preserve-3d z-10 flex flex-col gap-12">
      <SectionTitle title="Featured Projects" subtitle="Drifting creations" align="left" />

      {/* Floating cards grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 preserve-3d">
        {projectList.map((proj, idx) => (
          <FloatingCard 
            key={idx}
            title={proj.title}
            desc={proj.desc}
            tech={proj.tech}
            animateClass={proj.animateClass}
          />
        ))}
      </div>
    </section>
  );
};
