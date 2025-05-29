import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => AOS.refresh(); // Cleanup AOS on unmount
  }, []);

  return (
    <section className="section min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="text-center z-10" data-aos="fade-up">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Khushi Sharma
        </motion.h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 px-4">
          A passionate developer blending creativity with code
        </p>
        <Link
          to="/projects"
          className="inline-block bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-blue-100 transition"
        >
          Explore My Work
        </Link>
        <div className="mt-8">
          <a href="#about" className="text-white animate-bounce">
            <i className="fas fa-chevron-down text-2xl sm:text-3xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;