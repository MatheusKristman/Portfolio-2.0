import React, { useContext } from 'react';
import { Context } from './Header';

import aboutTag from '../../../images/about-tag.svg';

function About() {
  const { aboutRef } = useContext(Context);

  return (
    <section ref={aboutRef} className="about">
      <div className="about__title">
        <div />
        <h2>UM POUCO SOBRE MIM</h2>
        <div />
      </div>
      <div className="about__text wrapper">
        <p>
          Desde a infância fui muito conectado com a tecnologia, mas somente em 2021 descobri a minha verdadeira paixão: a programação. Desde então,
          busco encontrar novos meios de ajudar pessoas e negócios a deixarem a sua marca no mundo digital.
        </p>
        <p>Constantemente estou criando coisas novas, buscando aperfeiçoar meus conhecimentos e a aprender novas linguagens.</p>
        <p>
          Atualmente atuo no desenvolvimento Front-end e frameworks como ReactJS, além de conhecimento em Backend como NodeJS e MongoDB, focado no
          Clean Code para uma boa estrutura de código e performance.
        </p>
      </div>
      <img className="about__tag" src={aboutTag} alt="Tag do Sobre" />
    </section>
  );
}

export default About;
