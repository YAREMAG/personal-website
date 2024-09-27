import React from 'react';
import './Home.css'; // Ensure you have the corresponding CSS file
import myPicture from '../images/headshot.jpg';


function Home() {
  return (
    <div className="home">
      
      <h1>Welcome to My Personal Website</h1>
      <p>Hello! I'm Jeremy, a data enthusiast and web developer.</p>
      
      <img src={myPicture} alt="A picture of me" className="profile-picture" />
      
      {/* Bullet point section */}
      <h2>What You Can Find on This Website:</h2>
      <ul className="bullet-points">
        <li>About Me</li>
        <li>My Projects and Work Experience</li>
        <li>Contact Information</li>
        <li>My bird watchign</li>
        <li>Some interesting charts</li>
        <li>My Cv</li>
      </ul>
    </div>
  );
}

export default Home;
