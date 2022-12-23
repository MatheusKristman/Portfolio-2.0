import React from 'react';

function Skill({ image, tech }) {
  return (
    <div className="skill">
      <div className="skill-image">
        <img src={image} alt="Tecnologia" />
      </div>
      <span className="skill-tech">{tech}</span>
    </div>
  );
}

export default Skill;
