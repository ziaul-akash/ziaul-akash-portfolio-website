import React, { useState } from 'react';
import { skillsCategories } from '../data/skillsData';
import { 
  Cloud, 
  Database, 
  Workflow, 
  Code2, 
  BarChart3, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Radio,
  Search,
  X,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [filterText, setFilterText] = useState('');

  // Icon mapping for each numbered category
  const getCategoryIcon = (categoryNumber: number) => {
    switch (categoryNumber) {
      case 1: return <Cloud className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
      case 2: return <Radio className="w-5 h-5 text-sky-500 dark:text-sky-400" />;
      case 3: return <Layers className="w-5 h-5 text-blue-500 dark:text-blue-400" />;
      case 4: return <Cpu className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />;
      case 5: return <Code2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />;
      case 6: return <Database className="w-5 h-5 text-amber-500 dark:text-amber-400" />;
      case 7: return <BarChart3 className="w-5 h-5 text-cyan-600 dark:text-cyan-300" />;
      case 8: return <ShieldCheck className="w-5 h-5 text-purple-500 dark:text-purple-400" />;
      case 9: return <Sparkles className="w-5 h-5 text-teal-500 dark:text-teal-400" />;
      default: return <Cloud className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />;
    }
  };

  const filteredCategories = skillsCategories.map((cat) => {
    if (!filterText.trim()) return cat;
    const matchingSkills = cat.skills.filter((s) =>
      s.toLowerCase().includes(filterText.toLowerCase())
    );
    return {
      ...cat,
      skills: matchingSkills
    };
  }).filter((cat) => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#080D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-600 dark:text-[#38BDF8] mb-2">
            Technical Stack & Ecosystem
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">
            End-to-End Data Engineering Competencies
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] mt-3">
            Organised by cloud data architecture domains. Real-world technologies applied across production pipelines.
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Live Search Filter */}
        <div className="max-w-md mx-auto mb-12 relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
            <input
              type="text"
              placeholder="Search technology (e.g. PySpark, OneLake, Delta, KQL)..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-sm rounded-xl border border-slate-300 dark:border-[#263449] bg-slate-50 dark:bg-[#141F30] text-slate-900 dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-slate-400 transition-all shadow-sm"
            />
            {filterText && (
              <button
                onClick={() => setFilterText('')}
                className="absolute right-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                aria-label="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* 9 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.categoryNumber}
              className="group p-6 rounded-2xl border border-slate-200 dark:border-[#263449] bg-slate-50/60 dark:bg-[#141F30] hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg dark:hover:shadow-cyan-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-200/60 dark:bg-[#101827] flex items-center justify-center border border-slate-300/40 dark:border-[#263449]">
                    {getCategoryIcon(cat.categoryNumber)}
                  </div>
                  <span className="text-xs font-mono text-slate-400">
                    CAT 0{cat.categoryNumber}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-[#F8FAFC] mb-1">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-[#94A3B8] mb-4 line-clamp-2">
                  {cat.description}
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-md font-medium border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#101827] text-slate-800 dark:text-slate-200 group-hover:border-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400 text-sm">
            No matching technologies found for &ldquo;{filterText}&rdquo;. Try another term like &ldquo;Spark&rdquo; or &ldquo;Fabric&rdquo;.
          </div>
        )}

      </div>
    </section>
  );
};
