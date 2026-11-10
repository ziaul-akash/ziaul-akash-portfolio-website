import React, { useState, useEffect } from 'react';
import { certificationsData } from '../data/certificationsData';
import { CertificationItem } from '../types';
import { Award, ExternalLink, Calendar, CheckCircle2, X, ZoomIn, FileText, Download } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-[#101827] border-y border-slate-200 dark:border-[#263449]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-mono font-semibold uppercase tracking-widest text-cyan-600 dark:text-[#38BDF8] mb-2">
            Credentials & Verification
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-[#F8FAFC]">
            Professional Certifications
          </h2>
          <p className="text-sm text-slate-600 dark:text-[#94A3B8] mt-3">
            Industry credentials with direct verification links and authenticated certificate records.
          </p>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl border border-slate-200 dark:border-[#263449] bg-white dark:bg-[#141F30] shadow-sm hover:border-cyan-500/50 hover:shadow-lg dark:hover:shadow-cyan-950/20 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-[#38BDF8] flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 dark:bg-[#101827] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#263449]">
                      {cert.issuer}
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-[#F8FAFC] leading-snug mb-2 group-hover:text-cyan-600 dark:group-hover:text-[#38BDF8] transition-colors">
                  {cert.title}
                </h3>

                <div className="space-y-1 text-xs text-slate-500 dark:text-[#94A3B8]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Issued: {cert.issueDate}</span>
                  </div>
                  {cert.expiryDate && (
                    <div className="text-[11px] text-amber-600 dark:text-amber-400 font-mono">
                      Validity: {cert.issueDate} – {cert.expiryDate}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Area: Either direct link or popup for image */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-[#263449]/60">
                {cert.viewMode === 'image' || cert.certificateImage ? (
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-sm shadow-cyan-500/20 transition-all hover:scale-[1.01]"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Check Verified Certificate</span>
                  </button>
                ) : cert.verificationUrl ? (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-sm shadow-cyan-500/20 transition-all hover:scale-[1.01]"
                  >
                    <span>Check Verified Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-mono text-slate-400 bg-slate-100 dark:bg-[#101827] border border-slate-200 dark:border-[#263449]">
                    Verified Institution Record
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Image Popup Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white dark:bg-[#101827] border border-slate-200 dark:border-[#263449] rounded-2xl shadow-2xl overflow-hidden my-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-200 dark:border-[#263449] flex items-center justify-between bg-slate-50 dark:bg-[#141F30]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-[#38BDF8] flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      <CheckCircle2 className="w-3 h-3" /> Official Certificate
                    </span>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                      {selectedCert.issuer}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-[#F8FAFC]">
                    {selectedCert.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-[#101827] transition-colors"
                aria-label="Close certificate modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Certificate Image Body */}
            <div className="p-4 sm:p-6 bg-slate-950 flex flex-col items-center justify-center min-h-[420px] max-h-[75vh] overflow-auto">
              {selectedCert.certificateImage && (
                <img
                  src={selectedCert.certificateImage}
                  alt={`${selectedCert.title} Certificate for Ziaul Haq Akash`}
                  className="w-auto max-w-full max-h-[65vh] object-contain rounded-lg shadow-2xl border border-slate-800"
                />
              )}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-slate-50 dark:bg-[#141F30] border-t border-slate-200 dark:border-[#263449] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="font-mono text-slate-500 dark:text-slate-400">
                Issued to: <strong className="text-slate-800 dark:text-slate-200">Ziaul Haq Akash</strong> • {selectedCert.issueDate}
              </span>

              <div className="flex items-center gap-2">
                {selectedCert.id === 'cert-3' && (
                  <a
                    href="/assets/aistudio/MAQ_Fabric_Analyst_in_a_day_c694442f.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-600 dark:text-[#38BDF8] border border-cyan-500/30 font-medium transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                )}

                {selectedCert.certificateImage && (
                  <a
                    href={selectedCert.certificateImage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-[#263449] text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#101827] font-medium transition-colors"
                  >
                    <ZoomIn className="w-3.5 h-3.5 text-cyan-500" />
                    <span>Open Full Image</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
