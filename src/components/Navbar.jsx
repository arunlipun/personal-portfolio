import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from 'lucide-react'; // Or use Heroicons or any other icon library

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full fixed top-0 z-50 px-6 py-4 bg-white/30 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo & Name */}
        <ScrollLink 
          to="hero" 
          smooth={true} 
          duration={500} 
          offset={-80} 
          className="flex items-center space-x-3 cursor-pointer"
          onClick={closeMenu}
        >
          <div className="px-1 py-0 bg-blue-500 text-white font-bold text-lg rounded-xl shadow-md">
            AM
          </div>
          <h1 className="text-xl font-semibold text-gray-800">Arun Mohapatra</h1>
        </ScrollLink>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={handleToggle}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {["hero", "about", "experience", "certificates", "skills", "projects", "contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={150}
              offset={-80}
              className="hover:text-green-600 cursor-pointer capitalize"
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 font-medium flex flex-col items-center">
          {["hero", "about", "experience", "certificates", "skills", "projects", "contact"].map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={150}
              offset={-80}
              className="hover:text-green-600 cursor-pointer capitalize"
              onClick={closeMenu}
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
