import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

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
          <h2 className="text-3xl font-bold mb-4 w-full">Technologies</h2>
          {/* Add technology icons here */}
          <FontAwesomeIcon icon={faHtml5} className="text-4xl m-2" />
          <FontAwesomeIcon icon={faCss3} className="text-4xl m-2" />
          <FontAwesomeIcon icon={faJs} className="text-4xl m-2" />
          <FontAwesomeIcon icon={faReact} className="text-4xl m-2" />
          {/* Add more icons as needed */}
        </div>
      </div>
    </section>
  );
};

export default About;