import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const About: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-black bg-opacity-75 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl md:max-w-6xl lg:max-w-7xl">
        <div className="text-center md:text-left bg-black relative z-10 text-white border-2 border-red-500 rounded-lg p-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:p-2 md:p-4 lg:p-6 text-center">About</h2>
          <p className="text-sm md:text-base lg:text-xl sm:p-2 md:p-4 lg:p-6">
            I do full-stack web development and app development using a range of TypeScript and Rust frameworks and technologies.
          </p>
          <p className="text-sm md:text-base lg:text-xl sm:p-2 md:p-4 lg:p-6">
            In addition to programming, I have a passion for cybersecurity, tinkering and hacking, physical security, and philosophy.
          </p>
          <p className="text-sm md:text-base lg:text-xl sm:p-2 md:p-4 lg:p-6">
            I'm also working on my own indie Unreal Engine game as a hobby.
          </p>
          <p className="text-sm md:text-base lg:text-xl sm:p-2 md:p-4 lg:p-6">
            My biggest strength as a programmer is knowing there's nothing I can't do; there's only things I haven't done yet.
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-wrap bg-black relative z-10 text-white border-2 border-red-500 rounded-lg p-8 justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:p-2 md:p-4 lg:p-6">Technologies</h2>
          <div className="grid grid-cols-5 gap-1 icon-container">
            <Tooltip title="TypeScript">
              <img src="https://skillicons.dev/icons?i=typescript" alt="TypeScript" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Rust">
              <img src="https://skillicons.dev/icons?i=rust" alt="Rust" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2"  />
            </Tooltip>
            <Tooltip title="Next JS">
              <img src="https://skillicons.dev/icons?i=nextjs" alt="Next JS" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="React">
              <img src="https://skillicons.dev/icons?i=react" alt="React" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Express">
              <img src="https://skillicons.dev/icons?i=express" alt="Express" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Node JS">
              <img src="https://skillicons.dev/icons?i=nodejs" alt="Node JS" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Tailwind">
              <img src="https://skillicons.dev/icons?i=tailwind" alt="Tailwind" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Vue">
              <img src="https://skillicons.dev/icons?i=vue" alt="Vue" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Solid JS">
              <img src="https://skillicons.dev/icons?i=solidjs" alt="Solid JS" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Docker">
              <img src="https://skillicons.dev/icons?i=docker" alt="Docker" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Svelte">
              <img src="https://skillicons.dev/icons?i=svelte" alt="Svelte" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Linux">
              <img src="https://skillicons.dev/icons?i=linux" alt="Linux" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Prisma">
              <img src="https://skillicons.dev/icons?i=prisma" alt="Prisma" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Actix">
              <img src="https://skillicons.dev/icons?i=actix" alt="Actix" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="PHP">
              <img src="https://skillicons.dev/icons?i=php" alt="PHP" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Haskell">
              <img src="https://skillicons.dev/icons?i=haskell" alt="Haskell" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="C++">
              <img src="https://skillicons.dev/icons?i=cpp" alt="C++" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="NeoVim">
              <img src="https://skillicons.dev/icons?i=neovim" alt="NeoVim" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="VSCode">
              <img src="https://skillicons.dev/icons?i=vscode" alt="VSCode" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
            <Tooltip title="Unreal">
              <img src="https://skillicons.dev/icons?i=unreal" alt="Unreal" className="sm:w-8 md:w-16 lg:w-24 sm:m-1 lg:m-2" />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;