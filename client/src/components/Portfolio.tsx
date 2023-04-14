import React, { useState } from 'react';

const projects = [
  { id: 1, title: 'Project 1', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus diam quam, tempor sit amet ipsum vel, congue pulvinar arcu. Suspendisse non varius dolor. Aliquam molestie elit est, nec molestie tellus auctor a.', longDescription: ' Vivamus vehicula consectetur ultrices. Quisque orci eros, molestie vel eros non, ornare lacinia est. Donec suscipit massa in erat elementum, ac molestie lectus malesuada. Aliquam vehicula lectus quis placerat hendrerit. Praesent id diam rutrum, sollicitudin lorem id, cursus nisi. Donec consectetur, felis eget placerat imperdiet, enim ipsum facilisis nibh, a vulputate elit dui quis leo. Curabitur a erat sed mauris sodales aliquam nec fermentum sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae' },
  { id: 2, title: 'Project 2', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', description: 'Vestibulum facilisis lorem suscipit egestas consectetur. Nam turpis augue, ultricies at mattis sed, blandit nec quam. Curabitur vel iaculis velit. Duis eleifend sem ut augue finibus, quis vehicula ligula tristique.', longDescription: ' Praesent non sapien sapien. Pellentesque suscipit justo eu rhoncus posuere. Morbi sollicitudin convallis sagittis. Nam ut vestibulum sem. Duis luctus efficitur nisl, non vestibulum urna placerat sit amet.' },
  { id: 3, title: 'Project 3', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', description: 'Curabitur interdum sem leo, eget varius purus vulputate quis. Maecenas blandit erat dictum, malesuada massa vitae, placerat ipsum. Mauris viverra pulvinar tincidunt.', longDescription: ' Suspendisse gravida est nulla, lacinia blandit justo imperdiet sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum justo id posuere venenatis. Duis semper dapibus orci.' },
  { id: 4, title: 'Project 4', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', description: 'Etiam iaculis arcu non egestas blandit. Suspendisse tincidunt est vel suscipit dictum. Nam et nisl a nibh fringilla egestas. Mauris ullamcorper quam id vulputate volutpat. Nullam eu enim leo.', longDescription: ' Aenean eleifend dignissim euismod. Pellentesque eget magna a purus maximus aliquam. Duis risus augue, sodales quis justo nec, ultricies convallis mauris. Etiam sed tincidunt mauris, volutpat auctor nulla. Nulla facilisi. Pellentesque ipsum nibh, tempor eget maximus eu, fermentum vel nunc. Sed imperdiet velit libero, a bibendum nibh dapibus nec. Mauris eu justo eget orci venenatis facilisis sed non justo. In hac habitasse platea dictumst. Fusce ut nibh vitae nunc scelerisque tincidunt non non nisi.' },
  { id: 5, title: 'Project 5', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80', description: 'Sed ultrices, nibh vel mollis pulvinar, orci tortor efficitur sem, non rutrum tortor metus a nisl. Nulla at rhoncus risus. Nulla molestie purus vel massa dignissim finibus.', longDescription: ' Integer eleifend nulla turpis. Fusce nisi tortor, pharetra consequat accumsan quis, maximus vel metus. Aliquam eu dolor sit amet sapien accumsan mattis eu vitae est. Fusce vitae vehicula orci. Mauris pulvinar, est ut ornare laoreet, diam elit tincidunt sem, eu efficitur ante augue sit amet justo. Etiam blandit sapien vitae dapibus sagittis. Morbi nulla ligula, tincidunt vitae ante ut, facilisis placerat massa. Pellentesque a pulvinar mauris. Proin convallis nunc fringilla nibh feugiat, ut rhoncus massa commodo. Aliquam id nunc non felis fringilla condimentum convallis mattis massa. Duis porttitor tellus facilisis, imperdiet eros quis, vestibulum dolor.' },
];

const Portfolio: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(projects[0]);

  const handleProjectHover = (project: any) => {
    setCurrentProject(project);
  };

  return (
    <section id="portfolio" className="w-screen h-screen bg-black bg-opacity-75 text-white flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-8xl flex items-center">
        <div className="col-span-2 relative z-10 flex flex-col">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <div className="text-center md:text-left bg-black relative z-10 text-white border-2 border-red-500 rounded-lg p-8 flex-grow lg:h-[600px] overflow-auto">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:p-2 md:p-4 lg:p-6 text-center">{currentProject.title}</h3>
            <p className="text-sm md:text-base lg:text-xl sm:p-2 md:p-4 lg:p-6">{currentProject.description}<span className="hidden lg:inline">{currentProject.longDescription}</span></p>
          </div>
        </div>
        <div className="col-span-2 relative z-10 flex items-center">
          <img src={currentProject.img} alt="Project preview" className="w-full h-full sm:max-w-md md:max-w-lg lg:max-w-3xl sm:max-h-64 md:max-h-96 md:max-h-144 mx-auto rounded-md flex-grow" />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-8 mt-8 grid grid-cols-3 lg:grid-cols-5 gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onMouseEnter={() => handleProjectHover(project)}
            onClick={() => handleProjectHover(project)}
            className="text-xs md:text-sm lg:text-base px-4 py-2 bg-white hover:bg-black font-bold hover:text-red-500 text-black rounded-md"
          >
            {project.title}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;