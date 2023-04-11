import React, { useRef, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Hero.module.css';

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

  const typeWriter = useCallback(() => {
    const words = ['Full Stack', 'App', 'CLI'];
    let wordIndex = 0;
    let isDeleting = false;
    let txt = '';
  
    const typingEffect = () => {
      const currentWord = words[wordIndex % words.length];
      txt = isDeleting ? currentWord.substring(0, txt.length - 1) : currentWord.substring(0, txt.length + 1);
  
      const typingElement = document.querySelector('.typing-effect');
      if (typingElement) typingElement.textContent = txt;
  
      let typingSpeed = 150 - Math.random() * 100;
  
      if (isDeleting) typingSpeed /= 2;
  
      if (!isDeleting && txt === currentWord) {
        typingSpeed = 1600;
        isDeleting = true;
      } else if (isDeleting && txt === '') {
        isDeleting = false;
        wordIndex++;
        typingSpeed = 600;
      }
  
      setTimeout(() => typingEffect(), typingSpeed);
    };
  
    typingEffect();
  }, []);

  useEffect(() => {
    typeWriter();
  }, [typeWriter]);

  return (
    <div className="w-screen h-screen bg-black bg-opacity-75 flex flex-col items-center justify-center">
      <div className="text-white text-5xl md:text-8xl font-bold text-center md:text-left relative z-10">
        <span className="text-4xl md:text-6xl lg:text-8xl">Hiya, I'm </span>
        <h1 ref={nameRef} className={`text-red-500 px-1 inline font-fira ${styles.magic}`} data-value="Ember Hext">
          Ember Hext
        </h1>
      </div>
      <div className="text-white text-3xl md:text-5xl font-semibold mt-4 relative z-10">
        <span className="typing-effect"></span>
        <span className={styles['text-cursor']}></span>
        <span> Developer</span>
      </div>
      <div className="flex space-x-2 md:space-x-4 mt-2 md:mt-4 relative z-10 text-2xl">
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
    </div>
  );
};

export default Hero;