import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md transition-colors duration-300`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl sm:text-2xl font-bold">Khushi Sharma</Link>
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm lg:text-base hover:text-blue-500 transition-colors ${isActive ? 'text-blue-500 font-semibold' : ''}`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-blue-500"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                      style={{ bottom: '-4px' }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl sm:text-2xl`}></i>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden bg-gray-800 md:bg-transparent"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center py-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm sm:text-base hover:text-blue-500 ${isActive ? 'text-blue-500 font-semibold' : ''}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;