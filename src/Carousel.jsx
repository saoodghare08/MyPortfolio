import React, { useState } from 'react';
import image1 from './assets/GOA.jpg';
import image2 from './assets/Farewell.jpg';
import image3 from './assets/abc.jpg';

const images = [
  { src: image1, alt: 'Image 1' },
  { src: image2, alt: 'Image 2' },
  { src: image3, alt: 'Image 3' },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full lg:w-2/3 mb-6 lg:mb-0 flex justify-evenly overflow-hidden max-w-4xl mx-auto">
      {/* Previous Slide Button */}
      <button
        className="z-10 absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-gray-700"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      
      {/* Carousel Images */}
      <div className="relative">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-auto max-w-sm rounded-lg shadow-xl mb-6 object-cover transition-opacity duration-500 ease-in-out"
        />
      </div>
      
      {/* Next Slide Button */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-gray-700"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#10095;
      </button>
      
      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
