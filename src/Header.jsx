import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header>
      {/* Menu Toggle Button (Hamburger / Close) */}
      <button
        onClick={toggleMenu}
        className="nv_menu-btn"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Fullscreen Circular Reveal Wrapper */}
      <div className={`nv_wrapper ${isOpen ? "active" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={700}
                onClick={closeMenu}
                className="cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Add a Theme Switcher hint or specialized link if needed, 
              but standard links are cleaner as per design req. */}
        </ul>
      </div>

      {/* Brand Logo - Optional: Keep it visible or hide it? 
          User's code didn't show a logo, but usually a site needs one. 
          I'll add a fixed logo in top-left to maintain brand identity. 
      */}
      {!isOpen && (
        <div className="fixed top-5 left-6 z-50">
          <Link
            to="home"
            smooth={true}
            className="text-2xl font-bold font-display tracking-wider text-text cursor-pointer drop-shadow-md"
          >
            SG<span className="text-primary">.</span>
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
