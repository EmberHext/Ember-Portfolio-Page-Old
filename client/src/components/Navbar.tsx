  import React, { useState, useEffect } from 'react';
  import Link from 'next/link';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faTwitter } from '@fortawesome/free-brands-svg-icons';

  const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const heroHeight = window.innerHeight;
        const currentScrollPosition = window.scrollY;

        if (currentScrollPosition >= heroHeight && !isVisible) {
          setIsVisible(true);
        } else if (currentScrollPosition < heroHeight && isVisible) {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isVisible]);

    const [activeLink, setActiveLink] = useState('');

    useEffect(() => {
      const links = document.querySelectorAll('[data-scroll]');

      const handleScroll = () => {
        let minDistance = Number.MAX_VALUE;
        let closestLinkId: string | null = null;
      
        links.forEach((link) => {
          const targetSection = document.querySelector(link.getAttribute('href') as string);
          if (targetSection) {
            const distanceFromTop = Math.abs(targetSection.getBoundingClientRect().top);
            if (distanceFromTop < minDistance) {
              minDistance = distanceFromTop;
              closestLinkId = link.getAttribute('data-scroll');
            }
          }
        });
      
        if (closestLinkId) {
          setActiveLink(closestLinkId);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
      <header
        className={`fixed top-0 w-full bg-black z-50 shadow-md transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-bold">
            <span className="text-white hover:text-red-500 font-fira">        
              <Link scroll={false} href="/#hero" className={`cursor-pointer text-white hover:text-red-500 ${activeLink === 'about' ? 'text-red-500' : ''}`}>
                Ember Hext
              </Link>
            </span>
          </div>
          <div className="flex items-center space-x-4">
          <Link scroll={false} href="/#about" className={`cursor-pointer text-white hover:text-red-500 ${activeLink === 'about' ? 'text-red-500' : ''}`}>
            About
          </Link>
          <Link scroll={false} href="/#portfolio" className={`cursor-pointer text-white hover:text-red-500 ${activeLink === 'portfolio' ? 'text-red-500' : ''}`}>
            Portfolio
          </Link>
          <Link scroll={false} href="/#contact" className={`cursor-pointer text-white hover:text-red-500 ${activeLink === 'contact' ? 'text-red-500' : ''}`}>
            Contact
          </Link>
            <a
              href="https://twitter.com/emberhext"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </nav>
      </header>
    );
  };

  export default Navbar;