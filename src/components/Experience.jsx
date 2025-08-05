import React, { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaLaptopCode, FaShieldAlt, FaUserShield, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const experiences = [
  {
    title: "AI AZURE",
    company: "Edunet Foundation",
    date: "MAY 2025 - JUNE 2025",
    location: "Hyderabad",
    mode: "Remote",
    icon: <FaUserShield />,
  },
  {
    title: "PYTHON DEVELOPER",
    company: "CTTC Bhubaneswar",
    date: "JUNE 2025 - JULY 2025",
    location: "Odisha",
    mode: "On-Site",
    icon: <FaShieldAlt />,
  },
  {
    title: "AIML",
    company: "Inspireleap",
    date: "Jan - Maarch 2025 ",
    location: "Hydranad",
    mode: "Remote",
    icon: <FaShieldAlt />,
  },
  {
    title: "Team Leader(Event)",
    company: "College",
    date: "Jan 2024 - Present",
    location: "GEC, Bhubaneswar",
    mode: "On-site",
    icon: <FaLaptopCode />,
  },
  {
    title: "Frontend Developer",
    company: "Conifyz",
    date: "June -July 2023 ",
    location: "Karnatak",
    mode: "Remote",
    icon: <FaLaptopCode />,
  },
  {
    title: "SQL Developer",
    company: "CodeTech",
    date: "Dec -Jan 2024 ",
    location: "Hyderabad",
    mode: "Remote",
    icon: <FaLaptopCode />,
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }));
  }, [isInView]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center bg-transparent py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-cyan-400">
          Professional <span className="text-green-500">Experience</span>
        </h2>
        <p className="text-black-400 mt-2">My journey in the tech industry</p>
      </motion.div>

      <VerticalTimeline lineColor="rgba(6, 182, 212, 0.4)">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            custom={index}
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? controls : {}}
          >
            <VerticalTimelineElement
              position={index % 2 === 0 ? "left" : "right"}
              date="" // remove this to prevent default date outside the box
              iconStyle={{ background: "#06b6d4", color: "#fff" }}
              icon={exp.icon}
              contentStyle={{
                background: "#1a1a3c",
                color: "#fff",
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.2)",
              }}
              contentArrowStyle={{ borderRight: "7px solid #1a1a3c" }}
            >
              <h3 className="text-lg font-bold text-white">{exp.title}</h3>
              <h4 className="text-md font-semibold text-cyan-300">
                {exp.company}
              </h4>

              <div className="flex items-center text-sm text-gray-300 mt-2">
                <FaCalendarAlt className="mr-2 text-cyan-400" />
                <span>{exp.date}</span>
              </div>

              <div className="flex items-center text-sm text-gray-300 mt-1">
                <FaMapMarkerAlt className="mr-2 text-cyan-400" />
                <span>{exp.location || "Not Specified"}</span>
              </div>

              <div className="mt-3">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    exp.mode === "Remote"
                      ? "bg-green-900 text-green-300"
                      : "bg-blue-900 text-blue-300"
                  }`}
                >
                  {exp.mode}
                </span>
              </div>
            </VerticalTimelineElement>
          </motion.div>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Experience;
