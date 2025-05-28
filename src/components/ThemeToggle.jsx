import React from 'react';
const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
    >
      <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'} text-xl`}></i>
    </button>
  );
};

export default ThemeToggle;