import React from 'react';
import { Layers, Image as ImageIcon, ZoomIn, Maximize2 } from 'lucide-react';

interface ArchitecturePlaceholderProps {
  title: string;
  caption: string;
  imageSrc?: string;
  onOpenLightbox?: (src: string, caption: string) => void;
}

export const ArchitecturePlaceholder: React.FC<ArchitecturePlaceholderProps> = ({
  title,
  caption,
  imageSrc,
  onOpenLightbox
}) => {
  if (imageSrc) {
    return (
      <div className="group relative rounded-2xl overflow-hidden border border-slate-300 dark:border-[#263449] bg-slate-950 shadow-lg">
        {/* Top bar caption & zoom affordance */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-xs font-mono">
          <span className="text-cyan-400 font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            ARCHITECTURE BLUEPRINT & DATA FLOW
          </span>
          <button
            onClick={() => onOpenLightbox && onOpenLightbox(imageSrc, caption)}
            className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2 py-1 rounded transition-colors"
          >
            <Maximize2 className="w-3 h-3" />
            <span>Full Resolution</span>
          </button>
        </div>

        {/* Diagram image container */}
        <div 
          className="relative cursor-pointer overflow-hidden max-h-[500px] flex items-center justify-center bg-slate-950"
          onClick={() => onOpenLightbox && onOpenLightbox(imageSrc, caption)}
        >
          <img
            src={imageSrc}
            alt={caption}
            referrerPolicy="no-referrer"
            className="w-full h-auto object-contain max-h-[500px] transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/90 text-white text-xs font-medium border border-cyan-500/40 shadow-xl backdrop-blur-sm">
              <ZoomIn className="w-4 h-4 text-cyan-400" /> Click to Inspect in Fullscreen Lightbox
            </span>
          </div>
        </div>

        {/* Caption */}
        <p className="p-3 text-xs text-center text-slate-400 font-mono bg-slate-900 border-t border-slate-800">
          {caption}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-dashed border-slate-300 dark:border-[#263449] bg-slate-100/50 dark:bg-[#101827]/70 p-8 text-center flex flex-col items-center justify-center gap-3">
      <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 dark:text-[#38BDF8] flex items-center justify-center">
        <Layers className="w-6 h-6" />
      </div>
      <div className="max-w-md">
        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
          Architecture Blueprint: {title}
        </p>
        <p className="text-xs text-slate-500 dark:text-[#94A3B8] mt-1 font-mono">
          {caption}
        </p>
      </div>
      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-slate-200 dark:border-[#263449] text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-[#141F30]">
        <ImageIcon className="w-3.5 h-3.5 text-cyan-500" />
        <span>Ready for blueprint architecture upload (supports large resolutions & lightbox)</span>
      </div>
    </div>
  );
};
