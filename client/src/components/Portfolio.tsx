import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Project 1', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
  { id: 2, title: 'Project 2', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80' },
];

const Portfolio: React.FC = () => {
    const [currentImage, setCurrentImage] = useState(projects[0].img);
  
    const handleProjectHover = (img: string) => {
      setCurrentImage(img);
    };
  
    return (
      <section id="portfolio" className="w-screen h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 p-4 md:p-8 flex justify-center">
          <div className="w-full md:max-w-md border-red-500 bg-gray-900 border-2 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
            <ul className="space-y-4">
              {projects.map((project) => (
                <li
                  key={project.id}
                  onMouseEnter={() => handleProjectHover(project.img)}
                  onTouchStart={() => handleProjectHover(project.img)}
                  className="cursor-pointer hover:text-red-500"
                >
                  <span className="block px-4 py-2 bg-red-500 hover:bg-white hover:text-black rounded-md">{project.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <div className="w-full md:max-w-md md:mx-8">
            <img src={currentImage} alt="Project preview" className="w-full h-auto md:max-w-md md:max-h-64 mx-auto rounded-md" />
          </div>
        </div>
      </section>
    );
  };
  
  export default Portfolio;