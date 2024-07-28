import React, { useState } from 'react';
import { FaTimes, FaBolt, FaGithub, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';

function Socials() {
  const [isOpen, setIsOpen] = useState(false);
  const [isToggling, setIsToggling] = useState(false);

  const toggleMenu = () => {
    setIsToggling(true);
    setIsOpen(!isOpen);
    setTimeout(() => setIsToggling(false), 450); // Match this duration to the animation duration
  };

  return (
    <div className='bg-background fixed flex flex-row bottom-10 left-8 text-text'>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          {isOpen ? (
            <FaTimes className={isToggling ? 'spin-clockwise' : ''} />
          ) : (
            <FaBolt className={isToggling ? 'spin-counterclockwise' : ''} />
          )}
        </button>
      </div>
      <ul className={` flex ${isOpen ? 'slide-in' : 'slide-out'} lg:flex lg:flex-col `}>
        <li><a className='block w-8 h-8 m-2' href="https://www.linkedin.com/in/saood-ghare" aria-label="LinkedIn"><FaLinkedin className='w-8 h-8' /></a></li>
        <li><a className='block w-8 h-8 m-2' href="https://github.com/saoodghare08" aria-label="GitHub"><FaGithub className='w-8 h-8' /></a></li>
        <li><a className='block w-8 h-8 m-2' href="https://www.instagram.com/saood.ghare/" aria-label="Instagram"><FaInstagram className='w-8 h-8' /></a></li>
        <li><a className='block w-8 h-8 m-2' href="mailto:saoodghare0809@gmail.com" aria-label="Email"><FaEnvelope className='w-8 h-8' /></a></li>
      </ul>
    </div>
  );
}

export default Socials;
