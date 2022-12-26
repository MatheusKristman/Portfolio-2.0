import React, { useContext, useState } from 'react';
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

  return (
    <section ref={projectsRef} className="projects wrapper">
      <div className="projects__container">
        <img className="projects-tag" src={projectTag} alt="Tag" />
        <div className="projects-box">
          <Project
            mouseEnter={() => mouseEnterProjects(setProject1Hovered)}
            mouseLeave={() => mouseLeaveProjects(setProject1Hovered)}
            mouseClick={() => sendToWebsite('https://www.feitocomfeltro.com.br/')}
            classContainer={project1Hovered ? 'project-1 activated' : 'project-1'}
            image={project1}
            siteLink="https://www.feitocomfeltro.com.br/"
            githubLink="https://github.com/MatheusKristman/feito-com-feltro-v2"
          />
          <Project
            mouseEnter={() => mouseEnterProjects(setProject2Hovered)}
            mouseLeave={() => mouseLeaveProjects(setProject2Hovered)}
            mouseClick={() => sendToWebsite('https://space-tourism-steel-nine.vercel.app/')}
            classContainer={project2Hovered ? 'project-2 activated' : 'project-2'}
            image={project2}
            siteLink="https://space-tourism-steel-nine.vercel.app/"
            githubLink="https://github.com/MatheusKristman/Space-Tourism"
          />
          <Project
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
