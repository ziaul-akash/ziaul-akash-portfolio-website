import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Linkedin, Github, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#080D18] border-t border-slate-200 dark:border-[#263449] py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Dynamic Copyright */}
          <p className="text-xs text-slate-500 dark:text-[#94A3B8] text-center sm:text-left">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          {/* Socials & Top Button */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] text-slate-600 dark:text-[#94A3B8] hover:text-cyan-600 dark:hover:text-[#38BDF8] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] text-slate-600 dark:text-[#94A3B8] hover:text-cyan-600 dark:hover:text-[#38BDF8] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] text-xs font-mono text-slate-600 dark:text-[#94A3B8] hover:text-cyan-600 dark:hover:text-[#38BDF8] transition-colors"
              title="Back to Top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
