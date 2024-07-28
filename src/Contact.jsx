import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <section className="bg-background min-h-screen p-8 lg:p-16 text-text flex flex-col justify-center items-center">
        <div className="text-center mb-12 lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg lg:text-xl">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Connect with me on my social platforms or drop me an email.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <a
            href="https://www.linkedin.com/in/saood-ghare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-gray-300 hover:text-text transition"
          >
            <FaLinkedin className="text-4xl lg:text-5xl" style={{ color: '#0077b5' }} />
            <span className="text-lg lg:text-xl">LinkedIn</span>
          </a>
          <a
            href="https://github.com/saoodghare08"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-gray-300 hover:text-text transition"
          >
            <FaGithub className="text-4xl lg:text-5xl" style={{ color: '#333' }} />
            <span className="text-lg lg:text-xl">GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/saood.ghare/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-gray-300 hover:text-text transition"
          >
            <FaInstagram className="text-4xl lg:text-5xl" style={{ color: '#E1306C' }} />
            <span className="text-lg lg:text-xl">Instagram</span>
          </a>
          <a
            href="mailto:saoodghare0809@gmail.com"
            className="flex flex-col items-center space-y-2 text-gray-300 hover:text-text transition"
          >
            <FaEnvelope className="text-4xl lg:text-5xl" style={{ color: '#D44638' }} />
            <span className="text-lg lg:text-xl">Email</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
