import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import data from './assets/data.json';

const iconMap = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  Email: FaEnvelope
};

function Socials() {
  const { socials } = data;

  return (
    <div className="absolute bottom-8 left-0 w-full lg:w-auto lg:left-12 flex justify-center lg:justify-start lg:flex-col gap-6 z-20">
      {socials.map((social) => {
        const Icon = iconMap[social.platform];
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-primary transition-transform hover:scale-110 duration-300"
            aria-label={social.platform}
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
      <div className="hidden lg:block w-px h-24 bg-gray-700 mx-auto mt-4" />
    </div>
  );
}

export default Socials;
