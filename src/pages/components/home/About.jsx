import React, { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Context } from './Header';

import aboutTag from '../../../images/about-tag.svg';

function About() {
    const { aboutRef } = useContext(Context);

    const titleVariant = {
        visible: { opacity: 1, transition: { duration: 1 } },
        hidden: { opacity: 0 },
    };

    const textVariant = {
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: 200 },
    };

    const tagVariant = {
        visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
        hidden: { opacity: 0, x: -200 },
    };

    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        function animateOnView() {
            if (inView) {
                control.start('visible');
            }
        }

        animateOnView();
    }, [control, inView]);

    return (
        <section ref={aboutRef} className="about wrapper">
            <motion.div
                ref={ref}
                variants={titleVariant}
                initial="hidden"
                animate={control}
                className="about__title"
            >
                <div />
                <h2>UM POUCO SOBRE MIM</h2>
                <div />
            </motion.div>
            <motion.div
                variants={textVariant}
                initial="hidden"
                animate={control}
                className="about__text"
            >
                <p>
                    Desde a infância fui muito conectado com a tecnologia, mas
                    somente em 2021 descobri a minha verdadeira paixão: a
                    programação. Desde então, busco encontrar novos meios de
                    ajudar pessoas e negócios a deixarem a sua marca no mundo
                    digital.
                </p>
                <p>
                    Constantemente estou criando coisas novas, buscando
                    aperfeiçoar meus conhecimentos e a aprender novas
                    linguagens.
                </p>
                <p>
                    Atualmente atuo no desenvolvimento Front-end e frameworks
                    como ReactJS, além de conhecimento em Backend como NodeJS e
                    MongoDB, focado no Clean Code para uma boa estrutura de
                    código e performance.
                </p>
            </motion.div>
            <motion.img
                variants={tagVariant}
                initial="hidden"
                animate={control}
                className="about__tag"
                src={aboutTag}
                alt="Tag do Sobre"
            />
        </section>
    );
}

export default About;
