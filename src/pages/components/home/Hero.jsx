import React, { useContext } from 'react';

import heroDots from '../../../images/home-dots.svg';
import avatar from '../../../images/avatar.svg';
import homeScroll from '../../../images/home-scroll.svg';

import { Context } from './Header';

function Hero() {
  const { homeRef, contactRef } = useContext(Context);

  function scrollToElement(ref) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  }

  return (
    <main ref={homeRef} className="hero wrapper">
      <div className="hero__container">
        <div className="hero-content">
          <div className="hero-info">
            <img className="hero-info__dots" src={heroDots} alt="Pontos" />

            <h1 className="hero-info__title">CONSTRUINDO SONHOS COM O MEU CÓDIGO</h1>
            <p className="hero-info__desc">
              Eai! Meu nome é <strong>Matheus Kristman</strong> e sou Desenvolvedor Web <strong>Front-end</strong>. Eu ajudo empresas, pequenos
              negócios e designers a trazerem suas ideias a vida e conquistarem o seu espaço na internet.
            </p>
            <div className="hero-info__btn-container">
              <button type="button" className="work-btn">
                Conheça Meu Trabalho
              </button>
              <button type="button" onClick={() => scrollToElement(contactRef)} className="hero-contact-btn">
                Fale Comigo
              </button>
            </div>
          </div>

          <div className="hero-image">
            <img className="image" src={avatar} alt="Matheus" />

            <div className="hero-socials">
              <div className="socials-line" />
              <a className="linkedin" href="https://www.linkedin.com/in/matheus-kristman-07a947171/" target="_blank" rel="noreferrer noopener">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a className="instagram" href="https://www.instagram.com/tinzin.exe/" target="_blank" rel="noreferrer noopener">
                <i className="fa-brands fa-instagram" />
              </a>
              <a className="github" href="https://github.com/MatheusKristman" target="_blank" rel="noreferrer noopener">
                <i className="fa-brands fa-github" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <img src={homeScroll} alt="Tem mais" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
