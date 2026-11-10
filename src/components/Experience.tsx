import React from 'react';
import { professionalExperience } from '../data/experienceData';
import { MapPin, Calendar, CheckCircle } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#101827] border-y border-slate-200 dark:border-[#263449]/70 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-600 dark:text-[#38BDF8] mb-2">
            Career Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">
            Professional Experience
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] mt-3">
            Professional track record in technology operations, digital enablement, and web engineering.
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Note distinguishing independent data projects */}
        <div className="mb-10 p-4 rounded-xl border border-cyan-500/20 bg-cyan-500/5 dark:bg-[#141F30]/60 text-xs text-slate-600 dark:text-[#94A3B8] text-center">
          <span className="font-semibold text-cyan-600 dark:text-[#38BDF8]">Note on Career Structure:</span> The positions below reflect professional corporate and institutional employment roles. End-to-end cloud and Microsoft Fabric data engineering solutions are featured in the dedicated <a href="#projects" className="underline text-cyan-600 dark:text-cyan-400 font-medium">Projects section</a>.
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-200 dark:border-[#263449] ml-4 sm:ml-8 space-y-12">
          {professionalExperience.map((item, index) => (
            <div key={item.id} className="relative pl-6 sm:pl-10">
              
              {/* Timeline Indicator Node */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-white dark:border-[#101827] shadow-sm" />

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] shadow-sm hover:border-cyan-500/40 transition-all">
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-600 dark:text-[#38BDF8]">
                      POSITION 0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-[#F8FAFC]">
                      {item.role}
                    </h3>
                    <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                      {item.organization}
                    </p>
                  </div>

                  <div className="text-xs font-mono text-slate-500 dark:text-[#94A3B8] space-y-1 sm:text-right">
                    <div className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-[#101827] px-2.5 py-1 rounded-md border border-slate-200 dark:border-[#263449]">
                      <Calendar className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1 sm:justify-end">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="space-y-2.5 mt-4 text-sm text-slate-600 dark:text-[#94A3B8] leading-relaxed">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Skills Applied Tags */}
                {item.skillsApplied && (
                  <div className="mt-5 pt-4 border-t border-slate-100 dark:border-[#263449]/60 flex flex-wrap gap-2">
                    {item.skillsApplied.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded border border-slate-200 dark:border-[#263449] bg-slate-50 dark:bg-[#101827] text-slate-600 dark:text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
