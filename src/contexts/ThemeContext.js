import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        if (savedTheme === 'true' || savedTheme === 'dark') {
          return true;
        } else if (savedTheme === 'false' || savedTheme === 'light') {
          return false;
        } else {
          return JSON.parse(savedTheme);
        }
      }
      return false;
    } catch (error) {
      console.warn('Error parsing theme from localStorage:', error);
      localStorage.removeItem('theme');
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('theme', JSON.stringify(isDarkMode));
      // Apply theme class to body immediately
      document.body.classList.toggle('dark-mode', isDarkMode);
    } catch (error) {
      console.warn('Error saving theme to localStorage:', error);
    }
  }, [isDarkMode]);

  // Apply initial theme on mount
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
