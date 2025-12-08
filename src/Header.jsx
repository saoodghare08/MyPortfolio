import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-surface/90 backdrop-blur-md border-b border-white/10 shadow-sm" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 h-16 flex justify-between items-center">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="text-2xl font-bold font-display tracking-wider text-text cursor-pointer"
        >
          SG<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-70}
              className="text-sm uppercase tracking-widest hover:text-primary transition-colors duration-300 text-muted cursor-pointer"
              activeClass="!text-primary font-bold"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button onClick={toggleMenu} className="lg:hidden text-2xl text-text">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-surface/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${isOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            smooth={true}
            duration={500}
            onClick={toggleMenu}
            className="text-2xl font-display font-bold uppercase tracking-widest text-gray-400 hover:text-primary transition-colors cursor-pointer"
            activeClass="!text-primary"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Header;
