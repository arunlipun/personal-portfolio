import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll'; // smooth scroll
import { FaChevronDown } from 'react-icons/fa'; // down arrow icon

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center bg-transparent px-4">
      {/* Typing effect for name */}
      <TypeAnimation
        sequence={[
          "Hello, I'm ",
          500,
          "Hello, I'm Arun Mohapatra",
          1500,
        ]}
        wrapper="h1"
        speed={50}
        repeat={Infinity}
        className="text-4xl md:text-6xl font-bold mb-4"
        style={{ color: 'orange' }}
      />

      {/* Typing roles */}
      <TypeAnimation
        sequence={[
          'Full Stack Developer 💻', 1000,
          'AI/ML Enthusiast 🤖', 1000,
          'Tech Explorer 🚀', 1000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl md:text-2xl font-semibold"
        style={{
          background: 'linear-gradient(to right, #3b82f6, #ef4444)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}
      />

      {/* Qualification */}
      <motion.p
        className="mt-4 text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-blue-600 font-bold">B.Tech in CSE (AI & ML)</span>
        <span className="text-green-500 font-bold"> | Passionate Developer</span>
      </motion.p>

      {/* Buttons */}
      <div className="mt-10 flex items-center gap-4">
        {/* Explore My Work */}
        <ScrollLink
          to="experience"
          smooth={true}
          duration={800}
          offset={-80}
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold cursor-pointer hover:opacity-90 transition"
        >
          Explore My Work
        </ScrollLink>

        {/* Down Icon */}
        <ScrollLink to="contact" smooth={true} duration={800} offset={-80} className="text-white text-xl cursor-pointer">
          <FaChevronDown className="hover:text-cyan-400" />
        </ScrollLink>

        {/* Download Resume */}
        <a
          href="/Final Resume.pdf"
          download="Arun_Mohapatra_Resume.pdf"
          className="px-6 py-3 rounded-lg border-2 border-blue-500 text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
