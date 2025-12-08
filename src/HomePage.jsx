import React, { useRef } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import data from "./assets/data.json";
import images from "./utils/imageMapper";

function HomePage() {
  const { profile } = data;
  const ref = useRef(null);

  // Parallax Scroll Hooks
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse Move Tilt Effect Setup
  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = (y / height - 0.5) * 20; // Max 20deg rotation
    const rotateY = (x / width - 0.5) * -20;

    currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated Background Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-6 z-10 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Parallax Text Content */}
        <motion.div
          style={{ y: textY, opacity }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary text-lg font-bold uppercase tracking-[0.2em] mb-4"
          >
            {profile.role}
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-6xl lg:text-9xl font-display font-black text-text mb-6 leading-[0.9] tracking-tight"
          >
            HELLO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
              I'M {profile.name.split(' ')[0].toUpperCase()}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl text-muted mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light"
          >
            {profile.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link
              to="projects"
              smooth={true}
              duration={800}
              offset={-50}
              className="px-8 py-4 bg-text text-background font-bold uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 cursor-pointer text-center"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="px-8 py-4 border border-text/30 text-text font-bold uppercase tracking-widest rounded-full hover:bg-text hover:text-background transition-all duration-300 cursor-pointer text-center"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* 3D Tilt Image Card */}
        <motion.div
          style={{ y: imageY, opacity }}
          className="lg:w-1/2 flex justify-center lg:justify-end perspective-[1000px]"
        >
          <div
            className="relative w-80 h-80 lg:w-[600px] lg:h-[600px] transition-transform duration-100 ease-out cursor-pointer group"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] transform rotate-6 opacity-30 group-hover:rotate-12 transition-transform duration-500 blur-2xl" />
            <div className="absolute inset-0 border-2 border-white/20 bg-surface/10 backdrop-blur-sm rounded-[2rem] overflow-hidden shadow-2xl z-10 transition-all duration-300 group-hover:shadow-primary/30">
              <img
                src={images.Farewell}
                alt={profile.name}
                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 text-white z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="font-bold text-xl">Based in Dubai</p>
                <p className="text-sm text-gray-300">Available for freelance</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
