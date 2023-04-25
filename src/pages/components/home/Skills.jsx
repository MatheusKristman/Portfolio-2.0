import React, { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Skill from './Skill';
import { Context } from './Header';

import html from '../../../images/html.svg';
import sass from '../../../images/sass.svg';
import javascript from '../../../images/javascript.svg';
import reactjs from '../../../images/react.svg';
import git from '../../../images/git.svg';
import nodejs from '../../../images/nodejs.svg';
import mongodb from '../../../images/mongodb.svg';
import cleanCode from '../../../images/clean-code.svg';

import skillTag from '../../../images/skills-tag.svg';

function Skills() {
    const { skillsRef } = useContext(Context);

    const skillVariant = {
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: -50 },
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
        <section ref={skillsRef} className="skills wrapper">
            <div ref={ref} className="skills__container">
                <div className="skills-box">
                    <Skill
                        variant={skillVariant}
                        initial="hidden"
                        animate={control}
                        image={html}
                        tech="HTML"
                    />
                    <Skill
                        variant={skillVariant}
                        initial="hidden"
                        animate={control}
                        image={sass}
                        tech="SASS"
                    />
                    <Skill
                        variant={skillVariant}
                        initial="hidden"
                        animate={control}
                        image={javascript}
                        tech="JavaScript"
                    />
                    <Skill
                        variant={skillVariant}
                        initial="hidden"
                        animate={control}
                        image={reactjs}
                        tech="ReactJS"
                    />
                    <Skill
                        variant={skillVariant}
                        initial="hidden"
                        animate={control}
                        image={git}
                        tech="Git"
                    />
                    <Skill
                        variant={skillVariant}
                        initial="hidden"
                        animate={control}
                        image={nodejs}
                        tech="NodeJS"
                    />
                    <Skill
                        variant={skillVariant}
                        initial="hidden"
                        animate={control}
                        image={mongodb}
                        tech="MongoDB"
                    />
                    <Skill
                        variant={skillVariant}
                        initial="hidden"
                        animate={control}
                        image={cleanCode}
                        tech="Clean Code"
                    />
                </div>
                <motion.img
                    variants={tagVariant}
                    initial="hidden"
                    animate={control}
                    className="skills-tag"
                    src={skillTag}
                    alt="Tag das Habilidades"
                />
            </div>
        </section>
    );
}

export default Skills;
