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
    <section id="portfolio" className="w-screen h-screen bg-black bg-opacity-75 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div>
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li
                key={project.id}
                onMouseEnter={() => handleProjectHover(project.img)}
                onClick={() => handleProjectHover(project.img)}
                className="cursor-pointer"
              >
                <span className="block px-4 py-2 bg-white hover:bg-black font-bold hover:text-red-500 text-black rounded-md">{project.title}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={currentImage} alt="Project preview" className="w-full h-auto max-w-md max-h-64 mx-auto rounded-md" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;