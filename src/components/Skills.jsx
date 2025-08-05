import React from "react";
import {
  FaPython, FaReact, FaJava, FaHtml5, FaCss3Alt, FaFileExcel,
} from "react-icons/fa";
import { FaGithub, FaGitAlt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiPostgresql, SiMysql } from "react-icons/si";
import { MdStorage } from "react-icons/md"; // For DBMS
import { FaBootstrap, FaAngular } from "react-icons/fa";

import {
  SiJavascript, SiTailwindcss, SiMongodb, SiNodedotjs, SiFirebase,
  
} from "react-icons/si";
import { MdModelTraining } from "react-icons/md";
import { TbBrandTabler } from "react-icons/tb";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, level: 90, color: "#e34c26" },
      { name: "CSS", icon: FaCss3Alt, level: 85, color: "#264de4" },
      { name: "JavaScript", icon: SiJavascript, level: 80, color: "#f0db4f" },
      { name: "React", icon: FaReact, level: 75, color: "#61DBFB" },
      { name: "Tailwind", icon: SiTailwindcss, level: 85, color: "#38bdf8" },
       { name: "Bootstrap", icon: FaBootstrap, level: 75, color: "#7952B3" },
    { name: "Angular", icon: FaAngular, level: 50, color: "#dd1b16" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, level: 80, color: "#3C873A" },
      { name: "MongoDB", icon: SiMongodb, level: 70, color: "#4DB33D" },
      { name: "Firebase", icon: SiFirebase, level: 60, color: "#FFA611" },
       { name: "SQL", icon: SiMysql, level: 75, color: "#00758F" },
    { name: "PostgreSQL", icon: SiPostgresql, level: 70, color: "#336791" },
    { name: "DBMS", icon: MdStorage, level: 80, color: "#8E44AD" },
    ],
  },
  {
    category: "Programming & Tools",
    skills: [
      { name: "Python", icon: FaPython, level: 65, color: "#3572A5" },
      { name: "Java", icon: FaJava, level: 85, color: "#f89820" },
      { name: "Excel", icon: FaFileExcel, level: 88, color: "#217346" },
      { name: "ML Training", icon: MdModelTraining, level: 65, color: "#9c27b0" },
      { name: "Tabler", icon: TbBrandTabler, level: 55, color: "#4B5563" },
       { name: "Git", icon: FaGitAlt, level: 80, color: "#F1502F" },
    { name: "GitHub", icon: FaGithub, level: 85, color: "black" },
    { name: "Express.js", icon: SiExpress, level: 75, color: "green" },
      
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="w-full py-16 px-4 bg-transparent text-black">
      <h2 className="text-4xl font-bold text-center mb-14">Technical Skills</h2>
      <div className="max-w-6xl mx-auto space-y-16">
        {skillsData.map((group, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mb-6 border-b border-gray-600 pb-2">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
              {group.skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center bg-white/5 backdrop-blur-md p-4 rounded-xl shadow-md"
                  >
                    <div className="w-20 h-20 mb-3">
                      <CircularProgressbar
                        value={skill.level}
                        text={`${skill.level}%`}
                        styles={buildStyles({
                          textColor: "#fff",
                          pathColor: skill.color,
                          trailColor: "#333",
                          textSize: "28px",
                        })}
                      />
                    </div>
                    <div
                      className="text-3xl mb-2"
                      style={{ color: skill.color }}
                    >
                      <Icon />
                    </div>
                    <p className="text-sm font-semibold text-center">{skill.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
