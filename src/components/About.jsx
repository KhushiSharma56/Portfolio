import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../assets/images/Profile.png';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="section">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-8" data-aos="fade-up">
          <img
            src={image}
            alt="Khushi Sharma"
            className="w-48 h-48 rounded-full object-cover shadow-lg"
          />
          <div>
            <p className="text-lg mb-4">
              I'm Khushi Sharma, an undergraduate student from Vizianagaram, Andhra Pradesh. I’m passionate about web
              development, cloud technologies, and creating user-friendly interfaces. My curiosity for tech drives me to
              learn and experiment constantly.
            </p>
            <p className="text-lg mb-4">
              With a blend of creativity (I love mandala art!) and logic, I approach projects with discipline and consistency.
              I’m skilled in React, MongoDB, AWS, and responsive UI design, and I hold certifications as a ServiceNow
              Certified System Administrator and Application Developer.
            </p>
            <p className="text-lg">
              When I’m not coding, you’ll find me listening to music or exploring new ways to combine creativity with technology.
            </p>
            <a
              href="/resume.pdf"
              download
              className="inline-block mt-4 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;