import React from 'react';
import { useState } from 'react';
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
    <header className={`sticky top-0 z-50 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Khushi Sharma</Link>
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:text-blue-500 ${isActive ? 'text-blue-500 font-semibold' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col items-center py-4">
            {navLinks.map((link) => (
              <li key={link.name} className="py-2">
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `hover:text-blue-500 ${isActive ? 'text-blue-500 font-semibold' : ''}`
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