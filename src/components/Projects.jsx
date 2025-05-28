import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project1 from '../assets/images/Project1.png';
import Project2 from '../assets/images/Project2.png';

const projects = [
  {
    name: 'Project Nexus',
    description: 'A modular React + MongoDB application with 6 interactive modules for seamless user experience.',
    tools: ['React', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
    demo: 'https://project-nexus-demo.com',
    code: 'https://github.com/khushi-sharma/project-nexus',
    image: Project1,
  },
  {
    name: 'CollegeTips Gallery',
    description: 'An interactive, responsive photo gallery with filter and lightbox effects for CollegeTips.in.',
    tools: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://collegetips-gallery-demo.com',
    code: 'https://github.com/khushi-sharma/collegetips-gallery',
    image: Project2,
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section">
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
          {projects.map((project, index) => (
            <div key={index} className="card-hover bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                <strong>Tools:</strong> {project.tools.join(', ')}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                >
                  View Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;