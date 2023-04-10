import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="w-screen h-screen bg-black bg-opacity-75 text-white flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
        <div className="text-center md:text-left bg-black text-white border-2 border-red-500 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p>
            I'm a full-stack web developer and app developer. In addition to programming, I have a passion for
            cybersecurity, tinkering and hacking, physical security, and philosophy. I'm working on my own
            indie Unreal Engine game as a hobby.
          </p>
        </div>
        <div className="w-full md:w-auto flex flex-wrap bg-black text-white border-2 border-red-500 rounded-lg p-8 justify-center">
          <h2 className="text-3xl font-bold mb-4">Technologies</h2>
          <div className="grid grid-cols-5 gap-1">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;