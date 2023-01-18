import React, { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import heroDots from '../../../images/home-dots.svg';
import avatar from '../../../images/avatar.svg';
import homeScroll from '../../../images/home-scroll.svg';

import { Context } from './Header';

function Hero() {
  const { homeRef, contactRef, projectsRef } = useContext(Context);

  function scrollToElement(ref) {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  }

  const dotsVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: -200 },
  };

  const titleVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -200 },
  };

  const textVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.4 } },
    hidden: { opacity: 0, x: -200 },
  };

  const buttonVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.9 } },
    hidden: { opacity: 0, x: -200 },
  };

  const imageVariant = {
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
    hidden: { opacity: 0, x: 200 },
  };

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    function activateOnView() {
      if (inView) {
        control.start('visible');
      }
    }

    activateOnView();
  }, [control, inView]);

  return (
    <main ref={homeRef} className="hero wrapper">
      <div ref={ref} className="hero__container">
        <div className="hero-content">
          <div className="hero-info">
            <motion.img variants={dotsVariant} initial="hidden" animate={control} className="hero-info__dots" src={heroDots} alt="Pontos" />

            <motion.h1 variants={titleVariant} initial="hidden" animate={control} className="hero-info__title">
              CONSTRUINDO SONHOS COM O MEU CÓDIGO
            </motion.h1>
            <motion.p variants={textVariant} initial="hidden" animate={control} className="hero-info__desc">
              Eai! Meu nome é <strong>Matheus Kristman</strong> e sou Desenvolvedor Web <strong>Front-end</strong>. Eu ajudo empresas, pequenos
              negócios e designers a trazerem suas ideias a vida e conquistarem o seu espaço na internet.
            </motion.p>
            <div className="hero-info__btn-container">
              <motion.button
                variants={buttonVariant}
                initial="hidden"
                animate={control}
                type="button"
                onClick={() => scrollToElement(projectsRef)}
                className="work-btn"
              >
                Conheça Meu Trabalho
              </motion.button>
              <motion.button
                variants={buttonVariant}
                initial="hidden"
                animate={control}
                type="button"
                onClick={() => scrollToElement(contactRef)}
                className="hero-contact-btn"
              >
                Fale Comigo
              </motion.button>
            </div>
          </div>

          <motion.div variants={imageVariant} initial="hidden" animate={control} className="hero-image">
            <img className="image" src={avatar} alt="Matheus" />

            <div className="hero-socials">
              <div className="socials-line" />
              <a className="linkedin" href="https://www.linkedin.com/in/matheus-kristman/" target="_blank" rel="noreferrer noopener">
                <i className="fa-brands fa-linkedin" />
              </a>
              <a className="instagram" href="https://www.instagram.com/tinzin.exe/" target="_blank" rel="noreferrer noopener">
                <i className="fa-brands fa-instagram" />
              </a>
              <a className="github" href="https://github.com/MatheusKristman" target="_blank" rel="noreferrer noopener">
                <i className="fa-brands fa-github" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hero-scroll">
          <img src={homeScroll} alt="Tem mais" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
