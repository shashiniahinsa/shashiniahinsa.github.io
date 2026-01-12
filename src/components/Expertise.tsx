import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Java",
    "TypeScript",
    "JavaScript",
    "Python",
    "PHP",
    "HTML5",
    "CSS3",
    "React",
    "Node.js",
    "Express.js"
];

const labelsSecond = [
    "Spring Boot",
    "Hibernate",
    "MySQL",
    "MongoDB",
    "RESTful API",
    "MVC Architecture",
    "Layered Architecture",
    "Responsive Design",
    "Bootstrap"
];

const labelsThird = [
    "GitHub",
    "GitLab",
    "IntelliJ IDEA",
    "VS Code",
    "Tailwind CSS",
    "WAMP Server",
    "JavaFX",
    "Java Swing"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                    <p>Proficient in building responsive web applications with React, TypeScript, and JavaScript on the frontend. Strong experience with Java, Spring Boot, and Node.js for backend development. Experienced in applying MVC and layered architecture principles to develop scalable systems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Backend & Database Design</h3>
                    <p>Expert in developing RESTful APIs using Spring Boot and Express.js. Strong proficiency in database design and management with MySQL and MongoDB. Experienced with Hibernate ORM for seamless database connectivity and data persistence in Java applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Tools & Technologies</h3>
                    <p>Experienced with version control systems including GitHub and GitLab. Proficient with development IDEs like IntelliJ IDEA and VS Code. Skilled in responsive web design using Bootstrap and Tailwind CSS. Hands-on experience with desktop application development using JavaFX and Java Swing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;