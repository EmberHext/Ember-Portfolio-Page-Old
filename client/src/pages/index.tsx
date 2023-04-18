import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import BinaryRain from '@/components/BinaryRain';
import Modal from '@/components/Modal';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    const response = await fetch('https://dev.to/api/articles?username=emberhext');
    const data = await response.json();
    setArticles(data);
  };

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Navbar onButtonClick={handleModal} />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <BinaryRain />
      {isModalOpen && <Modal onClose={handleModal} articles={articles} isOpen={isModalOpen} />}    </>
  );
}
