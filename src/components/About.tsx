import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { educationData, languagesData } from '../data/experienceData';
import { CheckCircle2, GraduationCap, Globe, Award, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-[#101827] border-y border-slate-200 dark:border-[#263449]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-600 dark:text-[#38BDF8] mb-2">
            Professional Overview
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">
            Turning Data Into Business Intelligence
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Content Layout: Left Portrait Card + Right Details & Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait Card & Key Credentials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Professional Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] shadow-xl p-4 group">
              {/* Photo Frame */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-slate-900 shadow-inner">
                <img
                  src="/assets/aistudio/akash_pic_professional_grey_bg_b20683b1.png"
                  alt="Ziaul Haq Akash - Microsoft Fabric & Azure Data Engineer"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Ambient Scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent pointer-events-none" />

                {/* Floating Status Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-emerald-500/20 backdrop-blur-md text-emerald-300 border border-emerald-400/30 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Opportunities
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-400/30">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    LONDON, UK
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 z-10 pointer-events-none">
                  <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">
                    Ziaul Haq Akash
                  </h3>
                  <p className="text-xs font-mono text-cyan-300 drop-shadow mt-0.5">
                    Microsoft Fabric Data Engineer | Azure Data Engineer
                  </p>
                </div>
              </div>

              {/* Direct Microsoft Certification Badge Callout */}
              <div className="mt-4 p-4 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-[#38BDF8] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-600 dark:text-[#38BDF8] font-bold">
                    Verified Microsoft Credential
                  </p>
                  <p className="text-sm font-bold text-slate-900 dark:text-[#F8FAFC]">
                    Fabric Data Engineer Associate (DP - 700)
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-[#38BDF8] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#F8FAFC]">
                    {educationData.degree}
                  </h3>
                  <p className="text-sm text-cyan-600 dark:text-[#38BDF8] font-medium">
                    {educationData.institution}
                  </p>
                </div>
              </div>
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#263449]/60 text-xs text-slate-600 dark:text-[#94A3B8]">
                <div className="flex justify-between">
                  <span>Timeline:</span>
                  <span className="font-mono font-medium text-slate-800 dark:text-slate-200">{educationData.period}</span>
                </div>
                <div className="flex justify-between">
                  <span>Academic Standing:</span>
                  <span className="font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    Grade {educationData.grade}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Summary & Focus Areas & Languages (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 dark:text-[#94A3B8] leading-relaxed text-base sm:text-lg">
            <p>
              I am a Microsoft Fabric and Azure Data Engineer focused on designing scalable data platforms, automating data pipelines, and transforming complex datasets into meaningful business insights.
            </p>
            <p>
              With hands-on experience across Microsoft Fabric, Azure Databricks, Azure Data Factory, PySpark, Delta Lake, and Power BI, I build end-to-end data engineering solutions using modern lakehouse architectures, Medallion Architecture, incremental data processing, and CI/CD automation.
            </p>
            <p>
              My work also explores the intersection of data engineering and AI, including conversational data agents that enable business users to interact with enterprise data using natural language.
            </p>
            <p>
              Alongside my technical projects, my professional experience in technology support and digital enablement has strengthened my ability to understand business requirements and translate technical solutions into practical outcomes.
            </p>
            <p className="font-semibold text-slate-900 dark:text-[#F8FAFC]">
              My focus is building reliable, scalable, secure, and AI-ready data platforms that empower organisations to make better decisions.
            </p>

            {/* Professional Focus Areas */}
            <div className="pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 font-semibold">
                Core Professional Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {siteConfig.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium border border-cyan-500/30 bg-cyan-500/5 dark:bg-[#141F30] text-cyan-700 dark:text-[#38BDF8]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] shadow-sm mt-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-[#F8FAFC]">
                    Language Proficiencies
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                    Global communication & collaboration
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {languagesData.map((lang) => (
                  <div
                    key={lang.language}
                    className="p-3 rounded-xl border border-slate-200 dark:border-[#263449] bg-slate-50/70 dark:bg-[#101827]/60"
                  >
                    <p className="text-sm font-semibold text-slate-900 dark:text-[#F8FAFC]">
                      {lang.language}
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-[#94A3B8] mt-0.5">
                      {lang.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
