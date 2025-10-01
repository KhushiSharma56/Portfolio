
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project1 from '../assets/images/Project1.png';
import Project2 from '../assets/images/Project2.png';
import Project3 from '../assets/images/Project3.png';
import Project4 from '../assets/images/Project4.png';
import Cert1 from '../assets/images/Cert1.png';
import Cert2 from '../assets/images/Cert2.png';
import Cert3 from '../assets/images/Cert3.png';
import Cert4 from '../assets/images/Cert4.png';
import Cert5 from '../assets/images/Cert5.png';
import Cert6 from '../assets/images/Cert6.png';
import Cert7 from '../assets/images/Cert7.png';

const projects = [
  {
    name: 'Personal Portfolio Website',
    description: 'Responsive portfolio showcasing my skills, projects, and experiences with clean UI.',
    tools: ['HTML', 'CSS', 'Tailwind CSS', 'Vite', 'JavaScript'],
    github: 'https://github.com/KhushiSharma56/Portfolio',
    image: Project1,
  },
  {
    name: 'TaskTrckr App',
    description: 'Simple task manager to create, track, and manage tasks efficiently.',
    tools: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/KhushiSharma56/Tasktrackr',
    image: Project2,
  },
  {
    name: 'LAN Chat Messenger',
    description: 'Real-time chat application for local network communication between multiple users.',
    tools: ['Java', 'JavaFX', 'Sockets'],
    github: 'https://github.com/KhushiSharma56/LANMessenger',
    image: Project3,
  },
  {
    name: 'Server Admin Scripts',
    description: 'Collection of Linux server administration tasks automated using shell scripts.',
    tools: ['Bash', 'Linux', 'Networking'],
    github: 'https://github.com/KhushiSharma56/server-admin-tasks',
    image: Project4,
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
  {
    title: 'Google Cloud Platform - Associate Cloud Engineer',
    provider: 'L&T EduTech',
    description: 'Skilled in usage of GCP.',
    image: Cert6,
  },
  {
    title: 'Mastering Cloud Computing and AWS',
    provider: 'L&T EduTech',
    description: 'Skilled in usage of AWS.',
    image: Cert7,
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
          className="text-4xl font-bold text-center mb-8 text-[var(--primary)] dark:text-[var(--accent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          All Projects
        </motion.h2>
        <div className="project-grid grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="card"
              whileHover={{ translateY: -7, scale: 1.03 }}
            >
              <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="mb-4">{project.description}</p>
              <p className="mb-4"><strong>Tools:</strong> {project.tools.join(', ')}</p>
              <div className="flex space-x-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.h2
          className="text-4xl font-bold text-center my-12 text-[var(--primary)] dark:text-[var(--accent)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          All Certifications
        </motion.h2>
        <div className="certificate-grid grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="card"
              whileHover={{ translateY: -7, scale: 1.03 }}
            >
              <img src={cert.image} alt={cert.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
              <p className="mb-2"><strong>Provider:</strong> {cert.provider}</p>
              <p>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;