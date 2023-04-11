import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Project 1', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', visibleOnLarge: false, },
  { id: 2, title: 'Project 2', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', visibleOnLarge: false, },
];


const Portfolio: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(projects[0].img);

  const handleProjectHover = (img: string) => {
    setCurrentImage(img);
  };

  return (
    <section id="portfolio" className="w-screen h-screen bg-black bg-opacity-75 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl">
        <div className="col-span-2">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <li
              key={project.id}
              onMouseEnter={() => handleProjectHover(project.img)}
              onClick={() => handleProjectHover(project.img)}
              className={`cursor-pointer${project.visibleOnLarge ? ' hidden lg:block' : ''}`}
            >
              <span className="block px-4 py-2 bg-white hover:bg-black font-bold hover:text-red-500 text-black rounded-md">{project.title}</span>
            </li>
          ))}
          </ul>
        </div>
        <div className="col-span-2">
          <img src={currentImage} alt="Project preview" className="w-full h-auto sm:max-w-md md:max-w-lg lg:max-w-2xl sm:max-h-64 md:max-h-96 lg:max-h-128 mx-auto rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;