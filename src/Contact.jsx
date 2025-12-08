import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import data from './assets/data.json';
import MagneticButton from './components/MagneticButton';

const iconMap = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
  Instagram: FaInstagram,
  Email: FaEnvelope
};

function Contact() {
  const { profile, socials } = data;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background py-20 relative overflow-hidden">

      {/* Background Text Decoration */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-text opacity-5 select-none whitespace-nowrap z-0">
        LET'S TALK
      </h1>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl md:text-8xl font-display font-black text-text mb-8">
            Start a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">project</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-16 leading-relaxed">
            {profile.contactMessage}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {socials.map((social) => {
            const Icon = iconMap[social.platform];
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="group relative"
              >
                <MagneticButton className="w-24 h-24 md:w-32 md:h-32 bg-surface border border-white/10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors duration-300">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-text group-hover:text-white transition-colors duration-300" />
                </MagneticButton>
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-text">
                  {social.platform}
                </span>
              </a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24"
        >
          <MagneticButton className="px-10 py-5 bg-text text-background text-xl font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
            Get in touch
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
