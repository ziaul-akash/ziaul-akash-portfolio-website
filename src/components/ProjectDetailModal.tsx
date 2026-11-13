import React, { useEffect } from 'react';
import { ProjectDetail } from '../types';
import { ArchitecturePlaceholder } from './ArchitecturePlaceholder';
import { 
  X, 
  Github, 
  ExternalLink, 
  Database, 
  Cpu, 
  Workflow, 
  ShieldCheck, 
  BarChart3, 
  AlertCircle, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
  onOpenLightbox: (src: string, caption: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenLightbox
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-white dark:bg-[#101827] border border-slate-200 dark:border-[#263449] rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-200 dark:border-[#263449] flex items-start justify-between bg-slate-50 dark:bg-[#141F30]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-[#38BDF8]">
                {project.category}
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-xs font-mono text-slate-500">Technical Deep Dive</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">
              {project.title}
            </h2>
            <p className="text-sm text-cyan-600 dark:text-cyan-400 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#101827] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10 text-slate-700 dark:text-[#94A3B8]">
          
          {/* 1. Introduction & Overview */}
          <section className="space-y-3">
            <h3 className="text-base font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-[#F8FAFC] flex items-center gap-2">
              <span className="text-cyan-500">01.</span> Project Introduction
            </h3>
            <p className="leading-relaxed text-sm sm:text-base">
              {project.shortDescription}
            </p>
            {project.introductionDetails?.map((para, idx) => (
              <p key={idx} className="leading-relaxed text-sm sm:text-base">
                {para}
              </p>
            ))}
            {project.dataSourceNote && (
              <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 dark:bg-[#141F30] text-xs sm:text-sm">
                <span className="font-mono font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mr-2">
                  Data Source:
                </span>
                <span className="text-slate-700 dark:text-slate-300">{project.dataSourceNote}</span>
              </div>
            )}
          </section>

          {/* 2 & 3. Business Problem & Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-red-500/20 bg-red-500/5 dark:bg-[#141F30] space-y-2.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-500 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4" /> 02. The Business Problem
              </h4>
              <div className="space-y-2.5 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                {project.problem.split('\n\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="p-5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 dark:bg-[#141F30] space-y-2.5">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> 03. Project Objectives
              </h4>
              <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                {project.objectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-cyan-500 font-bold">•</span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 4 & 5. Solution Architecture & Blueprint */}
          <section className="space-y-4">
            <h3 className="text-base font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-[#F8FAFC] flex items-center gap-2">
              <span className="text-cyan-500">04 &amp; 05.</span> Solution Architecture &amp; Blueprint
            </h3>
            <p className="leading-relaxed text-sm sm:text-base">
              {project.solution}
            </p>

            {project.solutionWorkflow && project.solutionWorkflow.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.solutionWorkflow.map((step, i) => (
                  <div
                    key={step.stage}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-[#263449] bg-slate-50 dark:bg-[#141F30] space-y-1"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-600 dark:text-[#38BDF8]">
                      <span>0{i + 1}</span>
                      <span>{step.stage}</span>
                    </div>
                    <p className="text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            )}
            
            {/* Architecture Placeholder / Image */}
            <div className="pt-2">
              <ArchitecturePlaceholder
                title={project.title}
                caption={project.architectureCaption}
                imageSrc={project.architectureDiagram}
                onOpenLightbox={onOpenLightbox}
              />
            </div>
          </section>

          {/* 6-10. Technical Pipeline Deep Dive Grid */}
          <div className="space-y-4">
            <h3 className="text-base font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-[#F8FAFC]">
              <span className="text-cyan-500">06–10.</span> Detailed Technical Pipeline Execution
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Ingestion */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-[#263449] bg-slate-50 dark:bg-[#141F30] space-y-2">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-xs font-mono uppercase">
                  <Database className="w-3.5 h-3.5" /> 06. Data Ingestion
                </div>
                {Array.isArray(project.dataIngestion) ? (
                  <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                    {project.dataIngestion.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.dataIngestion}
                  </p>
                )}
              </div>

              {/* Transformation */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-[#263449] bg-slate-50 dark:bg-[#141F30] space-y-2">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-xs font-mono uppercase">
                  <Cpu className="w-3.5 h-3.5" /> 07. Transformation &amp; Processing
                </div>
                {Array.isArray(project.transformationAndProcessing) ? (
                  <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                    {project.transformationAndProcessing.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.transformationAndProcessing}
                  </p>
                )}
              </div>

              {/* Storage & Modelling */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-[#263449] bg-slate-50 dark:bg-[#141F30] space-y-2">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-xs font-mono uppercase">
                  <Layers className="w-3.5 h-3.5" /> 08. Storage &amp; Data Modelling
                </div>
                {Array.isArray(project.storageAndDataModelling) ? (
                  <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                    {project.storageAndDataModelling.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.storageAndDataModelling}
                  </p>
                )}
              </div>

              {/* Orchestration */}
              <div className="p-4 rounded-xl border border-slate-200 dark:border-[#263449] bg-slate-50 dark:bg-[#141F30] space-y-2">
                <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-xs font-mono uppercase">
                  <Workflow className="w-3.5 h-3.5" /> 09. Data Orchestration
                </div>
                {Array.isArray(project.dataOrchestration) ? (
                  <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                    {project.dataOrchestration.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {project.dataOrchestration}
                  </p>
                )}
              </div>
            </div>

            {/* Security & Governance */}
            <div className="p-4 rounded-xl border border-slate-200 dark:border-[#263449] bg-slate-50 dark:bg-[#141F30] space-y-2">
              <div className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-semibold text-xs font-mono uppercase">
                <ShieldCheck className="w-3.5 h-3.5" /> 10. Security, Governance &amp; CI/CD
              </div>
              {Array.isArray(project.securityAndGovernance) ? (
                <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                  {project.securityAndGovernance.map((item, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-cyan-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {project.securityAndGovernance}
                </p>
              )}
            </div>
          </div>

          {/* 11. Business Impact */}
          <section className="space-y-4">
            <h3 className="text-base font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-[#F8FAFC] flex items-center gap-2">
              <span className="text-cyan-500">11.</span> Analytics &amp; Business Impact
            </h3>

            {project.analyticsSummary && (
              <p className="leading-relaxed text-sm sm:text-base">
                {project.analyticsSummary}
              </p>
            )}

            {project.analyticalMetrics && project.businessApplications ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 dark:bg-[#141F30] space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                    <BarChart3 className="w-4 h-4" /> Key Analytical Metrics
                  </h4>
                  <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                    {project.analyticalMetrics.map((metric, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-500 font-bold">•</span>
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-[#141F30] space-y-2.5">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Potential Business Applications
                  </h4>
                  <ul className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                    {project.businessApplications.map((app, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-emerald-500 font-bold">•</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.businessImpact.map((impact, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-[#141F30] flex items-start gap-2.5 text-xs sm:text-sm"
                  >
                    <BarChart3 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-slate-800 dark:text-slate-200">{impact}</span>
                  </div>
                ))}
              </div>
            )}
          </section>

          {/* 12. Tech Stack Badges */}
          <section className="space-y-3">
            <h3 className="text-base font-bold font-mono uppercase tracking-wider text-slate-900 dark:text-[#F8FAFC] flex items-center gap-2">
              <span className="text-cyan-500">12.</span> Technology Stack Applied
            </h3>

            {project.technologyGroups && project.technologyGroups.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.technologyGroups.map((group) => (
                  <div
                    key={group.label}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-[#263449] bg-slate-50 dark:bg-[#141F30] space-y-2"
                  >
                    <p className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-[#38BDF8]">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 text-xs font-mono font-medium rounded-md border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#101827] text-slate-800 dark:text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono font-medium rounded-lg border border-slate-200 dark:border-[#263449] bg-slate-100 dark:bg-[#141F30] text-slate-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </section>

          {/* 13. GitHub Repository */}
          <div className="pt-4 border-t border-slate-200 dark:border-[#263449] flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-xs font-mono uppercase text-slate-500">13. Source Repository</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                {project.githubUrl ? 'Public Production Codebase Available' : 'Enterprise / Private Project Workspace'}
              </p>
            </div>

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md transition-all"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-400 bg-slate-100 dark:bg-[#141F30] px-3 py-2 rounded-lg border border-slate-200 dark:border-[#263449]">
                Private / Enterprise Repository
              </span>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
