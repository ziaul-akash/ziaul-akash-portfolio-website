import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Linkedin, Mail, Download, ArrowRight, Check, Send, Phone, Github } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.links.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(siteConfig.links.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#080D18] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="rounded-3xl border border-slate-200 dark:border-[#263449] bg-gradient-to-b from-slate-50 to-white dark:from-[#101827] dark:to-[#080D18] p-8 sm:p-14 shadow-xl overflow-hidden relative">
          
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl space-y-6 relative z-10">
            {/* Author Profile Lockup */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src="/assets/aistudio/akash_pic_professional_grey_bg_b20683b1.png"
                  alt="Ziaul Haq Akash"
                  className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-cyan-400/60 shadow-lg shadow-cyan-500/20"
                />
                <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white dark:border-[#101827]" title="Available for opportunities" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Ziaul Haq Akash
                </h3>
                <p className="text-xs text-slate-500 dark:text-[#94A3B8]">
                  Microsoft Fabric &amp; Azure Data Engineer • London, UK
                </p>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-[#F8FAFC] tracking-tight leading-tight">
              Let&apos;s Build Something Meaningful With Data.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#94A3B8] leading-relaxed">
              I am actively seeking Azure Data Engineer and Microsoft Fabric Data Engineer opportunities where I can contribute to building scalable data platforms, automated workflows and intelligent analytics solutions.
            </p>

            {/* Action Cards Grid */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Email Contact */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] flex items-center justify-between shadow-sm hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-[#38BDF8] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Direct Inquiries</p>
                    <a
                      href={`mailto:${siteConfig.links.email}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors block truncate"
                    >
                      {siteConfig.links.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-[#101827] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#263449] hover:border-cyan-500 transition-colors shrink-0 ml-2"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : 'Copy'}
                </button>
              </div>

              {/* Phone Contact */}
              <div className="p-5 rounded-2xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] flex items-center justify-between shadow-sm hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Direct Phone</p>
                    <a
                      href={`tel:${siteConfig.links.phone}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors block font-mono"
                    >
                      {siteConfig.links.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyPhone}
                  className="text-xs font-mono px-2.5 py-1.5 rounded-lg bg-slate-100 dark:bg-[#101827] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#263449] hover:border-emerald-500 transition-colors shrink-0 ml-2"
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : 'Copy'}
                </button>
              </div>

              {/* LinkedIn Contact */}
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] hover:border-blue-500/50 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-[#38BDF8] flex items-center justify-center">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Professional Network</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Connect on LinkedIn</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </a>

              {/* GitHub Contact */}
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] hover:border-cyan-500/50 transition-all flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-500/10 text-slate-700 dark:text-[#38BDF8] flex items-center justify-center">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400">Code Repositories</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Explore GitHub Profile</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
              </a>

            </div>

            {/* Download CV CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={siteConfig.links.cvDownloadPath}
                download={siteConfig.links.cvFilename}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span>Download Curriculum Vitae (CV)</span>
              </a>

              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-xl text-slate-800 dark:text-[#F8FAFC] bg-slate-100 dark:bg-[#141F30] border border-slate-300 dark:border-[#263449] hover:bg-slate-200 dark:hover:bg-[#101827] transition-all"
              >
                <Send className="w-4 h-4 text-cyan-500" />
                <span>Message on LinkedIn</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
