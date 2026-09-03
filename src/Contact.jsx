import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope, FaDownload, FaPaperPlane } from 'react-icons/fa';
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
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/xwlkbzad', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setStatus('sent');
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-background py-20 relative overflow-hidden">

      {/* Background Text Decoration */}
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-text opacity-5 select-none whitespace-nowrap z-0">
        LET'S TALK
      </h1>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl font-display font-black text-text mb-8">
            Start a <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">project</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted max-w-2xl mx-auto mb-16 leading-relaxed">
            {profile.contactMessage}
          </p>
        </motion.div>

        {/* Two-Column: Form + Socials */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-surface/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl flex flex-col gap-5"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-muted uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-muted uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formState.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-muted uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 bg-background/50 border border-white/10 rounded-xl text-text placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest rounded-full hover:bg-secondary hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? (
                'Sending...'
              ) : status === 'sent' ? (
                '✓ Message Sent!'
              ) : status === 'error' ? (
                '✕ Failed — Try Again'
              ) : (
                <><FaPaperPlane /> Send Message</>
              )}
            </button>
          </motion.form>

          {/* Socials + Resume */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10"
          >
            <div className="flex flex-wrap justify-center gap-8">
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
                    <MagneticButton className="w-24 h-24 md:w-28 md:h-28 bg-surface border border-white/10 rounded-full flex items-center justify-center shadow-lg hover:bg-primary transition-colors duration-300">
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-text group-hover:text-white transition-colors duration-300" />
                    </MagneticButton>
                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity font-bold text-text text-sm">
                      {social.platform}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* Download Resume Button */}
            <a
              href={`${import.meta.env.BASE_URL}SaoodGhare.pdf`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-text/20 text-text font-bold uppercase tracking-widest rounded-full hover:bg-text hover:text-background transition-all duration-300 shadow-md"
            >
              <FaDownload /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 w-full flex justify-center"
        >
          <div className="px-4 md:px-10 py-5 text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider md:tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary drop-shadow-lg select-none text-center">
            Get in touch
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
