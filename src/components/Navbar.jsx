import React from 'react';

const Navbar = () => (
  <nav className="w-full px-8 py-4 fixed top-0 left-0 z-[100] bg-white/15 backdrop-blur-lg rounded-b-2xl shadow-lg flex items-center justify-between">
    <div className="font-bold text-2xl text-white">Sparsh</div>
    <div className="flex gap-8">
      <a href="#about" className="text-white font-medium no-underline hover:text-blue-300 transition-colors">About</a>
      <a href="#projects" className="text-white font-medium no-underline hover:text-blue-300 transition-colors">Projects</a>
      <a href="#contact" className="text-white font-medium no-underline hover:text-blue-300 transition-colors">Contact</a>
    </div>
  </nav>
);

export default Navbar;
