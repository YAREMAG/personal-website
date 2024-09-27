import React from 'react';
import './Contact.css';

function Contact() {
  const email = "yg2988@columbia.edu";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div>
      <h2>Contact</h2>
      <p>
        You can reach me at 
        <span 
          style={{ cursor: 'pointer'}} 
          onClick={copyEmailToClipboard}
        >
          {` ${email}`}
        </span>
      </p>
    </div>
  );
}

export default Contact;
