import React from 'react';
import Header from './components/home/Header';
import Hero from './components/home/Hero';
import Projects from './components/home/Projects';
import Skills from './components/home/Skills';
import About from './components/home/About';
import Contact from './components/home/Contact';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </>
  );
}

export default Home;
