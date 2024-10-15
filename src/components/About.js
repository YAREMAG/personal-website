import React from 'react';
import './About.css'; // Ensure you have a corresponding CSS file
import {BackgroundLines} from "./ui/BackgroundLines"; // Adjust path accordingly

function About() {
  return (
    <BackgroundLines className="justify-center w-full flex-col px-4">
    <div className="about">
      <h2>About Me</h2>
      <p>
        Hello! I'm Jeremy, a data enthusiast and web developer with a passion for building innovative solutions.
      </p>
      <p>I have a background in data science and am currently pursuing a Master's in Applied Analytics at Columbia University</p>
    
    </div>
    </BackgroundLines>
  );
}

export default About;
