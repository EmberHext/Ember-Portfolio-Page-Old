import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faLinux, faRust } from '@fortawesome/free-brands-svg-icons';

const About: React.FC = () => {
  return (
    <section id="about" className="w-screen h-screen bg-black flex items-center justify-center">
      <div className="max-w-4xl text-white md:p-16 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
        <div className="w-full md:w-auto border-2 border-red-500 rounded-lg p-8 bg-gray-900">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p>
            {/* Add your short bio here */}
            I'm Ember Hext, a passionate developer specializing in web development. I have experience working
            with various technologies and enjoy creating intuitive, responsive, and performant web applications.
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-wrap items-center justify-center border-2 border-red-500 rounded-lg p-8 bg-gray-900">
          <h2 className="text-3xl font-bold mb-4 w-full">Languages and Technologies</h2>
          {/* Add technology icons here */}
          <img src="https://skillicons.dev/icons?i=rust" alt="Rust" className="text-8xl m-1"  />
          <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=nextjs" alt="Next JS" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=react" alt="React" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=express" alt="Express" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=nodejs" alt="NodeJS" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=php" alt="PHP" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=vue" alt="Vue" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=solidjs" alt="Solid JS" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=docker" alt="Docker" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=linux" alt="Linux" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=svelte" alt="Svelte" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=prisma" alt="Prisma" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=actix" alt="Actix" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=haskell" alt="Haskell" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=cpp" alt="C++" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=neovim" alt="Neovim" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=vscode" alt="VSCode" className="text-8xl m-1" />
          <img src="https://skillicons.dev/icons?i=unreal" alt="Unreal" className="text-8xl m-1" />
          {/* Add more icons as needed */}
        </div>
      </div>
    </section>
  );
};

export default About;