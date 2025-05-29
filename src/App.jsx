// import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import image from './assets/images/Profile.png';

// const About = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   return (
//     <section id="about" className="section">
//       <div className="container mx-auto max-w-5xl">
//         <motion.h2
//           className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           About Me
//         </motion.h2>
//         <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8" data-aos="fade-up">
//           <motion.div
//             className="relative"
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           >
//             <img
//               src={image}
//               alt="Khushi Sharma"
//               className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg border-4 border-transparent hover:border-blue-500 transition-all duration-300"
//             />
//           </motion.div>
//           <div className="text-center md:text-left">
//             <p className="text-base sm:text-lg md:text-xl mb-4">
//               I'm Khushi Sharma, an undergraduate student from Vizianagaram, Andhra Pradesh. I'm passionate about web
//               development, cloud technologies, and creating user-friendly interfaces. My curiosity for tech drives me to
//               learn and experiment constantly.
//             </p>
//             <p className="text-base sm:text-lg md:text-xl mb-4">
//               With a blend of creativity (I love mandala art!) and logic, I approach projects with discipline and consistency.
//               I'm skilled in React, MongoDB, AWS, and responsive UI design, and I hold certifications as a ServiceNow
//               Certified System Administrator and Application Developer.
//             </p>
//             <p className="text-base sm:text-lg md:text-xl">
//               When I'm not coding, you'll find me listening to music or exploring new ways to combine creativity with technology.
//             </p>
//             <a
//               href="/resume.pdf"
//               download
//               className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-blue-600 transition"
//             >
//               Download Resume
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} font-poppins transition-colors duration-300`}>
        <Header theme={theme} />
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;


