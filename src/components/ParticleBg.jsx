// components/ParticleBg.jsx
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // move behind all content
        particles: {
          number: { value: 20, density: { enable: false } },
          color: { value: "393E46" },// black particles
          shape: {
            type: "circle",
            options: { sides: 5 },
          },
          opacity: {
            value: 0.8,
            anim: { enable: false },
          },
          size: {
            value: 4,
             anim: { enable: true, speed: 2 },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: { enable: true, speed: 5 },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#000000", // black lines
            opacity: 0.3,
            width: 1,
          },
          move: {
            enable: true,
        speed: 1.5, // Very slow speed
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
          },
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }, 
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
          },
          push: {
      quantity: 4, // number of particles to add on click
    },
        },
        retina_detect: true,
        background: {
          color: "#fffffft", // white background
        },
        





      }}
    />
  );
};

export default ParticleBg;
