import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-pink-500 text-white">
      <motion.div
        className="text-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl mb-6">Oops! Looks like this page got lost in the code jungle!</p>
        <Link
          to="/"
          className="inline-block bg-white text-red-500 px-6 py-3 rounded-full font-semibold hover:bg-red-100 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;