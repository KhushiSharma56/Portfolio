import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center" data-aos="fade-up">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Khushi Sharma
        </motion.h1>
        <p className="text-xl md:text-2xl mb-6">
          A passionate developer blending creativity with code
        </p>
        <Link
          to="/projects"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition"
        >
          Explore My Work
        </Link>
        <div className="mt-8">
          <a href="#about" className="text-white animate-bounce">
            <i className="fas fa-chevron-down text-3xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

