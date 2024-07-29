import React, { useState } from 'react';
import TDC from './assets/TDC.png';
import Spotify from './assets/Spotify.png';
import Todos from './assets/Todos.png';
import Movie from './assets/MovieApp.png';

const projects = [
  {
    image: TDC,
    title: 'The Diet Cascade',
    link:'https://thedietcascade.com/',
    description: 'The Diet Cascade is a comprehensive online platform dedicated to promoting healthy eating and lifestyle choices. A sleek website designed for a dietitian! Made with Basic Web technologies. A robust and user-friendly platform that supports individuals in making healthier lifestyle choices.',
  },
  {
    image: Spotify,
    title: 'Spotify-clone',
    link: 'https://saoodghare08.github.io/Spotify-clone/',
    description: 'This project involves creating a Spotify-like music player using React. The application will allow users to pick songs from a local directory and play them through a user-friendly interface. The core functionalities will include play/pause buttons, a seek bar, navigation buttons, etc. Additionally, the play button will appear on hover over the song items. Visit GitHub for source code.',
  },
  {
    image: Movie,
    title: 'Movie App',
    link:'https://saoodghare08.github.io/Movie_App/',
    description: 'Latest Movie Review App. This JavaScript project utilizes The Movie Database (TMDb) API to create a dynamic webpage for browsing and searching movies. Users can explore a curated collection of movies, each featuring a poster, title, rating, and overview. The webpage includes a search function allowing users to find specific movies by title or keyword.',
  },
  {
    image: Todos,
    title: 'Todo List',
    link: 'https://saoodghare08.github.io/ToDo-List/',
    description: 'To-Do List. This JavaScript project enables users to manage a list of todos with a simple and intuitive interface. Users can add new todos through a form and mark them as completed by clicking on them. The todos are stored locally using localStorage, ensuring persistence across page reloads. Additionally, users can remove todos by right-clicking on them. The project enhances productivity by providing a streamlined way to organize and track tasks.',
  },
];

function Project() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  const getProjectClass = (index) => {
    if (index === currentIndex) return 'scale-100 z-10';
    if (index === (currentIndex - 1 + projects.length) % projects.length) return 'scale-75 -translate-x-24 lg:-translate-x-64 z-0';
    if (index === (currentIndex + 1) % projects.length) return 'scale-75 translate-x-24 lg:translate-x-64 z-0';
    return 'hidden';
  };

  return (
    <div className="relative bg-background min-h-screen px-16 flex justify-center items-center overflow-hidden">
      <button 
        className="absolute left-5 lg:left-48 p-4 bg-gray-600 text-white  rounded-full hover:bg-gray-800 transition z-20" 
        onClick={prevSlide}
      >
        &larr;
      </button>
      <div className="relative w-full flex justify-center items-center">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`absolute transition-transform duration-500 ease-in-out transform ${getProjectClass(index)} max-w-md mx-auto bg-cardBg shadow-md rounded-md text-center`}
          >
            <img src={project.image} alt={project.title} className="p-3 rounded-md w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-4xl text-gray-300">{project.title}</h2>
              <p className="text-gray-400">{project.description}</p>
              <p className="text-gray-400">Click <a className='text-text' href={project.link}>here</a> to check it out!</p>
            </div>
          </div>
        ))}
      </div>
      <button 
        className="absolute right-5 lg:right-48 p-4 bg-gray-600 text-white rounded-full hover:bg-gray-800 transition z-20" 
        onClick={nextSlide}
      >
        &rarr;
      </button>
    </div>
  );
}

export default Project;
