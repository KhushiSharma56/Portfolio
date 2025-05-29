import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

// Replace with your EmailJS Public Key
emailjs.init('NtNz0yHcFEciHJ4kg');

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => AOS.refresh();
  }, []);

  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    emailjs
      .sendForm('service_adh2vsm', 'template_8w5hojj', form, 'NtNz0yHcFEciHJ4kg')
      .then(
        () => {
          setFormStatus('success');
          form.reset();
          setTimeout(() => setFormStatus(null), 5000);
        },
        () => {
          setFormStatus('error');
        }
      );
  };

  return (
    <section className="section">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-6 md:gap-8" data-aos="fade-up">
          <div className="md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Connect with Me</h3>
            <motion.div
              className="mb-6 p-4 bg-gradient-to-r from-yellow-400 to-yellow-600 dark:from-yellow-600 dark:to-yellow-800 rounded-lg shadow-xl border border-yellow-300 dark:border-yellow-700"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="https://www.linkedin.com/in/khushi-sharma-5a04412b7/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3"
              >
                <i className="fab fa-linkedin text-3xl sm:text-4xl text-white"></i>
                <div>
                  <p className="text-lg sm:text-xl font-semibold text-white">Join Me on LinkedIn</p>
                  <p className="text-sm sm:text-base text-yellow-100">
                    Connect for professional networking and opportunities
                  </p>
                </div>
                <i className="fas fa-crown text-xl sm:text-2xl text-yellow-200"></i>
              </a>
            </motion.div>
            <div className="space-y-4 mb-6">
              <motion.div
                className="p-4 bg-gradient-to-r from-[#6e40c9] to-[#8b5cf6] dark:from-[#5b21b6] dark:to-[#6e40c9] rounded-lg shadow-xl border border-[#8b5cf6] dark:border-[#6e40c9]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="https://github.com/KhushiSharma56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3"
                >
                  <i className="fab fa-github text-3xl sm:text-4xl text-white"></i>
                  <div>
                    <p className="text-lg sm:text-xl font-semibold text-white">Follow Me on GitHub</p>
                    <p className="text-sm sm:text-base text-gray-100">Explore my projects and code</p>
                  </div>
                </a>
              </motion.div>
              <motion.div
                className="p-4 bg-gradient-to-r from-[#ea4335] to-[#f28b82] dark:from-[#c5221f] dark:to-[#ea4335] rounded-lg shadow-xl border border-[#f28b82] dark:border-[#ea4335]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href="mailto:khushi.sharma9387@gmail.com"
                  className="flex items-center space-x-3"
                >
                  <i className="fas fa-envelope text-3xl sm:text-4xl text-white"></i>
                  <div>
                    <p className="text-lg sm:text-xl font-semibold text-white">Email Me</p>
                    <p className="text-sm sm:text-base text-gray-100">Reach out for opportunities</p>
                  </div>
                </a>
              </motion.div>
            </div>
            <p className="text-base sm:text-lg">
              Feel free to reach out for collaborations, opportunities, or just to say hi!
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm sm:text-base font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  required
                  className="w-full p-2 sm:p-3 border rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm sm:text-base font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  required
                  className="w-full p-2 sm:p-3 border rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm sm:text-base font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full p-2 sm:p-3 border rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-blue-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
              {formStatus === 'success' && (
                <motion.p
                  className="text-green-500 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              {formStatus === 'error' && (
                <motion.p
                  className="text-red-500 text-sm sm:text-base"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  Failed to send message. Please try again.
                </motion.p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;