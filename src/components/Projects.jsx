import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

const projectsData = [
  {
    title: "OLA Data Analytics",
    description:
      " Cleaned and structured ride data for better visualization. Created Power BI dashboards to analyze customer trends, revenue insights, and ride statistics",
    image: "/public/projects/ola.png",
    tags: ["Excel", "VBA", "Power BI", "SQL"],
    category: "Data Analytics",
    liveDemo: "https://github.com/arunlipun/Ola_data_analytics",
    code: "https://github.com/arunlipun/Ola_data_analytics",
  },
  {
    title: "Smart Alarm Clock App",
    description:
      "A sleek and responsive alarm clock built with React, featuring real-time time tracking, customizable alarm settings, audio alerts, and an intuitive user interface. Ideal for productivity and time management on the web.",
    image: "/public/projects/alarm.png",
    tags: ["React", "HTML", "JavaScript", "TailwindCss"],
    category: "Web Development",
    liveDemo: "https://alarm-react-swart.vercel.app/",
    code: "https://github.com/arunlipun/alarm_react",
  },
  {
    title: "PDF VOICE SEARCH",
    description:
      "Use microphone search a word, sentence and letter from a pdf or page .",
    image: "/projects/pdfvoice.png",
    tags: ["React", "JavaScript", "tailwindcss","HTML","CSS"],
    category: "Web Development",
    liveDemo: "https://pdf-voice-search-7jsnxypg0-arunlipuns-projects.vercel.app",
    code: "https://arunlipun.github.io/alarm_react/",
  },
  {
    title: "AI alets System",
    description:
      "👁️ Eye Detection Alert System A real-time Python + OpenCV project that detects whether the eyes are open or closed. If closed, a loud alert sound is triggered to prevent accidents (ideal for drowsy driver detection systems 🚗). .",
    image: "public/projects/eye.png",
    tags: ["Python", "OpenCV", "Haar Cascade Classifier", "WebCam"],
    category: "AI Projects",
    liveDemo: "https://github.com/arunlipun/opencv_python",
    code: "https://github.com/arunlipun/opencv_python",
  },
  {
    title: "Personal Portfolio",
    description:
      "Real time personal portfolio with actions and all About me .",
    image: "/projects/personal.png",
    tags: ["React", "JavaScript", "tailwindcss", "Three.js"],
    category: "Web Development",
    liveDemo: "https://github.com/arunlipun",
    code: "https://github.com/arunlipun",
  },
  {
    title: "Dibetics Prediction",
    description:
      "Using AI and ML predict the dibetics prediction System and Chats .",
    image: "public/projects/dibetice.png",
    tags: ["python", "Pandas", "Numpy", "Ai and Ml"],
    category: "AI Projects",
    liveDemo: "https://github.com/arunlipun",
    code: "https://github.com/arunlipun",
  },
];

const categories = [
  "All Projects",
  "Data Analytics",
  "Web Development",
  "AI Projects",
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredProjects =
    selectedCategory === "All Projects"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div id="projects" className="min-h-screen py-16 px-6 bg-transparent relative z-10">
      <motion.h2
        className="text-4xl font-bold text-center mb-10 text-white"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-green-500">Featured</span>{" "}
        <span className="text-cyan-400">Projects</span>
      </motion.h2>

      {/* Category filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-cyan-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-cyan-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 justify-center">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-[#1f2937] rounded-2xl shadow-md overflow-hidden flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[#374151] text-cyan-300 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-all"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-all"
                >
                  <FaCode />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
