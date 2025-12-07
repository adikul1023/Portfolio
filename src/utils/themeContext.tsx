import React, { createContext, useContext, useEffect, useState } from 'react';
import themes from '../../themes.json';

interface ThemeContextType {
  currentTheme: string;
  setTheme: (theme: string) => void;
  availableThemes: string[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentTheme, setCurrentTheme] = useState('gruvbox');
  const availableThemes = Object.keys(themes);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('terminal-theme');
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      applyTheme('gruvbox');
    }
  }, []);

  const applyTheme = (themeName: string) => {
    const theme = themes[themeName];
    if (!theme) return;

    const root = document.documentElement;
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const colors = isDark ? theme.dark : theme.light;

    // Apply CSS variables
    root.style.setProperty('--bg-color', colors.background);
    root.style.setProperty('--fg-color', colors.foreground);
    root.style.setProperty('--yellow-color', colors.yellow);
    root.style.setProperty('--green-color', colors.green);
    root.style.setProperty('--gray-color', colors.gray);
    root.style.setProperty('--blue-color', colors.blue);
    root.style.setProperty('--red-color', colors.red);
  };

  const setTheme = (themeName: string) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
      localStorage.setItem('terminal-theme', themeName);
      applyTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
