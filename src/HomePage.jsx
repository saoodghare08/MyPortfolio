import React, { useState, useEffect } from 'react';
import FarewellImage from './assets/Farewell.jpg';
import IntroScreen from './IntroScreen';
import CV from './assets/SaoodGhare_CV.pdf'


function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if the intro has been shown before
    const introShown = localStorage.getItem('introShown');
    if (introShown) {
      setShowIntro(false);
    }
  }, []);

  const handleAnimationEnd = () => {
    // Set flag in localStorage to indicate the intro has been shown
    localStorage.setItem('introShown', 'true');
    setShowIntro(false);
  };

  return (
    <div>
      {showIntro ? (
        <IntroScreen onAnimationEnd={handleAnimationEnd} />
      ) : (
        <section className="flex flex-col justify-center min-h-screen items-center p-16 text-center bg-background">
          <div className="relative">
            <img
              src={FarewellImage}
              alt="Saood Ghare, Java Full Stack Developer"
              className="rounded-full h-80 w-72 mb-6 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            />
          </div>
          <h1 className="text-2xl font-semibold text-text m-0 p-0">Hi, my name is</h1>
          <h2 className="text-5xl text-text m-0 p-0 font-bold">Saood Ghare</h2>
          <h3 className="text-4xl text-gray-400 m-0 p-0">a Java Full Stack Developer</h3>
          <a href={CV} target="_blank" rel="noopener noreferrer" aria-label="Check out my CV">
          <button
            className="pdf-button mt-6 bg-text text-background py-2 px-4 rounded-lg 
            hover:bg-[#14253D] hover:text-[#00FFFF] transition duration-300 ease-in-out"
            aria-label="Check out my CV"
          >
            Check out my CV!
          </button>
          </a>
        </section>
      )}
    </div>
  );
}

export default HomePage;
