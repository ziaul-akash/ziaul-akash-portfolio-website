import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { DataFlowVisual } from './DataFlowVisual';
import { ArrowDown, Download, Linkedin, Github, ExternalLink } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView();
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Positioning & Headings */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Small introductory label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-[#38BDF8] text-xs font-mono font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>HELLO, I&apos;M ZIAUL HAQ AKASH</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-[#F8FAFC] leading-[1.12]">
              Engineering Data.{' '}
              <span className="bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Building Intelligence.
              </span>{' '}
              Enabling Better Decisions.
            </h1>

            {/* Professional Title */}
            <p className="text-base sm:text-lg font-mono font-semibold text-cyan-600 dark:text-[#38BDF8]">
              {siteConfig.title}
            </p>

            {/* Introduction */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed max-w-2xl">
              I design and build scalable data engineering solutions, modern lakehouse architectures, and automated data pipelines using Microsoft Azure and Fabric. Passionate about transforming complex data into reliable, analytics-ready insights and intelligent business solutions.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
              >
                Explore My Projects
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-xl text-slate-800 dark:text-[#F8FAFC] bg-slate-100 dark:bg-[#141F30] border border-slate-300 dark:border-[#263449] hover:border-cyan-500/50 hover:bg-slate-200 dark:hover:bg-[#101827] transition-all"
              >
                Let&apos;s Connect
              </button>

              {/* Download CV */}
              <a
                href={siteConfig.links.cvDownloadPath}
                download={siteConfig.links.cvFilename}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold rounded-xl text-slate-700 dark:text-[#94A3B8] hover:text-cyan-600 dark:hover:text-[#38BDF8] border border-slate-200 dark:border-[#263449] hover:border-slate-300 dark:hover:border-cyan-500/50 bg-white/50 dark:bg-[#141F30]/50 transition-all"
                title="Download CV"
              >
                <Download className="w-4 h-4 text-cyan-500" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Quick links & social verification */}
            <div className="pt-4 flex flex-wrap items-center gap-5 sm:gap-6 text-sm text-slate-500 dark:text-[#94A3B8] border-t border-slate-200 dark:border-[#263449]/60">
              <span className="font-mono text-xs uppercase tracking-wider">Connect:</span>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-[#38BDF8] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-cyan-500" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-[#38BDF8] transition-colors"
              >
                <Github className="w-4 h-4 text-cyan-500" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
              <button
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center gap-1.5 hover:text-cyan-600 dark:hover:text-[#38BDF8] transition-colors"
              >
                <span>Featured Repositories (4)</span>
                <ArrowDown className="w-3.5 h-3.5 text-cyan-500" />
              </button>
            </div>
          </div>

          {/* Right Column: Abstract Lakehouse & Dataflow Visual */}
          <div className="lg:col-span-5">
            <DataFlowVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
