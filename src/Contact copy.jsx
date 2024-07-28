import React from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <div>
      <section className="bg-background min-h-screen p-8 lg:p-16 text-text flex flex-col justify-center items-center">
        <form className="bg-cardBg p-6 lg:p-8 rounded-md shadow-md w-full max-w-md" >
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 bg-background rounded-md border border-gray-700 focus:outline-none focus:border-text"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-3 bg-background rounded-md border border-gray-700 focus:outline-none focus:border-text"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-3 bg-background rounded-md border border-gray-700 focus:outline-none focus:border-text"
              rows="2"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-text text-background py-2 px-4 rounded-md hover:bg-[#14253D] hover:text-[#00FFFF] transition duration-300 ease-in-out"
          >
            Send Message
          </button>
        </form>

        <div className="grid grid-cols-2 gap-4 lg:gap-8 mt-8 w-full lg:w-1/2 justify-items-center">
          <a
            href="https://www.linkedin.com/in/saood-ghare"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-text transition"
          >
            <FaLinkedin className="text-2xl" />
            <span className="text-lg">LinkedIn</span>
          </a>
          <a
            href="https://github.com/saoodghare08"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-text transition"
          >
            <FaGithub className="text-2xl" />
            <span className="text-lg">GitHub</span>
          </a>
          <a
            href="https://www.instagram.com/saood.ghare/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-300 hover:text-text transition"
          >
            <FaInstagram className="text-2xl" />
            <span className="text-lg">Instagram</span>
          </a>
          <a
            href="mailto:saoodghare0809@gmail.com"
            className="flex items-center space-x-2 text-gray-300 hover:text-text transition"
          >
            <FaEnvelope className="text-2xl" />
            <span className="text-lg">Gmail</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Contact;
