import React from 'react';

function Project({
  mouseEnter,
  mouseLeave,
  classContainer,
  image,
  siteLink,
  githubLink,
}) {
  return (
    <div
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className={classContainer}
    >
      <div
        className="project-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="project-options">
        <div className="project-options__container">
          <a
            className="see-project"
            href={siteLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            Ver Projeto
          </a>
          <a
            className="see-github"
            href={githubLink}
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
