import React from 'react';
import { motion } from 'framer-motion';

function Skill({ image, tech, variant, initial, animate }) {
    return (
        <motion.div
            variants={variant}
            initial={initial}
            animate={animate}
            className="skill"
        >
            <div className="skill-image">
                <img src={image} alt="Tecnologia" />
            </div>
            <span className="skill-tech">{tech}</span>
        </motion.div>
    );
}

export default Skill;
