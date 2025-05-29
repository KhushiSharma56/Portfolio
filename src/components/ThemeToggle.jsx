// import React, { useState, useEffect } from 'react';

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(false);

//   useEffect(() => {
//     // Load theme from localStorage or system preference
//     const savedTheme = localStorage.getItem('theme');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
//     setIsDark(initialTheme === 'dark');
//     document.documentElement.classList.toggle('dark', initialTheme === 'dark');
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = isDark ? 'light' : 'dark';
//     setIsDark(!isDark);
//     document.documentElement.classList.toggle('dark', newTheme === 'dark');
//     localStorage.setItem('theme', newTheme);
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className="fixed top-5 right-5 z-50 flex items-center w-20 h-10 p-1 bg-black dark:bg-white rounded-full shadow-lg hover:shadow-[0_0_10px_3px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_0_10px_3px_rgba(0,0,0,0.5)] transition-shadow duration-300 focus:outline-none"
//       aria-label="Toggle theme"
//     >
//       <span
//         className={`flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-black text-black dark:text-white transform transition-transform duration-300 ${
//           isDark ? 'translate-x-10' : 'translate-x-0'
//         }`}
//       >
//         {isDark ? (
//           <i className="fas fa-sun text-yellow-400 text-base" />
//         ) : (
//           <i className="fas fa-moon text-gray-800 text-base" />
//         )}
//       </span>
//     </button>
//   );
// };

// export default ThemeToggle;
import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300 shadow-md z-50"
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