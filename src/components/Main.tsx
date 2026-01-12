import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImage from '../assets/images/IMG (1).jpg';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/shashiniahinsa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ahinsa-karunathilaka/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Shashini Ahinsa</h1>
          <p>Software Engineer Intern</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/shashiniahinsa" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ahinsa-karunathilaka/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;