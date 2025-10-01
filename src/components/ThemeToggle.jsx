
// import React from 'react';
// import { motion } from 'framer-motion';

// const ThemeToggle = ({ toggleTheme, theme }) => {
//   return (
//     <motion.button
//       onClick={toggleTheme}
//       className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 p-2 sm:p-3 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-[#ffd43b] hover:text-[#406aa3] transition-all duration-300 shadow-md z-50"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//     >
//       <motion.span
//         className="text-lg sm:text-xl"
//         initial={{ rotate: 0 }}
//         animate={{ rotate: theme === 'light' ? 360 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {theme === 'light' ? '🌙' : '☀️'}
//       </motion.span>
//     </motion.button>
//   );
// };

// export default ThemeToggle;

// import React from 'react';
// import { motion } from 'framer-motion';

// const ThemeToggle = ({ toggleTheme, theme }) => {
//   return (
//     <motion.button
//       onClick={toggleTheme}
//       className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 p-3 bg-gray-200 dark:bg-[#282c34] rounded-lg hover:bg-[#ffd43b] hover:text-[#202225] transition-all duration-300 shadow-md z-50"
//       whileHover={{ scale: 1.1 }}
//       whileTap={{ scale: 0.9 }}
//       aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
//     >
//       <motion.span
//         className="text-xl"
//         initial={{ rotate: 0 }}
//         animate={{ rotate: theme === 'light' ? 360 : 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         {theme === 'light' ? '🌙' : '☀️'}
//       </motion.span>
//     </motion.button>
//   );
// };

// export default ThemeToggle;
import React from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 p-3 bg-[var(--card-light)] dark:bg-[var(--card-dark)] rounded-lg hover:bg-[var(--accent)] hover:text-[var(--primary)] transition-[var(--transition)] shadow-md z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.span
        className="text-xl"
        initial={{ rotate: 0 }}
        animate={{ rotate: theme === 'light' ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'light' ? '🌙' : '☀️'}
      </motion.span>
    </motion.button>
  );
};

export default ThemeToggle;
