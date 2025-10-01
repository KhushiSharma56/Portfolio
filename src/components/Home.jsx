
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Project1 from '../assets/images/Project1.png';
import Project2 from '../assets/images/Project2.png';
import Project3 from '../assets/images/Project3.png';
import Cert1 from '../assets/images/Cert1.png';
import Cert2 from '../assets/images/Cert2.png';
import Cert3 from '../assets/images/Cert3.png';
import Profile from '../assets/images/Profile.jpeg';
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
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    const bg = document.getElementById('hero-bg');
    if (bg) {
      for (let i = 0; i < 13; i++) {
        const shape = document.createElement('div');
        shape.className = 'hero-shape';
        shape.style.left = Math.random() * 100 + 'vw';
        shape.style.top = Math.random() * 90 + 'vh';
        shape.style.width = (30 + Math.random() * 80) + 'px';
        shape.style.height = shape.style.width;
        shape.style.opacity = 0.10 + Math.random() * 0.13;
        shape.style.background = i % 2 === 0
          ? 'radial-gradient(circle at 25% 67%, #ffd43b52, #ffd43b03 90%)'
          : 'radial-gradient(circle at 60% 20%, #406aa395, #406aa305 90%)';
        shape.style.position = 'absolute';
        shape.style.borderRadius = '50%';
        shape.style.zIndex = '1';
        shape.style.filter = 'blur(2.7px)';
        bg.appendChild(shape);

        const float = () => {
          shape.animate([
            { transform: 'translateY(0px)' },
            { transform: 'translateY(' + (-35 + Math.random() * 40) + 'px)' }
          ], {
            duration: 3600 + Math.random() * 2100,
            direction: 'alternate',
            fill: 'forwards',
            iterations: Infinity,
            easing: 'ease-in-out'
          });
        };
        float();
      }
    }

    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', evt => {
        evt.preventDefault();
        document.getElementById('contact-response').textContent = 'Thank you for reaching out! Reply soon.';
        form.reset();
      });
    }

    return () => AOS.refresh();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero min-h-[75vh] flex items-center justify-center bg-gradient-to-br from-[#406aa3] to-[#ffd43b] text-white relative overflow-hidden">
        <div className="hero-bg absolute top-0 left-0 w-full h-full pointer-events-none z-1"></div>
        <div className="hero-content relative z-2 bg-white/93 dark:bg-[#282c34]/93 p-8 rounded-2xl shadow-2xl text-center max-w-md mx-4" data-aos="fade-up">
          
          <center>
            <img src={Profile} alt="Profile Photo" className="hero-avatar w-24 h-24 rounded-full border-4 border-[#406aa3] object-cover mb-4 shadow-lg" />
          </center>
          <motion.h1
            className="text-4xl font-bold mb-2 text-[#406aa3] dark:text-[#ffd43b]"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Hello, I'm <span className="highlight text-[#ffd43b] dark:text-[#406aa3]">Khushi Sharma</span>
          </motion.h1>
          <p className="hero-desc text-lg mb-6 text-[#202225] dark:text-[#eef2f5]">
            Full Stack Developer<br />
            Cloud & Server Management Enthusiast
          </p>
          <Link
            to="/projects"
            className="hero-btn inline-block bg-[#406aa3] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#ffd43b] hover:text-[#406aa3] transition shadow-md"
          >
            View My Projects →
          </Link>
        </div>
      </section>
     
      {/* About Section */}
      <section id="about" className="section">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-[var(--primary)] dark:text-[var(--accent)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <p className="text-lg text-center mb-8" data-aos="fade-up">
            Passionate software developer, cloud enthusiast, and server management geek. Crafting robust web apps, managing virtual machines, and keeping up with the latest in cloud-native technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Skills</h3>
              <ul className="list-disc pl-6">
                <li>Java, Python, Shell</li>
                <li>React, Tailwind CSS</li>
                <li>AWS, XCP-ng, Cloud Management</li>
              </ul>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4">Experience</h3>
              <ul className="list-disc pl-6">
                <li>Intern at Indian Institute of Petroleum and Energy</li>
                <li>Intern at Hashtek Solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-[var(--primary)] dark:text-[var(--accent)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Featured Projects
          </motion.h2>
          <div className="project-grid grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
            {projects.slice(0, 3).map((project, index) => (
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
          <div className="text-center mt-8">
            <Link to="/projects" className="hero-btn">
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            className="text-4xl font-bold text-center mb-8 text-[var(--primary)] dark:text-[var(--accent)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Certificates & Awards
          </motion.h2>
          <div className="certificate-grid grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
            {certifications.slice(0, 3).map((cert, index) => (
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
          <div className="text-center mt-8">
            <Link to="/projects" className="hero-btn">
              View More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;