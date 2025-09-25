import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items data
  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  // Reusable NavLink component
  const NavLink = ({ href, label, onClick, index, isMobile = false }) => (
    <a 
      href={href} 
      onClick={onClick}
      className={`relative text-white font-medium no-underline hover:text-blue-300 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group ${
        isMobile 
          ? 'text-2xl py-4 animate-text-reveal opacity-0' 
          : 'px-3 py-1.5'
      } rounded-lg`}
      style={isMobile ? { animationDelay: `${index * 0.1}s` } : {}}
    >
      <span className="relative z-10">{label}</span>
      <span className={`absolute -bottom-1 ${isMobile ? 'left-0' : 'left-3'} w-0 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 transition-all duration-300 ${
        isMobile 
          ? 'group-hover:w-full' 
          : 'group-hover:w-[calc(100%-24px)]'
      }`}></span>
      <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
    </a>
  );

  // Hamburger menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <div className="w-full fixed top-4 left-0 z-[100] flex justify-center animate-fade-in">
        <div className="relative">
          <nav className={`hidden lg:flex ${
            // Responsive width - optimized for 6 navigation items
            'w-[100%] xl:w-[100%] 2xl:w-[100%]'
          } px-6 py-2.5 transition-all duration-500 ease-out transform relative overflow-hidden ${
            scrolled 
              ? 'backdrop-blur-xl shadow-2xl shadow-blue-500/10' 
              : 'backdrop-blur-lg'
          } rounded-2xl items-center justify-center
          before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r 
          ${scrolled 
            ? 'before:from-transparent before:via-black/40 before:to-transparent' 
            : 'before:from-transparent before:via-white/25 before:to-transparent'
          }
          after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-r 
          after:from-black/20 after:via-transparent after:to-black/20 
          hover:after:from-black/10 hover:after:to-black/10
          after:transition-all after:duration-500 after:pointer-events-none`}>
            
            {/* Fading top border ok done */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-t-2xl z-10"></div>
            
            {/* Fading bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-b-2xl z-10"></div>
          
            {/* Desktop Navigation */}
            <div className="flex items-center justify-center w-full gap-2 relative z-20">
              {navItems.map((item, index) => (
                <NavLink 
                  key={item.href} 
                  href={item.href} 
                  label={item.label} 
                  index={index}
                />
              ))}
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile/Tablet Hamburger Button - Minimal design */}
      <div className="lg:hidden fixed top-6 right-6 z-[100] animate-fade-in">
        <button
          onClick={toggleMobileMenu}
          className="relative w-10 h-10 flex flex-col justify-center items-center space-y-1.5 transition-all duration-300 transform hover:scale-110 bg-white/10 backdrop-blur-lg rounded-full border border-white/20"
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}></span>
        </button>
      </div>

      {/* Full Screen Mobile Menu */}
      <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ease-out ${
        isMobileMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}>
        {/* Glassmorphism Background */}
        <div className={`absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-black/40 backdrop-blur-2xl transition-all duration-500 ${
          isMobileMenuOpen ? 'scale-100' : 'scale-110'
        }`}></div>
        
        {/* Menu Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-8">
          {/* Close Button */}
          <button
            onClick={toggleMobileMenu}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-white hover:text-blue-300 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-6">
            {navItems.map((item, index) => (
              <NavLink 
                key={item.href} 
                href={item.href} 
                label={item.label} 
                onClick={closeMobileMenu}
                index={index}
                isMobile={true}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
