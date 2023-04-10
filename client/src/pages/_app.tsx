import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';

export default function App({ Component, pageProps }: AppProps) {
  return ( 
        <>
          <Navbar />
          <Hero />
          <About />
          <Portfolio />
          <ContactForm />
        </>
  );
}
