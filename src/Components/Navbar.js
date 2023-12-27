import React, { useState } from 'react';

const Navbar = ({
  setDarkMode,
  darkMode

}) => {
  const [showNav, setShowNav] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav className={`bg-blue-500 p-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-white font-bold text-lg ">Learn React</div>
        </div>
        <div className="lg:hidden">
          <button className="text-white" onClick={toggleNav}>
            Menu
          </button>
        </div>
        <div className={`hidden lg:flex items-center space-x-4 ${showNav ? 'flex' : 'hidden'}`}>
          <a href="/" className="text-white hover:text-gray-300">Projects</a>
          <a href="#about" className="text-white hover:text-gray-300">Blogs</a>
          <a href="#contact" className="text-white hover:text-gray-300">Roadmap</a>
          <a href="#contact" className="text-white hover:text-gray-300">Resources</a>

        </div>
        <div className="flex items-center">
          <div
            className={`cursor-pointer ${darkMode ? 'text-yellow-400' : 'text-gray-400'}`}
            onClick={toggleDarkMode}
          >
            {darkMode ? '🌙' : '☀️'}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
