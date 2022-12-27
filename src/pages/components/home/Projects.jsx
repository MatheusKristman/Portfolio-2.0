import React, { useContext, useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Context } from './Header';

import Project from './Project';

import projectTag from '../../../images/project-tag.svg';
import project1 from '../../../images/project-1.png';
import project2 from '../../../images/project-2.png';
import project3 from '../../../images/project-3.png';

function Projects() {
  const [project1Hovered, setProject1Hovered] = useState(false);
  const [project2Hovered, setProject2Hovered] = useState(false);
  const [project3Hovered, setProject3Hovered] = useState(false);
  const [firstProjectVariant, setFirstProjectVariant] = useState({
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, x: -200, y: 0 },
  });
  const [secontProjectVariant, setSecondProjectVariant] = useState({
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: -200, x: 0 },
  });
  const [thirdProjectVariant, setThirdProjectVariant] = useState({
    visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1 } },
    hidden: { opacity: 0, y: 200, x: 0 },
  });

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
    if (window.innerWidth < 768) {
      setFirstProjectVariant({
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, x: 0, y: -200 },
      });

      setSecondProjectVariant({
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 0, x: -200 },
      });

      setThirdProjectVariant({
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 1 } },
        hidden: { opacity: 0, y: 0, x: 200 },
      });
    }
  }, []);

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
    <section ref={projectsRef} className="projects wrapper">
      <div ref={ref} className="projects__container">
        <motion.img variants={tagVariant} initial="hidden" animate={control} className="projects-tag" src={projectTag} alt="Tag" />
        <div className="projects-box">
          <Project
            variant={firstProjectVariant}
            initial="hidden"
            animate={control}
            mouseEnter={() => mouseEnterProjects(setProject1Hovered)}
            mouseLeave={() => mouseLeaveProjects(setProject1Hovered)}
            mouseClick={() => sendToWebsite('https://www.feitocomfeltro.com.br/')}
            classContainer={project1Hovered ? 'project-1 activated' : 'project-1'}
            image={project1}
            siteLink="https://www.feitocomfeltro.com.br/"
            githubLink="https://github.com/MatheusKristman/feito-com-feltro-v2"
          />
          <Project
            variant={secontProjectVariant}
            initial="hidden"
            animate={control}
            mouseEnter={() => mouseEnterProjects(setProject2Hovered)}
            mouseLeave={() => mouseLeaveProjects(setProject2Hovered)}
            mouseClick={() => sendToWebsite('https://space-tourism-steel-nine.vercel.app/')}
            classContainer={project2Hovered ? 'project-2 activated' : 'project-2'}
            image={project2}
            siteLink="https://space-tourism-steel-nine.vercel.app/"
            githubLink="https://github.com/MatheusKristman/Space-Tourism"
          />
          <Project
            variant={thirdProjectVariant}
            initial="hidden"
            animate={control}
            mouseEnter={() => mouseEnterProjects(setProject3Hovered)}
            mouseLeave={() => mouseLeaveProjects(setProject3Hovered)}
            mouseClick={() => sendToWebsite('https://matheuskristman.github.io/Sunnyside-Agency-Landing-Page/')}
            classContainer={project3Hovered ? 'project-3 activated' : 'project-3'}
            image={project3}
            siteLink="https://matheuskristman.github.io/Sunnyside-Agency-Landing-Page/"
            githubLink="https://github.com/MatheusKristman/Sunnyside-Agency-Landing-Page"
          />
        </div>
        <span className="projects-tip">Clique para ver os sites</span>
      </div>
    </section>
  );
}

export default Projects;
