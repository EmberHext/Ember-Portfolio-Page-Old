import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero: React.FC = () => {
  return (
    <section className="w-screen h-screen bg-black bg-opacity-75 flex flex-col items-center justify-center">
      <div className="text-white text-8xl font-bold">
        <span>Hiya, I'm </span>
        <span className="text-red-500">Ember Hext</span>
      </div>
      <div className="text-white text-5xl font-semibold mt-4">Developer</div>
      <div className="flex space-x-4 mt-4">
        <a
          href="https://twitter.com/emberhext"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-red-600"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a
          href="https://github.com/emberhext"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-red-600"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </section>
  );
};

export default Hero;