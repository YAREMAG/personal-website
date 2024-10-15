import React from 'react';
import './Home.css'; // Your custom CSS file
import myPicture from '../images/headshot.jpg'; // Ensure this path is correct
import {BackgroundLines} from "./ui/BackgroundLines"; // Adjust path accordingly

function Home() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4"> {/* Removed h-screen */}
      <div className="background-content relative z-0"> {/* Add relative and z-index */}
        <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans font-bold tracking-tight">
          Welcome to My Personal Website
        </h1>
        <p>Hello! I'm Jeremy, a data enthusiast and web developer.</p>
        <img src={myPicture} alt="A picture of me" className="profile-picture" />
        <h2>What You Can Find on This Website:</h2>
        <ul className="bullet-points">
          <li>About Me</li>
          <li>My Projects and Work Experience</li>
          <li>Contact Information</li>
          <li>My Bird Watching</li>
          <li>Some Interesting Charts</li>
          <li>My CV</li>
        </ul>
      </div>
    </BackgroundLines>
  );
}

export default Home;
