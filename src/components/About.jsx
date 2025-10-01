import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import image from '../assets/images/Profile.jpeg';
import IIPELogo from '../assets/images/IIPELogo.png'; 
import HashTekLogo from '../assets/images/HashTekLogo.png'; 
//import CollegeTipsLogo from '../assets/images/collegetips-logo.png';

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

        {/* Internship Experience Section */}
        <section className="section">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-8 text-[var(--primary)] dark:text-[var(--accent)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Internship Experience
          </motion.h2>
          <div className="space-y-8">
            {/* IIPE Internship - Image on right */}
            <motion.div
              className="card flex flex-col md:flex-row items-center justify-between gap-8 w-full"
              whileHover={{ translateY: -7, scale: 1.03 }}
            >
              <div className="md:w-1/2 order-1">
                <h3 className="text-2xl font-semibold mb-2">Intern</h3>
                <p className="mb-2"><strong>Company:</strong> Indian Institute of Petroleum & Energy (IIPE)</p>
                <p className="mb-2"><strong>City:</strong> Visakhapatnam, Andhra Pradesh</p>
                <p className="mb-2"><strong>Position:</strong> Intern</p>
                <p className="mb-2"><strong>Duration:</strong> 4 months (ongoing)</p>
                <p className="mb-2"><strong>Start Date:</strong> July 2025</p>
                <p className="mb-2"><strong>End Date:</strong> November 2025</p>
                <p className="mb-4"><strong>Technologies:</strong> Apache, Node.js, PM2, MongoDB, XCP-ng, Nginx, DNS, NTP, CloudPanel</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Deployed and maintained full-stack form applications: frontend via Apache, backend via Node.js/PM2 with MongoDB (serving ~80 users).</li>
                  <li>Implemented file upload workflows, created deployment documentation, and debugged live issues during admissions and demos.</li>
                  <li>Installed and configured XCP-ng hypervisor on bare metal, with virtualization dashboard and networking setup.</li>
                  <li>Configured Nginx reverse proxy and multi-app hosting, ensuring stable access for Node-based applications.</li>
                  <li>Set up local DNS server and NTP synchronization for internal VM environments, strengthening knowledge of system networking.</li>
                  <li>Installed CloudPanel for server management.</li>
                </ul>
              </div>
              <img src={IIPELogo} alt="IIPE Logo" className="md:w-1/2 w-full h-auto rounded-lg shadow-lg order-2" />
            </motion.div>

            {/* HashTek Internship - Image on left */}
            <motion.div
              className="card flex flex-col md:flex-row-reverse items-center justify-between gap-8 w-full"
              whileHover={{ translateY: -7, scale: 1.03 }}
            >
              <div className="md:w-1/2 order-1">
                <h3 className="text-2xl font-semibold mb-2">Intern</h3>
                <p className="mb-2"><strong>Company:</strong> HashTek Solutions</p>
                <p className="mb-2"><strong>City:</strong> Visakhapatnam</p>
                <p className="mb-2"><strong>Position:</strong> Intern</p>
                <p className="mb-2"><strong>Duration:</strong> 1 month</p>
                <p className="mb-2"><strong>Start Date:</strong> June 2024</p>
                <p className="mb-2"><strong>End Date:</strong> July 2024</p>
                <p className="mb-4"><strong>Technologies:</strong> AWS S3, EC2, Route 53, VPC</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Deployed static websites to AWS S3; assisted in EC2 and Route 53 setup for demo environments.</li>
                  <li>Followed secure hosting practices and performed infrastructure configuration.</li>
                  <li>Set up VPC for network isolation.</li>
                </ul>
              </div>
              <img src={HashTekLogo} alt="HashTek Logo" className="md:w-1/2 w-full h-auto rounded-lg shadow-lg order-2" />
            </motion.div>

            
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;