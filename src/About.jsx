import React from "react";
import Carousel from "./Carousel";

function About() {
  return (
    <div className="bg-background min-h-screen p-16 text-text">
      <section className="flex flex-col lg:flex-row items-start lg:items-center lg:px-10 lg:pt-5">
        <div className="relative w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-evenly">
          <Carousel/>
        </div>
        <div className="text-lg text-justify leading-relaxed lg:w-1/2">
          <p className="mb-3">
            Hello! I am Saood Ghare, a Mechanical Engineer turned Full Stack
            Developer. I am currently enhancing my skills in Java Full Stack
            development at QSpider's Vashi.
          </p>
          <p className="mb-3">
            I enjoy creating things that live on the internet. You'll often find
            me diving deep into open-source projects, fueled by my passion for
            collaboration and making tech accessible to everyone.
          </p>
          <p className="mb-3">
            Whether I'm coding up a storm or brainstorming the next big thing,
            I'm always excited to connect with fellow enthusiasts and make magic
            happen. Let's build something cool together!
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-1 text-text">Technologies I’ve Worked With</h2>
          <ul className="list-disc list-inside pl-5">
            <li>Java</li>
            <li>Adv. Java</li>
            <li>HTML, CSS & JavaScript</li>
            <li>ReactJS</li>
            <li>Node.js</li>
            <li>SQL & NoSQL Databases</li>
            <li>C/C++</li>
            <li>Python</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
