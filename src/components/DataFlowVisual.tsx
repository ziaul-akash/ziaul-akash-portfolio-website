import React from 'react';
import { motion } from 'motion/react';
import { Database, Layers, Cpu, Sparkles, Workflow, ArrowRight } from 'lucide-react';

export const DataFlowVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[470px] flex items-center justify-center select-none overflow-hidden rounded-2xl border border-slate-200 dark:border-[#263449] bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#101827] dark:via-[#0c1422] dark:to-[#101827] p-6 shadow-xl">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative z-10 w-full max-w-md flex flex-col gap-4">
        {/* Layer 1: Ingestion Sources */}
        <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
          <span className="flex items-center gap-1.5 text-cyan-600 dark:text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            STREAM & BATCH INGESTION
          </span>
          <span className="text-[11px] uppercase tracking-wider text-slate-400">OneLake Fabric Engine</span>
        </div>

        {/* Medallion Architecture Visual Cards */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* Bronze Tier */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-col p-3 rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-[#141F30]/80 shadow-sm"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-amber-500">Bronze</span>
              <Database className="w-3.5 h-3.5 text-amber-500" />
            </div>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">Raw Layer</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Append Ingestion</p>
          </motion.div>

          {/* Silver Tier */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col p-3 rounded-xl border border-cyan-500/40 bg-cyan-500/5 dark:bg-[#141F30]/80 shadow-sm"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-cyan-500 dark:text-cyan-400">Silver</span>
              <Layers className="w-3.5 h-3.5 text-cyan-500 dark:text-cyan-400" />
            </div>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">Cleansed</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Delta / PySpark</p>
          </motion.div>

          {/* Gold Tier */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="flex flex-col p-3 rounded-xl border border-emerald-500/40 bg-emerald-500/5 dark:bg-[#141F30]/80 shadow-sm"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-emerald-500 dark:text-emerald-400">Gold</span>
              <Cpu className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
            </div>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200">Curated</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">Direct Lake Star</p>
          </motion.div>
        </div>

        {/* Animated Pipeline Nodes */}
        <div className="p-4 rounded-xl border border-slate-200 dark:border-[#263449] bg-white/70 dark:bg-[#141F30]/40 backdrop-blur-sm space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
              <Workflow className="w-4 h-4 text-cyan-500" />
              Lakehouse Ingestion Pipeline
            </span>
            <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
              Active • CI/CD
            </span>
          </div>

          <div className="h-1.5 w-full bg-slate-200 dark:bg-[#263449] rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-3 text-[10px] font-mono text-slate-500 dark:text-slate-400 text-center">
            <span>Data Factory</span>
            <span>Databricks / Fabric</span>
            <span>Power BI & Agents</span>
          </div>
        </div>

        {/* AI & Intelligence Layer Feature */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-between p-3.5 rounded-xl border border-cyan-500/30 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent text-xs"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="font-semibold text-slate-800 dark:text-slate-200">AI Data Agent Integration</p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">Natural Language ↔ Lakehouse Direct Access</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-cyan-500 dark:text-cyan-400 shrink-0" />
        </motion.div>

        {/* Architectural Tech Indicators */}
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 px-1 pt-1">
          <span>DATA MODELLING</span>
          <span>DELTA FORMAT</span>
          <span>UNITY CATALOG</span>
        </div>
      </div>
    </div>
  );
};
