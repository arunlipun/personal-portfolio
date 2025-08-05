import React from "react";
import { useEffect } from "react";
import { scroller } from "react-scroll";
import Navbar from "./components/Navbar";
import ParticleBg from "./components/ParticleBg";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";



const App = () => {
  
  
  return (
    <>
      <ParticleBg />
      <Navbar />
      
        <Hero />
        <About />
        <Experience />
        <Certificates/>
        <Skills/>
        <Projects/>
        <Contact/>
      
    </>
  );
};

export default App;
