import React, { useEffect } from 'react';

function IntroScreen({ onAnimationEnd }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onAnimationEnd();
    }, 1500); // Duration of the intro screen

    return () => clearTimeout(timer);
  }, [onAnimationEnd]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <h1 className="text-4xl text-text animate-fade-in-out">Welcome to Saood Ghare's Portfolio</h1>
    </div>
  );
}

export default IntroScreen;
