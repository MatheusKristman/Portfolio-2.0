import React, { useRef, useMemo } from 'react';
import { CookiesProvider } from 'react-cookie';
import Header, { Context } from './components/home/Header';
import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import Skills from './components/home/Skills';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Footer from './components/home/Footer';
import Cookie from './components/home/Cookie';

function Home() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const refs = useMemo(() => ({ homeRef, projectsRef, skillsRef, aboutRef, contactRef }), []);

  return (
    <CookiesProvider>
      <Context.Provider value={refs}>
        <Cookie />
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
        <Footer />
      </Context.Provider>
    </CookiesProvider>
  );
}

export default Home;
