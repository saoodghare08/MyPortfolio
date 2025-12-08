import React from 'react';
import data from './assets/data.json';
import images from './utils/imageMapper';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Project() {
  const { projects } = data;

  return (
    <div className="bg-surface relative pb-20">

      {/* UNIFIED VIEW: Vertical Sticky Stack */}
      <section className="min-h-screen">
        <div className="container mx-auto px-6 pt-20 mb-10 md:mb-20">
          <h2 className="text-5xl md:text-8xl font-display font-black text-text mb-4">
            FEATURED <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">WORK</span>
          </h2>
          <p className="text-lg md:text-xl text-muted max-w-xl">
            A collection of projects exploring performance, interaction, and design.
            Scroll down to explore the stack.
          </p>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative pb-[50vh]">
          {projects.map((project, index) => (
            <StickyCard key={index} project={project} index={index} total={projects.length} />
          ))}

          {/* GitHub CTA Card - The Final Card in the Stack */}
          <div
            className="sticky w-full mb-20 group z-50 flex items-center justify-center p-4 md:p-8"
            style={{ top: `${150 + projects.length * 20}px` }}
          >
            <div className="relative w-full max-w-4xl h-[40vh] md:h-[50vh] bg-gradient-to-br from-primary to-secondary rounded-[2rem] md:rounded-[3rem] shadow-2xl flex flex-col items-center justify-center text-center p-8 border border-white/20 overflow-hidden">
              {/* Background Decor */}
              <FaGithub className="absolute text-[20rem] text-white/10 -bottom-20 -right-20 rotate-12" />

              <h3 className="text-3xl md:text-6xl font-display font-black text-white mb-6 relative z-10">
                More on GitHub
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-md relative z-10">
                Check out my repositories for experimental code, tweaks, and open source contributions.
              </p>
              <a
                href="https://github.com/saoodghare08"
                target="_blank"
                rel="noreferrer"
                className="px-10 py-4 bg-white text-primary font-bold text-xl uppercase tracking-widest rounded-full hover:scale-105 hover:shadow-xl transition-transform relative z-10"
              >
                View Profile
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

const StickyCard = ({ project, index }) => {
  // Mobile tends to have less vertical space, so we use a tighter packing.
  // Base offset 100px (header room) + index * 20px (stacking)
  // Using 'calc' or conditional logic isn't strictly necessary if we pick a safe middle ground.
  const topOffset = 120 + index * 20;

  return (
    <div
      className="sticky w-full mb-12 md:mb-20 group"
      style={{ top: `${topOffset}px`, zIndex: index + 1 }}
    >
      <div className="relative h-[60vh] md:h-[80vh] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-background shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.5)] transition-transform duration-500 hover:scale-[1.02] origin-top">

        {/* Split Layout: Image & Text */}
        <div className="flex flex-col-reverse lg:flex-row h-full">

          {/* Content Side */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-surface/95 backdrop-blur-md relative z-10 h-1/2 lg:h-full">
            <div className="overflow-y-auto no-scrollbar">
              <span className="text-6xl md:text-9xl font-black text-text/5 absolute top-4 left-4 -z-10 select-none">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-3xl md:text-5xl font-display font-black text-text mb-2 md:mb-6 mt-2 md:mt-10 leading-tight">
                {project.title}
              </h3>
              <p className="text-sm md:text-xl text-muted leading-relaxed mb-4 md:mb-8 line-clamp-4 md:line-clamp-none">
                {project.description}
              </p>
              <div className="hidden md:flex gap-2 mb-8">
                <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-muted">React</span>
                <span className="px-3 py-1 border border-white/10 rounded-full text-xs text-muted">Tailwind</span>
              </div>
            </div>

            <div className="flex gap-4 mt-4 lg:mt-0">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full lg:w-auto flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-primary text-white font-bold uppercase tracking-wider rounded-full hover:bg-secondary transition-all hover:scale-105 shadow-lg shadow-primary/20 text-sm md:text-base"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="lg:w-1/2 relative overflow-hidden h-1/2 lg:h-full group-hover:cursor-pointer">
            <img
              src={images[project.imageKey]}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 lg:grayscale lg:group-hover:grayscale-0"
            />
            {/* Gradient overlay for mobile readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-surface/50 to-transparent lg:hidden" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;
