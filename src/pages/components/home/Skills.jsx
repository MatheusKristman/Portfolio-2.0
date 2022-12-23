import React from 'react';
import Skill from './Skill';

import html from '../../../images/html.svg';
import sass from '../../../images/sass.svg';
import javascript from '../../../images/javascript.svg';
import reactjs from '../../../images/react.svg';
import git from '../../../images/git.svg';
import cleanCode from '../../../images/clean-code.svg';

import skillTag from '../../../images/skills-tag.svg';

function Skills() {
  return (
    <section className="skills wrapper">
      <div className="skills__container">
        <div className="skills-box">
          <Skill image={html} tech="HTML" />
          <Skill image={sass} tech="SASS" />
          <Skill image={javascript} tech="JavaScript" />
          <Skill image={reactjs} tech="ReactJS" />
          <Skill image={git} tech="Git" />
          <Skill image={cleanCode} tech="Clean Code" />
        </div>
        <img className="skills-tag" src={skillTag} alt="Tag das Habilidades" />
      </div>
    </section>
  );
}

export default Skills;
