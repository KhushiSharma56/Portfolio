import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project1 from '../assets/images/Project1.png';
import Project2 from '../assets/images/Project2.png';
import Cert1 from '../assets/images/Cert1.png';
import Cert2 from '../assets/images/Cert2.png';
import Cert3 from '../assets/images/Cert3.png';
import Cert4 from '../assets/images/Cert4.png';
import Cert5 from '../assets/images/Cert5.png';

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

const certifications = [
  {
    title: 'ServiceNow Certified System Administrator',
    provider: 'ServiceNow',
    description: 'Certified in managing and configuring ServiceNow platforms for enterprise solutions.',
    image: Cert1,
  },
  {
    title: 'ServiceNow Certified Application Developer',
    provider: 'ServiceNow',
    description: 'Skilled in developing custom applications on the ServiceNow platform.',
    image: Cert2,
  },
  {
    title: 'Google Cloud Computing Foundation & Generative AI',
    provider: 'Google Developer Student Club',
    description: 'Skilled in Google Cloud Development.',
    image: Cert3,
  },
  {
    title: 'Python for Data Science & AI Development',
    provider: 'IBM',
    description: 'Skills acquired for data scienec and AI development using Python.',
    image: Cert4,
  },
  {
    title: 'Analyzing and Visulaizing Data with Power BI',
    provider: 'Davidson College',
    description: 'Skilled in usage of Power BI tool.',
    image: Cert5,
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="section">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8" data-aos="fade-up">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card-hover bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
              />
              
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2">{project.name}</h3>
              <p className="text-sm sm:text-base text-gray-900 dark:text-white mb-4">{project.description}</p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-4">
                <strong>Tools:</strong> {project.tools.join(', ')}
              </p>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition text-sm sm:text-base"
                >
                  View Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 text-white px-4 py-2 rounded-full hover:bg-gray-600 transition text-sm sm:text-base"
                >
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center my-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          My Certifications
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8" data-aos="fade-up">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="cert-card p-4 sm:p-6 rounded-lg"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-2">
                <strong>Provider:</strong> {cert.provider}
              </p>
              <p className="text-sm sm:text-base">{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;