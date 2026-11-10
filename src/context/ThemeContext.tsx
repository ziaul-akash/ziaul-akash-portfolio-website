import React, { createContext, useContext, useEffect, useState } from 'react';
import { ThemeMode } from '../types';

interface ThemeContextType {
  mode: ThemeMode;
  effectiveTheme: 'dark' | 'light';
  setThemeMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme_preference') as ThemeMode;
      if (saved && ['dark', 'light', 'system'].includes(saved)) {
        return saved;
      }
    }
    return 'dark'; // Dark theme default aesthetic per spec
  });

  const [effectiveTheme, setEffectiveTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const updateEffectiveTheme = () => {
      let resolved: 'dark' | 'light' = 'dark';
      if (mode === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        resolved = systemPrefersDark ? 'dark' : 'light';
      } else {
        resolved = mode;
      }

      setEffectiveTheme(resolved);

      const root = document.documentElement;
      if (resolved === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
      }
    };

    updateEffectiveTheme();
    localStorage.setItem('theme_preference', mode);

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = () => {
      if (mode === 'system') updateEffectiveTheme();
    };

    mediaQuery.addEventListener('change', handleMediaChange);
    return () => mediaQuery.removeEventListener('change', handleMediaChange);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, effectiveTheme, setThemeMode: setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
