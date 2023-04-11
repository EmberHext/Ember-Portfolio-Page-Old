import React, { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Hero: React.FC = () => {
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let interval: number | null = null;

    const handleMouseOver = (event: MouseEvent) => {
      let iteration = 0;
      const target = event.target as HTMLElement;

      clearInterval(interval as number);

      interval = window.setInterval(() => {
        target.innerText = target.innerText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return target.dataset.value![index];
            }

            return letters[Math.floor(Math.random() * 52)];
          })
          .join('');

        if (iteration >= target.dataset.value!.length) {
          clearInterval(interval! as number);
        }

        iteration += 1 / 3;
      }, 30);
    };

    if (nameRef.current) {
      nameRef.current.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      if (nameRef.current) {
        nameRef.current.removeEventListener('mouseover', handleMouseOver);
      }
      clearInterval(interval! as number);
    };
  }, []);



  return (
    <section className="w-screen h-screen bg-black bg-opacity-75 flex flex-col items-center justify-center">
      <div className="text-white text-8xl font-bold text-center md:text-left">
        <span className="text-6xl md:text-8xl">Hiya, I'm </span>
        <h1 ref={nameRef} className='text-red-500 px-1 inline font-fira' data-value="Ember Hext">
          Ember Hext
        </h1>
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