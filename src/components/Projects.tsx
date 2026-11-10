import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { ProjectDetail } from '../types';
import { ProjectDetailModal } from './ProjectDetailModal';
import { Lightbox } from './Lightbox';
import { Github, ArrowRight, Layers, Sparkles, ZoomIn } from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxState, setLightboxState] = useState<{ isOpen: boolean; src: string; caption: string }>({
    isOpen: false,
    src: '',
    caption: ''
  });

  const categories = ['All', 'Microsoft Fabric', 'Azure Data Engineering'];

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  const handleOpenLightbox = (src: string, caption: string) => {
    setLightboxState({ isOpen: true, src, caption });
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#080D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-600 dark:text-[#38BDF8] mb-2">
            Production Data Platforms
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">
            Featured Engineering Projects
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] mt-3">
            Real-world lakehouses, incremental PySpark pipelines, AI data agents, and automated Azure data architectures with visual system diagrams.
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-14 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-100 dark:bg-[#141F30] text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#263449]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-slate-200 dark:border-[#263449] bg-slate-50/60 dark:bg-[#141F30] overflow-hidden hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-cyan-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Visual Cover / Architecture Diagram Picture */}
                <div 
                  className="relative h-56 bg-slate-950 border-b border-slate-200 dark:border-[#263449] overflow-hidden cursor-pointer group/img"
                  onClick={() => {
                    if (project.architectureDiagram) {
                      handleOpenLightbox(project.architectureDiagram, project.architectureCaption);
                    } else {
                      setSelectedProject(project);
                    }
                  }}
                >
                  {project.architectureDiagram ? (
                    <>
                      <img
                        src={project.architectureDiagram}
                        alt={project.architectureCaption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500 opacity-90 group-hover/img:opacity-100"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-black/40 pointer-events-none" />
                      
                      {/* Zoom affordance badge */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenLightbox(project.architectureDiagram!, project.architectureCaption);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/75 hover:bg-cyan-600 text-white text-[11px] font-mono border border-white/20 transition-all shadow-md backdrop-blur-sm"
                          title="Click to view full architecture diagram"
                        >
                          <ZoomIn className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white" />
                          <span>Inspect Diagram</span>
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-500">
                      <Layers className="w-12 h-12" />
                    </div>
                  )}

                  {/* Badges on image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="text-[11px] font-mono font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-black/70 backdrop-blur-sm text-cyan-300 border border-cyan-500/30 shadow-sm">
                      PROJECT 0{idx + 1}
                    </span>
                    {project.id === 'ai-powered-learning-ecosystem' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono uppercase bg-amber-500/20 backdrop-blur-sm text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-full font-medium">
                        <Sparkles className="w-3.5 h-3.5" /> AI Agent
                      </span>
                    )}
                  </div>

                  {/* Title overlay at bottom of diagram picture */}
                  <div className="absolute bottom-3 left-4 right-36 z-10 pointer-events-none">
                    <h3 className="text-base sm:text-lg font-bold text-white drop-shadow-md group-hover:text-cyan-300 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-200/80 drop-shadow line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Core Impact Highlight */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                      Key Impact:
                    </p>
                    <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                      {project.businessImpact.slice(0, 2).map((impact, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-cyan-500 font-bold">•</span>
                          <span className="line-clamp-1">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 6).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white dark:bg-[#101827] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#263449]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 text-slate-500 dark:text-slate-400">
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-3 border-t border-slate-200/80 dark:border-[#263449]/50 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-[#38BDF8] hover:gap-2.5 transition-all"
                >
                  <span>View Full Architecture & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#101827] transition-colors"
                    aria-label={`GitHub Repository for ${project.title}`}
                    title="View GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal with all 13 sections */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenLightbox={handleOpenLightbox}
      />

      {/* Image Lightbox */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        src={lightboxState.src}
        caption={lightboxState.caption}
        onClose={() => setLightboxState({ isOpen: false, src: '', caption: '' })}
      />
    </section>
  );
};
