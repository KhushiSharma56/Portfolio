import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <motion.button
    onClick={toggleTheme}
    className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-md z-50"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.i
        className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-lg sm:text-xl`}
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'light' ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      ></motion.i>
    </motion.button>

  );
};

export default ThemeToggle;
