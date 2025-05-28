
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
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
          Get in Touch
        </motion.h2>
        <div className="flex flex-col md:flex-row gap-8" data-aos="fade-up">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Connect with Me</h3>
            <div className="flex space-x-6 mb-6">
              <a href="https://linkedin.com/in/khushi-sharma" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin text-3xl hover:text-blue-500 transition"></i>
              </a>
              <a href="https://github.com/khushi-sharma" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github text-3xl hover:text-blue-500 transition"></i>
              </a>
              <a href="mailto:khushi.sharma@example.com">
                <i className="fas fa-envelope text-3xl hover:text-blue-500 transition"></i>
              </a>
            </div>
            <p className="text-lg">
              Feel free to reach out for collaborations, opportunities, or just to say hi!
            </p>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  className="w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;