import React, { useState, useCallback } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <header>
      <button
        onClick={toggleMenu}
        className="nv_menu-btn"
        aria-label="Toggle Navigation"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

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
        </ul>
      </div>

      {/* Logo — always mounted, fades out when menu opens to avoid remount flash */}
      <div
        className="fixed top-5 left-6 z-50 transition-opacity duration-300"
        style={{ opacity: isOpen ? 0 : 1, pointerEvents: isOpen ? "none" : "auto" }}
      >
        <Link
          to="home"
          smooth={true}
          className="text-2xl font-bold font-display tracking-wider text-text cursor-pointer drop-shadow-md"
        >
          SG<span className="text-primary">.</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
