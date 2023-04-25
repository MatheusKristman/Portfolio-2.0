import React, { useContext, useState, useEffect, useMemo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Context } from './Header';

import Project from './Project';

import projectTag from '../../../images/project-tag.svg';
import project1 from '../../../images/project-1.png';
import project2 from '../../../images/project-2.png';
import project3 from '../../../images/project-3.png';
import project4 from '../../../images/project-4.png';
import project5 from '../../../images/project-5.png';

function Projects() {
    const [project1Hovered, setProject1Hovered] = useState(false);
    const [project2Hovered, setProject2Hovered] = useState(false);
    const [project3Hovered, setProject3Hovered] = useState(false);
    const [project4Hovered, setProject4Hovered] = useState(false);
    const [project5Hovered, setProject5Hovered] = useState(false);

    const firstProjectVariant = useMemo(
        () =>
            window.innerWidth < 768
                ? {
                      visible: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, x: 0, y: -200 },
                  }
                : {
                      visible: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, x: -200, y: 0 },
                  },
        []
    );
    const secondProjectVariant = useMemo(
        () =>
            window.innerWidth < 768
                ? {
                      visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, y: 0, x: -200 },
                  }
                : {
                      visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, y: -200, x: 0 },
                  },
        []
    );
    const thirdProjectVariant = useMemo(
        () =>
            window.innerWidth < 786
                ? {
                      visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, y: 0, x: 200 },
                  }
                : {
                      visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, y: 200, x: 0 },
                  },
        []
    );
    const fourthProjectVariant = useMemo(
        () =>
            window.innerWidth < 768
                ? {
                      visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, y: 200, x: -200 },
                  }
                : {
                      visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, y: 200, x: 200 },
                  },
        []
    );
    const fifthProjectVariant = useMemo(
        () =>
            window.innerWidth < 768
                ? {
                      visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, y: 200, x: 0 },
                  }
                : {
                      visible: {
                          opacity: 1,
                          y: 0,
                          x: 0,
                          transition: { duration: 1 },
                      },
                      hidden: { opacity: 0, x: 200, y: 0 },
                  },
        []
    );

    const { projectsRef } = useContext(Context);

    function windowInDesktopMode() {
        return window.innerWidth > 1000;
    }

    function windowInMobileMode() {
        return window.innerWidth < 1000;
    }

    function mouseEnterProjects(setProject) {
        if (windowInDesktopMode()) {
            setProject(true);
        }
    }

    function mouseLeaveProjects(setProject) {
        if (windowInDesktopMode()) {
            setProject(false);
        }
    }

    function sendToWebsite(link) {
        if (windowInMobileMode()) {
            window.open(link, '_blank');
        }
    }

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

    const tagVariant = {
        visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
        hidden: { opacity: 0, x: 200 },
    };

    return (
        <section ref={projectsRef} className="projects">
            <div ref={ref} className="projects__container">
                <motion.img
                    variants={tagVariant}
                    initial="hidden"
                    animate={control}
                    className="projects-tag"
                    src={projectTag}
                    alt="Tag"
                />
                <div className="projects-box">
                    <Project
                        variant={firstProjectVariant}
                        initial="hidden"
                        animate={control}
                        mouseEnter={() =>
                            mouseEnterProjects(setProject1Hovered)
                        }
                        mouseLeave={() =>
                            mouseLeaveProjects(setProject1Hovered)
                        }
                        mouseClick={() =>
                            sendToWebsite('https://www.feitocomfeltro.com.br/')
                        }
                        classContainer={
                            project1Hovered
                                ? 'project-1 activated'
                                : 'project-1'
                        }
                        image={project1}
                        siteLink="https://www.feitocomfeltro.com.br/"
                        githubLink="https://github.com/MatheusKristman/feito-com-feltro-v2"
                    />
                    <Project
                        variant={secondProjectVariant}
                        initial="hidden"
                        animate={control}
                        mouseEnter={() =>
                            mouseEnterProjects(setProject2Hovered)
                        }
                        mouseLeave={() =>
                            mouseLeaveProjects(setProject2Hovered)
                        }
                        mouseClick={() =>
                            sendToWebsite(
                                'https://gericht-restaurant-roan-ten.vercel.app/'
                            )
                        }
                        classContainer={
                            project2Hovered
                                ? 'project-2 activated'
                                : 'project-2'
                        }
                        image={project2}
                        siteLink="https://gericht-restaurant-roan-ten.vercel.app/"
                        githubLink="https://github.com/MatheusKristman/Gericht-Restaurant"
                    />
                    <Project
                        variant={thirdProjectVariant}
                        initial="hidden"
                        animate={control}
                        mouseEnter={() =>
                            mouseEnterProjects(setProject3Hovered)
                        }
                        mouseLeave={() =>
                            mouseLeaveProjects(setProject3Hovered)
                        }
                        mouseClick={() =>
                            sendToWebsite(
                                'https://hoobank-three-ashy.vercel.app/'
                            )
                        }
                        classContainer={
                            project3Hovered
                                ? 'project-3 activated'
                                : 'project-3'
                        }
                        image={project3}
                        siteLink="https://hoobank-three-ashy.vercel.app/"
                        githubLink="https://github.com/MatheusKristman/Hoobank"
                    />
                    <Project
                        variant={fourthProjectVariant}
                        initial="hidden"
                        animate={control}
                        mouseEnter={() =>
                            mouseEnterProjects(setProject4Hovered)
                        }
                        mouseLeave={() =>
                            mouseLeaveProjects(setProject4Hovered)
                        }
                        mouseClick={() =>
                            sendToWebsite(
                                'https://dcd-sorteador-de-decisao.vercel.app/'
                            )
                        }
                        classContainer={
                            project4Hovered
                                ? 'project-4 activated'
                                : 'project-4'
                        }
                        image={project4}
                        siteLink="https://dcd-sorteador-de-decisao.vercel.app/"
                        githubLink="https://github.com/MatheusKristman/DCD-Sorteador-de-Decisao"
                    />
                    <Project
                        variant={fifthProjectVariant}
                        initial="hidden"
                        animate={control}
                        mouseEnter={() =>
                            mouseEnterProjects(setProject5Hovered)
                        }
                        mouseLeave={() =>
                            mouseLeaveProjects(setProject5Hovered)
                        }
                        mouseClick={() =>
                            sendToWebsite(
                                'https://weather-app-ochre-sigma.vercel.app/'
                            )
                        }
                        classContainer={
                            project5Hovered
                                ? 'project-5 activated'
                                : 'project-5'
                        }
                        image={project5}
                        siteLink="https://weather-app-ochre-sigma.vercel.app/"
                        githubLink="https://github.com/MatheusKristman/WeatherApp"
                    />
                </div>
                <span className="projects-tip">Clique para ver os sites</span>
            </div>
        </section>
    );
}

export default Projects;
