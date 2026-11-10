import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Monitor, 
  Linkedin, 
  Github,
  Menu, 
  X, 
  ChevronDown, 
  ExternalLink 
} from 'lucide-react';
import { ThemeMode } from '../types';

export const Navbar: React.FC = () => {
  const { mode, setThemeMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll offset
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView();
    }
  };

  const themeOptions: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
    { mode: 'dark', label: 'Dark', icon: <Moon className="w-4 h-4" /> },
    { mode: 'light', label: 'Light', icon: <Sun className="w-4 h-4" /> },
    { mode: 'system', label: 'System', icon: <Monitor className="w-4 h-4" /> }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#080D18]/95 backdrop-blur-md border-b border-slate-200 dark:border-[#263449]/80 shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-cyan-400/60 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform bg-slate-800 shrink-0">
              <img
                src="/assets/aistudio/akash_pic_professional_grey_bg_b20683b1.png"
                alt="Ziaul Haq Akash"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <span className="font-bold tracking-wider text-base sm:text-lg text-slate-900 dark:text-[#F8FAFC]">
              {siteConfig.brandName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors relative ${
                    isActive
                      ? 'text-cyan-600 dark:text-[#38BDF8] font-semibold'
                      : 'text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons & Theme Switcher */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-1.5 p-2 rounded-lg text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-[#141F30] border border-slate-200 dark:border-[#263449] transition-all text-xs"
                title="Select Theme"
                aria-label="Theme selector"
              >
                {mode === 'dark' && <Moon className="w-4 h-4 text-cyan-400" />}
                {mode === 'light' && <Sun className="w-4 h-4 text-amber-500" />}
                {mode === 'system' && <Monitor className="w-4 h-4 text-blue-400" />}
                <ChevronDown className="w-3.5 h-3.5 opacity-70" />
              </button>

              {themeDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-36 py-1.5 rounded-lg shadow-xl bg-white dark:bg-[#141F30] border border-slate-200 dark:border-[#263449] z-50 text-xs"
                  onMouseLeave={() => setThemeDropdownOpen(false)}
                >
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.mode}
                      onClick={() => {
                        setThemeMode(opt.mode);
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-left transition-colors ${
                        mode === opt.mode
                          ? 'text-cyan-600 dark:text-[#38BDF8] bg-slate-50 dark:bg-[#101827] font-semibold'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#101827]/60'
                      }`}
                    >
                      {opt.icon}
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* GitHub Icon */}
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-[#263449] text-slate-600 dark:text-[#94A3B8] hover:text-cyan-600 dark:hover:text-[#38BDF8] hover:bg-slate-100 dark:hover:bg-[#141F30] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>

            {/* LinkedIn Icon */}
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 rounded-lg border border-slate-200 dark:border-[#263449] text-slate-600 dark:text-[#94A3B8] hover:text-cyan-600 dark:hover:text-[#38BDF8] hover:bg-slate-100 dark:hover:bg-[#141F30] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            {/* Let's Connect CTA Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 shadow-sm shadow-cyan-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Let&apos;s Connect
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            {/* Quick theme cycle for mobile */}
            <button
              onClick={() => {
                const nextMode: ThemeMode = mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark';
                setThemeMode(nextMode);
              }}
              className="p-2 rounded-lg text-slate-600 dark:text-[#94A3B8] border border-slate-200 dark:border-[#263449]"
              aria-label="Toggle Theme"
            >
              {mode === 'dark' ? <Moon className="w-4 h-4 text-cyan-400" /> : <Sun className="w-4 h-4 text-amber-500" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-[#94A3B8] hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#263449]"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#101827] border-b border-slate-200 dark:border-[#263449] px-4 pt-2 pb-6 space-y-1.5 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#141F30]"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-[#263449] flex flex-col gap-2.5">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#141F30] rounded-md"
            >
              <Github className="w-4 h-4 text-cyan-500" />
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-60" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#141F30] rounded-md"
            >
              <Linkedin className="w-4 h-4 text-cyan-500" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-60" />
            </a>
            <button
              onClick={() => handleNavClick('#contact')}
              className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-600"
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
