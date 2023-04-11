import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import BinaryRain from '@/components/BinaryRain';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
        <>
          <Navbar />
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
        </>
  );
}
