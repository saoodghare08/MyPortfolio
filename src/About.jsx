import React from "react";
import { motion } from "framer-motion";
import data from "./assets/data.json";
import { FaCode, FaLaptopCode, FaCoffee, FaProjectDiagram } from "react-icons/fa";

function About() {
  const { profile, projects } = data;

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="min-h-screen bg-background py-20 relative overflow-hidden flex items-center">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-16 text-center"
        >
          ABOUT ME
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 h-auto md:h-[800px]">

          {/* Main Bio Card - Large */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-surface/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl flex flex-col justify-center gap-6"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-primary/20 rounded-full text-primary">
                <FaLaptopCode size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text">Who I Am</h3>
            </div>
            {profile.intro.map((paragraph, index) => (
              <p key={index} className="text-lg text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
            <div className="p-4 bg-background/50 rounded-xl border-l-4 border-accent mt-4">
              <p className="text-text italic">"Passionate about creating digital experiences that bridge the gap between aesthetics and functionality."</p>
            </div>
          </motion.div>

          {/* Stats Card - Tall */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between"
          >
            <div>
              <FaProjectDiagram size={40} className="mb-4 opacity-80" />
              <h3 className="text-4xl font-black mb-1">{projects.length}+</h3>
              <p className="font-medium opacity-90">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-black mb-1">3+</h3>
              <p className="font-medium opacity-90">Years of Experience</p>
            </div>
            <div>
              <FaCoffee size={32} className="mb-2 opacity-80" />
              <h3 className="text-xl font-bold">Infinite</h3>
              <p className="font-medium opacity-90">Coffee Consumed</p>
            </div>
          </motion.div>

          {/* Skills Card - Wide/Remaining */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 bg-surface/50 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl overflow-hidden relative group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-secondary/20 rounded-full text-secondary">
                <FaCode size={24} />
              </div>
              <h3 className="text-2xl font-bold text-text">Tech Stack</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-text hover:bg-primary hover:text-white hover:border-primary transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
