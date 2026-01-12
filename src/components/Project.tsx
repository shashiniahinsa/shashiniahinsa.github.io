import React from "react";
import mock05 from '../assets/images/notesapp.png';
import mock06 from '../assets/images/weather.png';
import mock07 from '../assets/images/studentmgmt.png';
import mock08 from '../assets/images/libmgmt.png';
import mock09 from '../assets/images/CRS.png';
import mock10 from '../assets/images/lostandfound.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/shashiniahinsa/lostAndFoundFrontEnd" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shashiniahinsa/lostAndFoundFrontEnd" target="_blank" rel="noreferrer"><h2>Lost and Found System</h2></a>
                <p>Designed and implemented a web platform using MERN Stack (MongoDB, Express, React, Node.js). Integrated authentication and role-based access control for users and staff. Built reusable React components connected to Express REST APIs.</p>
            </div>
            <div className="project">
                <a href="https://github.com/shashiniahinsa/CourseRegSystem" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shashiniahinsa/CourseRegSystem" target="_blank" rel="noreferrer"><h2>Course Registration System (CRS)</h2></a>
                <p>Developed a desktop application using Java, JavaFX, MySQL, and Hibernate ORM for student course enrollment and management. Designed relational database schema and created interactive forms with validation and error handling.</p>
            </div>
            <div className="project">
                <a href="https://github.com/shashiniahinsa/library-management" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shashiniahinsa/library-management" target="_blank" rel="noreferrer"><h2>Library Management System</h2></a>
                <p>Built a full-stack application using Spring Boot, React, TypeScript, and MySQL. Implemented RESTful APIs for backend and designed a responsive React interface supporting CRUD operations for books, members, and lending records.</p>
            </div>
            <div className="project">
                <a href="https://github.com/shashiniahinsa" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shashiniahinsa" target="_blank" rel="noreferrer"><h2>Student Management System</h2></a>
                <p>Built a desktop application using Java, Java Swing, and MySQL to manage student records with full CRUD functionality. Applied MVC and layered architecture for clear separation of concerns and enhanced usability.</p>
            </div>
            <div className="project">
                <a href="https://github.com/shashiniahinsa/weather-now" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shashiniahinsa/weather-now" target="_blank" rel="noreferrer"><h2>Weather Forecast Web Application</h2></a>
                <p>Integrated OpenWeather API to fetch real-time weather data. Implemented search functionality with autocomplete for city names. Displayed temperature, humidity, and weather conditions dynamically with responsive UI design using React.js.</p>
            </div>
            <div className="project">
                <a href="https://github.com/shashiniahinsa/react-notes-app" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/shashiniahinsa/react-notes-app" target="_blank" rel="noreferrer"><h2>Notes Management Web Application</h2></a>
                <p>Developed a responsive notes application using React.js, JavaScript, HTML, and CSS. Implemented CRUD operations (add, edit, delete notes) and designed a clean, user-friendly interface with intuitive navigation.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;