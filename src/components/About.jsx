import React from "react";
import profilePic from '../assets/pp.jpg';
import { FaChartBar, FaCode, FaRobot } from "react-icons/fa";

const About = () => {
    return (
        // ✅ Give it an ID so ScrollLink in Hero.jsx can scroll to it
        <div id="about" className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4">

            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-400 text-transparent bg-clip-text">
                About <span className="font-extrabold">Me</span>
            </h2>
            <p className="text-lg text-black-300 mb-10 text-center max-w-2xl">
                Passionate about technology and innovation
            </p>

           {/* Profile Card */}
<div className="profile-card w-80 h-96 mx-auto mb-8">
  <div className="profile-card-inner">

    {/* Front Side */}
    <div className="profile-card-front bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 shadow-lg text-white">
      <img
  src={profilePic}
  alt="Profile"
  className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-cyan-400"
/>
      <h3 className="text-xl font-bold text-center">Arun Mohapatra</h3>
      <p className="text-center text-sm text-green-500">Tech Enthusiast & AI Developer</p>
    </div>

    {/* Back Side */}
    <div className="profile-card-back bg-gradient-to-br from-[#ff6a00] via-[#ee0979] to-[#ff6ec4] text-white p-6 flex flex-col justify-center items-center rounded-2xl shadow-2xl backdrop-blur-md bg-opacity-80 border border-white/10 hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold mb-2">Professional Bio</h3>
      <p className="text-sm text-center leading-relaxed">
        Final-year CSE student specialized in AI & ML. Passionate about developing real-world solutions using Python, React,Node,MongoDB,Express and intelligent systems.
      </p>
    </div>

  </div>
</div>






            {/* Skills */}
            <div className="grid md:grid-cols-3 gap-6 text-white mb-16">
                {/* Data Analytics */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                    <FaChartBar className="text-cyan-400 text-4xl mb-3" />
                    <h4 className="font-semibold text-cyan-400 mb-2">Data Analytics</h4>
                    <p className="text-sm text-gray-300">
                        Python, Excel, Visualization, Statistical Analysis
                    </p>
                </div>

                {/* Web Development */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                    <FaCode className="text-cyan-400 text-4xl mb-3" />
                    <h4 className="font-semibold text-cyan-400 mb-2">Web Development</h4>
                    <p className="text-sm text-gray-300">
                        Frontend, Backend, Servers, Database
                    </p>
                </div>

                {/* Prompt Engineering */}
                <div className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center">
                    <FaRobot className="text-cyan-400 text-4xl mb-3" />
                    <h4 className="font-semibold text-cyan-400 mb-2">Prompt Engineering</h4>
                    <p className="text-sm text-gray-300">
                        GPT-4, AI Automation, ML Optimization
                    </p>
                </div>
            </div>






            {/* Education */}
            <h3 className="text-4xl font-bold text-green-500 mb-6">🎓 Education</h3>
            <div className="grid md:grid-cols-3 gap-6 text-white">
                <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
                    <h4 className="font-semibold">B.Tech (7th Semester)</h4>
                    <p className="text-sm text-gray-300">GEC BHUBANESWAR</p>
                    <p className="text-lg text-yellow-400 mt-2">8.3 CGPA</p>
                    <span className="text-xs text-yellow-300">Pursuing</span>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
                    <h4 className="font-semibold">12th Grade</h4>
                    <p className="text-sm text-gray-300">CHSE Board</p>
                    <p className="text-lg text-green-400 mt-2">80.16%</p>
                    <span className="text-xs text-green-300">Completed</span>
                </div>
                <div className="bg-gray-800 p-4 rounded-xl shadow-md text-center">
                    <h4 className="font-semibold">10th Grade</h4>
                    <p className="text-sm text-gray-300">HSE Board</p>
                    <p className="text-lg text-green-400 mt-2">76.16%</p>
                    <span className="text-xs text-green-300">Completed</span>
                </div>
            </div>
        </div>
    );
};

export default About;
