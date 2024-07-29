import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine the header text based on the current route
  const getHeaderText = () => {
    switch (location.pathname) {
      case "/MyPortfolio/":
        return "Home";
      case "/MyPortfolio/about":
        return "About Me";
      case "/MyPortfolio/projects":
        return "Projects";
      case '/MyPortfolio/contact':
        return 'Get in Touch';
      default:
        return "My Website";
    }
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <div className="bg-background fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="flex justify-between items-center text-text mx-10 py-3 relative">
        <h1 className="text-3xl font-bold">{getHeaderText()}</h1>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`absolute top-full right-0 w-1/2 bg-background shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-y-0 block pop-out" : "-translate-y-full pop-in"
          } lg:static lg:transform-none lg:flex lg:space-x-4 lg:w-auto lg:shadow-none`}
        >
          <li>
            <a
              href="/MyPortfolio/"
              className={`block px-3 py-2 ${
                isActiveLink("/") ? "text-white" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/MyPortfolio/about"
              className={`block px-3 py-2 ${
                isActiveLink("/about") ? "text-red-700" : ""
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/MyPortfolio/projects"
              className={`block px-3 py-2 ${
                isActiveLink("/projects") ? "text-white" : ""
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/MyPortfolio/contact"
              className={`block px-3 py-2 ${
                isActiveLink("/contact") ? "text-white" : ""
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
