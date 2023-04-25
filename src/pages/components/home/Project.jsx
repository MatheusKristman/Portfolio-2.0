import React from 'react';
import { motion } from 'framer-motion';

function Project({
    mouseEnter,
    mouseLeave,
    mouseClick,
    classContainer,
    image,
    siteLink,
    githubLink,
    variant,
    initial,
    animate,
}) {
    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <motion.div
            variants={variant}
            initial={initial}
            animate={animate}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            onClick={mouseClick}
            role="button"
            tabIndex="0"
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
        </motion.div>
    );
}

export default Project;
